import Link from "next/link";
import CommandPageShell from "@/components/command-os/CommandPageShell";
import { contactLinks } from "@/lib/command-os-data";
import { contactPageData, greeting } from "@/lib/data";

export default function ContactPage() {
  return (
    <CommandPageShell
      eyebrow="CONVERSION // CONTACT"
      title={contactPageData.contactSection.title}
      description={contactPageData.contactSection.description}
      actions={contactLinks.map((link) => ({ label: link.label, href: link.href }))}
    >
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
    </CommandPageShell>
  );
}
