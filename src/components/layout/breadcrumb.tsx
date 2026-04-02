import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-ds-secondary mb-6"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight className="w-3 h-3 text-ds-outline-variant" />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-ds-on-surface transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-ds-primary" : ""}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
