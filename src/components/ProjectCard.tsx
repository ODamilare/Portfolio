import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import type { Project, ProjectStatus } from "@/data/projects";

function statusColor(status: ProjectStatus) {
  switch (status) {
    case "PRODUCTION":
      return { dot: "bg-emerald-400", text: "text-emerald-400", ring: "ring-emerald-400/30" };
    case "BETA":
      return { dot: "bg-blue-400", text: "text-blue-400", ring: "ring-blue-400/30" };
    case "IN PROGRESS":
      return { dot: "bg-amber-400", text: "text-amber-400", ring: "ring-amber-400/30" };
    default:
      return { dot: "bg-slate-500", text: "text-slate-400", ring: "ring-slate-500/30" };
  }
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const c = statusColor(project.status);
  return (
    <Reveal delay={(index % 3) * 90}>
      <div className="group h-full rounded-lg border border-border bg-surface p-5 md:p-6 flex flex-col hover:border-border-strong hover:-translate-y-0.5 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <span className="font-mono text-[11px] text-faint">{project.id}</span>
          <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] px-2 py-0.5 rounded-full ring-1 ${c.ring} ${c.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
            {project.status}
          </span>
        </div>

        <h3 className="text-slate-100 font-medium text-[17px] mb-2">{project.name}</h3>
        <p className="text-slate-400 text-[13.5px] leading-relaxed flex-1">{project.summary}</p>

        <div className="flex flex-wrap gap-1.5 mt-5 mb-5">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-[10.5px] text-slate-400 bg-white/[0.03] border border-border-strong px-2 py-0.5 rounded">
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <a href={project.live} className="inline-flex items-center gap-1 text-[13px] text-[#8fb8ff] hover:text-accent transition-colors">
            Live <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a href={project.repo} className="inline-flex items-center gap-1 text-[13px] text-slate-400 hover:text-slate-200 transition-colors">
            Source <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}
