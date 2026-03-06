import clsx from "clsx";
import { codeToHtml } from "shiki";
import CodeCopyButton from "@/components/shared/CodeCopyButton";

interface CodeBlockProps {
  className?: string;
  code: string;
  label?: string;
  language?: string;
}

export default async function CodeBlock({
  className,
  code,
  label,
  language = "typescript",
}: CodeBlockProps) {
  let html: string;

  try {
    html = await codeToHtml(code, {
      lang: language,
      theme: "github-dark",
    });
  } catch {
    html = await codeToHtml(code, {
      lang: "text",
      theme: "github-dark",
    });
  }

  return (
    <div
      className={clsx(
        "overflow-hidden rounded-[1.75rem] border border-border-subtle bg-[#0d0d10]/92 shadow-[0_16px_40px_rgba(0,0,0,0.28)]",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle bg-surface/75 px-4 py-3">
        <div className="flex flex-wrap items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-text-secondary">
          {label ? <span>{label}</span> : null}
          <span className="rounded-full border border-border-subtle px-2 py-1">{language}</span>
        </div>
        <CodeCopyButton code={code} />
      </div>
      <div
        className="overflow-x-auto text-sm [&_.shiki]:!bg-transparent [&_.shiki]:!p-5 [&_.shiki_pre]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
