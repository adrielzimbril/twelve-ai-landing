import Image from "next/image";
import { imageTiles } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Gallery() {
  return (
    <section id="gallery" className="px-4 py-16 md:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Generated output"
          title="From a single style brief to a complete visual set."
          body="The page uses production imagery as proof, not decoration. Twelve's promise is image continuity across formats, subjects, and campaign needs."
        />

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {imageTiles.slice(6, 13).map((tile, index) => (
            <article
              key={tile.src}
              className={`hairline-card group relative min-h-[260px] overflow-hidden ${
                index === 0 || index === 6 || index === 12
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-obsidian shadow-subtle backdrop-blur">
                  {tile.label}
                </span>
                <span className="font-mono rounded-full bg-obsidian/75 px-3 py-1.5 text-[11px] text-eggshell backdrop-blur">
                  v0{index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
