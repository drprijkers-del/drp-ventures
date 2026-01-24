import { SectionHeader, Panel } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { process } from "@/content/site";
import { Icon, IconName } from "@/components/ui/Icons";

export function Process() {
  return (
    <section id="process" className="py-section-sm md:py-section">
      <Container>
        <Panel>
          <SectionHeader
            title="Werkwijze"
            subtitle="Ons proces"
            description="Een gestructureerde aanpak die kwaliteit en transparantie garandeert in elk project."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <ProcessStep key={step.step} step={step} isLast={index === process.length - 1} />
            ))}
          </div>
        </Panel>
      </Container>
    </section>
  );
}

interface ProcessStepProps {
  step: {
    step: number;
    title: string;
    description: string;
    icon: string;
  };
  isLast: boolean;
}

function ProcessStep({ step, isLast }: ProcessStepProps) {
  return (
    <div className="relative group">
      {/* Connector line (hidden on last item and on mobile) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-surface-border transform translate-x-1/2" />
      )}

      <div className="bg-surface-card border border-surface-border rounded-lg p-6 relative hover:border-surface-border-light hover:bg-surface-elevated transition-all duration-300">
        {/* Step number */}
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-black font-bold text-sm flex items-center justify-center">
          {step.step}
        </div>

        {/* Icon */}
        <div className="icon-box rounded-xl mb-6 group-hover:shadow-glow-sm">
          <Icon
            name={step.icon as IconName}
            size={32}
            className="text-accent"
          />
        </div>

        <h3 className="text-lg font-semibold text-primary mb-3">
          {step.title}
        </h3>

        <p className="text-secondary text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
