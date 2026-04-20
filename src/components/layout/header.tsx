"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navCategories, getActiveCategory } from "@/lib/navigation";
import { useSidebarStore } from "@/stores/use-sidebar-store";
import { Logo } from "@/components/layout/logo";
import { SearchDialog } from "@/components/layout/search-dialog";

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
        <Logo />

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
        <SearchDialog />
      </div>
    </header>
  );
}
