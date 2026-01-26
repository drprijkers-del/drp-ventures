import { PersonaNav } from "@/components/persona/PersonaNav";
import { isValidLanguage, isValidPersona, Language, Persona } from "@/content/persona";
import { notFound } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
    persona: string;
  }>;
}

export default async function PersonaLayout({ children, params }: LayoutProps) {
  const { lang, persona } = await params;

  if (!isValidLanguage(lang) || !isValidPersona(persona)) {
    notFound();
  }

  return (
    <>
      <PersonaNav lang={lang as Language} persona={persona as Persona} />
      <main className="pt-20">{children}</main>
    </>
  );
}
