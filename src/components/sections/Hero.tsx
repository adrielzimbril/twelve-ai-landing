"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Crop,
  Image as ImageIcon,
  SlidersHorizontal,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const heroSlides = [
  {
    title: "Bubble portrait system",
    image: "/img/portrait-woman-with-clear-bubble.jpg",
    alt: "AI-generated portrait of a woman with a clear bubble",
    prompt:
      "Editorial portrait, glass bubble material, clean studio skin detail, soft luminous background.",
    tags: ["style locked", "4:5", "campaign-safe"],
    accent: "bg-ember",
    stats: [
      ["11s", "Average render"],
      ["94", "Style match"],
      ["9", "Export sizes"],
    ],
  },
  {
    title: "Color smoke study",
    image: "/img/model-posing-with-colorful-smoke.jpg",
    alt: "AI-generated model posing with colorful smoke",
    prompt:
      "Fashion model, controlled colorful smoke, premium editorial lighting, high contrast silhouette.",
    tags: ["palette pinned", "3 variants", "review-ready"],
    accent: "bg-signal-blue",
    stats: [
      ["14s", "Average render"],
      ["88", "Style match"],
      ["6", "Export sizes"],
    ],
  },
  {
    title: "Fantasy concept frame",
    image: "/img/portrait-fantasy-sea-creature.jpg",
    alt: "AI-generated fantasy sea creature portrait",
    prompt:
      "Fantasy sea creature portrait, pearlescent skin, underwater editorial mood, precise face detail.",
    tags: ["seed saved", "concept pass", "upscale-ready"],
    accent: "bg-fog",
    stats: [
      ["16s", "Average render"],
      ["91", "Style match"],
      ["12", "Export sizes"],
    ],
  },
];

const flowTools = [
  {
    icon: ImageIcon,
    label: "Set",
    description: "Reference locked",
  },
  {
    icon: SlidersHorizontal,
    label: "Tune",
    description: "Style weight",
  },
  {
    icon: Crop,
    label: "Crop",
    description: "Export formats",
  },
  {
    icon: WandSparkles,
    label: "Refine",
    description: "Upscale queue",
  },
];

function HeroStudioCard() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTool, setActiveTool] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
      setActiveTool(0);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const toolProgress = useMemo(() => 38 + activeTool * 18 + activeSlide * 4, [
    activeSlide,
    activeTool,
  ]);

  const selectSlide = (index: number) => {
    setActiveSlide(index);
    setActiveTool(0);
  };

  return (
    <div className="hairline-card max-w-[calc(100vw-32px)] overflow-hidden p-3 md:p-4">
      <div className="mb-3 flex items-center justify-between gap-3 border-b border-chalk pb-3">
        <div className="flex items-center gap-2">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              onClick={() => selectSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeSlide
                  ? `w-8 ${item.accent}`
                  : "w-2.5 bg-fog hover:bg-gravel"
              }`}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
        <p className="hidden font-mono text-[11px] text-slate sm:block">
          studio/render-12
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1fr_280px]">
        <div className="render-scan relative min-h-[360px] overflow-hidden rounded-[12px] bg-powder md:min-h-[500px]">
          <Image
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 780px"
            className="object-cover"
            fetchPriority="high"
          />
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-obsidian shadow-subtle backdrop-blur">
            {flowTools[activeTool].description}
          </div>
          <div className="absolute inset-x-3 bottom-3 rounded-[12px] bg-white/90 p-3 shadow-subtle backdrop-blur-md">
            <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-powder">
              <div
                className="h-full rounded-full bg-obsidian transition-all duration-300"
                style={{ width: `${toolProgress}%` }}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-obsidian">
                  {slide.title}
                </p>
                <p className="mt-1 font-mono text-[11px] text-gravel">
                  {slide.tags.map((tag) => `[${tag}]`).join(" ")}
                </p>
              </div>
              <span className="rounded-full bg-obsidian px-3 py-1.5 text-xs font-medium text-eggshell">
                Step 0{activeTool + 1}
              </span>
            </div>
          </div>
        </div>

        <aside className="grid content-between gap-3">
          <div className="rounded-[12px] bg-powder p-3">
            <p className="label-type mb-3 text-slate">Prompt stack</p>
            <p className="text-sm leading-6 text-obsidian">{slide.prompt}</p>
          </div>
          <div className="grid gap-2">
            {flowTools.map(({ icon: Icon, label, description }, index) => (
              <button
                key={label}
                onClick={() => setActiveTool(index)}
                className={`interactive-card flex min-h-11 items-center justify-between rounded-[12px] px-3 text-sm font-medium ${
                  activeTool === index
                    ? "bg-obsidian text-eggshell"
                    : "border border-chalk bg-white text-obsidian"
                }`}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <Icon
                    className={`h-4 w-4 ${
                      activeTool === index ? "text-eggshell" : "text-slate"
                    }`}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </span>
                <span
                  className={`hidden text-[11px] md:inline ${
                    activeTool === index ? "text-eggshell/62" : "text-gravel"
                  }`}
                >
                  {description}
                </span>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {slide.stats.map(([value, label]) => (
              <button
                key={label}
                onClick={() =>
                  setActiveTool((current) => (current + 1) % flowTools.length)
                }
                className="interactive-card rounded-[12px] bg-powder p-3 text-left"
              >
                <strong className="display-type block text-2xl leading-none text-obsidian">
                  {value}
                </strong>
                <span className="mt-2 block text-[11px] leading-4 text-gravel">
                  {label}
                </span>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                onClick={() => selectSlide(index)}
                className={`interactive-card relative aspect-[4/3] overflow-hidden rounded-[10px] ${
                  index === activeSlide ? "ring-2 ring-obsidian" : ""
                }`}
                aria-label={`Select ${item.title}`}
              >
                <Image src={item.image} alt="" fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-4 pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-sm text-gravel">
              <span className="h-2 w-2 rounded-full bg-ember" />
              Day 4 / AI image generation workspace
            </p>
            <h1 className="display-type max-w-[calc(100vw-64px)] text-[clamp(2.5rem,11vw,5.6rem)] leading-[0.94] text-obsidian md:max-w-4xl">
              Generate images with a studio&apos;s eye for restraint.
            </h1>
          </div>
          <div className="max-w-[calc(100vw-64px)] lg:max-w-xl lg:justify-self-end">
            <p className="text-[16px] leading-8 text-gravel md:text-[18px]">
              Twelve AI turns campaign prompts into coherent image systems:
              hero renders, product stills, editorial portraits, and social
              crops with style memory built in.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="#cta" className="pill-primary pill-hover">
                Start generating
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="#gallery" className="pill-secondary pill-hover">
                View gallery
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <HeroStudioCard />
        </div>
      </div>
    </section>
  );
}
