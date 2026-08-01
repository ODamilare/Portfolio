import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-28">
      <SectionHeader path="~/portfolio/about.tsx" title="About" />
      <div className="grid md:grid-cols-5 gap-10 md:gap-16">
        <Reveal className="md:col-span-3">
          {site.bio.map((paragraph, i) => (
            <p key={i} className="text-slate-300 text-[15px] md:text-base leading-relaxed mt-4 first:mt-0">
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal delay={100} className="md:col-span-2">
          <div className="rounded-lg border border-border bg-surface p-5 space-y-4">
            {site.facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-0.5">
                <span className="font-mono text-[11px] text-muted">{f.label}</span>
                <span className="text-sm text-slate-200">{f.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
