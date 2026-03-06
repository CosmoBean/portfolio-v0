"use client";

import { useState } from "react";

interface CodeCopyButtonProps {
  code: string;
}

export default function CodeCopyButton({ code }: CodeCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={() => {
        void handleCopy();
      }}
      className="rounded-full border border-border-subtle bg-surface/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-text-secondary transition hover:border-accent-amber/40 hover:text-text-primary"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
