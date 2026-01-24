import { Container } from "@/components/ui/Container";
import { siteConfig, footer, navigation } from "@/content/site";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#hero" className="inline-block mb-4">
                <span className="text-2xl font-bold">
                  <span className="text-brand-lime">DRP</span>
                  <span className="text-white"> Ventures</span>
                </span>
              </a>
              <p className="text-dark-400 max-w-sm mb-6">
                {footer.tagline}
              </p>
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-brand-lime hover:text-dark-950 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-brand-lime hover:text-dark-950 transition-all"
                  aria-label="GitHub"
                >
                  <GitHubIcon size={18} />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navigatie</h4>
              <ul className="space-y-2">
                {navigation.slice(0, 6).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-dark-400 hover:text-brand-lime transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-dark-400">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-brand-lime transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-brand-lime transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  {siteConfig.address.city}, {siteConfig.address.country}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-dark-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm">{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-dark-500 hover:text-dark-300 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
