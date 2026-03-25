import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FooterNavLink {
  title: string;
  href: string;
}

interface FooterNavProps {
  prev?: FooterNavLink;
  next?: FooterNavLink;
}

export function FooterNav({ prev, next }: FooterNavProps) {
  if (!prev && !next) return null;

  return (
    <nav className="grid grid-cols-2 gap-8 mt-20 pt-8 border-t border-ds-outline-variant/10">
      {prev ? (
        <Link
          href={prev.href}
          className="group block p-6 rounded-2xl bg-ds-surface-lowest hover:bg-white transition-all border border-transparent hover:border-ds-outline-variant/20"
        >
          <span className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em]">
            이전
          </span>
          <span className="flex items-center gap-2 mt-1 text-lg font-bold text-ds-on-surface group-hover:text-ds-primary transition-colors">
            <ChevronLeft className="w-5 h-5" />
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group block p-6 rounded-2xl bg-ds-surface-lowest hover:bg-white transition-all border border-transparent hover:border-ds-outline-variant/20 text-right"
        >
          <span className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em]">
            다음
          </span>
          <span className="flex items-center justify-end gap-2 mt-1 text-lg font-bold text-ds-on-surface group-hover:text-ds-primary transition-colors">
            {next.title}
            <ChevronRight className="w-5 h-5" />
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
