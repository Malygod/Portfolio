import { memo } from "react";

interface ProfileLink {
  label: string;
  href: string;
  external?: boolean;
  download?: string;
}

const practices = [
  "Distributed services and event-driven architecture",
  "Asynchronous processing, idempotency, retry, and backoff",
  "JWT RS256, RBAC, IAM, and service-to-service authentication",
  "Infrastructure as Code with Terraform and automated CI/CD",
  "ADRs, system design, and component, deployment, and data-flow diagrams",
  "BFF and API aggregation with production observability",
  "Applied AI with Vertex AI, Gemini, Qwen, RAG, and provider fallbacks",
];

const links: ProfileLink[] = [
  { label: "Email", href: "mailto:matiasscontact@gmail.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matias-sepulveda-illesca/",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/malygod", external: true },
  {
    label: "Résumé",
    href: "/resume.pdf",
    download: "Resume_Matias_Sepulveda.pdf",
  },
];

const AboutSection = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <div className="border-b border-stone-300 dark:border-neutral-700">
        <section className="grid gap-6 border-t border-stone-300 py-10 dark:border-neutral-700 sm:grid-cols-[13rem_1fr] sm:gap-10 sm:py-12">
          <div>
            <p className="text-xs tabular-nums tracking-[0.2em] text-stone-400">01</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600" />
              <h3 className="text-xs font-medium uppercase leading-5 tracking-[0.2em] text-stone-500 dark:text-stone-400">
                Professional focus
              </h3>
            </div>
          </div>

          <div>
            <p className="max-w-3xl text-pretty text-xl leading-9 tracking-tight text-stone-800 dark:text-stone-200 sm:text-2xl sm:leading-10">
              I’m a software engineer focused on platform engineering and
              distributed systems, taking cloud-native products from
              architecture and infrastructure through implementation,
              deployment, and production operation.
            </p>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-stone-600 dark:text-stone-400 sm:text-base sm:leading-8">
              My recent work spans Go, TypeScript, GCP, Terraform, Kubernetes,
              event-driven systems, security, and applied AI—usually in
              environments where technical decisions need to be pragmatic,
              explainable, and owned end to end.
            </p>
          </div>
        </section>

        <div className="grid border-t border-stone-300 dark:border-neutral-700 sm:grid-cols-2">
          <section className="py-9 sm:pr-10 sm:py-10">
            <p className="text-xs tabular-nums tracking-[0.2em] text-stone-400">02</p>
            <h3 className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
              Education
            </h3>
            <p className="mt-6 text-lg font-medium text-stone-800 dark:text-stone-200">
              Bachelor’s Degree in Software Engineering
            </p>
            <p className="mt-2 text-sm leading-7 text-stone-500 dark:text-stone-400">
              Universidad Tecnológica de Chile INACAP
            </p>
          </section>

          <section className="border-t border-stone-300 py-9 dark:border-neutral-700 sm:border-l sm:border-t-0 sm:py-10 sm:pl-10">
            <p className="text-xs tabular-nums tracking-[0.2em] text-stone-400">03</p>
            <h3 className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
              Languages &amp; mobility
            </h3>
            <p className="mt-6 text-lg font-medium text-stone-800 dark:text-stone-200">
              Spanish — Native · English — Advanced
            </p>
            <p className="mt-2 text-sm leading-7 text-stone-500 dark:text-stone-400">
              Based in Chile and open to relocation to the United States,
              Canada, Ireland, and Switzerland.
            </p>
          </section>
        </div>

        <section className="grid gap-7 border-t border-stone-300 py-10 dark:border-neutral-700 sm:grid-cols-[13rem_1fr] sm:gap-10 sm:py-12">
          <div>
            <p className="text-xs tabular-nums tracking-[0.2em] text-stone-400">04</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-purple-600" />
              <h3 className="text-xs font-medium uppercase leading-5 tracking-[0.2em] text-stone-500 dark:text-stone-400">
                Architecture &amp; practices
              </h3>
            </div>
          </div>

          <ol className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {practices.map((practice, index) => (
              <li
                key={practice}
                className="grid grid-cols-[1.75rem_1fr] gap-3 text-sm leading-7 text-stone-600 dark:text-stone-400"
              >
                <span className="pt-0.5 font-mono text-xs text-stone-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{practice}</span>
              </li>
            ))}
          </ol>
        </section>

        <nav
          aria-label="Contact and profile links"
          className="grid gap-6 border-t border-stone-300 py-9 dark:border-neutral-700 sm:grid-cols-[13rem_1fr] sm:items-center sm:gap-10 sm:py-10"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            Continue the conversation
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                download={link.download}
                className="group inline-flex items-center gap-2 border-b border-stone-400 pb-1 text-sm text-stone-700 transition-colors hover:border-stone-800 hover:text-stone-950 dark:border-stone-600 dark:text-stone-300 dark:hover:border-stone-200 dark:hover:text-white"
              >
                {link.label}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  {link.external ? "↗" : "→"}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default memo(AboutSection);
