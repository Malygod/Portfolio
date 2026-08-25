import { memo } from "react";

interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  location: string;
  type: string;
  highlights: string[];
  accent: string;
}

const experiences: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "China First Highway Engineering Co. Ltd., Chile Branch (CFHEC)",
    dates: "Sep 2025 – Present",
    location: "Chile",
    type: "On-site",
    accent: "from-emerald-400 to-teal-600",
    highlights: [
      "First engineering hire and sole technical owner of a cloud-native platform with 10 independently deployed Go services and a Next.js frontend supporting a 700-person operation.",
      "Standardized the production platform through 11 Terraform modules spanning Cloud Run, networking, IAM, Cloud SQL, Pub/Sub, Cloud Storage, Secret Manager, Cloud Build, and load balancing.",
      "Redesigned authentication around RSA-signed JWTs and server-side permission validation, reducing token payloads from roughly 2–4 KB to 200–300 bytes.",
      "Built event-driven audit and approval workflows with Pub/Sub and Cloud Tasks, plus centralized storage, inventory, HR, recruitment, and document capabilities.",
      "Integrated Vertex AI, Google Search grounding, and Qwen into procurement and HR workflows for quotation comparison, bilingual reporting, and role generation.",
      "Delivered a recruitment platform that has managed CV submissions from 1,500+ applicants while partnering directly with Chinese and Chilean leadership on technical roadmaps.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Gatblac (Fixed-Term Contract Supporting nuam)",
    dates: "Jun 2025 – Sep 2025",
    location: "Chile",
    type: "Remote",
    accent: "from-blue-400 to-indigo-600",
    highlights: [
      "Built high-reliability backend microservices and PostgreSQL data-access layers in Go, Goa v3, and GORM for cross-market securities-lending workflows.",
      "Supported regional financial-market infrastructure connecting the Santiago, Lima, and Colombia stock exchanges.",
      "Partnered with Product, QA, DevOps, and Architecture teams to deliver compliant multi-currency financial infrastructure.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Valora Labs (Valora Empresas Holding)",
    dates: "Mar 2024 – May 2025",
    location: "Chile",
    type: "Remote",
    accent: "from-violet-400 to-purple-600",
    highlights: [
      "Developed and modernized operational applications for industrial waste, internal training, surveys, and facility storage management.",
      "Designed QR-based authentication with temporary, route-scoped dynamic RBAC and maintained shared auth, audit-history, permissions, and role services.",
      "Owned features end to end across Node.js and Express APIs, React interfaces, PostgreSQL and MySQL schemas, production deployments, troubleshooting, and query optimization.",
    ],
  },
  {
    role: "IT Department Lead / Full Stack Developer",
    company: "Atalia",
    dates: "Aug 2021 – Mar 2023",
    location: "Chile",
    type: "On-site",
    accent: "from-rose-400 to-red-600",
    highlights: [
      "Led a small technical function, defined development processes, selected vendors and IT acquisitions, and oversaw database design and server configuration.",
      "Delivered a full-stack real-estate management platform in React and Node.js from requirements gathering and prototyping through production deployment.",
      "Built property-listing, client-lead-tracking, document-management, and workflow modules for internal teams and clients.",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-stone-300 via-stone-400 to-stone-300 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700" />

        <div className="space-y-12 sm:space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 sm:pl-20">
              {/* Timeline dot */}
              <div
                className={`absolute left-2.5 sm:left-6 top-1 w-4 h-4 rounded-full bg-gradient-to-br ${exp.accent} ring-4 ring-stone-100 dark:ring-neutral-950 shadow-lg`}
              />

              {/* Card */}
              <div className="group relative">
                {/* Glow effect on hover */}
                <div
                  className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${exp.accent} opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`}
                />

                <div className="relative bg-white/60 dark:bg-neutral-900/80 backdrop-blur-sm rounded-xl border border-stone-200/50 dark:border-neutral-800/50 p-5 sm:p-7 transition-all duration-300 group-hover:border-stone-300 dark:group-hover:border-neutral-700 group-hover:shadow-xl">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-stone-800 dark:text-stone-100">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base text-stone-500 dark:text-stone-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-200/80 dark:bg-neutral-800 text-stone-600 dark:text-stone-400">
                        {exp.dates}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-200/80 dark:bg-neutral-800 text-stone-600 dark:text-stone-400">
                        {exp.type} · {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
                      >
                        <span
                          className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.accent}`}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ExperienceTimeline);
