import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl rounded-[2.2rem] border border-border-subtle bg-card/78 p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent-copper">404</p>
        <h1 className="mt-5 font-display text-5xl text-text-primary sm:text-6xl">Signal not found.</h1>
        <p className="mt-6 text-sm leading-8 text-text-secondary sm:text-base">
          The route you requested does not exist in the current portfolio map. Use the main navigation to return to a valid domain or project path.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full border border-accent-amber/35 bg-gradient-to-r from-accent-amber/18 via-accent-copper/10 to-accent-amber/16 px-5 py-3 text-sm font-medium text-text-primary"
          >
            Return home
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-border-subtle px-5 py-3 text-sm font-medium text-text-secondary transition hover:text-text-primary"
          >
            Browse projects
          </Link>
        </div>
      </div>
    </main>
  );
}
