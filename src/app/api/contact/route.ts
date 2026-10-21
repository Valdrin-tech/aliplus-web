import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/content";

// POST /api/contact — sends the contact form by email over SMTP.
//
// Environment:
//   SMTP_HOST     default smtp.gmail.com
//   SMTP_PORT     default 465 (TLS)
//   SMTP_USER     mailbox login (for Gmail: the address)
//   SMTP_PASS     password (for Gmail: an App Password, not the account password)
//   CONTACT_TO    where messages are delivered (default: the site email)
//   CONTACT_FROM  sender shown in the mailbox (default: SMTP_USER)
//
// Without SMTP_USER/SMTP_PASS in development the message is logged instead of
// sent, so the form can be exercised locally. In production it is an error.

export const runtime = "nodejs";

const topics = new Set(["general", "ration", "product", "visit", "usage"]);
const MAX = { name: 120, email: 200, telephone: 60, subject: 200, message: 5000 };

type Payload = {
  contact: string;
  name: string;
  email: string;
  telephone: string;
  subject: string;
  message: string;
  locale: string;
  company?: string; // honeypot — must stay empty
};

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  let body: Partial<Payload>;
  try {
    body = (await request.json()) as Partial<Payload>;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success and drop it.
  if (clean(body.company, 200)) return NextResponse.json({ ok: true, delivered: false });

  const data = {
    contact: topics.has(String(body.contact)) ? String(body.contact) : "general",
    name: clean(body.name, MAX.name),
    email: clean(body.email, MAX.email),
    telephone: clean(body.telephone, MAX.telephone),
    subject: clean(body.subject, MAX.subject),
    message: clean(body.message, MAX.message),
    locale: clean(body.locale, 5) || "sq",
  };

  const missing = (["name", "email", "subject", "message"] as const).filter((k) => !data[k]);
  if (missing.length || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: "invalid", missing }, { status: 422 });
  }

  const user = process.env.SMTP_USER;
  // Google shows App Passwords in groups of four; the spaces are not part of it.
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");
  const to = process.env.CONTACT_TO || site.email;
  const from = process.env.CONTACT_FROM || user;

  const text = [
    `Topic: ${data.contact}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.telephone || "—"}`,
    `Language: ${data.locale}`,
    "",
    data.message,
  ].join("\n");

  if (!user || !pass) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[contact] SMTP not configured — message not sent. Would deliver to ${to}:\n${text}`);
      return NextResponse.json({ ok: true, delivered: false });
    }
    console.error("[contact] SMTP_USER / SMTP_PASS are not set.");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transport.sendMail({
      from: `"${site.legalName} — website" <${from}>`,
      to,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `[${site.legalName}] ${data.contact} · ${data.subject}`,
      text,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
