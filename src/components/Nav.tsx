"use client";

import { Menu, X, Download } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#projects", label: "projects" },
  { href: "#resume", label: "resume" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const { mobileNavOpen, toggleMobileNav, setMobileNavOpen } = useUIStore();

  return (
    <div className="sticky top-0 z-40 backdrop-blur-md bg-bg/85 border-b border-border">
      <div className="max-w-content mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-slate-200 flex items-center gap-2">
          <span className="text-accent">~/</span>
          <span className="font-semibold">damilare.tsx</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] text-muted hover:text-slate-100 px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.resumeUrl}
            download
            className="ml-2 font-mono text-[13px] flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-accent/40 text-[#8fb8ff] hover:bg-accent-soft transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            cv.pdf
          </a>
        </nav>

        <button
          className="md:hidden text-slate-300"
          onClick={toggleMobileNav}
          aria-label="Toggle menu"
        >
          {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileNavOpen && (
        <div className="md:hidden border-t border-border px-5 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileNavOpen(false)}
              className="font-mono text-sm text-slate-300 py-2"
            >
              {l.label}
            </a>
          ))}
          <a href={site.resumeUrl} download className="font-mono text-sm text-[#8fb8ff] py-2 flex items-center gap-2">
            <Download className="w-4 h-4" /> download cv
          </a>
        </div>
      )}
    </div>
  );
}
