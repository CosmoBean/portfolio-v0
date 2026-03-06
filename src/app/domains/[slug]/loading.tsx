export default function LoadingDomainPage() {
  return (
    <main className="px-6 pb-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-10 animate-pulse">
        <div className="h-64 rounded-[2.4rem] border border-border-subtle bg-card/60" />
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="h-64 rounded-[2rem] border border-border-subtle bg-card/50" />
          <div className="h-64 rounded-[2rem] border border-border-subtle bg-card/50" />
          <div className="h-64 rounded-[2rem] border border-border-subtle bg-card/50" />
        </div>
      </div>
    </main>
  );
}
