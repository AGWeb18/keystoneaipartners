"use client";
import { useMemo, useState } from "react";
import { projects } from "@/lib/projects";

// Keystone AI Partners — Original, attention-grabbing landing page
// Visual theme: "Translate Raw → Intelligence" using flowing data particles and before/after transformations
// Tech: TailwindCSS utility classes (no external deps). Drop into app/HomeContent.tsx in Next.js 14+

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-slate-950 to-slate-900 text-slate-100">
      <Header />
      <Hero />
      <FeaturedWork />
      <LogosMarquee />
      <PipelineSection />
      <BeforeAfter />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/90 text-white font-bold shadow ring-1 ring-white/20">
              K
            </span>
            <span className="font-semibold tracking-tight text-slate-100 group-hover:text-white">
              Keystone <span className="text-emerald-300">AI</span> Partners
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#work" className="hover:text-emerald-300">
              Our work
            </a>
            <a href="#pipeline" className="hover:text-emerald-300">
              How it works
            </a>
            <a href="#faq" className="hover:text-emerald-300">
              FAQ
            </a>
            <a href="projects" className="hover:text-emerald-300">
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-md bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400"
            >
              Book Consultation
            </a>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <nav className="px-4 py-3 space-y-2">
            <a
              href="#work"
              className="block px-3 py-2 rounded hover:bg-white/10"
            >
              Our work
            </a>
            <a
              href="#pipeline"
              className="block px-3 py-2 rounded hover:bg-white/10"
            >
              How it works
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 rounded hover:bg-white/10"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded bg-emerald-500 text-slate-900 text-center"
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* gradient orbs */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Translate <span className="text-emerald-300">Raw</span> into{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p className="mt-5 text-lg text-slate-300/90 max-w-2xl">
            Keystone AI Partners readies medium-size organizations for
            automation and AI. We turn messy logs, spreadsheets, and siloed
            systems into governed data, automated workflows, and executive-grade
            decisions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pipeline"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 shadow-lg shadow-emerald-900/30"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-slate-100 hover:bg-white/5"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
        <div className="relative">
          <DataCanvas />
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const featured = useMemo(
    () => projects.filter((project) => project.featured),
    [],
  );
  const display = featured.length > 0 ? featured : projects.slice(0, 4);

  return (
    <section
      id="work"
      className="py-16 sm:py-24 border-t border-white/10 bg-gradient-to-b from-slate-950/40 via-slate-950 to-slate-950/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.38em] text-emerald-300/80">
              Proven Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              AI, automation, and data projects that move the metrics people
              care about.
            </h2>
            <p className="text-base text-slate-300/90">
              From Data Warehousing to LLMs and governed data marketplaces,
              these engagements show how we combine strategy, engineering, and
              design to unlock measurable value. Every project pairs technical
              depth with business buy-in.
            </p>
            <ul className="space-y-3 text-sm text-slate-300/90">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>
                  <strong className="text-slate-100 font-semibold">
                    Data foundations:
                  </strong>{" "}
                  Modern pipelines, optimized ETL processes, and observability
                  so downstream AI and analytics stay trustworthy.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <span>
                  <strong className="text-slate-100 font-semibold">
                    Workflow automation:
                  </strong>{" "}
                  Power BI Reporting and custom apps that draw insights from
                  data and eliminate old processes.
                </span>{" "}
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-200" />

                <span>
                  <strong className="text-slate-100 font-semibold">
                    AI copilots &amp; assistants:
                  </strong>{" "}
                  LLM-powered experiences that keep humans in the loop while
                  compressing manual effort.
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 shadow-lg shadow-emerald-900/30"
              >
                View all projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-white/15 text-slate-100 hover:bg-white/5"
              >
                Start a conversation
              </a>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {display.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:border-emerald-300/60 hover:bg-emerald-400/10 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-300/90">
                      {project.focusAreas[0] ?? "Case Study"}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-100 group-hover:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-[0.65rem] rounded-full border border-white/15 px-2 py-1 text-slate-300/70 justify-center">
                    Case Study
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300/90">
                  {project.description}
                </p>
                {project.impact && (
                  <p className="mt-3 text-sm text-emerald-200/80">
                    <span className="font-semibold text-emerald-300">
                      Impact:
                    </span>{" "}
                    {project.impact}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="text-[0.65rem] tracking-wide px-3 py-1 rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-400/25"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-[0.65rem] text-slate-300/70">
                  {project.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-auto inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 pt-5"
                >
                  View project →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogosMarquee() {
  return (
    <section className="py-10 border-y border-white/10 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">
          Trusted by data-driven teams
        </p>
        <div className="relative">
          <div className="flex animate-[marquee_30s_linear_infinite] gap-16 opacity-70 hover:opacity-100">
            {[
              "Manufacturing",
              "Healthcare",
              "Finance",
              "Logistics",
              "Retail",
              "Public Sector",
            ].map((t, i) => (
              <span key={i} className="text-slate-300/90 whitespace-nowrap">
                {t}
              </span>
            ))}
            {[
              "Manufacturing",
              "Healthcare",
              "Finance",
              "Logistics",
              "Retail",
              "Public Sector",
            ].map((t, i) => (
              <span
                key={"dup" + i}
                className="text-slate-300/90 whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}

// Animated visual: particles (raw) flow through a simple DAG and emerge as a chart (intelligence)
function DataCanvas() {
  const particles = useMemo(
    () =>
      new Array(24).fill(0).map((_, i) => ({
        id: i,
        delay: (i % 12) * 0.4 + (((i * 9301 + 49297) % 233280) / 233280) * 0.2,
      })),
    [],
  );

  return (
    <div className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-2xl">
      <div className="absolute inset-0 rounded-2xl backdrop-blur-[2px]" />
      <svg viewBox="0 0 800 600" className="h-full w-full">
        {/* pipes */}
        <g stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none">
          <path d="M80,140 C180,140 220,220 320,220" />
          <path d="M80,300 C200,300 220,260 320,260" />
          <path d="M80,460 C220,460 240,300 320,300" />
          <rect
            x="330"
            y="200"
            width="140"
            height="120"
            rx="12"
            className="fill-white/5"
          />
          <path d="M470,260 C560,260 600,220 680,220" />
          <path d="M470,260 C560,260 600,300 680,300" />
          <path d="M470,260 C560,260 600,380 700,380" />
        </g>
        {/* processor */}
        <g>
          <text
            x="400"
            y="265"
            textAnchor="middle"
            className="fill-emerald-300 text-[14px]"
          >
            CLEAN • GOVERN • ENRICH
          </text>
        </g>
        {/* particles */}
        {particles.map((p) => (
          <circle
            key={p.id}
            cx="80"
            cy={140 + (p.id % 3) * 160}
            r="5"
            fill="url(#grad)"
          >
            <animate
              attributeName="cx"
              values="80; 320; 470; 700"
              dur="6s"
              repeatCount="indefinite"
              begin={`${p.delay}s`}
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
            <animate
              attributeName="cy"
              values={`${140 + (p.id % 3) * 160}; 220; 260; ${
                220 + (p.id % 3) * 60
              }`}
              dur="6s"
              repeatCount="indefinite"
              begin={`${p.delay}s`}
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </circle>
        ))}
        {/* chart */}
        <g transform="translate(560,180)">
          <rect
            x="0"
            y="0"
            width="160"
            height="120"
            rx="12"
            className="fill-white/10"
          />
          <polyline
            points="20,90 50,70 80,80 110,40 140,30"
            className="fill-none stroke-emerald-300"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <rect
            x="30"
            y="92"
            width="16"
            height="20"
            className="fill-emerald-500/60"
            rx="4"
          />
          <rect
            x="62"
            y="80"
            width="16"
            height="32"
            className="fill-emerald-400/70"
            rx="4"
          />
          <rect
            x="94"
            y="68"
            width="16"
            height="44"
            className="fill-cyan-400/70"
            rx="4"
          />
          <rect
            x="126"
            y="52"
            width="16"
            height="60"
            className="fill-cyan-300/70"
            rx="4"
          />
        </g>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(16,185,129,0.8)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0.8)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PipelineSection() {
  const steps = [
    {
      title: "Discover",
      subtitle: "Intake & prioritization",
      description:
        "We map business goals, data sources, and automation gaps. Deliverable: an executive-ready playbook showing impact vs. effort.",
    },
    {
      title: "Engineer",
      subtitle: "Foundations that scale",
      description:
        "Modern data pipelines, governed models, and automation rails that support data modernization and AI initiatives",
    },
    {
      title: "Launch",
      subtitle: "Modernization reporting & AI enablement",
      description:
        "Ship production-grade intelligence, scorecards, and insights with change management and enablement baked in.",
    },
  ];

  return (
    <section
      id="pipeline"
      className="py-20 relative overflow-hidden border-y border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_65%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.38em] text-emerald-300/80">
            Operating Model
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Translate raw exhaust into intelligent action
          </h2>
          <p className="mt-3 text-slate-300/90 max-w-2xl mx-auto">
            Our framework balances quick wins with durable foundations. Each
            phase compounds into the next so analytics, AI, and automation teams
            stay aligned.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
            >
              <div className="absolute -top-4 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-slate-900 font-semibold shadow-lg shadow-emerald-900/30">
                {step.title.slice(0, 1)}
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mt-4">
                {step.title}
              </h3>
              <p className="text-sm text-emerald-300">{step.subtitle}</p>
              <p className="mt-4 text-sm text-slate-300/90">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const states = [
    {
      before: [
        "Departmental spreadsheets",
        "Manual approvals",
        "Shadow IT automations",
        "Stale KPIs",
      ],
      after: [
        "Enterprise data lake + warehouse",
        "Automated workflows",
        "Centralized governance",
        "Live executive dashboards",
      ],
    },
    {
      before: [
        "Ad-hoc scripts",
        "Tribal knowledge",
        "Copy/paste reporting",
        "Firefighting culture",
      ],
      after: [
        "Reusable pipelines",
        "Documented playbooks",
        "Self-serve analytics",
        "Proactive operations",
      ],
    },
  ];
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.38em] text-emerald-300/80">
            Before / After
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            From reactive teams to intelligent operators
          </h2>
          <p className="mt-3 text-slate-300/90 max-w-3xl mx-auto">
            We meet clients where they are, then deliver the people, process,
            and platform shifts that stick.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {states.map((state, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-slate-400">
                    Before
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                    {state.before.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-emerald-300">
                    After
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-emerald-200/90">
                    {state.after.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "How fast will we see results?",
      a: "Most clients realize measurable time savings in the first 60–120 days, especially when starting with high‑friction workflows.",
    },
    {
      q: "Do we need a data warehouse to start?",
      a: "Not always. We often begin with a readiness assessment and a pilot automation, then right‑size a warehouse for scale and governance.",
    },
    {
      q: "Which tools/stack do you support?",
      a: "We are platform‑agnostic: Snowflake, Azure Synapse, BigQuery; Power BI/Tableau; iPaaS, APIs, Python.",
    },
    {
      q: "Can we start small and expand later?",
      a: "Absolutely. Many clients begin with Foundation or Growth and expand with add‑ons or the Scale plan as results compound.",
    },
  ];
  return (
    <section id="faq" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">FAQ</h2>
          <p className="mt-3 text-slate-300/90">
            Answers to common questions from mid‑market leaders.
          </p>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="group bg-white/5 rounded-lg border border-white/10 p-4"
            >
              <summary className="cursor-pointer font-medium text-slate-100 flex justify-between items-center select-none">
                {item.q}
                <span className="ml-2 text-slate-400 group-open:rotate-180 transition">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-300/90">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white/5 border-y border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Ready to unlock AI & automation?
        </h2>
        <p className="mt-3 text-slate-300/90">
          Book a free readiness consultation to identify your first high-impact
          automation opportunity. We respond within one business day.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 text-left bg-slate-900/40 border border-white/10 rounded-2xl p-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              Talk to a strategist
            </h3>
            <p className="mt-3 text-sm text-slate-300/90">
              Share your goals and we&apos;ll outline the data, automation, and
              AI roadmap that gets you there.
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-300/90">
            <p>
              <span className="font-semibold text-slate-100">Email:</span>{" "}
              <a
                href="mailto:hello@keystoneaipartners.com?subject=AI%20Readiness%20Consultation"
                className="text-emerald-300 hover:text-emerald-200"
              >
                hello@keystoneaipartners.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-slate-100">Hours:</span> 9am –
              5pm MT, Monday to Friday
            </p>
            <p>
              Prefer a live workshop? Request a custom session and we&apos;ll
              facilitate your leadership team through opportunity discovery.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:hello@keystoneaipartners.com?subject=Book%20a%20readiness%20consultation"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-400 text-slate-900 font-semibold hover:bg-emerald-300 shadow-lg shadow-emerald-900/30"
          >
            Email Keystone AI Partners
          </a>
          <a
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/15 text-slate-100 hover:bg-white/5"
          >
            Browse recent wins
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black/60 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-slate-900 font-bold">
                K
              </span>
              <span className="font-semibold tracking-tight text-slate-100">
                Keystone <span className="text-emerald-300">AI</span> Partners
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-400 max-w-sm">
              AI & automation readiness, data warehousing, and reporting for
              medium‑sized businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100">Services</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Data Warehouse & Governance</li>
              <li>Reporting & Forecasting</li>
              <li>AI & Automation Readiness</li>
              <li>Enterprise Advisory</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100">Get in touch</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#contact" className="hover:underline">
                  Book a Consultation
                </a>
              </li>
              <li>
                <a href="projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Keystone AI Partners. All rights
            reserved.
          </p>
          <p>Designed for clarity, trust, and action.</p>
        </div>
      </div>
    </footer>
  );
}
