"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Terminal } from "lucide-react";
import { navCategories, getActiveCategory } from "@/lib/navigation";
import { useSidebarStore } from "@/stores/use-sidebar-store";

export function Header() {
  const pathname = usePathname();
  const activeCategory = getActiveCategory(pathname);
  const toggleSidebar = useSidebarStore((s) => s.toggle);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-ds-outline-variant/10">
      <div className="flex items-center h-16 px-4 md:px-6 gap-4 md:gap-8">
        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-lg hover:bg-ds-surface-high transition-colors"
          aria-label="메뉴 열기"
        >
          <Menu className="w-5 h-5 text-ds-on-surface-variant" />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tighter text-ds-on-surface whitespace-nowrap"
        >
          Claude Code Docs
        </Link>

        {/* Nav tabs */}
        <nav className="hidden md:flex items-center gap-1">
          {navCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeCategory === cat.href
                  ? "text-ds-primary bg-ds-primary-container/40"
                  : "text-ds-on-surface-variant hover:text-ds-on-surface hover:bg-ds-surface-high"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search */}
        <div className="hidden lg:flex items-center gap-3 bg-ds-surface-low rounded-full px-4 py-2 min-w-[240px]">
          <Search className="w-4 h-4 text-ds-on-surface-variant/50" />
          <span className="text-sm text-ds-on-surface-variant/50">검색...</span>
          <kbd className="ml-auto px-2 py-0.5 rounded border border-ds-outline-variant/30 bg-ds-surface-lowest text-[10px] font-bold text-ds-secondary">
            ⌘K
          </kbd>
        </div>

        {/* Terminal icon */}
        <Link
          href="/claude-code"
          className="p-2 rounded-full hover:bg-ds-surface-high transition-colors"
          aria-label="Claude Code"
        >
          <Terminal className="w-5 h-5 text-ds-on-surface-variant" />
        </Link>
      </div>
    </header>
  );
}
