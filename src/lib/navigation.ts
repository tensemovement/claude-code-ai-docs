import type { NavCategory, NavSection } from "@/types/navigation";

export const navCategories: NavCategory[] = [
  { label: "Claude Code", href: "/claude-code" },
  { label: "OpenClaw", href: "/openclaw" },
  { label: "AI", href: "/ai" },
];

export const aiNavSections: NavSection[] = [
  {
    category: "목록",
    items: [
      { title: "AI Native", href: "/ai/ai-native", icon: "Sparkles" },
      {
        title: "AI Agent 관리 가이드",
        href: "/ai/ai-agent-guide",
        icon: "Bot",
      },
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

export const openclawNavSections: NavSection[] = [
  {
    category: "목록",
    items: [
      {
        title: "9개 에이전트로 일상 자동화",
        href: "/openclaw/daily-automation",
        icon: "Workflow",
      },
    ],
  },
];

export function getNavSections(pathname: string): NavSection[] {
  if (pathname.startsWith("/claude-code")) {
    return claudeCodeNavSections;
  }
  if (pathname.startsWith("/openclaw")) {
    return openclawNavSections;
  }
  if (pathname.startsWith("/ai")) {
    return aiNavSections;
  }
  return [];
}

export function getActiveCategory(pathname: string): string {
  if (pathname.startsWith("/claude-code")) return "/claude-code";
  if (pathname.startsWith("/openclaw")) return "/openclaw";
  if (pathname.startsWith("/ai")) return "/ai";
  return "";
}
