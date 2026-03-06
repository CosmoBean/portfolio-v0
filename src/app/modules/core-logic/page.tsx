import type { Metadata } from "next";
import ModulePage from "@/components/command-os/ModulePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Core Logic Module",
  description: "Production systems, scaling work, and backend delivery decisions behind the Core Logic module.",
  path: "/modules/core-logic",
});

export default function CoreLogicPage() {
  return <ModulePage moduleId="core-logic" />;
}
