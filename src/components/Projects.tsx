import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-28">
      <SectionHeader path="~/portfolio/projects/index.tsx" title="Projects" note={`${projects.length} modules`} />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
