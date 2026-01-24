import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { blog } from "@/content/site";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "@/components/ui/Icons";

export function Blog() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Section id="blog" background="dark">
      <SectionHeader
        subtitle="Insights"
        title="Laatste artikelen"
        description="Gedachten over technologie, architectuur en het bouwen van succesvolle digitale producten."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.map((post) => (
          <Card
            key={post.id}
            variant="bordered"
            padding="none"
            hover
            className="group overflow-hidden"
          >
            {/* Image placeholder */}
            <div className="aspect-video bg-dark-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-brand-lime/5 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-dark-600 text-sm">{post.category}</span>
              </div>
            </div>

            <CardContent className="p-6">
              {/* Category */}
              <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-brand-lime/10 text-brand-lime mb-4">
                {post.category}
              </span>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-brand-lime transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-dark-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-dark-500 text-xs mb-4">
                <span className="flex items-center gap-1">
                  <CalendarIcon size={14} />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon size={14} />
                  {post.readTime}
                </span>
              </div>

              {/* Read more link */}
              <a
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-lime hover:text-brand-lime-light transition-colors group/link"
              >
                Lees meer
                <ArrowRightIcon
                  size={16}
                  className="transform group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
