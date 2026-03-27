import { permanentRedirect } from "next/navigation";
import { resumeLinks } from "@/lib/data";

export default function ResumePage() {
  permanentRedirect(resumeLinks.external);
}
