"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Send } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { site } from "@/data/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    // No backend wired up yet — this opens the visitor's mail client
    // pre-filled with their message. Swap this for a fetch() call to
    // your own API route (or a service like Resend/Formspree) when ready.
    const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-border bg-surface p-5 md:p-6 max-w-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block font-mono text-[11px] text-muted mb-1.5">
          name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          placeholder="Your full name"
          className="w-full bg-white/[0.03] border border-border-strong rounded-md px-3 py-2 text-sm text-slate-100 placeholder:text-faint outline-none"
        />
        {errors.name && <p className="text-[12px] text-red-400 mt-1">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-mono text-[11px] text-muted mb-1.5">
          email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="name@company.com"
          className="w-full bg-white/[0.03] border border-border-strong rounded-md px-3 py-2 text-sm text-slate-100 placeholder:text-faint outline-none"
        />
        {errors.email && <p className="text-[12px] text-red-400 mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="block font-mono text-[11px] text-muted mb-1.5">
          message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          placeholder="What are you reaching out about?"
          className="w-full bg-white/[0.03] border border-border-strong rounded-md px-3 py-2 text-sm text-slate-100 placeholder:text-faint outline-none resize-none"
        />
        {errors.message && <p className="text-[12px] text-red-400 mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-[#06101F] text-sm font-medium hover:bg-[#6a9fff] transition-colors disabled:opacity-60"
      >
        <Send className="w-4 h-4" />
        Send message
      </button>

      {submitted && <p className="text-[12px] text-success mt-3">Your mail client should be open now — send when ready.</p>}
    </form>
  );
}
