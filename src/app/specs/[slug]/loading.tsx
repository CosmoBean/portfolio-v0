export default function LoadingSpecPage() {
  return (
    <main className="px-6 pb-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-5 animate-pulse">
        <div className="h-44 rounded-[2rem] border border-border-subtle bg-card/60" />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="h-72 rounded-[2rem] border border-border-subtle bg-card/50" />
          <div className="h-72 rounded-[2rem] border border-border-subtle bg-card/50" />
        </div>
      </div>
    </main>
  );
}
