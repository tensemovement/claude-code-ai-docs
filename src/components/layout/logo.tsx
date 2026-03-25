import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-lg font-bold tracking-tighter text-ds-on-surface whitespace-nowrap"
    >
      <svg
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 shrink-0"
        aria-hidden="true"
      >
        <polyline
          points="140,160 280,260 140,360"
          stroke="currentColor"
          strokeWidth="48"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-ds-primary"
        />
        <line
          x1="280"
          y1="370"
          x2="380"
          y2="370"
          stroke="currentColor"
          strokeWidth="48"
          strokeLinecap="round"
          className="text-ds-primary"
        />
      </svg>
      Claude Code AI Docs
    </Link>
  );
}
