import { memo } from "react";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  label: string;
  accent: string;
  skills: Skill[];
}

const svgl = (name: string) => `https://svgl.app/library/${name}`;
const simpleIcon = (name: string) => `https://cdn.simpleicons.org/${name}`;

const icons = {
  astro: svgl("astro-icon-dark.svg"),
  aws: svgl("aws_dark.svg"),
  docker: svgl("docker.svg"),
  express: svgl("expressjs_dark.svg"),
  gemini: svgl("gemini.svg"),
  githubActions: simpleIcon("githubactions"),
  go: svgl("golang_dark.svg"),
  googleCloud: svgl("google-cloud.svg"),
  grpc: "https://grpc.io/img/logos/grpc-icon-color.png",
  javascript: svgl("javascript.svg"),
  kubernetes: svgl("kubernetes.svg"),
  mysql: svgl("mysql-icon-dark.svg"),
  nextjs: svgl("nextjs_icon_dark.svg"),
  nodejs: svgl("nodejs.svg"),
  openai: svgl("openai_dark.svg"),
  openTelemetry: simpleIcon("opentelemetry"),
  postgresql: svgl("postgresql.svg"),
  python: svgl("python.svg"),
  qwen: svgl("qwen_dark.svg"),
  react: svgl("react_dark.svg"),
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
      { name: "Go", icon: icons.go },
      { name: "Goa", icon: icons.go },
      { name: "TypeScript", icon: icons.typescript },
      { name: "Python", icon: icons.python },
      { name: "Node.js", icon: icons.nodejs },
      { name: "Express", icon: icons.express },
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
      { name: "MySQL", icon: icons.mysql },
      { name: "Redis", icon: icons.redis },
      { name: "gRPC", icon: icons.grpc },
      { name: "Pub/Sub", icon: icons.googleCloud },
    ],
  },
  {
    label: "Frontend",
    accent: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React", icon: icons.react },
      { name: "Next.js", icon: icons.nextjs },
      { name: "Tailwind", icon: icons.tailwind },
      { name: "Astro", icon: icons.astro },
      { name: "React Native", icon: icons.react },
    ],
  },
  {
    label: "Applied AI",
    accent: "from-rose-400 to-red-500",
    skills: [
      { name: "Vertex AI", icon: icons.googleCloud },
      { name: "Gemini", icon: icons.gemini },
      { name: "Qwen", icon: icons.qwen },
      { name: "RAG", icon: icons.retrieval },
      { name: "LLM APIs", icon: icons.openai },
    ],
  },
  {
    label: "Familiar / Learning",
    accent: "from-stone-400 to-stone-600",
    skills: [
      { name: "OpenTelemetry", icon: icons.openTelemetry },
      { name: "Kubernetes", icon: icons.kubernetes },
      { name: "AWS", icon: icons.aws },
    ],
  },
];

const Skills = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <div className="space-y-12 sm:space-y-16">
        {categories.map((category) => (
          <section key={category.label} aria-label={category.label}>
            <div className="mb-6 flex items-center gap-3">
              <span className={`h-2 w-2 rounded-full bg-gradient-to-br ${category.accent}`} />
              <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-stone-400 dark:text-stone-500">
                {category.label}
              </h3>
              <div className="h-px flex-1 bg-stone-200 dark:bg-neutral-800" />
            </div>

            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 dark:border-neutral-800 dark:bg-neutral-800 sm:grid-cols-3 lg:grid-cols-4">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group flex min-h-24 items-center gap-4 bg-stone-50 px-4 py-5 transition-colors hover:bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-950 p-2.5 shadow-sm ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <img
                      src={skill.icon}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="min-w-0 text-sm font-medium leading-5 text-stone-700 dark:text-stone-300">
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
