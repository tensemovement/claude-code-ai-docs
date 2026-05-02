import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Lightbulb, Quote } from "lucide-react";

type Concept = {
  name: string;
  location: string;
  desc: string;
};

type Tip = {
  text: string;
  by?: string;
};

type TipGroup = {
  title: string;
  tips: Tip[];
};

const concepts: Concept[] = [
  {
    name: "Subagents",
    location: ".claude/agents/<name>.md",
    desc: "격리된 컨텍스트에서 자율적으로 동작하는 행위자. 도구·권한·모델·메모리·고유 정체성을 따로 가진다.",
  },
  {
    name: "Commands",
    location: ".claude/commands/<name>.md",
    desc: "사용자가 호출하는 프롬프트 템플릿. 워크플로우 오케스트레이션의 진입점.",
  },
  {
    name: "Skills",
    location: ".claude/skills/<name>/SKILL.md",
    desc: "필요할 때만 로드되는 지식 묶음. 점진적 공개(progressive disclosure)와 컨텍스트 forking 지원.",
  },
  {
    name: "Hooks",
    location: ".claude/hooks/",
    desc: "에이전트 루프 바깥에서 특정 이벤트에 반응하는 사용자 정의 핸들러(스크립트, HTTP, MCP 도구, 프롬프트, 에이전트).",
  },
  {
    name: "MCP Servers",
    location: ".mcp.json",
    desc: "외부 도구·DB·API와 연결되는 Model Context Protocol 서버. alwaysLoad로 도구를 항상 로드시킬 수 있다.",
  },
  {
    name: "Plugins",
    location: "배포 가능한 패키지",
    desc: "Skills, Subagents, Hooks, MCP, LSP를 묶어 마켓플레이스로 배포.",
  },
  {
    name: "Settings",
    location: ".claude/settings.json",
    desc: "계층형 설정. Permissions, Model Config, Output Styles, Sandboxing, Keybindings, Auto Mode 모두 여기에서.",
  },
  {
    name: "Memory",
    location: "CLAUDE.md, .claude/rules/",
    desc: "@path import로 영속 컨텍스트 구성. Auto Memory와 .claude/rules/*.md(YAML frontmatter로 lazy-load) 함께 사용.",
  },
  {
    name: "Checkpointing",
    location: "자동 (git 기반)",
    desc: "파일 편집을 자동 추적해 Esc Esc 또는 /rewind로 되돌릴 수 있다.",
  },
  {
    name: "Status Line",
    location: ".claude/settings.json",
    desc: "컨텍스트 사용량, 모델, 비용, 세션 정보를 화면 하단에 노출. 긴 세션에서 컴팩트 시점 판단에 필수.",
  },
];

const hotFeatures: Concept[] = [
  {
    name: "Routines (베타)",
    location: "/schedule, claude.ai/code/routines",
    desc: "Anthropic 클라우드에서 돌아가는 스케줄·API·GitHub 이벤트 트리거 자동화. 로컬 머신이 꺼져 있어도 동작한다.",
  },
  {
    name: "Ultrareview",
    location: "/ultrareview",
    desc: "원격 샌드박스에서 멀티 에이전트가 PR을 리뷰. 모든 발견을 독립적으로 재현·검증. Pro/Max는 월 3회 무료.",
  },
  {
    name: "Auto Mode (베타)",
    location: "--permission-mode auto",
    desc: "권한 프롬프트 대신 분류기가 안전 여부를 판정. 위험·인젝션은 차단. Max+Opus 4.7은 기본값.",
  },
  {
    name: "Fast Mode",
    location: "/fast",
    desc: "2.5배 빠른 Opus 4.6 ($30/$150 MTok). 토큰 사용량은 별도 청구.",
  },
  {
    name: "Agent SDK",
    location: "npm / pip 패키지",
    desc: "Claude Code를 라이브러리로 임베드해 프로덕션 에이전트를 빌드. Python·TypeScript SDK 모두 제공.",
  },
  {
    name: "Code Review (베타)",
    location: "GitHub App",
    desc: "관리형 멀티 에이전트 PR 분석. 버그·보안 취약점·회귀를 자동 탐지.",
  },
  {
    name: "Agent Teams",
    location: "환경 변수",
    desc: "여러 에이전트가 같은 코드베이스에서 병렬로 작업. 공유 작업 큐로 조율.",
  },
  {
    name: "Scheduled Tasks",
    location: "/loop, /schedule",
    desc: "/loop은 로컬 세션에서 최대 7일, /schedule은 클라우드, 데스크톱 작업은 로컬 파일 접근 — 세 표면을 용도에 맞춰 사용.",
  },
  {
    name: "Tasks",
    location: "/tasks",
    desc: "여러 세션에 걸친 영속 작업 추적. 백그라운드 작업·의존성을 한곳에서 본다. 사라진 TodoWrite의 대체.",
  },
  {
    name: "Voice Dictation",
    location: "/voice",
    desc: "20개 언어 push-to-talk 음성 입력. 활성화 키 재바인딩 가능.",
  },
];

const tipGroups: TipGroup[] = [
  {
    title: "프롬프팅 (Prompting)",
    tips: [
      {
        text: '"이 변경에 대해 나를 시험해봐, 통과 못하면 PR 만들지 마" 처럼 모델에게 도전을 걸어라.',
        by: "Boris Cherny",
      },
      {
        text: "어설픈 수정 뒤에는 \"지금 알게 된 걸 바탕으로 갈아엎고 우아한 해법으로 다시 만들어\"라고 지시하라.",
        by: "Boris",
      },
      {
        text: "버그를 마주치면 그냥 붙여넣고 \"고쳐\"라고만 해라. 어떻게 고칠지 마이크로매니지하지 말 것.",
        by: "Boris",
      },
    ],
  },
  {
    title: "계획·스펙 (Planning)",
    tips: [
      { text: "항상 plan mode로 시작하라.", by: "Boris" },
      {
        text: "작은 스펙으로 시작해 AskUserQuestion으로 클로드가 인터뷰하게 한 뒤, 새 세션에서 그 스펙으로 실행한다.",
        by: "Thariq",
      },
      {
        text: "단계별 게이트가 있는 계획을 만들고 각 단계마다 단위·자동화·통합 테스트를 끼워넣어라.",
        by: "Dex",
      },
      { text: "PRD보다 프로토타입. 20-30개 버전을 빠르게 만들며 잘라내라.", by: "Boris" },
    ],
  },
  {
    title: "컨텍스트 (Context)",
    tips: [
      {
        text: "1M 모델에서 컨텍스트 부패는 ~300-400k에서 시작된다. 지능에 민감한 작업은 그 이전에 끊어라.",
        by: "Thariq",
      },
      {
        text: '"Dumb zone"은 약 40% 컨텍스트에서 시작. 초보자는 40% 미만, 숙련자는 30% 미만으로 공격적으로 유지.',
        by: "Dex",
      },
      {
        text: "되돌리기(/rewind, Esc Esc)가 수정보다 낫다. 실패한 시도와 정정으로 컨텍스트를 더럽히지 마라.",
        by: "Thariq",
      },
      {
        text: "/compact에는 힌트를 줘라(\"auth 리팩터링에 집중하고 테스트 디버깅은 빼\"). 자동 compact는 가장 멍청해진 순간에 발화한다.",
        by: "Thariq",
      },
      {
        text: "컨텍스트 관리에 서브에이전트를 쓴다. \"이 도구 출력을 다시 볼까, 결론만 필요할까?\" 결론만 부모로 돌아온다.",
        by: "Thariq",
      },
    ],
  },
  {
    title: "세션 관리 (Session)",
    tips: [
      {
        text: "매 턴은 분기점이다. Continue / /rewind / /clear / /compact / Subagent 중 골라라.",
        by: "Thariq",
      },
      { text: "새 작업 = 새 세션. 진짜 새 작업이면 fresh session에서 시작한다.", by: "Thariq" },
      {
        text: "되돌리기 전에 \"여기서부터 요약해\"로 인수인계 메모를 쓰게 한다. 미래의 자기에게 보내는 메모.",
        by: "Thariq",
      },
      {
        text: "/compact는 모멘텀, /clear+brief는 통제 — 하이스테이크 전이에서는 후자가 낫다.",
        by: "Thariq",
      },
      {
        text: "여러 클로드를 동시에 굴릴 때는 /rename으로 라벨을 붙이고 /resume으로 이어붙여라.",
        by: "Cat Wu",
      },
    ],
  },
  {
    title: "CLAUDE.md · 규칙 (Memory)",
    tips: [
      {
        text: "CLAUDE.md는 파일당 200줄 이하 목표. humanlayer는 60줄 — 짧을수록 모델이 더 따른다.",
        by: "Boris / Dex",
      },
      {
        text: ".claude/rules/*.md는 자동 로드된다. paths: YAML frontmatter로 글롭 매칭일 때만 lazy-load.",
        by: "Claude Docs",
      },
      {
        text: "도메인 규칙은 <important if=\"...\"> 태그로 감싸라. 파일이 길어져도 무시되지 않는다.",
        by: "Dex",
      },
      {
        text: "어떤 개발자가 클로드를 켜고 \"테스트 돌려\"라고 하면 한 번에 돼야 한다. 안 되면 CLAUDE.md에 빌드/테스트 명령이 빠진 것이다.",
        by: "Dex",
      },
      {
        text: "harness가 강제할 수 있는 행동은 settings.json에 두라. \"Co-Authored-By 추가하지 마\"는 attribution.commit: \"\"가 결정론적이다.",
        by: "davila7",
      },
    ],
  },
  {
    title: "에이전트·커맨드·스킬 (Agents / Commands / Skills)",
    tips: [
      {
        text: "범용 \"qa\", \"backend engineer\" 대신 기능 특화 서브에이전트 + 점진적 공개 스킬 조합을 써라.",
        by: "Boris",
      },
      {
        text: "\"use subagents\"라고 말해 더 많은 컴퓨트를 던져라. 메인 컨텍스트는 깨끗하게 유지된다.",
        by: "Boris",
      },
      {
        text: "하루에 한 번 이상 반복하는 동작은 즉시 슬래시 커맨드 또는 스킬로 만든다. .claude/commands/는 git에 커밋된다.",
        by: "Boris",
      },
      {
        text: "Skills의 description은 요약이 아니라 트리거다. \"언제 발화해야 하는가?\"를 모델 시점으로 적어라.",
        by: "Thariq",
      },
      {
        text: "스킬에는 항상 Gotchas 섹션을 둬라. 클로드의 실패 패턴을 모은 곳이 가장 가치 있다.",
        by: "Thariq",
      },
      {
        text: "스킬에서 단계별로 레일을 깔지 마라. 목표와 제약만 주고 방법은 모델에게 맡긴다.",
        by: "Thariq",
      },
    ],
  },
  {
    title: "후크 (Hooks)",
    tips: [
      {
        text: "PostToolUse 후크로 자동 포맷. 모델이 80% 깔끔하게 만들고 후크가 마지막 10%를 잡는다.",
        by: "Boris",
      },
      {
        text: "권한 요청을 후크로 Opus에 라우팅해 공격 패턴을 스캔하고 안전한 것만 자동 승인.",
        by: "Boris",
      },
      {
        text: "Stop 후크로 턴 끝에 \"한 번 더 검증해\"를 살짝 밀어줄 수 있다.",
        by: "Boris",
      },
      {
        text: "PreToolUse 후크로 스킬 사용량을 측정해 인기/저활성 스킬을 찾아라.",
        by: "Thariq",
      },
    ],
  },
  {
    title: "워크플로우 (Workflows)",
    tips: [
      {
        text: "/model로 모델·추론 단계를 골라라. plan mode는 Opus, 코드는 Sonnet — 각자 강점을 살린다.",
        by: "Cat Wu",
      },
      {
        text: "thinking mode true + Output Style Explanatory로 ★ Insight를 보면서 모델 결정의 근거를 추적하라.",
        by: "Boris",
      },
      {
        text: "고난도엔 ultrathink 키워드. Opus 4.7의 adaptive thinking은 low/medium/high/xhigh/max 슬라이더로 조절.",
        by: "Boris",
      },
      {
        text: "/sandbox로 파일·네트워크 격리. 내부 통계로 권한 프롬프트 84% 감소.",
        by: "Boris / Cat",
      },
      {
        text: "ASCII 다이어그램을 적극 활용해 아키텍처를 모델과 함께 그려라.",
        by: "Boris",
      },
      {
        text: "/go 스킬을 만들어라. (1) e2e 테스트, (2) /simplify, (3) PR 생성. 자리 비워도 코드가 동작함을 보장.",
        by: "Boris",
      },
    ],
  },
  {
    title: "Git · PR",
    tips: [
      {
        text: "PR은 작고 한 가지에 집중. p50 = 118줄. 한 PR에 한 기능 — 리뷰·롤백이 쉬워진다.",
        by: "Boris",
      },
      {
        text: "항상 squash merge. 깨끗한 선형 히스토리, 기능당 한 커밋. revert / bisect가 단순.",
        by: "Boris",
      },
      { text: "최소 한 시간에 한 번은 커밋해라. 작업이 끝나면 즉시.", by: "Shayan" },
      {
        text: "동료의 PR에 @claude를 태그해 반복되는 리뷰 피드백을 lint 규칙으로 자동 생성한다.",
        by: "Boris",
      },
    ],
  },
  {
    title: "디버깅 (Debugging)",
    tips: [
      { text: "막히면 스크린샷을 클로드와 공유하는 것을 습관으로.", by: "Shayan" },
      {
        text: "Playwright/Chrome DevTools/Claude in Chrome MCP로 브라우저 콘솔 로그를 클로드가 직접 보게 한다.",
        by: "Claude Docs",
      },
      {
        text: "로그를 봐야 하는 터미널은 백그라운드 태스크로 돌려달라고 하라.",
        by: "Shayan",
      },
      {
        text: "에이전트 검색(glob+grep)이 RAG보다 낫다. 코드는 항상 드리프트하고 권한이 복잡하다.",
        by: "Boris",
      },
      { text: "/doctor로 설치·인증·설정 이슈를 한 번에 진단.", by: "Shayan" },
    ],
  },
  {
    title: "유틸리티 · 데일리",
    tips: [
      { text: "IDE 대신 iTerm/Ghostty/tmux 같은 순수 터미널을 권장.", by: "Boris" },
      { text: "/voice 또는 Wispr Flow로 음성 프롬프팅 — 생산성 10배.", by: "Boris" },
      { text: "Claude Code는 매일 업데이트.", by: "Shayan" },
      { text: "하루를 changelog 읽기로 시작.", by: "Shayan" },
    ],
  },
];

export default function BestPracticePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Claude Code", href: "/claude-code" },
          { label: "Claude Code 베스트 프랙티스" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        Claude Code 베스트 프랙티스
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-6">
        vibe coding에서 agentic engineering으로 — Shan Raisshan이 큐레이션한 핵심
        개념, 오케스트레이션 패턴, 그리고 Boris·Thariq 등 Anthropic 팀과
        커뮤니티가 검증한 82가지 실전 팁을 한 페이지로 정리했습니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          한 사람의 팁이 아니라, 커뮤니티가 합의한 패턴.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          Subagents · Skills · Hooks · MCP · Routines를 어디에 둘지, Research →
          Plan → Execute → Review → Ship 흐름을 어떻게 굴릴지 — 도구를 &quot;쌓는
          순서&quot;에 대한 합의된 지도입니다.
        </p>
      </div>

      {/* Quote */}
      <section className="mb-16" id="opening-quote">
        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-1" />
            <p className="text-base font-semibold text-ds-on-surface italic leading-relaxed">
              &quot;practice makes claude perfect.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Concepts */}
      <section className="mb-16" id="concepts">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          1. 핵심 개념 — 도구함의 구성 요소
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Claude Code를 확장하는 11개의 빌딩 블록. 각각의 위치와 역할을 알면
          &quot;이 자동화는 어디에 속하지?&quot; 라는 질문에 즉답할 수 있습니다.
        </p>

        <div className="space-y-3">
          {concepts.map((c) => (
            <div key={c.name} className="bg-ds-surface-low p-5 rounded-2xl">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="font-bold text-ds-on-surface">{c.name}</h3>
                <code className="text-xs text-ds-on-surface-variant font-mono shrink-0">
                  {c.location}
                </code>
              </div>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hot Features */}
      <section className="mb-16" id="hot-features">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          2. 최신 기능 — 지금 흐름을 바꾸는 것들
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          최근 릴리스에서 주목할 기능들. 클라우드 자동화(Routines, Ultrareview),
          새로운 권한 모델(Auto Mode), 멀티 에이전트(Agent Teams) — 작년 워크플로우를
          그대로 두면 빠르게 뒤처집니다.
        </p>

        <div className="space-y-3">
          {hotFeatures.map((f) => (
            <div key={f.name} className="bg-ds-surface-low p-5 rounded-2xl">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="font-bold text-ds-on-surface">{f.name}</h3>
                <code className="text-xs text-ds-on-surface-variant font-mono shrink-0">
                  {f.location}
                </code>
              </div>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Orchestration Pattern */}
      <section className="mb-16" id="orchestration">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          3. 오케스트레이션 패턴 — Command → Agent → Skill
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          이 저장소가 제안하는 핵심 아키텍처는 단순합니다. 사용자는{" "}
          <span className="font-semibold text-ds-on-surface">Command</span>로
          진입하고, Command는 격리된 컨텍스트의{" "}
          <span className="font-semibold text-ds-on-surface">Agent</span>를 호출하며,
          Agent는 점진적 공개를 가진{" "}
          <span className="font-semibold text-ds-on-surface">Skill</span>을 통해
          구체적인 지식을 끌어다 씁니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              role: "Command",
              what: "사용자 진입점",
              detail:
                "프롬프트 템플릿. 워크플로우의 시작 — \"무엇을 할 것인가\"를 표현.",
            },
            {
              role: "Agent",
              what: "격리된 실행자",
              detail:
                "별도 컨텍스트·도구·권한·모델. 메인 세션을 오염시키지 않고 일을 처리.",
            },
            {
              role: "Skill",
              what: "지식 라이브러리",
              detail:
                "필요할 때만 로드되는 SKILL.md + 스크립트. 점진적 공개로 토큰 절약.",
            },
          ].map((item) => (
            <div key={item.role} className="bg-ds-surface-low p-5 rounded-2xl">
              <span className="inline-block px-2 py-0.5 bg-ds-primary text-white rounded text-xs font-bold mb-2">
                {item.role}
              </span>
              <p className="text-sm font-semibold text-ds-on-surface mb-1">
                {item.what}
              </p>
              <p className="text-xs text-ds-on-surface-variant leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Paradigm */}
      <section className="mb-16" id="workflow-paradigm">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          4. 워크플로우 패러다임 — Research → Plan → Execute → Review → Ship
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Superpowers, Spec Kit, BMAD-METHOD, gstack, HumanLayer 등 17만 스타급
          주요 워크플로우 저장소들이 모두 이 다섯 단계 패턴으로 수렴합니다.
          이름과 슬래시 커맨드가 다를 뿐, 본질은 같습니다.
        </p>

        <div className="space-y-3">
          {[
            {
              step: "1",
              name: "Research",
              desc: "코드베이스 탐색, 의도 파악, 제약 수집. 이 단계 부족이 가장 큰 실패 원인.",
            },
            {
              step: "2",
              name: "Plan",
              desc: "단계별 게이트 + 단위/자동화/통합 테스트가 끼어든 명세. plan mode 또는 /speckit.plan.",
            },
            {
              step: "3",
              name: "Execute",
              desc: "Subagents 분기, /tdd, /implement_plan. 백그라운드 + worktree 병렬화.",
            },
            {
              step: "4",
              name: "Review",
              desc: "/code-review, cross-model(Codex 등) QA, /ultrareview로 멀티 에이전트 검증.",
            },
            {
              step: "5",
              name: "Ship",
              desc: "squash merge, PR 사이즈 작게(p50 118줄), /go 스킬로 e2e+simplify+PR 일괄.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-ds-surface-low p-5 rounded-2xl flex items-start gap-4"
            >
              <span className="w-10 h-10 bg-ds-primary text-white flex items-center justify-center rounded-lg text-sm font-bold shrink-0">
                {item.step}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-ds-on-surface mb-1">{item.name}</h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mb-16" id="tips">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          5. 베스트 프랙티스 핵심 — 카테고리별 정수
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          82개 팁 중 가장 자주 인용되는 것들을 11개 주제로 묶었습니다. 출처는
          Boris Cherny(Claude Code 메이커), Thariq(Anthropic), Cat Wu, Dex
          Horthy(humanlayer) 등 만든 사람과 운영자들입니다.
        </p>

        <div className="space-y-8">
          {tipGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-bold text-ds-on-surface mb-3">
                {group.title}
              </h3>
              <div className="space-y-2">
                {group.tips.map((tip, i) => (
                  <div
                    key={i}
                    className="bg-ds-surface-low p-4 rounded-xl flex items-start gap-3"
                  >
                    <span className="w-6 h-6 bg-ds-primary/10 text-ds-primary flex items-center justify-center rounded text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                        {tip.text}
                      </p>
                      {tip.by && (
                        <p className="text-xs text-ds-on-surface-variant/70 mt-1">
                          — {tip.by}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Insight */}
      <section className="mb-16" id="closing">
        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-1">정리</p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                좋은 사용자는 도구를 외우지 않고, 도구의{" "}
                <span className="font-semibold text-ds-on-surface">위치</span>를
                압니다. 어디까지가 settings.json이고, 어디부터가 CLAUDE.md이며,
                어디서부터 Skill인지 — 그 경계를 따라 자동화를 쌓아가는 것이 곧
                agentic engineering입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Source */}
      <section className="mb-16" id="source">
        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            Source
          </p>
          <a
            href="https://github.com/shanraisshan/claude-code-best-practice"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-ds-on-surface/10 flex items-center justify-center rounded-lg shrink-0">
              <svg
                className="w-5 h-5 text-ds-on-surface"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                claude-code-best-practice — from vibe coding to agentic engineering
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Shan Raisshan | github.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
