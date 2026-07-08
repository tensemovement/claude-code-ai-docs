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
    label: "Agent",
    href: "/agent",
    description:
      "AI 에이전트를 활용한 자동화와 실전 워크플로우를 소개합니다.",
    icon: "Cog",
  },
  {
    label: "AI",
    href: "/ai",
    description:
      "AI의 핵심 개념과 원리를 체계적으로 정리하여, AI를 도구가 아닌 사고의 틀로 이해할 수 있도록 돕습니다.",
    icon: "BookOpen",
  },
  {
    label: "Design",
    href: "/design",
    description:
      "에이전트 시대의 디자인 도구와 워크플로우를 정리하여, AI와 협업하는 새로운 디자인 방법론을 깊이 있게 이해할 수 있도록 돕습니다.",
    icon: "Palette",
  },
  {
    label: "Skills",
    href: "/skills",
    description:
      "Claude Code의 스킬과 플러그인을 정리하여, 절차적 지식을 패키지로 확장하는 실전 활용법을 소개합니다.",
    icon: "Boxes",
  },
];

export const aiNavSections: NavSection[] = [
  {
    category: "목록",
    items: [
      { title: "AI Native", href: "/ai/ai-native", icon: "Sparkles" },
      {
        title: "AI-Native 엔지니어 되기",
        href: "/ai/ai-native-engineer",
        icon: "Compass",
      },
      {
        title: "AI Agent 관리 가이드",
        href: "/ai/ai-agent-guide",
        icon: "Bot",
      },
      {
        title: "바이브 코더 vs 소프트웨어 엔지니어",
        href: "/ai/vibe-coder-vs-engineer",
        icon: "Scale",
      },
      {
        title: "우리가 아는 웹은 사라진다",
        href: "/ai/web-disappearing",
        icon: "Globe",
      },
      {
        title: "바이브 코딩과 새로운 SDLC",
        href: "/ai/new-sdlc-vibe-coding",
        icon: "RefreshCw",
      },
      {
        title: "LLM Wiki",
        href: "/ai/llm-wiki",
        icon: "BookOpen",
      },
      {
        title: "AI 시대 핵심용어집",
        href: "/ai/ai-key-terms",
        icon: "BookA",
      },
      {
        title: "하네스 엔지니어링과 자기개선",
        href: "/ai/harness-engineering",
        icon: "Layers",
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
      {
        title: "에이전트 코딩이라는 함정",
        href: "/claude-code/agentic-coding-trap",
      },
      {
        title: "장기 실행 앱을 위한 하네스 설계",
        href: "/claude-code/harness-design",
        icon: "Layers",
      },
      {
        title: "Claude's Constitution (한국어)",
        href: "/claude-code/claudes-constitution",
      },
      {
        title: "Claude Design 소개 (한국어)",
        href: "/claude-code/claude-design",
      },
      {
        title: "45가지 Claude Code 팁",
        href: "/claude-code/45-tips",
      },
      {
        title: "Claude Code 베스트 프랙티스",
        href: "/claude-code/best-practice",
      },
      {
        title: "cmux로 Unity 블록 게임 팀 만들기",
        href: "/claude-code/cmux-unity-block-game",
      },
      {
        title: "gstack — Claude Code를 엔지니어링 팀으로",
        href: "/claude-code/gstack",
      },
      {
        title: "동적 워크플로우 — 서브에이전트 오케스트레이션",
        href: "/claude-code/workflows",
        icon: "Workflow",
      },
    ],
  },
];

export const agentNavSections: NavSection[] = [
  {
    category: "목록",
    items: [
      {
        title: "9개 에이전트로 일상 자동화",
        href: "/agent/daily-automation",
        icon: "Workflow",
      },
      {
        title: "GBrain — AI 에이전트의 브레인 레이어",
        href: "/agent/gbrain",
      },
    ],
  },
];

export const designNavSections: NavSection[] = [
  {
    category: "목록",
    items: [
      {
        title: "Open Design — Claude Design의 오픈소스 대안",
        href: "/design/open-design",
      },
      {
        title: "Understand-Anything — 코드베이스를 지식 그래프로",
        href: "/design/understand-anything",
      },
    ],
  },
];

export const skillsNavSections: NavSection[] = [
  {
    category: "목록",
    items: [
      {
        title: "KESE-KIT — KISA 보안 평가 스킬",
        href: "/skills/kese-kit",
      },
    ],
  },
];

export function getNavSections(pathname: string): NavSection[] {
  if (pathname.startsWith("/claude-code")) {
    return claudeCodeNavSections;
  }
  if (pathname.startsWith("/agent")) {
    return agentNavSections;
  }
  if (pathname.startsWith("/ai")) {
    return aiNavSections;
  }
  if (pathname.startsWith("/design")) {
    return designNavSections;
  }
  if (pathname.startsWith("/skills")) {
    return skillsNavSections;
  }
  return [];
}

export function getActiveCategory(pathname: string): string {
  if (pathname.startsWith("/claude-code")) return "/claude-code";
  if (pathname.startsWith("/agent")) return "/agent";
  if (pathname.startsWith("/ai")) return "/ai";
  if (pathname.startsWith("/design")) return "/design";
  if (pathname.startsWith("/skills")) return "/skills";
  return "";
}
