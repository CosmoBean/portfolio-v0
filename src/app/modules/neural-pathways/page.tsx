import type { Metadata } from "next";
import ModulePage from "@/components/command-os/ModulePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Neural Pathways Module",
  description: "Research engineering, model pipelines, and benchmark-driven ML systems collected in the Neural Pathways module.",
  path: "/modules/neural-pathways",
});

export default function NeuralPathwaysPage() {
  return <ModulePage moduleId="neural-pathways" />;
}
