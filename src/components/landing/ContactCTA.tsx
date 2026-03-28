"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import { easeOutStrong, staggerContainer, staggerItem } from "@/lib/animations";
import { socialMediaLinks } from "@/lib/data";

export default function ContactCTA() {
  const reduceMotion = useReducedMotion();
  const emailLink =
    socialMediaLinks.find((link) => link.name === "Gmail")?.link ?? "mailto:sbandred@andrew.cmu.edu";
  const emailAddress = emailLink.replace("mailto:", "");
  const linkedInLink =
    socialMediaLinks.find((link) => link.name === "LinkedIn")?.link ?? "https://linkedin.com";

  return (
    <section className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: easeOutStrong }}
          className="relative overflow-hidden rounded-[2.4rem] border border-border-subtle bg-gradient-to-br from-accent-amber/18 via-card to-accent-copper/14 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.22)] sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,160,83,0.18),transparent_38%),radial-gradient(circle_at_78%_20%,rgba(196,125,62,0.16),transparent_40%),radial-gradient(circle_at_58%_86%,rgba(212,160,83,0.1),transparent_42%)]" />
          <motion.div
            variants={staggerContainer}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.25 }}
            className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <motion.div variants={staggerItem} className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-copper">Next Step</p>
              <h2 className="mt-4 font-display text-4xl text-text-primary sm:text-5xl">
                If you need someone who can move from research ambiguity to production reality, let&apos;s talk.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                I&apos;m open to conversations around AI systems, platform engineering, applied ML, and AI4Healthcare.
              </p>
              <a
                href={emailLink}
                className="motion-panel mt-6 block max-w-2xl rounded-[1.5rem] border border-border-subtle bg-obsidian/65 px-5 py-4 hover:border-accent-amber/35 hover:bg-obsidian/80"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-accent-copper">Direct Email</p>
                <p className="mt-3 break-all text-lg text-text-primary sm:text-xl">{emailAddress}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  Best for project discussions, hiring conversations, and collaborations.
                </p>
              </a>
            </motion.div>

            <motion.div variants={staggerContainer} className="flex w-full flex-wrap gap-3 lg:w-auto">
              <motion.a
                variants={staggerItem}
                href={emailLink}
                className="motion-pill inline-flex min-w-[10rem] justify-center rounded-full border border-accent-amber/35 bg-obsidian/82 px-5 py-3 text-sm font-medium text-text-primary"
              >
                Email
              </motion.a>
              <motion.div variants={staggerItem}>
                <Link
                  href="/resume"
                  className="motion-pill inline-flex min-w-[10rem] justify-center rounded-full border border-border-subtle bg-surface/72 px-5 py-3 text-sm font-medium text-text-primary"
                >
                  Resume
                </Link>
              </motion.div>
              <motion.a
                variants={staggerItem}
                href={linkedInLink}
                target="_blank"
                rel="noreferrer"
                className="motion-pill inline-flex min-w-[10rem] justify-center rounded-full border border-border-subtle bg-surface/50 px-5 py-3 text-sm font-medium text-text-secondary hover:text-text-primary"
              >
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="relative mt-8">
            <ContactForm
              variant="landing"
              title="Send a message without leaving the page."
              description="Drop your name, email, and message here. Once delivery is configured, this will route straight into the inbox without bouncing you to a mail client."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
