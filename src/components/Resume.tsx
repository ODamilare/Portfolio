import { Check, Download } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { site } from "@/data/site";

export default function Resume() {
  return (
    <section id="resume" className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-28">
      <SectionHeader path="~/portfolio/resume.pdf" title="For recruiters" />
      <Reveal>
        <div className="rounded-lg border border-border bg-gradient-to-br from-surface to-[#12161F] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-slate-100 text-lg font-medium mb-2">One file, everything you need</h3>
            <p className="text-slate-400 text-[14.5px] leading-relaxed">
              A single up-to-date CV covering experience, stack, and shipped work — formatted for a
              fast skim and an ATS pass alike. No sign-up, no forms.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 font-mono text-[12px] text-muted">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-success" /> PDF, single page
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-success" /> Updated regularly
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-success" /> ATS-friendly
              </span>
            </div>
          </div>
          <a
            href={site.resumeUrl}
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-accent text-[#06101F] font-medium text-sm hover:bg-[#6a9fff] transition-colors shrink-0"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </Reveal>
    </section>
  );
}
