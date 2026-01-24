# DRP Ventures BV - Website

Een professionele, minimalistische bedrijfswebsite gebouwd met Next.js 16, React 19, TypeScript en Tailwind CSS v4.

## Kenmerken

- **Next.js 16 App Router** - Nieuwste versie met server components
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - CSS-first configuratie met custom theme
- **Data-driven content** - Alle teksten centraal in `/src/content/site.ts`
- **Component-driven** - Herbruikbare UI en sectie componenten
- **Responsive** - Mobile-first design
- **Toegankelijk** - Semantische HTML, focus states, aria-labels
- **SEO geoptimaliseerd** - Meta tags, OpenGraph, structured data ready

## Projectstructuur

```
drp-ventures/
├── public/
│   └── images/
│       ├── portfolio/     # Portfolio project afbeeldingen
│       ├── blog/          # Blog post afbeeldingen
│       └── clients/       # Client logo's
├── src/
│   ├── app/
│   │   ├── globals.css    # Tailwind v4 theme & global styles
│   │   ├── layout.tsx     # Root layout met Nav
│   │   └── page.tsx       # Home page met alle secties
│   ├── components/
│   │   ├── sections/      # Page sections (Hero, About, etc.)
│   │   └── ui/            # Reusable UI components
│   └── content/
│       └── site.ts        # Centrale content configuratie
├── tailwind.config.ts     # Tailwind configuratie (legacy)
├── vercel.json            # Vercel deployment config
└── package.json
```

## Secties

1. **Hero** - Headline, subline, CTA's, stats
2. **About** - Intro, missie, kernwaarden
3. **Services** - Diensten met features
4. **Expertise** - Skills met progress bars
5. **Experience** - Timeline met ventures & employment
6. **Portfolio** - Project grid met filter tabs
7. **Process** - 4-stappen werkwijze
8. **Blog** - Laatste artikelen
9. **Clients** - Logo strip
10. **Contact** - Formulier + bedrijfsgegevens
11. **Footer**

## Aan de slag

### Installatie

```bash
# Clone de repository
git clone https://github.com/drprijkers-del/drp-ventures.git
cd drp-ventures

# Installeer dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Scripts

```bash
npm run dev       # Start development server
npm run build     # Build voor productie
npm run start     # Start productie server
npm run lint      # Run ESLint
npm run lint:fix  # Fix ESLint issues
npm run type-check # TypeScript type checking
```

## Content Aanpassen

Alle teksten, services, portfolio items, etc. staan in `/src/content/site.ts`. Pas dit bestand aan om de website content te wijzigen.

### Voorbeeld: Service toevoegen

```typescript
// In src/content/site.ts
export const services = [
  // ... bestaande services
  {
    id: "nieuwe-service",
    title: "Nieuwe Service",
    description: "Beschrijving van de service...",
    icon: "Code", // Zie Icons.tsx voor beschikbare icons
    features: [
      "Feature 1",
      "Feature 2",
    ],
  },
];
```

## Afbeeldingen Toevoegen

Plaats afbeeldingen in de juiste map in `/public/images/`:

- Portfolio: `/public/images/portfolio/[naam].jpg`
- Blog: `/public/images/blog/[naam].jpg`
- Clients: `/public/images/clients/[naam].svg`

Update vervolgens de paden in `site.ts`.

## Deployment naar Vercel

### Via Vercel CLI

```bash
# Installeer Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (preview)
vercel

# Deploy naar productie
vercel --prod
```

### Via GitHub Integration

1. Push je code naar GitHub
2. Ga naar [vercel.com](https://vercel.com)
3. Importeer je repository
4. Vercel detecteert automatisch Next.js en deployed

### Environment Variables

Geen environment variables nodig voor de basissite. Voor het contactformulier kun je later toevoegen:

- `SMTP_HOST` - Voor email verzending
- `SMTP_USER` - SMTP gebruikersnaam
- `SMTP_PASS` - SMTP wachtwoord

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Licentie

Proprietary - DRP Ventures BV

## Contact

- Website: [drpventures.nl](https://drpventures.nl)
- Email: info@drpventures.nl
