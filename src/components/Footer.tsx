import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-content mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-[11px] text-faint">
          export default {site.name.replace(/\s+/g, "")};
        </span>
        <span className="font-mono text-[11px] text-faint">built with React · Next.js · Tailwind CSS</span>
      </div>
    </footer>
  );
}
