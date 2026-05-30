"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  navCategories,
  claudeCodeNavSections,
  agentNavSections,
  aiNavSections,
} from "@/lib/navigation";
import type { NavSection } from "@/types/navigation";

interface SearchItem {
  title: string;
  href: string;
  category: string;
}

function buildSearchItems(): SearchItem[] {
  const sectionMap: Record<string, NavSection[]> = {
    "Claude Code": claudeCodeNavSections,
    Agent: agentNavSections,
    AI: aiNavSections,
  };

  const items: SearchItem[] = [];

  for (const cat of navCategories) {
    const sections = sectionMap[cat.label] ?? [];
    for (const section of sections) {
      for (const item of section.items) {
        items.push({
          title: item.title,
          href: item.href,
          category: cat.label,
        });
      }
    }
  }

  return items;
}

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const listRef = useRef<HTMLUListElement>(null);
  const allItems = useMemo(() => buildSearchItems(), []);

  const filtered = useMemo(() => {
    if (!query.trim()) return allItems;
    const q = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  // Reset selection when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filtered.length]);

  // Scroll selected item into view
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const selected = list.children[selectedIndex] as HTMLElement | undefined;
    selected?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  // ⌘K / Ctrl+K shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Reset query when dialog closes
  useEffect(() => {
    if (!open) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [open]);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  function handleKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((i) => (i + 1) % filtered.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length);
        break;
      case "Enter":
        e.preventDefault();
        if (filtered[selectedIndex]) {
          navigate(filtered[selectedIndex].href);
        }
        break;
    }
  }

  return (
    <>
      {/* Search trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden lg:flex items-center gap-3 bg-ds-surface-low hover:bg-ds-surface-high rounded-full px-4 py-2 min-w-[240px] transition-colors cursor-pointer"
      >
        <Search className="w-4 h-4 text-ds-on-surface-variant/50" />
        <span className="text-sm text-ds-on-surface-variant/50">검색...</span>
        <kbd className="ml-auto px-2 py-0.5 rounded border border-ds-outline-variant/30 bg-ds-surface-lowest text-[10px] font-bold text-ds-secondary">
          ⌘K
        </kbd>
      </button>

      {/* Mobile search button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden p-2 rounded-lg hover:bg-ds-surface-high transition-colors"
        aria-label="검색"
      >
        <Search className="w-5 h-5 text-ds-on-surface-variant" />
      </button>

      {/* Search dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="fixed top-[20%] left-1/2 -translate-x-1/2 -translate-y-0 max-w-lg w-full p-0 overflow-hidden"
        >
          <DialogTitle className="sr-only">문서 검색</DialogTitle>

          {/* Search input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-ds-outline-variant/15">
            <Search className="w-5 h-5 text-ds-on-surface-variant/50 shrink-0" />
            <input
              type="text"
              placeholder="문서 검색..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-sm text-ds-on-surface outline-none placeholder:text-ds-on-surface-variant/50"
              autoFocus
            />
            <kbd className="px-1.5 py-0.5 rounded border border-ds-outline-variant/30 bg-ds-surface-lowest text-[10px] font-bold text-ds-secondary">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[320px] overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-ds-on-surface-variant/60">
                검색 결과가 없습니다
              </div>
            ) : (
              <ul ref={listRef} role="listbox">
                {filtered.map((item, idx) => (
                  <li key={item.href} role="option" aria-selected={idx === selectedIndex}>
                    <button
                      type="button"
                      onClick={() => navigate(item.href)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                        idx === selectedIndex
                          ? "bg-ds-primary-container/40 text-ds-primary"
                          : "text-ds-on-surface hover:bg-ds-surface-high"
                      }`}
                    >
                      <FileText className="w-4 h-4 shrink-0 opacity-50" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.title}</p>
                        <p className="text-xs opacity-60">{item.category}</p>
                      </div>
                      {idx === selectedIndex && (
                        <ArrowRight className="w-4 h-4 shrink-0 opacity-50" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer hints */}
          <div className="flex items-center gap-4 px-4 py-2 border-t border-ds-outline-variant/15 text-[11px] text-ds-on-surface-variant/50">
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 rounded border border-ds-outline-variant/30 bg-ds-surface-lowest font-bold">↑↓</kbd>
              이동
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 rounded border border-ds-outline-variant/30 bg-ds-surface-lowest font-bold">↵</kbd>
              열기
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 rounded border border-ds-outline-variant/30 bg-ds-surface-lowest font-bold">esc</kbd>
              닫기
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
