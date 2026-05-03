type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionHeader({ eyebrow, title, body }: SectionHeaderProps) {
  return (
    <div className="grid gap-5 border-b border-chalk pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <p className="mb-3 text-sm text-gravel">{eyebrow}</p>
        <h2 className="display-type max-w-3xl text-[clamp(2rem,5vw,3rem)] leading-[1.08] text-obsidian">
          {title}
        </h2>
      </div>
      {body ? (
        <p className="max-w-xl text-[15px] leading-7 text-gravel lg:justify-self-end">
          {body}
        </p>
      ) : null}
    </div>
  );
}
