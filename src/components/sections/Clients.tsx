import { Section } from "@/components/ui/Section";
import { clients } from "@/content/site";

export function Clients() {
  return (
    <Section id="clients" background="default" spacing="md">
      <div className="text-center mb-8">
        <p className="text-dark-400 text-sm uppercase tracking-wider">
          Vertrouwd door toonaangevende organisaties
        </p>
      </div>

      {/* Logo strip */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
        {clients.map((client, index) => (
          <div
            key={index}
            className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            {/* Placeholder for client logos */}
            <div className="px-4 py-2 bg-dark-800 rounded-lg border border-dark-700 text-dark-400 text-sm font-medium whitespace-nowrap">
              {client.name}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-dark-500 text-xs mt-8">
        Vervang deze placeholders door echte logo&apos;s in{" "}
        <code className="text-dark-400">/public/images/clients/</code>
      </p>
    </Section>
  );
}
