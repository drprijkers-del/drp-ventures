import { SectionHeader, Panel } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/site";
import { Icon, IconName, CheckCircleIcon } from "@/components/ui/Icons";

export function Services() {
  return (
    <section id="services" className="py-section-sm md:py-section">
      <Container>
        <Panel>
          <SectionHeader
            title="Diensten"
            subtitle="Wat wij bieden"
            description="Van strategische consultancy tot hands-on development. Wij ondersteunen organisaties in elke fase van hun digitale journey."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Panel>
      </Container>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
  };
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative rounded-lg border border-surface-border bg-surface-card p-6 hover:border-surface-border-light hover:bg-surface-elevated transition-all duration-300">
      {/* Icon */}
      <div className="icon-box rounded-xl mb-6 group-hover:shadow-glow-sm">
        <Icon
          name={service.icon as IconName}
          size={28}
          className="text-accent"
        />
      </div>

      {/* Title */}
      <h3 className="text-primary text-xl font-semibold mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-secondary text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features list */}
      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-sm text-tertiary"
          >
            <CheckCircleIcon
              size={16}
              className="text-accent shrink-0"
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
