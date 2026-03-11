"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { projects, type Project } from "@/lib/projects";

export default function ProjectsContent() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string[]>([]);
  const [sort, setSort] = useState<"recency" | "alpha">("recency");

  const allSkills = useMemo(() => {
    const s = new Set<string>();
    for (const p of projects) p.skills.forEach((k) => s.add(k));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let items = projects.filter((p) => {
      const inText =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      const hasSkills =
        active.length === 0 || active.every((k) => p.skills.includes(k));
      return inText && hasSkills;
    });
    if (sort === "alpha")
      items = items.sort((a, b) => a.title.localeCompare(b.title));
    // "recency" fallback: keep original order (assumed latest first if you later add a date field)
    return items;
  }, [query, active, sort]);

  function toggleSkill(k: string) {
    setActive((cur) =>
      cur.includes(k) ? cur.filter((x) => x !== k) : [...cur, k]
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-slate-950 to-slate-900 text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Projects
          </h1>
          <p className="mt-4 text-lg text-slate-300/90 max-w-3xl">
            A cross-section of automation, AI, and data projects. Use filters to
            explore by stack or capability.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_auto] items-center">
            <label className="relative block">
              <span className="sr-only">Search projects</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects (e.g., Snowflake, ETL, Power BI)"
                className="w-full rounded-md bg-slate-900/60 border border-white/10 px-10 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </label>
            <div className="flex items-center gap-2 justify-self-start md:justify-self-end">
              <button
                onClick={() => setActive([])}
                className="px-3 py-2 rounded-md border border-white/10 hover:bg-white/5 text-sm"
              >
                Clear filters
              </button>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as "recency" | "alpha")}
                className="px-3 py-2 rounded-md bg-slate-900/60 border border-white/10 text-sm"
              >
                <option value="recency">Sort: Recency</option>
                <option value="alpha">Sort: A–Z</option>
              </select>
            </div>
          </div>

          {/* Skill filters */}
          <div className="mt-4 flex flex-wrap gap-2">
            {allSkills.map((k) => (
              <button
                key={k}
                onClick={() => toggleSkill(k)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
                  active.includes(k)
                    ? "bg-emerald-400 text-slate-900 border-emerald-300"
                    : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10"
                }`}
                aria-pressed={active.includes(k)}
              >
                {k}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-400">
              Showing{" "}
              <span className="text-slate-200 font-semibold">
                {filtered.length}
              </span>{" "}
              of {projects.length}
            </p>
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-emerald-400 text-slate-900 font-semibold hover:bg-emerald-300"
            >
              Start a project
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition shadow-xl overflow-hidden"
              >
                <ProjectVisual project={p} />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300/90">
                    {p.description}
                  </p>
                  {p.impact && (
                    <p className="mt-3 text-sm text-emerald-200/80">
                      <span className="font-semibold text-emerald-300">
                        Impact:
                      </span>{" "}
                      {p.impact}
                    </p>
                  )}
                  {p.focusAreas.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="text-xs px-3 py-1 rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-400/30"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="text-sm text-emerald-300 hover:text-emerald-200"
                    >
                      Discuss this →
                    </a>
                    <a
                      href={p.link}
                      className="text-xs text-slate-400 hover:text-slate-200"
                    >
                      Permalink
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-emerald-400 text-slate-900 font-semibold hover:bg-emerald-300"
            >
              Book a consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const hasImg = Boolean(project.image);
  const bg = project.backgroundColor;
  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-slate-900/50">
      {hasImg ? (
        <Image
          src={project.image as string}
          alt={`${project.title} graphic`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain p-6"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              bg ??
              "linear-gradient(135deg, rgba(16,185,129,0.4), rgba(14,165,233,0.4))",
          }}
          aria-hidden
        />
      )}
    </div>
  );
}
