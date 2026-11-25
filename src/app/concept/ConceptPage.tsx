import Image from "next/image";
import type { ConceptContent } from "@/content/concept";

export default function ConceptPage({ c }: { c: ConceptContent }) {
  return (
    <div className="av">
      <nav className="nav">
        <div className="wrap">
          <a className="brand" href="#top">Dennis Rijkers</a>
          <ul>
            {c.nav.map((i) => (
              <li key={i.href}><a href={i.href}>{i.label}</a></li>
            ))}
            <li><a className="lang" href={c.altLang.href}>{c.altLang.label}</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap">
          <p className="kick">{c.hero.kick}</p>
          <h1>{c.hero.title}</h1>
          <p className="sub">{c.hero.sub}</p>
          <p className="lead">{c.hero.lead}</p>
          <div className="cta">
            <a className="btn btn-primary" href={c.contact.mailto}>{c.hero.ctaPrimary}</a>
            <a className="btn btn-ghost" href="#ervaring">{c.hero.ctaSecondary}</a>
          </div>
          <div className="promises">
            {c.hero.promises.map((p) => (
              <div key={p.title}><b>{p.title}</b><span>{p.body}</span></div>
            ))}
          </div>
        </div>
      </header>

      <section id="rol">
        <div className="wrap wide">
          <p className="eyebrow">{c.rol.eyebrow}</p>
          <h2>{c.rol.title}</h2>
          <div className="rolgrid">
            <figure className="portret">
              <Image
                src="/images/portret-averden.jpg"
                alt={c.rol.portraitAlt}
                width={800}
                height={800}
                sizes="(max-width: 760px) 100vw, 260px"
                priority
              />
            </figure>
            <p className="intro">{c.rol.intro}</p>
          </div>
          <div className="nietwel">
            <div><h4>{c.rol.nietLabel}</h4><p>{c.rol.niet}</p></div>
            <div><h4>{c.rol.welLabel}</h4><p>{c.rol.wel}</p></div>
          </div>
        </div>
      </section>

      <section className="alt" id="wat">
        <div className="wrap wide">
          <p className="eyebrow">{c.ways.eyebrow}</p>
          <h2>{c.ways.title}</h2>
          <p className="intro">{c.ways.intro}</p>
          <div className="ways">
            {c.ways.items.map((w) => (
              <div className="way" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                <a href="#ervaring">{c.hero.ctaSecondary}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap wide">
          <p className="eyebrow">{c.services.eyebrow}</p>
          <h2>{c.services.title}</h2>
          <div className="svc" style={{ marginTop: 30 }}>
            {c.services.items.map((s) => (
              <div key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt" id="ervaring">
        <div className="wrap wide">
          <p className="eyebrow">{c.ervaring.eyebrow}</p>
          <h2>{c.ervaring.title}</h2>
          <p className="intro">{c.ervaring.intro}</p>
          {c.ervaring.cases.map((k) => (
            <article className="case" key={k.client}>
              <p className="client">{k.client}</p>
              <h3>{k.headline}</h3>
              <p>{k.body}</p>
              <p className="period">{k.period}</p>
            </article>
          ))}
          <div className="also">
            <p>{c.ervaring.alsoLabel}</p>
            <ul>{c.ervaring.also.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="ondernemingen">
        <div className="wrap">
          <p className="eyebrow">{c.ventures.eyebrow}</p>
          <h2>{c.ventures.title}</h2>
          <p className="intro">{c.ventures.intro}</p>
          {c.ventures.items.map((v) => (
            <div className="vent" key={v.name}>
              <h3>{v.name}</h3>
              <span className="yr">{v.years}</span>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <p className="eyebrow" style={{ color: "var(--green-ghost)" }}>{c.contact.eyebrow}</p>
          <h2>{c.contact.title}</h2>
          <p className="intro">{c.contact.intro}</p>
          <a className="btn btn-primary" href={c.contact.mailto}>{c.contact.cta}</a>
          <p className="meta">{c.contact.meta}</p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span className="brand">Dennis Rijkers</span>
          <p className="tag">{c.footer.tag}</p>
          <p className="legal">
            {c.footer.legal}
            {" · "}
            <a href="https://averden.nl/" rel="noreferrer">{c.footer.partner}</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
