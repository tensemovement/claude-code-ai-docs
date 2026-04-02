import type { NavCategory, NavSection } from "@/types/navigation";

export const navCategories: NavCategory[] = [
  { label: "Claude Code", href: "/claude-code" },
  { label: "AI", href: "/ai" },
];

export const aiNavSections: NavSection[] = [
  {
    category: "목록",
    items: [
      { title: "AI Native", href: "/ai/ai-native", icon: "Sparkles" },
    ],
  },
];

export const claudeCodeNavSections: NavSection[] = [
  {
    category: "목록",
    items: [
      {
        title: "프로젝트 생성 흐름",
        href: "/claude-code/project-creation",
      },
      {
        title: "에이전트 코딩의 최전선",
        href: "/claude-code/agentic-coding",
        icon: "Bot",
      },
    ],
  },
];

export function getNavSections(pathname: string): NavSection[] {
  if (pathname.startsWith("/claude-code")) {
    return claudeCodeNavSections;
  }
  if (pathname.startsWith("/ai")) {
    return aiNavSections;
  }
  return [];
}

export function getActiveCategory(pathname: string): string {
  if (pathname.startsWith("/claude-code")) return "/claude-code";
  if (pathname.startsWith("/ai")) return "/ai";
  return "";
}
