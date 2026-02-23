import { redirect } from "next/navigation";
import { greeting } from "@/lib/data";

export default function ResumePage() {
  redirect(greeting.resumeLink);
}
