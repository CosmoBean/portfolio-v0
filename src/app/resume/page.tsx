import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { greeting } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Resume",
    description: "Redirect to the latest resume for Sri Datta Bandreddi.",
    path: "/resume",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResumePage() {
  redirect(greeting.resumeLink);
}
