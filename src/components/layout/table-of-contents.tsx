"use client";

export interface TocItem {
  title: string;
  id: string;
}

interface TableOfContentsProps {
  items?: TocItem[];
}

export function TableOfContents({ items = [] }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <aside className="hidden xl:block w-48 shrink-0 sticky top-24 h-fit">
      <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-ds-secondary mb-4">
        On this page
      </h4>
      <ul className="space-y-3 relative">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block pl-4 text-sm transition-colors border-l-2 ${
                index === 0
                  ? "border-ds-primary text-ds-primary font-medium"
                  : "border-ds-outline-variant/20 text-ds-on-surface-variant hover:text-ds-on-surface hover:border-ds-outline-variant/50"
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
