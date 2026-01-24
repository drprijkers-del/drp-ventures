import { Section, SectionHeader } from "@/components/ui/Section";
import { experience } from "@/content/site";

export function Experience() {
  return (
    <Section id="experience" background="default">
      <SectionHeader
        subtitle="Ervaring"
        title="Track Record"
        description="Een overzicht van professionele mijlpalen, ventures en sleutelposities door de jaren heen."
      />

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-dark-700 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-brand-lime bg-dark-900 transform -translate-x-1/2 md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      item.type === "venture"
                        ? "bg-brand-lime/20 text-brand-lime"
                        : "bg-dark-700 text-dark-300"
                    }`}
                  >
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-brand-lime font-medium mb-3">
                    {item.company}
                  </p>
                  <p className="text-dark-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
