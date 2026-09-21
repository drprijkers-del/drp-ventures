import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { PersonaContent, Language, Persona, PERSONA_LABELS } from "@/content/persona";

// ============================================
// COLORS
// ============================================

const colors = {
  primary: "#ffffff",
  secondary: "#a0a0a0",
  muted: "#707070",
  accent: "#8bc34a",
  background: "#0f0f0f",
  card: "#1a1a1a",
  border: "#2a2a2a",
  watermark: "rgba(255, 255, 255, 0.06)",
};

// ============================================
// TRANSLATIONS
// ============================================

const WATERMARK_TEXT: Record<Language, string> = {
  nl: "Persoonlijk CV, niet bedoeld voor doorplaatsing zonder toestemming",
  en: "Personal CV, not intended for redistribution without permission",
  sv: "Personligt CV, ej avsett för vidarebefordran utan tillstånd",
};

const DISCLAIMER_TEXT: Record<Language, string> = {
  nl: "Dit CV is persoonlijk verstrekt voor beoordeling in het kader van een mogelijke samenwerking. Doorplaatsen of delen met derden is niet toegestaan zonder voorafgaande toestemming. Voor een deelbare versie kunt u contact opnemen via info@drpventures.nl.",
  en: "This CV has been personally provided for assessment in the context of a potential collaboration. Redistribution or sharing with third parties is not permitted without prior consent. For a shareable version, please contact info@drpventures.nl.",
  sv: "Detta CV har personligen tillhandahållits för bedömning i samband med ett potentiellt samarbete. Vidarebefordran eller delning med tredje part är inte tillåten utan föregående samtycke. För en delbar version, kontakta info@drpventures.nl.",
};

const GENERATED_TEXT: Record<Language, string> = {
  nl: "Gegenereerd via drpventures.nl",
  en: "Generated via drpventures.nl",
  sv: "Genererat via drpventures.nl",
};

interface CVLabels {
  profile: string;
  experience: string;
  assignments: string;
  values: string;
  services: string;
  clients: string;
}

const CV_LABELS: Record<Language, CVLabels> = {
  nl: {
    profile: "Profiel",
    experience: "Loopbaan",
    assignments: "Uitgelichte opdrachten",
    values: "Kernwaarden",
    services: "Diensten",
    clients: "Klanten",
  },
  en: {
    profile: "Profile",
    experience: "Experience",
    assignments: "Selected assignments",
    values: "Core values",
    services: "Services",
    clients: "Clients",
  },
  sv: {
    profile: "Profil",
    experience: "Karriär",
    assignments: "Utvalda uppdrag",
    values: "Kärnvärden",
    services: "Tjänster",
    clients: "Kunder",
  },
};

// ============================================
// STYLES
// ============================================

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    padding: 35,
    paddingBottom: 70,
    fontFamily: "Helvetica",
    color: colors.secondary,
    fontSize: 9,
    position: "relative",
  },

  // Watermark - subtle background text
  watermark: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(-30deg)",
    fontSize: 11,
    color: colors.watermark,
    textAlign: "center",
    width: 400,
    letterSpacing: 1,
  },

  // Disclaimer box - page 1 only
  disclaimer: {
    position: "absolute",
    bottom: 70,
    left: 35,
    right: 35,
    padding: 8,
    backgroundColor: colors.card,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  disclaimerText: {
    fontSize: 6,
    color: colors.muted,
    lineHeight: 1.5,
    textAlign: "center",
  },

  // Header with photo
  header: {
    flexDirection: "row",
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  photo: {
    width: 75,
    height: 90,
    borderRadius: 6,
    marginRight: 15,
    objectFit: "cover",
    objectPosition: "center top",
  },
  headerContent: {
    flex: 1,
    justifyContent: "center",
  },
  headerRight: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    color: colors.primary,
    marginBottom: 3,
  },
  title: {
    fontSize: 12,
    color: colors.accent,
    fontWeight: 500,
    marginBottom: 6,
  },
  tagline: {
    fontSize: 9,
    color: colors.secondary,
    lineHeight: 1.4,
    maxWidth: 280,
  },
  contactItem: {
    fontSize: 8,
    color: colors.secondary,
    marginBottom: 2,
    textAlign: "right",
  },

  // Section
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  // Profile text
  profileText: {
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.secondary,
    marginBottom: 6,
  },

  // Skills/Values - horizontal layout
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 4,
  },
  tag: {
    backgroundColor: colors.card,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tagText: {
    fontSize: 8,
    color: colors.primary,
  },

  // Experience items - compact
  expItem: {
    marginBottom: 8,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: colors.accent,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  expTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.primary,
  },
  expOrg: {
    fontSize: 9,
    color: colors.accent,
    marginBottom: 2,
  },
  expPeriod: {
    fontSize: 8,
    color: colors.muted,
  },
  expDesc: {
    fontSize: 8,
    lineHeight: 1.4,
    color: colors.secondary,
  },
  achievement: {
    fontSize: 8,
    lineHeight: 1.4,
    color: colors.muted,
    marginTop: 2,
    paddingLeft: 6,
  },

  // Two column layout
  twoColumn: {
    flexDirection: "row",
    gap: 15,
  },
  columnMain: {
    flex: 3,
  },
  columnSide: {
    flex: 2,
  },

  // Service items - compact
  serviceItem: {
    marginBottom: 6,
    padding: 6,
    backgroundColor: colors.card,
    borderRadius: 3,
  },
  serviceTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.primary,
    marginBottom: 3,
  },
  deliverables: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  deliverable: {
    fontSize: 7,
    color: colors.muted,
    backgroundColor: colors.background,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
  },

  // Stats row
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 14,
    fontWeight: 700,
    color: colors.accent,
  },
  statLabel: {
    fontSize: 7,
    color: colors.muted,
    textAlign: "center",
  },

  // Footer - enhanced
  footer: {
    position: "absolute",
    bottom: 20,
    left: 35,
    right: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  footerLeft: {
    flexDirection: "column",
  },
  footerCenter: {
    flexDirection: "column",
    alignItems: "center",
  },
  footerRight: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  footerText: {
    fontSize: 6,
    color: colors.muted,
  },
  footerTextSmall: {
    fontSize: 5,
    color: colors.muted,
    opacity: 0.7,
  },
});

// ============================================
// REUSABLE COMPONENTS
// ============================================

/**
 * Watermark - Subtle background text on every page
 * Renders at ~6% opacity, rotated -30deg
 */
interface WatermarkProps {
  lang: Language;
}

function Watermark({ lang }: WatermarkProps) {
  return (
    <Text style={styles.watermark} fixed>
      {WATERMARK_TEXT[lang]}
    </Text>
  );
}

/**
 * Disclaimer - Legal notice at bottom of page 1
 * Explains CV is for personal review only
 */
interface DisclaimerProps {
  lang: Language;
}

function Disclaimer({ lang }: DisclaimerProps) {
  return (
    <View style={styles.disclaimer} wrap={false}>
      <Text style={styles.disclaimerText}>{DISCLAIMER_TEXT[lang]}</Text>
    </View>
  );
}

/**
 * Footer - Appears on every page
 * Contains: company name, persona/lang, generation info
 */
interface FooterProps {
  lang: Language;
  persona: Persona;
  contactName: string;
}

function Footer({ lang, persona, contactName }: FooterProps) {
  const personaLabel = PERSONA_LABELS[lang][persona];
  const now = new Date();
  const monthNames: Record<Language, string[]> = {
    nl: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    sv: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
  };
  const month = monthNames[lang][now.getMonth()];
  const year = now.getFullYear();

  return (
    <View style={styles.footer} fixed>
      <View style={styles.footerLeft}>
        <Text style={styles.footerText}>DRP Ventures BV · {contactName}</Text>
        <Text style={styles.footerTextSmall}>{personaLabel} · {lang.toUpperCase()}</Text>
      </View>
      <View style={styles.footerCenter}>
        <Text style={styles.footerTextSmall}>drpventures.nl</Text>
      </View>
      <View style={styles.footerRight}>
        <Text style={styles.footerTextSmall}>
          {GENERATED_TEXT[lang]} · {month} {year}
        </Text>
      </View>
    </View>
  );
}

// ============================================
// CV DOCUMENT COMPONENT
// ============================================

interface CVDocumentProps {
  content: PersonaContent;
  photoBase64?: string;
}

export function CVDocument({ content, photoBase64 }: CVDocumentProps) {
  const { contact, hero, about, services, assignments, experience, clients, language, persona } = content;
  const labels = CV_LABELS[language];

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {/* Watermark - renders on every page at low opacity */}
        <Watermark lang={language} />

        {/* Header with Photo */}
        <View style={styles.header} wrap={false}>
          {photoBase64 && <Image src={photoBase64} style={styles.photo} />}
          <View style={styles.headerContent}>
            <Text style={styles.name}>{contact.name}</Text>
            <Text style={styles.title}>{contact.title}</Text>
            <Text style={styles.tagline}>{hero.description}</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.contactItem}>{contact.email}</Text>
            <Text style={styles.contactItem}>{contact.phone}</Text>
            <Text style={styles.contactItem}>{contact.location}</Text>
            {contact.linkedin && (
              <Text style={styles.contactItem}>linkedin.com/in/dennisrijkers</Text>
            )}
          </View>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow} wrap={false}>
          {hero.stats.slice(0, 4).map((stat, i) => (
            <View key={i} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Two Column Layout */}
        <View style={styles.twoColumn}>
          {/* Main Column */}
          <View style={styles.columnMain}>
            {/* Profile */}
            <View style={styles.section} wrap={false}>
              <Text style={styles.sectionTitle}>{labels.profile}</Text>
              <Text style={styles.profileText}>{about.intro}</Text>
              <Text style={styles.profileText}>{about.approach.description}</Text>
            </View>

            {/* Experience */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{labels.experience}</Text>
              {experience.slice(0, 3).map((exp) => (
                <View key={exp.id} style={styles.expItem} wrap={false}>
                  <View style={styles.expHeader}>
                    <View>
                      <Text style={styles.expTitle}>{exp.title}</Text>
                      <Text style={styles.expOrg}>{exp.organization}</Text>
                    </View>
                    {exp.period && (
                      <Text style={styles.expPeriod}>{exp.period}</Text>
                    )}
                  </View>
                  <Text style={styles.expDesc}>{exp.description}</Text>
                </View>
              ))}
            </View>

            {/* Selected Assignments */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{labels.assignments}</Text>
              {assignments.slice(0, 3).map((assignment) => (
                <View key={assignment.id} style={styles.expItem} wrap={false}>
                  <View style={styles.expHeader}>
                    <View>
                      <Text style={styles.expTitle}>{assignment.organization}</Text>
                      <Text style={styles.expOrg}>{assignment.role}</Text>
                    </View>
                    {assignment.period && (
                      <Text style={styles.expPeriod}>{assignment.period}</Text>
                    )}
                  </View>
                  <Text style={styles.expDesc}>{assignment.description}</Text>
                  {assignment.achievements?.map((item, i) => (
                    <Text key={i} style={styles.achievement}>
                      {`\u2022  ${item}`}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>

          {/* Side Column */}
          <View style={styles.columnSide}>
            {/* Core Values */}
            <View style={styles.section} wrap={false}>
              <Text style={styles.sectionTitle}>{labels.values}</Text>
              <View style={styles.tagsRow}>
                {about.values.map((value, i) => (
                  <View key={i} style={styles.tag}>
                    <Text style={styles.tagText}>{value.title}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Services */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{labels.services}</Text>
              {services.slice(0, 3).map((service) => (
                <View key={service.id} style={styles.serviceItem} wrap={false}>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                  <View style={styles.deliverables}>
                    {service.deliverables.slice(0, 4).map((d, i) => (
                      <Text key={i} style={styles.deliverable}>{d}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            {/* Clients */}
            <View style={styles.section} wrap={false}>
              <Text style={styles.sectionTitle}>{labels.clients}</Text>
              <View style={styles.tagsRow}>
                {clients.slice(0, 8).map((client, i) => (
                  <View key={i} style={styles.tag}>
                    <Text style={styles.tagText}>{client}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Disclaimer - page 1 only, above footer */}
        <Disclaimer lang={language} />

        {/* Footer - every page */}
        <Footer lang={language} persona={persona} contactName={contact.name} />
      </Page>
    </Document>
  );
}
