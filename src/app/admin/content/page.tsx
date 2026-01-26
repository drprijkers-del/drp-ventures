import { redirect } from "next/navigation";

export default function ContentIndexPage() {
  // Redirect to dashboard - content is accessed via /admin/content/[lang]/[persona]
  redirect("/admin");
}
