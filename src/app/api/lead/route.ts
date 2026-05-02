import { NextResponse } from "next/server";

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
};

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

  const plain = Object.entries(body)
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
      await backupToSupabase(body);
      return NextResponse.json({ error: "Email send failed", detail }, { status: 502 });
    }
    await backupToSupabase(body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    await backupToSupabase(body);
    return NextResponse.json({ error: "Email send failed", detail: String(err) }, { status: 502 });
  }
}
