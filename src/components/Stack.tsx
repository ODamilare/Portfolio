import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SkillsChart from "./SkillsChart";
import { stackGroups } from "@/data/stack";

export default function Stack() {
  return (
    <section id="stack" className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-28">
      <SectionHeader path="~/portfolio/stack.json" title="Stack" note="grouped by role" />

      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        {stackGroups.map((group, i) => (
          <Reveal key={group.key} delay={i * 80}>
            <div className="h-full rounded-lg border border-border bg-surface p-5 hover:border-border-strong transition-colors">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-slate-100 font-medium text-sm">{group.label}</h3>
                <span className="font-mono text-[10px] text-faint">{group.path}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[12px] text-slate-300 bg-white/[0.04] border border-border-strong px-2.5 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="rounded-lg border border-border bg-surface p-5 md:p-6">
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-slate-100 font-medium text-sm">Confidence by area</h3>
            <span className="font-mono text-[10px] text-faint">self-reported</span>
          </div>
          <SkillsChart />
        </div>
      </Reveal>
    </section>
  );
}
