import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 rounded-full pr-2 text-obsidian no-underline"
      aria-label="Twelve AI home"
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-obsidian text-eggshell">
        <svg
          aria-hidden="true"
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
        >
          <path
            d="M8.5 8.75C8.5 7.507 9.507 6.5 10.75 6.5h6.5c1.243 0 2.25 1.007 2.25 2.25v10.5c0 1.243-1.007 2.25-2.25 2.25h-6.5A2.25 2.25 0 0 1 8.5 19.25V8.75Z"
            fill="currentColor"
          />
          <path
            d="M11.75 10.75h4.9M11.75 14h3.6M11.75 17.25h2.2"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-ember ring-2 ring-eggshell">
          <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-ember" />
          <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-ember" />
        </span>
      </span>
      <span className="text-[15px] font-medium">Twelve AI</span>
    </Link>
  );
}
