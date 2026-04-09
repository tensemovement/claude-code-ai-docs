import type { NavCategory, NavSection } from "@/types/navigation";

export const navCategories: NavCategory[] = [
  {
    label: "Claude Code",
    href: "/claude-code",
    description:
      "Claude Code의 구조와 동작 원리를 이해하고, 효과적으로 활용하기 위한 깊이 있는 가이드를 제공합니다.",
    icon: "Terminal",
  },
  {
    label: "OpenClaw",
    href: "/openclaw",
    description:
      "OpenClaw를 활용한 에이전트 자동화와 실전 워크플로우를 소개합니다.",
    icon: "Cog",
  },
  {
    label: "AI",
    href: "/ai",
    description:
      "AI의 핵심 개념과 원리를 체계적으로 정리하여, AI를 도구가 아닌 사고의 틀로 이해할 수 있도록 돕습니다.",
    icon: "BookOpen",
  },
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
      {
        title: "LLM Wiki",
        href: "/ai/llm-wiki",
        icon: "BookOpen",
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
