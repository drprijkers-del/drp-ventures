import { Section, SectionHeader } from "@/components/ui/Section";
import { process } from "@/content/site";
import { Icon, IconName } from "@/components/ui/Icons";

export function Process() {
  return (
    <Section id="process" background="default">
      <SectionHeader
        subtitle="Werkwijze"
        title="Ons proces"
        description="Een gestructureerde aanpak die kwaliteit en transparantie garandeert in elk project."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {process.map((step, index) => (
          <div key={step.step} className="relative group">
            {/* Connector line (hidden on last item and on mobile) */}
            {index < process.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-dark-700 transform translate-x-1/2" />
            )}

            <div className="bg-dark-850 border border-dark-700 rounded-2xl p-6 relative hover:border-dark-600 transition-colors">
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-lime text-dark-950 font-bold text-sm flex items-center justify-center">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-dark-800 flex items-center justify-center mb-6 group-hover:bg-brand-lime/10 transition-colors">
                <Icon
                  name={step.icon as IconName}
                  size={32}
                  className="text-brand-lime"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-dark-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
