export default function LoadingProjectPage() {
  return (
    <main className="px-6 pb-20 sm:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-8 animate-pulse">
          <div className="h-80 rounded-[2.3rem] border border-border-subtle bg-card/60" />
          <div className="h-[40rem] rounded-[2.3rem] border border-border-subtle bg-card/50" />
        </div>
        <div className="h-48 rounded-[1.8rem] border border-border-subtle bg-card/50 animate-pulse" />
      </div>
    </main>
  );
}
