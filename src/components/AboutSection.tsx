import { memo } from "react";

const AboutSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Professional Summary */}
      <div className="group relative mb-10">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-stone-300 via-stone-400 to-stone-300 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
        <div className="relative bg-white/60 dark:bg-neutral-900/80 backdrop-blur-sm rounded-xl border border-stone-200/50 dark:border-neutral-800/50 p-6 sm:p-8 transition-all duration-300 group-hover:border-stone-300 dark:group-hover:border-neutral-700 group-hover:shadow-xl">
          <h3 className="text-lg sm:text-xl font-semibold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600" />
            Professional Summary
          </h3>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
            Software engineer with experience designing and delivering
            cloud-native platforms across industrial, financial, and real-estate
            environments. Strong background in platform architecture,
            microservices, infrastructure as code, backend development, and
            cross-functional stakeholder management. Currently owning a
            multilingual internal platform for a multinational infrastructure
            project, translating business needs from Chinese leadership and
            Chilean department managers into scalable systems, workflows, and
            reliable operations.
          </p>
        </div>
      </div>

      {/* Grid: Education + Certifications + Architecture */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {/* Education */}
        <div className="group relative">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-300 to-indigo-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
          <div className="relative bg-white/60 dark:bg-neutral-900/80 backdrop-blur-sm rounded-xl border border-stone-200/50 dark:border-neutral-800/50 p-6 transition-all duration-300 group-hover:border-stone-300 dark:group-hover:border-neutral-700 group-hover:shadow-xl h-full">
            <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600" />
              Education
            </h3>
            <div>
              <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
                Bachelor's Degree in Software Engineering
              </p>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                Universidad Tecnológica de Chile INACAP
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="group relative">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
          <div className="relative bg-white/60 dark:bg-neutral-900/80 backdrop-blur-sm rounded-xl border border-stone-200/50 dark:border-neutral-800/50 p-6 transition-all duration-300 group-hover:border-stone-300 dark:group-hover:border-neutral-700 group-hover:shadow-xl h-full">
            <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-orange-600" />
              Certifications & Development
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-600" />
                Preparing for Google Cloud Professional Cloud Architect certification
              </li>
              <li className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-600" />
                Continuing to deepen cloud architecture, reliability, and system design skills
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Architecture & Practices */}
      <div className="group relative mb-10">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-purple-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
        <div className="relative bg-white/60 dark:bg-neutral-900/80 backdrop-blur-sm rounded-xl border border-stone-200/50 dark:border-neutral-800/50 p-6 sm:p-8 transition-all duration-300 group-hover:border-stone-300 dark:group-hover:border-neutral-700 group-hover:shadow-xl">
          <h3 className="text-lg sm:text-xl font-semibold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-violet-400 to-purple-600" />
            Architecture & Practices
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Architectural Design (Component, Deployment, Data Flow)",
              "Event-Driven Architecture (EDA, Pub/Sub, Async Processing)",
              "Resilience & Scalability (Retry, Backoff, Idempotency, Circuit Breaker)",
              "Security & Access Control (JWT, RBAC, Secret Management)",
              "Infrastructure as Code (Terraform, Automated CI/CD, Docker)",
              "Microservices & Service-Based Architecture",
            ].map((practice, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
              >
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-400 to-purple-600" />
                {practice}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Links */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:matiasscontact@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-neutral-900/80 border border-stone-200/50 dark:border-neutral-800/50 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:border-stone-300 dark:hover:border-neutral-700 hover:shadow-lg transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          matiasscontact@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/mat%C3%ADas-sep%C3%BAlveda-1914152a7/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-neutral-900/80 border border-stone-200/50 dark:border-neutral-800/50 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:border-stone-300 dark:hover:border-neutral-700 hover:shadow-lg transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com/malygod"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-neutral-900/80 border border-stone-200/50 dark:border-neutral-800/50 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:border-stone-300 dark:hover:border-neutral-700 hover:shadow-lg transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default memo(AboutSection);
