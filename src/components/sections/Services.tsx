import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { services } from "@/content/site";
import { Icon, IconName } from "@/components/ui/Icons";
import { CheckCircleIcon } from "@/components/ui/Icons";

export function Services() {
  return (
    <Section id="services" background="default">
      <SectionHeader
        subtitle="Diensten"
        title="Wat wij bieden"
        description="Van strategische consultancy tot hands-on development. Wij ondersteunen organisaties in elke fase van hun digitale journey."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            variant="gradient"
            hover
            padding="lg"
            className="group"
          >
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-brand-lime/10 flex items-center justify-center mb-4 group-hover:bg-brand-lime group-hover:shadow-glow transition-all duration-300">
                <Icon
                  name={service.icon as IconName}
                  size={28}
                  className="text-brand-lime group-hover:text-dark-950 transition-colors"
                />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>

            <CardDescription className="mb-6">{service.description}</CardDescription>

            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-dark-300"
                  >
                    <CheckCircleIcon
                      size={16}
                      className="text-brand-lime flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
