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
    role: "Senior Software Engineer",
    company: "China First Highway Engineering Co. Ltd. (CFHEC)",
    dates: "Sep 2025 – Present",
    location: "Chile",
    type: "On-site",
    accent: "from-emerald-400 to-teal-600",
    highlights: [
      "Led the architectural design of a cloud-native platform based on microservices and event-driven patterns on GCP, supporting multiple business domains and eliminating critical manual workflows.",
      "Architected a decoupled, event-based workflow engine for multi-step approval pipelines, reducing turnaround time from days to hours.",
      "Designed and implemented a centralized storage service and internal filesystem with GCS integration and quota enforcement to ensure data integrity and consistency.",
      "Implemented JWT/RBAC, gRPC, REST, and Webhooks integrations under corporate security standards and CI/CD pipelines for production environments.",
      "Built distributed mass communication systems with asynchronous processing, engagement tracking, and secure document streaming.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Gatblac (Outsourced to Nuamx Holding)",
    dates: "Jun 2024 – Sep 2025",
    location: "Chile",
    type: "Remote",
    accent: "from-blue-400 to-indigo-600",
    highlights: [
      "Participated in the development of a high-availability stock trading platform, supporting cross-border transactions and ensuring consistency, security, and resilience in a distributed environment.",
      "Collaborated on the integration of highly transactional services between companies in Chile, Peru, and Colombia under strict security and latency standards.",
      "Supported delivery in a mission-critical environment with close coordination across product stakeholders and engineering teams.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Valora Labs",
    dates: "Mar 2023 – Jun 2024",
    location: "Chile",
    type: "Remote",
    accent: "from-violet-400 to-purple-600",
    highlights: [
      "Contributed to the creation and migration of web services for industrial clients, improving scalability, maintainability, and deployment reliability.",
      "Worked with QA, DBA, and DevOps teams to ensure code quality, production readiness, and smooth release execution.",
      "Participated in agile delivery cycles across multiple client-facing projects.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Atalia",
    dates: "Sep 2021 – Mar 2023",
    location: "Chile",
    type: "On-site",
    accent: "from-rose-400 to-red-600",
    highlights: [
      "Designed and developed a real estate platform that digitalized core operational processes for employees and clients.",
      "Led the process from requirements analysis and prototyping through implementation and deployment.",
      "Built user-facing features and internal workflows with a focus on usability and delivery speed.",
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
