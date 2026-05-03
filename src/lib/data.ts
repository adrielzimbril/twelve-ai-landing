import {
  Aperture,
  Blend,
  Braces,
  CheckCircle2,
  Grid3X3,
  Image as ImageIcon,
  Layers3,
  ScanSearch,
  ShieldCheck,
  WandSparkles,
} from "lucide-react";

export const navItems = [
  { label: "Gallery", href: "#gallery" },
  { label: "Workflow", href: "#workflow" },
  { label: "Studio", href: "#studio" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const imageTiles = [
  {
    src: "/img/glow-glitter-portrait-beautiful-woman.jpg",
    alt: "AI-generated editorial portrait with warm glitter light",
    label: "Portrait",
  },
  {
    src: "/img/modern-architectural-marvel-futuristic-building.jpg",
    alt: "AI-generated futuristic architectural structure",
    label: "Architecture",
  },
  {
    src: "/img/model-translucent-fabric-with-floral-accent.jpg",
    alt: "AI-generated fashion model with translucent fabric",
    label: "Fashion",
  },
  {
    src: "/img/portrait-woman-with-clear-bubble.jpg",
    alt: "AI-generated portrait of a woman with a clear bubble",
    label: "Campaign",
  },
  {
    src: "/img/model-posing-with-colorful-smoke.jpg",
    alt: "AI-generated model posing with colorful smoke",
    label: "Color",
  },
  {
    src: "/img/portrait-fantasy-sea-creature.jpg",
    alt: "AI-generated fantasy sea creature portrait",
    label: "Fantasy",
  },
  {
    src: "/img/abstract-floral-smoke-composition.jpg",
    alt: "AI-generated abstract floral smoke composition",
    label: "Material",
  },
  {
    src: "/img/darkly-atmospheric-retail-environment-rendering.jpg",
    alt: "AI-generated atmospheric retail environment",
    label: "Retail",
  },
  {
    src: "/img/abstract-portrait-with-light-effects.jpg",
    alt: "AI-generated abstract portrait with light effects",
    label: "Concept",
  },
  {
    src: "/img/purple-mountain-lake-aesthetic.jpg",
    alt: "AI-generated purple mountain lake aesthetic scene",
    label: "Landscape",
  },
  {
    src: "/img/digital-art-style-portrait-adult-woman.jpg",
    alt: "AI-generated digital art style portrait of an adult woman",
    label: "Portrait",
  },
  {
    src: "/img/handsome-man-posing-studio.jpg",
    alt: "AI-generated studio portrait of a man",
    label: "Studio",
  },
  {
    src: "/img/portrait-person-with-visual-metaphor-memory.jpg",
    alt: "AI-generated portrait with a visual memory metaphor",
    label: "Memory",
  },
  {
    src: "/img/silhouette-woman-wearing-sunglasses.jpg",
    alt: "AI-generated silhouette of a woman wearing sunglasses",
    label: "Portrait",
  },
];

export const workflowSteps = [
  {
    icon: Braces,
    title: "Describe the frame",
    body: "Write the product scene, art direction, format, lighting, and constraints in one compact prompt.",
  },
  {
    icon: ScanSearch,
    title: "Lock the references",
    body: "Pin faces, product shapes, palettes, and approved negative prompts before generating variants.",
  },
  {
    icon: WandSparkles,
    title: "Generate in sets",
    body: "Create controlled batches for hero imagery, campaign stills, social crops, and product backgrounds.",
  },
  {
    icon: CheckCircle2,
    title: "Ship the asset",
    body: "Upscale, inspect, export, and hand off production-ready images with usage notes attached.",
  },
];

export const featureBlocks = [
  {
    icon: Aperture,
    title: "Light-aware generation",
    body: "Twelve preserves lighting intent across iterations, so a campaign can stay coherent from hero crop to detail shot.",
  },
  {
    icon: Layers3,
    title: "Reusable style memory",
    body: "Save working styles as studio presets for product launches, editorial series, and client-safe brand systems.",
  },
  {
    icon: Blend,
    title: "Composition controls",
    body: "Guide aspect ratio, subject position, depth, and negative space without wrestling with prompt fragments.",
  },
  {
    icon: ShieldCheck,
    title: "Review-ready output",
    body: "Every export includes prompt lineage, seed references, and approval states for creative operations teams.",
  },
];

export const proofPoints = [
  "Campaign heroes",
  "Product mockups",
  "Editorial portraits",
  "Retail spaces",
  "Social crops",
  "Concept boards",
];

export const plans = [
  {
    name: "Creator",
    price: "$19",
    description: "For solo designers producing polished visuals every week.",
    features: [
      "600 images / month",
      "24 saved styles",
      "2K upscale",
      "Commercial use",
    ],
  },
  {
    name: "Studio",
    price: "$79",
    description: "For small teams managing brand-safe AI image workflows.",
    features: [
      "4,000 images / month",
      "Shared style library",
      "4K upscale",
      "Approval workspace",
      "Priority queue",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For creative orgs with higher volume and governance needs.",
    features: [
      "Custom limits",
      "SSO",
      "Model policy controls",
      "Dedicated support",
    ],
  },
];

export const faqs = [
  {
    question: "Is Twelve AI a real product?",
    answer:
      "This is a conceptual landing page for Day 4 of a daily landing page challenge. The page is structured as if Twelve were a production AI image tool.",
  },
  {
    question: "Can the generated images be used commercially?",
    answer:
      "The product positioning assumes commercial usage on paid plans, with prompt lineage and export records for team review.",
  },
  {
    question: "Why is the page so minimal?",
    answer:
      "The design brief calls for a restrained, high-end system: warm paper surfaces, editorial typography, black CTAs, and imagery as the main visual evidence.",
  },
];

export const stats = [
  { label: "Average render", value: "12s" },
  { label: "Style drift", value: "-38%" },
  { label: "Export sizes", value: "9" },
];

export const galleryControls = [
  { icon: ImageIcon, label: "Set" },
  { icon: Grid3X3, label: "Crop" },
  { icon: WandSparkles, label: "Refine" },
];
