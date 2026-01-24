import { SectionHeader, Panel } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { about } from "@/content/site";
import { Icon, IconName } from "@/components/ui/Icons";

export function About() {
  return (
    <section id="about" className="py-section-sm md:py-section">
      <Container>
        <Panel>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column - Content */}
            <div>
              <SectionHeader
                title="About"
                subtitle={about.title}
                description={about.intro}
              />

              {/* Mission card */}
              <div className="p-6 bg-surface-elevated rounded-lg border border-surface-border">
                <h3 className="text-accent font-semibold mb-3">
                  {about.mission.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {about.mission.description}
                </p>
              </div>
            </div>

            {/* Right column - Values grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {about.values.map((value, index) => (
                <div
                  key={index}
                  className="card rounded-lg p-5 group"
                >
                  {/* Icon */}
                  <div className="icon-box rounded-lg w-12 h-12 mb-4">
                    <Icon
                      name={value.icon as IconName}
                      size={22}
                    />
                  </div>

                  {/* Content */}
                  <h4 className="text-primary font-semibold mb-2">
                    {value.title}
                  </h4>
                  <p className="text-tertiary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </Container>
    </section>
  );
}
