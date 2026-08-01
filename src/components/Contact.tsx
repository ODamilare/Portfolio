import { Mail, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-28">
      <SectionHeader path="~/portfolio/contact.ts" title="Get in touch" />

      <div className="grid md:grid-cols-5 gap-10 md:gap-16">
        <div className="md:col-span-2">
          <Reveal>
            <p className="text-slate-400 text-[15px] mb-6">
              Open to front-end and full-stack roles where I can own interfaces end to end. Reach
              out directly — I reply to everything.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border-strong text-slate-200 text-sm hover:bg-white/5 transition-colors w-fit"
              >
                <Mail className="w-4 h-4" /> {site.email}
              </a>
              <a
                href={site.github}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border-strong text-slate-200 text-sm hover:bg-white/5 transition-colors w-fit"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={site.linkedin}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border-strong text-slate-200 text-sm hover:bg-white/5 transition-colors w-fit"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="md:col-span-3">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
