import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LANGUAGES, PERSONAS, LANGUAGE_LABELS, PERSONA_LABELS } from "@/content/persona";

export default function AdminDashboard() {
  return (
    <Container className="py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-white/60">
          Beheer de content voor alle persona&apos;s en talen.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-card border border-white/10 rounded-lg p-6">
          <div className="text-3xl font-bold text-accent mb-1">
            {LANGUAGES.length}
          </div>
          <div className="text-white/60">Talen</div>
        </div>
        <div className="bg-card border border-white/10 rounded-lg p-6">
          <div className="text-3xl font-bold text-accent mb-1">
            {PERSONAS.length}
          </div>
          <div className="text-white/60">Persona&apos;s</div>
        </div>
        <div className="bg-card border border-white/10 rounded-lg p-6">
          <div className="text-3xl font-bold text-accent mb-1">
            {LANGUAGES.length * PERSONAS.length}
          </div>
          <div className="text-white/60">Totale pagina&apos;s</div>
        </div>
      </div>

      {/* Content overview */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Content overzicht</h2>
        <p className="text-white/60 mb-6">
          Klik op een combinatie om de content te bewerken.
        </p>
      </div>

      {/* Content matrix */}
      <div className="bg-card border border-white/10 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 text-white/60 font-medium">
                Persona
              </th>
              {LANGUAGES.map((lang) => (
                <th
                  key={lang}
                  className="text-center p-4 text-white/60 font-medium"
                >
                  {LANGUAGE_LABELS[lang]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PERSONAS.map((persona) => (
              <tr key={persona} className="border-b border-white/10 last:border-0">
                <td className="p-4 text-white font-medium">
                  {PERSONA_LABELS.en[persona]}
                </td>
                {LANGUAGES.map((lang) => (
                  <td key={lang} className="p-4 text-center">
                    <Link
                      href={`/admin/content/${lang}/${persona}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-bg border border-white/10 rounded-lg text-sm text-white/70 hover:text-white hover:border-accent transition-colors"
                    >
                      Bewerken
                    </Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick links */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-2">Website bekijken</h3>
          <p className="text-white/60 mb-4">
            Bekijk de live website met de huidige content.
          </p>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map((lang) => (
              <Link
                key={lang}
                href={`/${lang}/agile-coach`}
                target="_blank"
                className="px-3 py-1 bg-bg border border-white/10 rounded text-sm text-white/70 hover:text-white hover:border-accent transition-colors"
              >
                {LANGUAGE_LABELS[lang]}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-card border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-2">Documentatie</h3>
          <p className="text-white/60 mb-4">
            De content wordt opgeslagen in TypeScript bestanden in{" "}
            <code className="text-accent">src/content/persona/</code>.
          </p>
          <p className="text-white/40 text-sm">
            Voor database-gebaseerde content, configureer eerst Supabase.
          </p>
        </div>
      </div>
    </Container>
  );
}
