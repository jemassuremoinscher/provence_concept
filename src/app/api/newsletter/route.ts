import { NextRequest, NextResponse } from "next/server";

// URL du scénario Make "Provence Concept — Newsletter" (Webhook → Google Sheets).
const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/swhr61xm1p2alnmmfrlif7af4ofd71o7";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const email = typeof body === "object" && body !== null && "email" in body ? String((body as { email: unknown }).email) : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  try {
    // Appel serveur → serveur : aucune restriction CORS ici, contrairement au navigateur.
    const res = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "webhook_failed", status: res.status }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "webhook_unreachable" }, { status: 502 });
  }
}
