import { workflowSteps } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Workflow() {
  return (
    <section id="workflow" className="px-4 py-16 md:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Workflow"
          title="A quiet production loop for prompt, review, and export."
          body="Twelve is positioned as a working instrument for image teams: structured enough for repeatable output, simple enough to stay fast."
        />

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map(({ icon: Icon, title, body }, index) => (
            <article key={title} className="hairline-card p-5">
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-sm text-slate">
                  0{index + 1}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-powder text-obsidian">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <h3 className="text-[17px] font-medium text-obsidian">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-gravel">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
