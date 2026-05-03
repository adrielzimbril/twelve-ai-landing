import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleDollarSign, Sparkles } from "lucide-react";
import { navItems } from "@/lib/data";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="px-4 pb-6 pt-10 md:pt-16">
      <div className="section-shell overflow-hidden rounded-[24px] bg-obsidian text-eggshell shadow-card">
        <div className="grid gap-10 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10 lg:p-12">
          <div>
            <div className="[&_span:first-child]:bg-eggshell [&_span:first-child]:text-obsidian [&_span:last-child]:text-eggshell">
              <Logo />
            </div>
            <h2 className="display-type mt-8 max-w-2xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.98]">
              Image systems for studios that move fast.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-eggshell/62">
              Twelve AI is a conceptual product page built with production
              structure, precise visual rhythm, and reusable components for the
              Day 4 landing page challenge.
            </p>
          </div>

          <div className="grid content-between gap-8">
            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {[
                [Sparkles, "Render queue", "12s avg"],
                [CheckCircle2, "Review state", "Clean"],
                [CircleDollarSign, "Usage model", "Studio"],
              ].map(([Icon, label, value]) => {
                const LucideIcon = Icon as typeof Sparkles;

                return (
                  <div key={label as string} className="rounded-[16px] bg-white/[0.06] p-4 shadow-[rgba(255,255,255,0.08)_0_0_0_1px_inset]">
                    <LucideIcon className="mb-5 h-4 w-4 text-eggshell/70" aria-hidden="true" />
                    <p className="text-[11px] font-medium uppercase text-eggshell/42">
                      {label as string}
                    </p>
                    <p className="mt-1 text-sm font-medium">{value as string}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3 text-sm text-eggshell/62">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full bg-white/[0.06] px-3 py-2 no-underline transition-colors hover:bg-white/[0.12] hover:text-eggshell"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="#cta"
                className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-eggshell px-5 text-sm font-medium text-obsidian no-underline"
              >
                Request access
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-4 text-xs text-eggshell/42 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <p>Day 4 / One landing page per day</p>
          <p>Next.js, TypeScript, Tailwind CSS v4</p>
        </div>
      </div>
    </footer>
  );
}
