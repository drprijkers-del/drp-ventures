import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { siteConfig, footer } from "@/content/site";
import { LinkedInIcon, GitHubIcon, XIcon } from "@/components/ui/Icons";

export function Footer() {
  const socialLinks = [
    { icon: LinkedInIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: GitHubIcon, href: siteConfig.social.github, label: "GitHub" },
    { icon: XIcon, href: siteConfig.social.twitter, label: "X" },
  ];

  return (
    <footer className="bg-surface-elevated/50 border-t border-surface-border">
      <Container>
        {/* Main footer content */}
        <div className="py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Brand + tagline */}
            <div>
              <a href="#hero" className="inline-block mb-3 group">
                <span className="text-xl font-bold">
                  <span className="text-accent group-hover:text-accent-light transition-colors">DRP</span>
                  <span className="text-primary"> Ventures</span>
                </span>
              </a>
              <p className="text-tertiary text-sm max-w-xs">
                {footer.tagline}
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    "bg-surface-card border border-surface-border",
                    "text-muted hover:text-accent hover:border-accent/30",
                    "transition-all duration-300"
                  )}
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-surface-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-muted text-xs">
              {footer.copyright}
            </p>

            {/* Legal links */}
            <div className="flex items-center gap-6">
              {footer.links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-muted hover:text-secondary text-xs transition-colors",
                    index < footer.links.length - 1 && "relative after:content-[''] after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-3 after:bg-surface-border"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company details - subtle */}
          <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-surface-border/50">
            <span className="text-muted/60 text-xs">KvK: {siteConfig.kvk}</span>
            <span className="w-1 h-1 rounded-full bg-surface-border" />
            <span className="text-muted/60 text-xs">BTW: {siteConfig.btw}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
