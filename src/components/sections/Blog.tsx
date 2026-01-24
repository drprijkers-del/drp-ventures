import { SectionHeader, Panel } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
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
    <section id="blog" className="py-section-sm md:py-section">
      <Container>
        <Panel>
          <SectionHeader
            title="Insights"
            subtitle="Laatste artikelen"
            description="Gedachten over technologie, architectuur en het bouwen van succesvolle digitale producten."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blog.map((post) => (
              <BlogCard key={post.id} post={post} formatDate={formatDate} />
            ))}
          </div>
        </Panel>
      </Container>
    </section>
  );
}

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
  };
  formatDate: (date: string) => string;
}

function BlogCard({ post, formatDate }: BlogCardProps) {
  return (
    <div className="group rounded-lg border border-surface-border bg-surface-card overflow-hidden hover:border-surface-border-light transition-all duration-300">
      {/* Image placeholder */}
      <div className="aspect-video bg-surface-elevated relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted text-sm uppercase tracking-wider">{post.category}</span>
        </div>
      </div>

      <div className="p-6">
        {/* Category */}
        <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-accent-muted text-accent mb-4">
          {post.category}
        </span>

        <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-muted text-xs mb-4">
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
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors group/link"
        >
          Lees meer
          <ArrowRightIcon
            size={16}
            className="transform group-hover/link:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}
