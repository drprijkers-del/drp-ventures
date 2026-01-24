import { Section, SectionHeader } from "@/components/ui/Section";
import { expertise } from "@/content/site";

export function Expertise() {
  return (
    <Section id="expertise" background="dark">
      <SectionHeader
        subtitle="Expertise"
        title="Technische vaardigheden"
        description="Decennia aan ervaring gecombineerd met continue bijscholing resulteren in diepgaande expertise over de volledige stack."
      />

      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {expertise.map((item, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{item.skill}</span>
                <span className="text-brand-lime font-semibold">
                  {item.level}%
                </span>
              </div>
              <div className="h-3 bg-dark-800 rounded-full overflow-hidden border border-dark-700">
                <div
                  className="h-full bg-gradient-lime rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow-sm"
                  style={{ width: `${item.level}%` }}
                  role="progressbar"
                  aria-valuenow={item.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${item.skill}: ${item.level}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
