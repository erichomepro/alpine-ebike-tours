/**
 * Spam classification for the website contact form.
 *
 * Why this exists: between 2026-05 and 2026-08-17 the contact form produced 33
 * leads, of which 31 were spam and 0 were genuine. The route had no honeypot, no
 * rate limit, and no content check, so anything that could POST JSON landed in
 * the CRM and triggered two emails.
 *
 * Two distinct attackers, confirmed from the stored rows:
 *
 *  1. A bot posting random-string names with a bare 10-digit number as the
 *     message ("Cmss Mjlfrozt" / "6742533965"), or gibberish in both fields
 *     ("oStWESDlxHgCRrdPz" / "ojpmDqESJuavSOYRR"). It cycles Gmail dot-trick
 *     addresses so one inbox yields unlimited unique-looking senders. It also
 *     submits harvested third-party addresses, which is why a flagged lead must
 *     never receive the courtesy confirmation email.
 *
 *  2. Hand-typed SEO / guest-post / fake-review pitches. Low volume, real
 *     sentences, defeated by keywords rather than by gibberish detection.
 *
 * Design rule, inherited from the route it guards: FAIL OPEN. A borderline
 * submission is delivered and flagged, never dropped. Losing one real customer
 * costs more than forwarding one more spam message, so every heuristic here is
 * tuned to be certain before it accuses.
 */

export type SpamVerdict = {
  isSpam: boolean;
  /** 0-100. Rises with evidence; >= SPAM_THRESHOLD is spam. */
  score: number;
  /** Human-readable reasons, for the flag note stored on the lead. */
  reasons: string[];
};

/** Score at or above which a submission is treated as spam. */
export const SPAM_THRESHOLD = 100;

export type SpamInput = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  /** Hidden honeypot field. Any value at all means a bot filled it. */
  website?: string;
  /** Milliseconds between form render and submit, when the client reports it. */
  elapsedMs?: number;
};

/**
 * Minimum time a human needs to read the form and type a real message.
 * Deliberately low. Real people who paste a prepared message are fast, and the
 * cost of a false accusation is a lost customer.
 */
export const MIN_ELAPSED_MS = 3000;

/**
 * Phrases that only ever appear in outreach spam, never in a genuine inquiry
 * from a local business asking about automation. Taken verbatim from the stored
 * spam rows.
 */
const SPAM_PHRASES = [
  "guest post",
  "guest posting",
  "guest provider",
  "link building",
  "backlink",
  "do follow",
  "dofollow",
  "high da",
  "da 50",
  "high-authority website",
  "high authority website",
  "seo executive",
  "seo consultant",
  "seo services",
  "outreach service",
  "media publisher",
  "customer review service",
  "authentic-looking review",
  "local guides account",
  "crypto",
  "bitcoin",
  "forex",
  "casino",
  "viagra",
  "porn",
  "sex",
];

/** Normalize for phrase matching: lowercase, collapse whitespace. */
function normalize(s: string): string {
  return s.toLowerCase().replace(/\s+/g, " ").trim();
}

/**
 * Collapse a Gmail address to the inbox it actually reaches.
 *
 * Gmail ignores dots and anything after "+", so "e.p.e.b.uc.a.s.o.li5.9.3@gmail.com"
 * and "e.p.e.b.u.c.asoli5.9.3@gmail.com" are ONE mailbox. The bot exploits this
 * to look like many senders. Exported so the caller can rate-limit per real
 * inbox rather than per literal string.
 */
export function canonicalEmail(email: string): string {
  const trimmed = email.trim().toLowerCase();
  const at = trimmed.lastIndexOf("@");
  if (at <= 0) return trimmed;

  let local = trimmed.slice(0, at);
  const domain = trimmed.slice(at + 1);

  const plus = local.indexOf("+");
  if (plus >= 0) local = local.slice(0, plus);

  // Dot-insensitivity is a Gmail behaviour. Applying it to every provider would
  // wrongly merge distinct mailboxes on hosts where dots are significant.
  if (domain === "gmail.com" || domain === "googlemail.com") {
    local = local.replace(/\./g, "");
  }

  return `${local}@${domain}`;
}

/**
 * Does this text look like keyboard mash rather than language?
 *
 * Detects the bot's random-string fields ("ojpmDqESJuavSOYRR",
 * "oStWESDlxHgCRrdPz") without flagging short real words or non-English names.
 *
 * Two independent signals, both required, so ordinary text cannot trip it:
 *   - a long run of consonants, which natural language avoids
 *   - a vowel ratio far below any real language
 *
 * Only applied to strings long enough to judge. "Bo" and "Ng" are real names.
 */
export function looksLikeGibberish(text: string): boolean {
  const letters = text.replace(/[^a-zA-Z]/g, "");
  if (letters.length < 10) return false;

  const lower = letters.toLowerCase();
  const vowels = (lower.match(/[aeiouy]/g) || []).length;
  const vowelRatio = vowels / lower.length;

  const longestConsonantRun = (lower.match(/[^aeiouy]+/g) || []).reduce(
    (max, run) => Math.max(max, run.length),
    0,
  );

  // English runs ~38% vowels. Even consonant-heavy names stay above 20%.
  // A 5+ consonant run AND sub-25% vowels together is not language.
  return longestConsonantRun >= 5 && vowelRatio < 0.25;
}

/**
 * Is the message nothing but a number?
 *
 * The single highest-volume signature in the stored spam: a bare 10-digit string
 * as the entire message ("6742533965", "8134716499"). No genuine inquiry
 * consists solely of digits, and the form already has a dedicated phone field.
 */
export function isNumericOnly(text: string): boolean {
  const stripped = text.replace(/[\s()+.-]/g, "");
  return stripped.length >= 5 && /^\d+$/.test(stripped);
}

/**
 * A message that is one long unbroken alphabetic token, as in
 * "HFRBafKAHHIVQIUCQF". Real inquiries contain a space, a digit, or
 * punctuation somewhere. Someone typing "Iwantaquoteplease" would also match,
 * which is why it is supporting evidence, not a conviction on its own.
 *
 * Judges the MESSAGE only, never the sender's name. An earlier draft scored
 * names by pronounceability and flagged "Nguyen Thanh" and "Dwayne Schmidt";
 * no heuristic may ever treat a real surname as a bot.
 */
export function isSingleJunkToken(message: string): boolean {
  const trimmed = String(message).trim();
  if (trimmed.length === 0 || trimmed.includes(" ")) return false;
  const letters = trimmed.replace(/[^a-zA-Z]/g, "");
  return letters.length >= 14 && letters === trimmed;
}

/**
 * Random mixed case inside a word, as in "aUTuUPcZaudb".
 *
 * Bots that mint random identifiers flip case mid-word. Human writing does
 * not: real names capitalise at the word start, and intercaps brands
 * ("MacLeod", "DeVries", "iPhone") flip once or twice, far below this
 * threshold. Requires a high flip ratio AND three flips in one word.
 *
 * Added 2026-08-17 after spam reached client owners with names like
 * "Rrefn Sqfxyuogu" that the vowel-ratio test could not see.
 */
export function looksLikeRandomCase(text: string): boolean {
  for (const word of String(text).split(/\s+/)) {
    const letters = word.replace(/[^a-zA-Z]/g, "");
    if (letters.length < 6) continue;
    let flips = 0;
    for (let i = 2; i < letters.length; i++) {
      const prev = letters[i - 1];
      const cur = letters[i];
      const lowerToUpper = prev === prev.toLowerCase() && cur === cur.toUpperCase();
      const upperToLower = prev === prev.toUpperCase() && cur === cur.toLowerCase();
      if (lowerToUpper || upperToLower) flips++;
    }
    if (flips >= 3 && flips / (letters.length - 2) > 0.35) return true;
  }
  return false;
}

/**
 * Classify one submission.
 *
 * Scores are additive so that several weak signals can convict where one cannot.
 * Anything scoring 100+ is spam; the honeypot and a numeric-only message are
 * each conclusive on their own.
 */
export function classify(input: SpamInput): SpamVerdict {
  const reasons: string[] = [];
  let score = 0;

  const name = (input.name ?? "").trim();
  const email = (input.email ?? "").trim();
  const message = (input.message ?? "").trim();

  // --- Conclusive signals -------------------------------------------------

  // A hidden field a human literally cannot see, let alone fill in.
  if ((input.website ?? "").trim() !== "") {
    score += 100;
    reasons.push("honeypot field filled");
  }

  // No real inquiry is only digits.
  if (isNumericOnly(message)) {
    score += 100;
    reasons.push("message is numeric only");
  }

  // --- Strong signals -----------------------------------------------------

  const haystack = normalize(`${name} ${message}`);
  const matched = SPAM_PHRASES.filter((p) => haystack.includes(p));
  if (matched.length > 0) {
    score += 100;
    reasons.push(`spam phrase: ${matched.slice(0, 3).join(", ")}`);
  }

  if (looksLikeGibberish(name) && looksLikeGibberish(message)) {
    score += 100;
    reasons.push("name and message are both gibberish");
  } else if (looksLikeGibberish(name)) {
    // Alone this is only suggestive. An unusual real name must not convict on
    // its own, so it needs a second signal to reach the threshold.
    score += 60;
    reasons.push("name looks like a random string");
  } else if (looksLikeGibberish(message)) {
    score += 60;
    reasons.push("message looks like a random string");
  }

  // --- Supporting signals -------------------------------------------------

  // Submitted faster than a human can read the form.
  if (typeof input.elapsedMs === "number" && input.elapsedMs >= 0 && input.elapsedMs < MIN_ELAPSED_MS) {
    score += 60;
    reasons.push(`submitted in ${input.elapsedMs}ms`);
  }

  // Heavy dot-obfuscation in a Gmail local part. Real users type their address
  // the short way; the bot uses dots to mint unique-looking senders.
  if (isSingleJunkToken(message)) {
    score += 60;
    reasons.push("message is one unbroken token");
  }

  if (looksLikeRandomCase(`${name} ${message}`)) {
    score += 60;
    reasons.push("random mixed case within a word");
  }

  const at = email.lastIndexOf("@");
  if (at > 0) {
    const domain = email.slice(at + 1).toLowerCase();
    const local = email.slice(0, at);
    const dots = (local.match(/\./g) || []).length;
    if ((domain === "gmail.com" || domain === "googlemail.com") && dots >= 4) {
      score += 60;
      reasons.push(`gmail address obfuscated with ${dots} dots`);
    }
  }

  // A message with no spaces at all, of real length, is not a sentence.
  if (message.length >= 12 && !message.includes(" ")) {
    score += 40;
    reasons.push("message has no spaces");
  }

  return { isSpam: score >= SPAM_THRESHOLD, score, reasons };
}
