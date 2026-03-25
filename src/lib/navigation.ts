import type { NavCategory, NavSection } from "@/types/navigation";

export const navCategories: NavCategory[] = [
  { label: "Claude Code", href: "/claude-code" },
  { label: "AI", href: "/ai" },
];

export const aiNavSections: NavSection[] = [
  {
    category: "시작하기",
    items: [
      { title: "Introduction", href: "/ai", icon: "BookOpen" },
      { title: "Fundamentals", href: "/ai/fundamentals", icon: "Lightbulb" },
    ],
  },
  {
    category: "핵심 개념",
    items: [
      { title: "AI Native", href: "/ai/ai-native", icon: "Sparkles" },
      {
        title: "Prompt Engineering",
        href: "/ai/prompt-engineering",
        icon: "MessageSquare",
      },
      { title: "Models", href: "/ai/models", icon: "Cpu" },
      { title: "Best Practices", href: "/ai/best-practices", icon: "Star" },
    ],
  },
];

export const claudeCodeNavSections: NavSection[] = [
  {
    category: "시작하기",
    items: [
      {
        title: "Introduction",
        href: "/claude-code",
        icon: "BookOpen",
      },
      {
        title: "프로젝트 생성 이해하기",
        href: "/claude-code/project-creation",
        icon: "FolderPlus",
      },
      {
        title: "Installation",
        href: "/claude-code/installation",
        icon: "Download",
      },
    ],
  },
  {
    category: "사용 가이드",
    items: [
      {
        title: "CLI Reference",
        href: "/claude-code/cli-reference",
        icon: "Terminal",
      },
      {
        title: "Authentication",
        href: "/claude-code/authentication",
        icon: "Shield",
      },
      {
        title: "Best Practices",
        href: "/claude-code/best-practices",
        icon: "Star",
      },
      {
        title: "Troubleshooting",
        href: "/claude-code/troubleshooting",
        icon: "HelpCircle",
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
