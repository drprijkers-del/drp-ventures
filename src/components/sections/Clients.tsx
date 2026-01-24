import { Container } from "@/components/ui/Container";
import { clients } from "@/content/site";

export function Clients() {
  return (
    <section id="clients" className="py-12 md:py-16">
      <Container>
        <div className="text-center mb-8">
          <p className="text-tertiary text-sm uppercase tracking-wider">
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
              <div className="px-4 py-2 bg-surface-elevated rounded-lg border border-surface-border text-tertiary text-sm font-medium whitespace-nowrap">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-xs mt-8">
          Vervang deze placeholders door echte logo&apos;s in{" "}
          <code className="text-tertiary">/public/images/clients/</code>
        </p>
      </Container>
    </section>
  );
}
