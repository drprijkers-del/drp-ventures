import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to default persona page (Dutch, Agile Coach)
  redirect("/nl/agile-coach");
}
