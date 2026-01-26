import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { PersonaContent } from "@/content/persona";

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
};

// ============================================
// STYLES
// ============================================

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    padding: 35,
    paddingBottom: 60,
    fontFamily: "Helvetica",
    color: colors.secondary,
    fontSize: 9,
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

  // Footer
  footer: {
    position: "absolute",
    bottom: 25,
    left: 35,
    right: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  footerText: {
    fontSize: 7,
    color: colors.muted,
  },
});

// ============================================
// CV DOCUMENT COMPONENT
// ============================================

interface CVDocumentProps {
  content: PersonaContent;
  photoBase64?: string;
}

export function CVDocument({ content, photoBase64 }: CVDocumentProps) {
  const { contact, hero, about, services, assignments, experience, clients } = content;

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
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
              <Text style={styles.sectionTitle}>Profile</Text>
              <Text style={styles.profileText}>{about.intro}</Text>
              <Text style={styles.profileText}>{about.approach.description}</Text>
            </View>

            {/* Experience */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experience</Text>
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
              <Text style={styles.sectionTitle}>Assignments</Text>
              {assignments.slice(0, 3).map((assignment) => (
                <View key={assignment.id} style={styles.expItem} wrap={false}>
                  <Text style={styles.expTitle}>{assignment.organization}</Text>
                  <Text style={styles.expOrg}>{assignment.role}</Text>
                  <Text style={styles.expDesc}>{assignment.description}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Side Column */}
          <View style={styles.columnSide}>
            {/* Core Values */}
            <View style={styles.section} wrap={false}>
              <Text style={styles.sectionTitle}>Core Values</Text>
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
              <Text style={styles.sectionTitle}>Services</Text>
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
              <Text style={styles.sectionTitle}>Clients</Text>
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

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>DRP Ventures BV</Text>
          <Text style={styles.footerText}>{contact.location}</Text>
          <Text style={styles.footerText}>drpventures.nl</Text>
        </View>
      </Page>
    </Document>
  );
}
