import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildContactEmailHtml,
  buildContactEmailText,
  validateContactForm,
} from "@/lib/contact-form";

export const runtime = "nodejs";

const contactRecipient = process.env.CONTACT_TO_EMAIL ?? "sbandred@andrew.cmu.edu";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const validation = validateContactForm(payload);

  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  // Quietly accept spammy honeypot submissions.
  if (validation.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "Contact delivery is not configured yet. Add RESEND_API_KEY and CONTACT_FROM_EMAIL, or use the direct email above for now.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [contactRecipient],
      subject: `Portfolio contact from ${validation.data.name}`,
      replyTo: validation.data.email,
      text: buildContactEmailText(validation.data),
      html: buildContactEmailHtml(validation.data),
    });

    if (error) {
      return NextResponse.json(
        { error: "Message delivery failed. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Message delivery failed. Please try again shortly." },
      { status: 502 },
    );
  }
}
