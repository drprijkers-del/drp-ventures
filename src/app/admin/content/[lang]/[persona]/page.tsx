import { notFound } from "next/navigation";
import {
  getPersonaContent,
  isValidLanguage,
  isValidPersona,
  LANGUAGE_LABELS,
  PERSONA_LABELS,
} from "@/content/persona";
import { Container } from "@/components/ui/Container";
import { ContentEditor } from "@/components/admin/ContentEditor";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    lang: string;
    persona: string;
  }>;
}

export default async function ContentEditPage({ params }: PageProps) {
  const { lang, persona } = await params;

  if (!isValidLanguage(lang) || !isValidPersona(persona)) {
    notFound();
  }

  const content = getPersonaContent(lang, persona);
  if (!content) {
    notFound();
  }

  return (
    <Container className="py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
        <Link href="/admin" className="hover:text-white transition-colors">
          Dashboard
        </Link>
        <span>/</span>
        <span className="text-white">
          {LANGUAGE_LABELS[lang]} - {PERSONA_LABELS[lang][persona]}
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Content bewerken
          </h1>
          <p className="text-white/60">
            {PERSONA_LABELS[lang][persona]} ({LANGUAGE_LABELS[lang]})
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href={`/${lang}/${persona}`}
            target="_blank"
            className="px-4 py-2 bg-card border border-white/10 rounded-lg text-sm text-white/70 hover:text-white hover:border-accent transition-colors"
          >
            Preview bekijken
          </Link>
        </div>
      </div>

      {/* Editor */}
      <ContentEditor content={content} lang={lang} persona={persona} />
    </Container>
  );
}
