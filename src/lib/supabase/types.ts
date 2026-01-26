// ============================================
// DATABASE TYPES
// ============================================

export interface Database {
  public: {
    Tables: {
      persona_content: {
        Row: {
          id: string;
          language: "nl" | "en" | "sv";
          persona: "scrum-master" | "agile-coach" | "team-manager";
          content: PersonaContentJSON;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          language: "nl" | "en" | "sv";
          persona: "scrum-master" | "agile-coach" | "team-manager";
          content: PersonaContentJSON;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          language?: "nl" | "en" | "sv";
          persona?: "scrum-master" | "agile-coach" | "team-manager";
          content?: PersonaContentJSON;
          updated_at?: string;
        };
      };
    };
  };
}

// JSON structure for content stored in database
export interface PersonaContentJSON {
  contact: {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedin?: string;
    location: string;
  };
  sectionLabels: {
    about: string;
    services: string;
    assignments: string;
    experience: string;
    process: string;
    clients: string;
    contact: string;
  };
  hero: {
    label: string;
    headline: string;
    subline: string;
    description: string;
    cta: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
    };
    stats: Array<{ value: string; label: string }>;
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    approach: {
      title: string;
      description: string;
    };
    values: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    deliverables: string[];
  }>;
  assignments: Array<{
    id: string;
    organization: string;
    role: string;
    description: string;
    sector: string;
  }>;
  experience: Array<{
    id: string;
    title: string;
    organization: string;
    period?: string;
    description: string;
    type: string;
  }>;
  process: Array<{
    step: number;
    title: string;
    description: string;
    icon: string;
  }>;
  clients: string[];
  contactSection: {
    title: string;
    subtitle: string;
    description: string;
    formFields: {
      name: string;
      email: string;
      company: string;
      subject: string;
      message: string;
      submit: string;
    };
    subjects: string[];
  };
  footer: {
    tagline: string;
    copyright: string;
    legal: string;
  };
}
