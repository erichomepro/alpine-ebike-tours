import { NextResponse } from "next/server";
import { classify, canonicalEmail } from "@/lib/spam-filter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const OWNER_EMAIL = "info@alpineebiketours.com";
const BCC_EMAIL = "eric@aiprecisionmarketing.ca";
const FROM = "Alpine E-Bike Tours <leads@aiprecisionmarketing.ca>";
const ORG_ID = "355c4a17-2a38-4aba-8eaa-a9f2d3ffce23";

type LeadBody = {
  name?: string;
  email?: string;
  phone?: string;
  tour_interest?: string;
  message?: string;
  page?: string;
  /** Hidden honeypot. Real users never see it, so any value means a bot. */
  website?: string;
  /** Milliseconds between form render and submit, reported by the client. */
  elapsedMs?: number;
};

/**
 * Burst limiter keyed by canonical email, so Gmail dot-variants collapse to one
 * identity. In-memory: a cold start empties it, which only means a burst may
 * restart. The content filter is the real defence.
 */
const recentByEmail = new Map<string, number[]>();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX_IN_WINDOW = 3;

function isRateLimited(email: string): boolean {
  const key = canonicalEmail(email);
  const now = Date.now();
  const hits = (recentByEmail.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  recentByEmail.set(key, hits);

  if (recentByEmail.size > 500) {
    for (const [k, v] of recentByEmail) {
      if (v.every((t) => now - t >= RATE_WINDOW_MS)) recentByEmail.delete(k);
    }
  }

  return hits.length > RATE_MAX_IN_WINDOW;
}

/** Anti-spam plumbing is not lead data; never store or email it. */
function stripInternalFields(body: LeadBody): Omit<LeadBody, "website" | "elapsedMs"> {
  const { website: _website, elapsedMs: _elapsedMs, ...rest } = body;
  return rest;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

function row(label: string, value: string | undefined): string {
  if (!value) return "";
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(value)}</td></tr>`;
}

async function backupToSupabase(body: LeadBody): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;

  const services = body.tour_interest ? [body.tour_interest] : [];
  const payload = {
    org_id: ORG_ID,
    business_name: "Alpine E-Bike Tours (Website Lead)",
    contact_name: body.name || null,
    email: body.email || null,
    phone: body.phone || null,
    source: "Website Form",
    inquiry_type: "Tour Inquiry",
    form_data: body,
    services_interested: services,
    lead_score: "Warm",
    pipeline_stage: "New",
    notes: body.message || null,
  };

  await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  }).catch(() => undefined);
}

export async function POST(req: Request) {
  let body: LeadBody;
  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
  }

  // Spam gate. Returns 200 rather than 4xx on purpose: a bot that sees an error
  // retunes its payload, one that sees success keeps sending the signature we
  // already detect. Fails open, because losing one real booking costs more than
  // forwarding one more spam message.
  const verdict = classify({
    name: body.name,
    email: body.email,
    phone: body.phone,
    message: body.message,
    website: body.website,
    elapsedMs: body.elapsedMs,
  });
  if (verdict.isSpam) {
    console.warn(
      { scope: "lead.spam", score: verdict.score, reasons: verdict.reasons, email: body.email },
      "Submission rejected as spam; not emailed, not stored",
    );
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(body.email)) {
    console.warn(
      { scope: "lead.ratelimit", email: canonicalEmail(body.email) },
      "Submission rejected as rate limited; not emailed, not stored",
    );
    return NextResponse.json({ ok: true });
  }

  // Keep the narrowed original for rendering; strip only what goes downstream.
  const lead = stripInternalFields(body) as LeadBody;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email backend not configured" }, { status: 500 });
  }

  const rows = [
    row("Name", body.name),
    row("Email", body.email),
    row("Phone", body.phone),
    row("Tour Interest", body.tour_interest),
    row("Message", body.message),
    row("Page", body.page),
  ].join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#0b3d2e;color:#fff;padding:24px;text-align:center;">
        <h1 style="margin:0;font-size:22px;">New Tour Inquiry</h1>
        <p style="margin:8px 0 0 0;color:#cde6db;font-size:14px;">alpineebiketours.com</p>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">${rows}</table>
      <p style="margin-top:24px;color:#666;font-size:13px;">Reply directly to this email to respond to ${escapeHtml(body.email)}.</p>
    </div>
  `;

  const plain = Object.entries(lead)
    .filter(([, v]) => v != null && String(v).trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const payload: Record<string, unknown> = {
    from: FROM,
    to: [OWNER_EMAIL],
    bcc: [BCC_EMAIL],
    subject: `New tour inquiry from ${body.name}${body.tour_interest ? ` — ${body.tour_interest}` : ""}`,
    html,
    text: plain,
    reply_to: body.email,
  };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const detail = await res.text();
      await backupToSupabase(lead);
      return NextResponse.json({ error: "Email send failed", detail }, { status: 502 });
    }
    await backupToSupabase(lead);
    return NextResponse.json({ ok: true });
  } catch (err) {
    await backupToSupabase(lead);
    return NextResponse.json({ error: "Email send failed", detail: String(err) }, { status: 502 });
  }
}
