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
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <div className="relative">
        <div className="absolute bottom-0 left-1.5 top-0 w-px bg-stone-300 dark:bg-neutral-700 sm:left-3" />

        <div className="space-y-14 sm:space-y-20">
          {experiences.map((exp, index) => (
            <article key={index} className="relative pl-8 sm:pl-12">
              <div
                className={`absolute left-0 top-2 h-3 w-3 rounded-full bg-gradient-to-br ${exp.accent} ring-4 ring-stone-100 dark:ring-neutral-950 sm:left-1.5`}
              />

              <div className="border-t border-stone-300 pt-5 dark:border-neutral-700 sm:pt-7">
                <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                      {String(index + 1).padStart(2, "0")} · {exp.company}
                    </p>
                    <h3 className="mt-3 text-2xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-3xl">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-xs uppercase leading-6 tracking-[0.14em] text-stone-500 dark:text-stone-400 sm:text-right">
                    <p>{exp.dates}</p>
                    <p>{exp.type} · {exp.location}</p>
                  </div>
                </div>

                <ul className="mt-7 grid gap-x-10 gap-y-4 lg:grid-cols-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="relative pl-5 text-sm leading-7 text-stone-600 dark:text-stone-400"
                    >
                      <span className="absolute left-0 top-3 h-px w-2.5 bg-stone-400 dark:bg-stone-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ExperienceTimeline);
