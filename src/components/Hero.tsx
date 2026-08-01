"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Circle } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function Hero() {
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((c) => !c), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="max-w-content mx-auto px-5 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
      {site.availableForWork && (
        <Reveal>
          <div className="flex items-center gap-2 mb-6 font-mono text-[12px] text-success">
            <Circle className="w-2 h-2 fill-success text-success animate-pulse" />
            available for opportunities
          </div>
        </Reveal>
      )}

      <Reveal delay={80}>
        <div className="font-mono text-muted text-sm md:text-base mb-3">
          <span className="text-accent">const</span> engineer <span className="text-faint">=</span> {"{"}
        </div>
      </Reveal>

      <Reveal delay={140}>
        <h1 className="font-mono text-[clamp(2rem,7vw,4.25rem)] leading-[1.05] font-medium text-slate-50 tracking-tight pl-4 md:pl-6">
          &quot;{site.name}&quot;
          {cursorOn ? <span className="text-accent">_</span> : <span className="opacity-0">_</span>}
        </h1>
      </Reveal>

      <Reveal delay={220}>
        <p className="font-mono text-sm md:text-base text-muted pl-4 md:pl-6 mt-3">
          role: <span className="text-slate-200">&quot;{site.role}&quot;</span>,
        </p>
        <p className="font-mono text-sm md:text-base text-muted pl-4 md:pl-6">
          base: <span className="text-slate-200">&quot;{site.location}&quot;</span>,
        </p>
      </Reveal>

      <Reveal delay={280}>
        <div className="font-mono text-faint text-sm md:text-base mt-2">{"}"}</div>
      </Reveal>

      <Reveal delay={360}>
        <p className="max-w-xl text-slate-400 text-[15px] md:text-base leading-relaxed mt-8">
          {site.bio[0]}
        </p>
      </Reveal>

      <Reveal delay={440}>
        <div className="flex flex-wrap gap-3 mt-9">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-[#06101F] text-sm font-medium hover:bg-[#6a9fff] transition-colors"
          >
            View projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border-strong text-slate-200 text-sm font-medium hover:bg-white/5 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </Reveal>
    </section>
  );
}
