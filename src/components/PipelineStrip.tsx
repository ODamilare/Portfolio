"use client";

import { useEffect, useState } from "react";
import { Check, Circle } from "lucide-react";

const PIPELINE_STEPS = ["install", "build", "test", "lint", "deploy", "live"];

export default function PipelineStrip() {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let i = -1;
    const interval = setInterval(() => {
      i += 1;
      setActiveIndex(i);
      if (i >= PIPELINE_STEPS.length - 1) clearInterval(interval);
    }, 260);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-b border-border bg-bg">
      <div className="max-w-content mx-auto px-5 md:px-8 py-2 flex items-center gap-3 overflow-x-auto scrollbar-none">
        <span className="text-[11px] font-mono text-faint shrink-0">damilare@portfolio:~$</span>
        <div className="flex items-center gap-1 shrink-0">
          {PIPELINE_STEPS.map((step, idx) => {
            const isLive = step === "live";
            const active = idx <= activeIndex;
            return (
              <div key={step} className="flex items-center">
                <span
                  className={[
                    "flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full border transition-all duration-300",
                    active
                      ? isLive
                        ? "border-success/40 text-success bg-success/10"
                        : "border-accent/40 text-[#8fb8ff] bg-accent-soft"
                      : "border-border text-faint",
                  ].join(" ")}
                >
                  {active ? (
                    isLive ? (
                      <Circle className="w-2 h-2 fill-success text-success animate-pulse" />
                    ) : (
                      <Check className="w-3 h-3" />
                    )
                  ) : (
                    <Circle className="w-2 h-2" />
                  )}
                  {step}
                </span>
                {idx < PIPELINE_STEPS.length - 1 && (
                  <span
                    className={[
                      "w-3 h-px mx-0.5 transition-colors duration-300",
                      idx < activeIndex ? "bg-accent/50" : "bg-border",
                    ].join(" ")}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
