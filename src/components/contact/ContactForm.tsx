"use client";

import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { contactFormLimits } from "@/lib/contact-form";

type ContactFormVariant = "landing" | "command";

interface ContactFormProps {
  variant?: ContactFormVariant;
  title: string;
  description: string;
  className?: string;
}

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  website: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export default function ContactForm({
  variant = "landing",
  title,
  description,
  className,
}: ContactFormProps) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<{ tone: "idle" | "success" | "error"; message: string }>({
    tone: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shellClassName =
    variant === "landing"
      ? "rounded-[1.8rem] border border-white/10 bg-black/20 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-6"
      : "rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl";
  const fieldClassName =
    variant === "landing"
      ? "rounded-[1.15rem] border border-white/10 bg-black/20 px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/65 focus:border-accent-amber/45 focus:bg-black/30"
      : "rounded-xl border border-borderSoft bg-background/50 px-4 py-3 text-sm text-textPrimary outline-none transition placeholder:text-textMuted/75 focus:border-[color:var(--color-goldSoft)] focus:bg-background/65";
  const helperClassName = variant === "landing" ? "text-text-secondary" : "text-textMuted";
  const idleMessage =
    variant === "landing"
      ? "Drop your email and message here."
      : "Send a message and I’ll get back to you.";

  function setField(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ tone: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        setStatus({
          tone: "error",
          message: result?.error ?? "Unable to send your message right now. Please try again shortly.",
        });
        return;
      }

      setValues(initialValues);
      setStatus({
        tone: "success",
        message: "Message sent. I’ll reach back out soon.",
      });
    } catch {
      setStatus({
        tone: "error",
        message: "Unable to send your message right now. Please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={clsx(shellClassName, className)}>
      <div className="max-w-3xl">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-accent-copper">Message Me</p>
        <h3 className="mt-3 font-display text-2xl text-text-primary sm:text-3xl">{title}</h3>
        <p className={clsx("mt-3 text-sm leading-6", helperClassName)}>{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className={clsx("text-xs uppercase tracking-[0.18em]", helperClassName)}>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(event) => setField("name", event.target.value)}
              maxLength={contactFormLimits.nameMax}
              className={fieldClassName}
              placeholder="Your name"
              required
            />
          </label>

          <label className="grid gap-2">
            <span className={clsx("text-xs uppercase tracking-[0.18em]", helperClassName)}>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => setField("email", event.target.value)}
              maxLength={contactFormLimits.emailMax}
              className={fieldClassName}
              placeholder="you@example.com"
              required
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className={clsx("text-xs uppercase tracking-[0.18em]", helperClassName)}>Message</span>
          <textarea
            name="message"
            value={values.message}
            onChange={(event) => setField("message", event.target.value)}
            minLength={contactFormLimits.messageMin}
            maxLength={contactFormLimits.messageMax}
            rows={6}
            className={clsx(fieldClassName, "resize-y")}
            placeholder="Tell me what you’re building, hiring for, or exploring."
            required
          />
        </label>

        <div className="hidden" aria-hidden="true">
          <label className="grid gap-2">
            <span>Website</span>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(event) => setField("website", event.target.value)}
              maxLength={contactFormLimits.websiteMax}
            />
          </label>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p
            aria-live="polite"
            className={clsx(
              "text-sm",
              status.tone === "success"
                ? "text-emerald-300"
                : status.tone === "error"
                  ? "text-rose-300"
                  : helperClassName,
            )}
          >
            {status.message || idleMessage}
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className={clsx(
              "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition",
              variant === "landing"
                ? "border border-accent-amber/35 bg-gradient-to-r from-accent-amber/20 via-accent-copper/12 to-accent-amber/18 text-text-primary hover:-translate-y-0.5 hover:border-accent-amber/55 disabled:cursor-not-allowed disabled:opacity-65"
                : "border border-[color:var(--color-goldSoft)] bg-background/60 text-textPrimary hover:border-[color:var(--color-gold)] disabled:cursor-not-allowed disabled:opacity-65",
            )}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>
    </section>
  );
}
