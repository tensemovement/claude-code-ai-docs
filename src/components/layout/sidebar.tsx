"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Lightbulb,
  MessageSquare,
  Cpu,
  Star,
  Download,
  Terminal,
  Shield,
  HelpCircle,
} from "lucide-react";
import type { NavSection } from "@/types/navigation";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Lightbulb,
  MessageSquare,
  Cpu,
  Star,
  Download,
  Terminal,
  Shield,
  HelpCircle,
};

interface SidebarProps {
  sections: NavSection[];
}

export function Sidebar({ sections }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-ds-surface-low py-6 no-scrollbar">
      {sections.map((section) => (
        <div key={section.category} className="mb-6">
          <h3 className="px-6 mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-ds-secondary">
            {section.category}
          </h3>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon ? iconMap[item.icon] : null;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 mx-2 pl-4 pr-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive
                        ? "border-l-2 border-ds-primary text-ds-primary bg-ds-surface-lowest font-medium shadow-sm"
                        : "border-l-2 border-transparent text-ds-on-surface-variant hover:text-ds-on-surface hover:bg-ds-surface-high"
                    }`}
                  >
                    {Icon && (
                      <Icon
                        className={`w-[18px] h-[18px] ${
                          isActive
                            ? "text-ds-primary"
                            : "text-ds-on-surface-variant"
                        }`}
                      />
                    )}
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
