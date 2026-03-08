import type { Metadata } from "next";
import Link from "next/link";
import CommandPageShell from "@/components/command-os/CommandPageShell";
import ContactForm from "@/components/contact/ContactForm";
import { contactLinks } from "@/lib/command-os-data";
import { contactPageData, greeting, socialMediaLinks } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Contact links, recruiter path, and profile details for Sri Datta Bandreddi.",
  path: "/contact",
});

export default function ContactPage() {
  const emailLink =
    socialMediaLinks.find((link) => link.name === "Gmail")?.link ?? "mailto:sbandred@andrew.cmu.edu";
  const emailAddress = emailLink.replace("mailto:", "");

  return (
    <CommandPageShell
      eyebrow="CONVERSION // CONTACT"
      title={contactPageData.contactSection.title}
      description={contactPageData.contactSection.description}
      actions={contactLinks.map((link) => ({ label: link.label, href: link.href }))}
    >
      <section className="mb-4 rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
        <p className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-gold)]">DIRECT EMAIL</p>
        <a
          href={emailLink}
          className="mt-4 block rounded-[1.5rem] border border-borderSoft bg-background/50 px-5 py-4 transition hover:border-[color:var(--color-goldSoft)] hover:bg-background/65"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] text-textMuted">BEST REPLY PATH</p>
          <p className="mt-3 break-all text-xl text-textPrimary">{emailAddress}</p>
          <p className="mt-2 text-sm leading-6 text-textMuted">
            Best for project discussions, hiring conversations, and direct outreach.
          </p>
        </a>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
          <p className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-gold)]">COMMUNICATION CHANNELS</p>
          <div className="mt-4 grid gap-3">
            {contactLinks.map((link) => {
              const external = link.href.startsWith("http") || link.href.startsWith("mailto:");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="rounded-xl border border-borderSoft bg-background/50 px-4 py-3 text-sm text-textMuted hover:border-[color:var(--color-goldSoft)] hover:text-textPrimary"
                >
                  {link.label}: <span className="text-textPrimary/90">{link.href.replace("mailto:", "")}</span>
                </Link>
              );
            })}
          </div>
        </article>

        <article className="rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
          <p className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-gold)]">OPERATOR PROFILE</p>
          <h2 className="mt-3 text-xl font-semibold font-display">{greeting.title}</h2>
          <p className="mt-2 text-sm text-textMuted">{greeting.subTitle}</p>
          <div className="mt-4 rounded-xl border border-borderSoft bg-background/50 p-3 text-sm text-textMuted">
            Recruiter path: resume is one click away, modules contain spec sheets, and experiments route contains postmortems.
          </div>
        </article>
      </section>

      <section className="mt-4">
        <ContactForm
          variant="command"
          title="Send a message directly from this page."
          description="Use this form for project outreach, hiring conversations, or collaboration notes. It keeps the interaction on-site instead of pushing you into a separate mail app."
        />
      </section>
    </CommandPageShell>
  );
}
