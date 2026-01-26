"use client";

import { useState } from "react";
import type { PersonaContent, Language, Persona } from "@/content/persona";
import { Button } from "@/components/ui/Button";

interface ContentEditorProps {
  content: PersonaContent;
  lang: string;
  persona: string;
}

type Tab = "hero" | "about" | "services" | "assignments" | "experience" | "contact";

export function ContentEditor({ content, lang, persona }: ContentEditorProps) {
  const [activeTab, setActiveTab] = useState<Tab>("hero");
  const [formData, setFormData] = useState<PersonaContent>(content);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const tabs: { id: Tab; label: string }[] = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "assignments", label: "Assignments" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          persona,
          content: formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save");
      }

      setMessage({ type: "success", text: "Content opgeslagen!" });
    } catch {
      setMessage({ type: "error", text: "Opslaan mislukt. Probeer opnieuw." });
    } finally {
      setSaving(false);
    }
  };

  const updateField = <K extends keyof PersonaContent>(
    section: K,
    field: string,
    value: unknown
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]:
        typeof prev[section] === "object" && !Array.isArray(prev[section])
          ? { ...prev[section], [field]: value }
          : value,
    }));
  };

  return (
    <div className="bg-card border border-white/10 rounded-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-white/10 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "text-accent border-b-2 border-accent"
                : "text-white/60 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Hero Section */}
        {activeTab === "hero" && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Hero Section</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">Label</label>
                <input
                  type="text"
                  value={formData.hero.label}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      hero: { ...formData.hero, label: e.target.value },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Headline</label>
                <input
                  type="text"
                  value={formData.hero.headline}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      hero: { ...formData.hero, headline: e.target.value },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Subline</label>
                <input
                  type="text"
                  value={formData.hero.subline}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      hero: { ...formData.hero, subline: e.target.value },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Primary CTA Label
                </label>
                <input
                  type="text"
                  value={formData.hero.cta.primary.label}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      hero: {
                        ...formData.hero,
                        cta: {
                          ...formData.hero.cta,
                          primary: { ...formData.hero.cta.primary, label: e.target.value },
                        },
                      },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">Description</label>
              <textarea
                value={formData.hero.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    hero: { ...formData.hero, description: e.target.value },
                  })
                }
                rows={4}
                className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent resize-none"
              />
            </div>

            {/* Stats */}
            <div>
              <h4 className="text-md font-bold text-white mb-4">Stats</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {formData.hero.stats.map((stat, index) => (
                  <div key={index} className="bg-bg border border-white/10 rounded-lg p-4">
                    <div className="mb-3">
                      <label className="block text-xs text-white/50 mb-1">Value</label>
                      <input
                        type="text"
                        value={stat.value}
                        onChange={(e) => {
                          const newStats = [...formData.hero.stats];
                          newStats[index] = { ...stat, value: e.target.value };
                          setFormData({
                            ...formData,
                            hero: { ...formData.hero, stats: newStats },
                          });
                        }}
                        className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1">Label</label>
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) => {
                          const newStats = [...formData.hero.stats];
                          newStats[index] = { ...stat, label: e.target.value };
                          setFormData({
                            ...formData,
                            hero: { ...formData.hero, stats: newStats },
                          });
                        }}
                        className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeTab === "about" && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">About Section</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.about.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      about: { ...formData.about, title: e.target.value },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Subtitle</label>
                <input
                  type="text"
                  value={formData.about.subtitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      about: { ...formData.about, subtitle: e.target.value },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">Intro</label>
              <textarea
                value={formData.about.intro}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    about: { ...formData.about, intro: e.target.value },
                  })
                }
                rows={4}
                className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">
                Approach Description
              </label>
              <textarea
                value={formData.about.approach.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    about: {
                      ...formData.about,
                      approach: { ...formData.about.approach, description: e.target.value },
                    },
                  })
                }
                rows={4}
                className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent resize-none"
              />
            </div>

            {/* Values */}
            <div>
              <h4 className="text-md font-bold text-white mb-4">Values</h4>
              <div className="space-y-4">
                {formData.about.values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-bg border border-white/10 rounded-lg p-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <label className="block text-xs text-white/50 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={value.title}
                          onChange={(e) => {
                            const newValues = [...formData.about.values];
                            newValues[index] = { ...value, title: e.target.value };
                            setFormData({
                              ...formData,
                              about: { ...formData.about, values: newValues },
                            });
                          }}
                          className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/50 mb-1">
                          Icon
                        </label>
                        <input
                          type="text"
                          value={value.icon}
                          onChange={(e) => {
                            const newValues = [...formData.about.values];
                            newValues[index] = { ...value, icon: e.target.value };
                            setFormData({
                              ...formData,
                              about: { ...formData.about, values: newValues },
                            });
                          }}
                          className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1">
                        Description
                      </label>
                      <input
                        type="text"
                        value={value.description}
                        onChange={(e) => {
                          const newValues = [...formData.about.values];
                          newValues[index] = { ...value, description: e.target.value };
                          setFormData({
                            ...formData,
                            about: { ...formData.about, values: newValues },
                          });
                        }}
                        className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Services Section */}
        {activeTab === "services" && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Services</h3>
            <div className="space-y-4">
              {formData.services.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-bg border border-white/10 rounded-lg p-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-xs text-white/50 mb-1">Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => {
                          const newServices = [...formData.services];
                          newServices[index] = { ...service, title: e.target.value };
                          setFormData({ ...formData, services: newServices });
                        }}
                        className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1">Icon</label>
                      <input
                        type="text"
                        value={service.icon}
                        onChange={(e) => {
                          const newServices = [...formData.services];
                          newServices[index] = { ...service, icon: e.target.value };
                          setFormData({ ...formData, services: newServices });
                        }}
                        className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block text-xs text-white/50 mb-1">
                      Description
                    </label>
                    <textarea
                      value={service.description}
                      onChange={(e) => {
                        const newServices = [...formData.services];
                        newServices[index] = { ...service, description: e.target.value };
                        setFormData({ ...formData, services: newServices });
                      }}
                      rows={2}
                      className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1">
                      Deliverables (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={service.deliverables.join(", ")}
                      onChange={(e) => {
                        const newServices = [...formData.services];
                        newServices[index] = {
                          ...service,
                          deliverables: e.target.value.split(",").map((d) => d.trim()),
                        };
                        setFormData({ ...formData, services: newServices });
                      }}
                      className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Assignments Section */}
        {activeTab === "assignments" && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Assignments</h3>
            <div className="space-y-4">
              {formData.assignments.map((assignment, index) => (
                <div
                  key={assignment.id}
                  className="bg-bg border border-white/10 rounded-lg p-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-xs text-white/50 mb-1">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={assignment.organization}
                        onChange={(e) => {
                          const newAssignments = [...formData.assignments];
                          newAssignments[index] = {
                            ...assignment,
                            organization: e.target.value,
                          };
                          setFormData({ ...formData, assignments: newAssignments });
                        }}
                        className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1">Role</label>
                      <input
                        type="text"
                        value={assignment.role}
                        onChange={(e) => {
                          const newAssignments = [...formData.assignments];
                          newAssignments[index] = { ...assignment, role: e.target.value };
                          setFormData({ ...formData, assignments: newAssignments });
                        }}
                        className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1">
                      Description
                    </label>
                    <textarea
                      value={assignment.description}
                      onChange={(e) => {
                        const newAssignments = [...formData.assignments];
                        newAssignments[index] = {
                          ...assignment,
                          description: e.target.value,
                        };
                        setFormData({ ...formData, assignments: newAssignments });
                      }}
                      rows={2}
                      className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeTab === "experience" && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Experience</h3>
            <div className="space-y-4">
              {formData.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="bg-bg border border-white/10 rounded-lg p-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-xs text-white/50 mb-1">Title</label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => {
                          const newExp = [...formData.experience];
                          newExp[index] = { ...exp, title: e.target.value };
                          setFormData({ ...formData, experience: newExp });
                        }}
                        className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={exp.organization}
                        onChange={(e) => {
                          const newExp = [...formData.experience];
                          newExp[index] = { ...exp, organization: e.target.value };
                          setFormData({ ...formData, experience: newExp });
                        }}
                        className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-xs text-white/50 mb-1">Period</label>
                      <input
                        type="text"
                        value={exp.period || ""}
                        onChange={(e) => {
                          const newExp = [...formData.experience];
                          newExp[index] = { ...exp, period: e.target.value };
                          setFormData({ ...formData, experience: newExp });
                        }}
                        className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1">Type</label>
                      <select
                        value={exp.type}
                        onChange={(e) => {
                          const newExp = [...formData.experience];
                          newExp[index] = {
                            ...exp,
                            type: e.target.value as "current" | "venture" | "foundation",
                          };
                          setFormData({ ...formData, experience: newExp });
                        }}
                        className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent"
                      >
                        <option value="current">Current</option>
                        <option value="venture">Venture</option>
                        <option value="foundation">Foundation</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1">
                      Description
                    </label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => {
                        const newExp = [...formData.experience];
                        newExp[index] = { ...exp, description: e.target.value };
                        setFormData({ ...formData, experience: newExp });
                      }}
                      rows={2}
                      className="w-full bg-card border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === "contact" && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Contact Info</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.contact.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, name: e.target.value },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.contact.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, title: e.target.value },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.contact.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, email: e.target.value },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.contact.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, phone: e.target.value },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Location</label>
                <input
                  type="text"
                  value={formData.contact.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, location: e.target.value },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">LinkedIn</label>
                <input
                  type="url"
                  value={formData.contact.linkedin || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, linkedin: e.target.value },
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="text-md font-bold text-white mb-4">Clients</h4>
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Client list (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.clients.join(", ")}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      clients: e.target.value.split(",").map((c) => c.trim()),
                    })
                  }
                  className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Save bar */}
      <div className="flex items-center justify-between p-6 border-t border-white/10 bg-bg/50">
        {message && (
          <div
            className={`text-sm ${
              message.type === "success" ? "text-accent" : "text-red-400"
            }`}
          >
            {message.text}
          </div>
        )}
        {!message && <div />}

        <div className="flex gap-3">
          <Button
            href={`/${lang}/${persona}`}
            variant="secondary"
            target="_blank"
          >
            Preview
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Opslaan..." : "Opslaan"}
          </Button>
        </div>
      </div>
    </div>
  );
}
