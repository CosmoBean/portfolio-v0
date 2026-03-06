import type { Metadata } from "next";
import ModulePage from "@/components/command-os/ModulePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Biomedical Signal Module",
  description: "Biomedical engineering direction, signal-oriented research, and healthcare-focused AI systems work.",
  path: "/modules/biomedical-signal",
});

export default function BiomedicalSignalPage() {
  return <ModulePage moduleId="biomedical-signal" />;
}
