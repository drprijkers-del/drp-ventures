import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { about } from "@/content/site";
import { Icon, IconName } from "@/components/ui/Icons";

export function About() {
  return (
    <Section id="about" background="dark">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left column - Intro */}
        <div>
          <SectionHeader
            subtitle="Over ons"
            title={about.title}
            description={about.intro}
            centered={false}
            className="mb-0"
          />

          {/* Mission */}
          <div className="mt-8 p-6 bg-dark-800 rounded-2xl border border-dark-700">
            <h3 className="text-lg font-semibold text-brand-lime mb-2">
              {about.mission.title}
            </h3>
            <p className="text-dark-300 leading-relaxed">
              {about.mission.description}
            </p>
          </div>
        </div>

        {/* Right column - Values */}
        <div className="grid sm:grid-cols-2 gap-4">
          {about.values.map((value, index) => (
            <Card
              key={index}
              variant="bordered"
              hover
              className="group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-lime/10 flex items-center justify-center mb-4 group-hover:bg-brand-lime/20 transition-colors">
                <Icon
                  name={value.icon as IconName}
                  size={24}
                  className="text-brand-lime"
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {value.title}
              </h4>
              <p className="text-dark-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
