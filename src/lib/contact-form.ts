export const contactFormLimits = {
  nameMax: 80,
  emailMax: 254,
  messageMin: 10,
  messageMax: 2000,
  websiteMax: 120,
} as const;

export interface ContactFormSubmission {
  name: string;
  email: string;
  message: string;
  website: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactForm(input: unknown) {
  if (!input || typeof input !== "object") {
    return { ok: false as const, error: "Invalid form submission." };
  }

  const record = input as Record<string, unknown>;
  const name = readTrimmedString(record.name);
  const email = readTrimmedString(record.email).toLowerCase();
  const message = readTrimmedString(record.message);
  const website = readTrimmedString(record.website);

  if (website.length > contactFormLimits.websiteMax) {
    return { ok: false as const, error: "Invalid form submission." };
  }

  if (name.length < 2 || name.length > contactFormLimits.nameMax) {
    return { ok: false as const, error: "Please enter a valid name." };
  }

  if (email.length === 0 || email.length > contactFormLimits.emailMax || !emailPattern.test(email)) {
    return { ok: false as const, error: "Please enter a valid email address." };
  }

  if (message.length < contactFormLimits.messageMin || message.length > contactFormLimits.messageMax) {
    return {
      ok: false as const,
      error: `Message must be between ${contactFormLimits.messageMin} and ${contactFormLimits.messageMax} characters.`,
    };
  }

  return {
    ok: true as const,
    data: {
      name,
      email,
      message,
      website,
    } satisfies ContactFormSubmission,
  };
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildContactEmailText(data: ContactFormSubmission) {
  return [
    "New portfolio contact submission",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export function buildContactEmailHtml(data: ContactFormSubmission) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeMessage = escapeHtml(data.message).replaceAll("\n", "<br />");

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin-bottom: 16px;">New portfolio contact submission</h2>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
      <p style="margin: 0 0 16px;"><strong>Email:</strong> ${safeEmail}</p>
      <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
      <div style="white-space: pre-wrap;">${safeMessage}</div>
    </div>
  `;
}
