import { memo } from "react";

interface Skill {
  name: string;
  icon: string;
  darkIcon?: string;
}

interface SkillCategory {
  label: string;
  accent: string;
  skills: Skill[];
}

const svgl = (name: string) => `https://svgl.app/library/${name}`;
const simpleIcon = (name: string) => `https://cdn.simpleicons.org/${name}`;

const icons = {
  astro: [svgl("astro-icon-light.svg"), svgl("astro-icon-dark.svg")],
  aws: [svgl("aws_light.svg"), svgl("aws_dark.svg")],
  docker: svgl("docker.svg"),
  express: [svgl("expressjs.svg"), svgl("expressjs_dark.svg")],
  gemini: svgl("gemini.svg"),
  githubActions: simpleIcon("githubactions"),
  go: [svgl("golang.svg"), svgl("golang_dark.svg")],
  googleCloud: svgl("google-cloud.svg"),
  grpc: "https://grpc.io/img/logos/grpc-icon-color.png",
  javascript: svgl("javascript.svg"),
  kubernetes: svgl("kubernetes.svg"),
  mysql: [svgl("mysql-icon-light.svg"), svgl("mysql-icon-dark.svg")],
  nextjs: [simpleIcon("nextdotjs/18181B"), simpleIcon("nextdotjs/FFFFFF")],
  nodejs: svgl("nodejs.svg"),
  openai: [svgl("openai.svg"), svgl("openai_dark.svg")],
  openTelemetry: simpleIcon("opentelemetry/425CC7"),
  postgresql: svgl("postgresql.svg"),
  python: svgl("python.svg"),
  qwen: [svgl("qwen_light.svg"), svgl("qwen_dark.svg")],
  react: [svgl("react_light.svg"), svgl("react_dark.svg")],
  redis: svgl("redis.svg"),
  retrieval: simpleIcon("semanticweb"),
  tailwind: svgl("tailwindcss.svg"),
  terraform: svgl("terraform.svg"),
  typescript: svgl("typescript.svg"),
};

const categories: SkillCategory[] = [
  {
    label: "Languages & Backend",
    accent: "from-emerald-400 to-teal-500",
    skills: [
      { name: "Go", icon: icons.go[0], darkIcon: icons.go[1] },
      { name: "Goa", icon: icons.go[0], darkIcon: icons.go[1] },
      { name: "TypeScript", icon: icons.typescript },
      { name: "Python", icon: icons.python },
      { name: "Node.js", icon: icons.nodejs },
      { name: "Express", icon: icons.express[0], darkIcon: icons.express[1] },
      { name: "JavaScript", icon: icons.javascript },
    ],
  },
  {
    label: "Cloud & Infra",
    accent: "from-violet-400 to-purple-500",
    skills: [
      { name: "GCP", icon: icons.googleCloud },
      { name: "Docker", icon: icons.docker },
      { name: "Terraform", icon: icons.terraform },
      { name: "GitHub Actions", icon: icons.githubActions },
      { name: "Cloud Run", icon: icons.googleCloud },
      { name: "Cloud Tasks", icon: icons.googleCloud },
    ],
  },
  {
    label: "Data & Messaging",
    accent: "from-amber-400 to-orange-500",
    skills: [
      { name: "PostgreSQL", icon: icons.postgresql },
      { name: "MySQL", icon: icons.mysql[0], darkIcon: icons.mysql[1] },
      { name: "Redis", icon: icons.redis },
      { name: "gRPC", icon: icons.grpc },
      { name: "Pub/Sub", icon: icons.googleCloud },
    ],
  },
  {
    label: "Frontend",
    accent: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React", icon: icons.react[0], darkIcon: icons.react[1] },
      { name: "Next.js", icon: icons.nextjs[0], darkIcon: icons.nextjs[1] },
      { name: "Tailwind", icon: icons.tailwind },
      { name: "Astro", icon: icons.astro[0], darkIcon: icons.astro[1] },
      { name: "React Native", icon: icons.react[0], darkIcon: icons.react[1] },
    ],
  },
  {
    label: "Applied AI",
    accent: "from-rose-400 to-red-500",
    skills: [
      { name: "Vertex AI", icon: icons.googleCloud },
      { name: "Gemini", icon: icons.gemini },
      { name: "Qwen", icon: icons.qwen[0], darkIcon: icons.qwen[1] },
      { name: "RAG", icon: icons.retrieval },
      { name: "LLM APIs", icon: icons.openai[0], darkIcon: icons.openai[1] },
    ],
  },
  {
    label: "Familiar / Learning",
    accent: "from-stone-400 to-stone-600",
    skills: [
      { name: "OpenTelemetry", icon: icons.openTelemetry },
      { name: "Kubernetes", icon: icons.kubernetes },
      { name: "AWS", icon: icons.aws[0], darkIcon: icons.aws[1] },
    ],
  },
];

const Skills = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <div className="border-b border-stone-300 dark:border-neutral-700">
        {categories.map((category, categoryIndex) => (
          <section
            key={category.label}
            aria-label={category.label}
            className="grid gap-6 border-t border-stone-300 py-8 dark:border-neutral-700 sm:grid-cols-[13rem_1fr] sm:gap-10 sm:py-10"
          >
            <div>
              <p className="text-xs tabular-nums tracking-[0.2em] text-stone-400">
                {String(categoryIndex + 1).padStart(2, "0")}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${category.accent}`} />
                <h3 className="text-xs font-medium uppercase leading-5 tracking-[0.2em] text-stone-500 dark:text-stone-400">
                  {category.label}
                </h3>
              </div>
            </div>

            <ul className="flex flex-wrap content-start gap-2.5">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-stone-300 bg-white/45 py-2 pl-2.5 pr-4 transition duration-300 hover:-translate-y-0.5 hover:border-stone-400 hover:bg-white dark:border-neutral-700 dark:bg-neutral-900/50 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
                >
                  <span className="flex h-7 w-8 shrink-0 items-center justify-center">
                    <img
                      src={skill.icon}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className={`max-h-7 max-w-8 object-contain ${skill.darkIcon ? "dark:hidden" : ""}`}
                    />
                    {skill.darkIcon && (
                      <img
                        src={skill.darkIcon}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        className="hidden max-h-7 max-w-8 object-contain dark:block"
                      />
                    )}
                  </span>
                  <span className="whitespace-nowrap text-sm font-medium leading-5 text-stone-700 dark:text-stone-300">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default memo(Skills);
