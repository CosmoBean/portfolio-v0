import type { Metadata } from "next";
import ContactCTA from "@/components/landing/ContactCTA";
import DomainNavigator from "@/components/landing/DomainNavigator";
import FeaturedWork from "@/components/landing/FeaturedWork";
import Hero from "@/components/landing/Hero";
import IdentityStrip from "@/components/landing/IdentityStrip";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Engineering Signal From Complex Systems",
  description: "A portfolio exploring systems, AI/ML, agentic workflows, MLOps, deep learning, and applied science.",
  path: "/",
});

export default function Home() {
  return (
    <main className="overflow-x-clip pb-10">
      <Hero />
      <DomainNavigator />
      <FeaturedWork />
      <IdentityStrip />
      <ContactCTA />
    </main>
  );
}
