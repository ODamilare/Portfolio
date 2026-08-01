import Reveal from "./Reveal";

export default function SectionHeader({
  path,
  title,
  note,
}: {
  path: string;
  title: string;
  note?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-baseline justify-between gap-4 mb-8 md:mb-10 border-b border-border pb-4">
        <div>
          <div className="font-mono text-[11px] text-accent mb-1.5 tracking-wide">{path}</div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 tracking-tight">{title}</h2>
        </div>
        {note && <div className="hidden sm:block font-mono text-[11px] text-faint">{note}</div>}
      </div>
    </Reveal>
  );
}
