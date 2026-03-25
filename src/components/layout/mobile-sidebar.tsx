"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useSidebarStore } from "@/stores/use-sidebar-store";
import type { NavSection } from "@/types/navigation";

interface MobileSidebarProps {
  sections: NavSection[];
}

export function MobileSidebar({ sections }: MobileSidebarProps) {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const close = useSidebarStore((s) => s.close);
  const pathname = usePathname();

  // 라우트 변경 시 사이드바 닫기
  useEffect(() => {
    close();
  }, [pathname, close]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={close}
        aria-label="사이드바 닫기"
      />

      {/* Sidebar panel */}
      <div className="relative w-64 h-full bg-ds-surface-low shadow-xl animate-in slide-in-from-left">
        <div className="flex items-center justify-between h-16 px-4 border-b border-ds-outline-variant/10">
          <span className="text-sm font-bold tracking-tight text-ds-on-surface">
            메뉴
          </span>
          <button
            type="button"
            onClick={close}
            className="p-2 rounded-lg hover:bg-ds-surface-high transition-colors"
            aria-label="메뉴 닫기"
          >
            <X className="w-5 h-5 text-ds-on-surface-variant" />
          </button>
        </div>

        {/* Reuse Sidebar but override to show on mobile */}
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          <div className="py-6">
            {sections.map((section) => (
              <SidebarSection key={section.category} section={section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 모바일 전용 간소화된 섹션 렌더링
import Link from "next/link";
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
  FolderPlus,
} from "lucide-react";
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
  FolderPlus,
};

function SidebarSection({ section }: { section: NavSection }) {
  const pathname = usePathname();

  return (
    <div className="mb-6">
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
                    ? "border-l-2 border-ds-primary text-ds-primary bg-ds-surface-lowest font-medium"
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
  );
}
