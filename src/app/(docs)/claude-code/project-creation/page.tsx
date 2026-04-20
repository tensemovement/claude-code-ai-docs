import { Breadcrumb } from "@/components/layout/breadcrumb";
import {
  Bot,
  Puzzle,
  Users,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function ProjectCreationPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Claude Code", href: "/claude-code" },
          { label: "프로젝트 생성 흐름" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        프로젝트 생성 흐름
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        Claude Code를 활용하여 프로젝트를 생성하고 관리하는 전체 흐름을
        이해합니다. 환경 초기화부터 진행 전략, CLAUDE.md 관리, 도구 활용까지
        실전에 필요한 핵심 개념을 정리합니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          Claude Code는 AI Agentic Coding Tool이다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          클로드 코드 문서를 정독하는 것이 중요하다.
        </p>
        <a
          href="https://code.claude.com/docs/ko"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ds-primary mt-3 hover:underline"
        >
          공식 문서 보기
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Section 1: ~/.claude 리셋 */}
      <section className="mb-16" id="reset">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          ~/.claude 리셋의 중요성
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Claude Code가 이상하게 동작할 때 가장 확실한 해결책은{" "}
          <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">
            ~/.claude
          </code>{" "}
          디렉토리를 리셋하는 것입니다.
        </p>

        <div className="space-y-3">
          {[
            "잘못 쌓인 설정, 오래된 캐시, 꼬인 인증 정보 등을 깔끔하게 리셋",
            "실험적으로 건드린 settings.json이 문제를 일으킬 때",
            "전역 CLAUDE.md에 잘못된 규칙이 누적됐을 때",
          ].map((text) => (
            <div
              key={text}
              className="flex items-start gap-3 bg-ds-surface-lowest p-4 rounded-xl"
            >
              <CheckCircle2 className="w-4 h-4 text-ds-primary shrink-0 mt-0.5" />
              <p className="text-sm text-ds-on-surface-variant">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: 최초 프로젝트 생성 */}
      <section className="mb-16" id="project-init">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          최초 프로젝트를 어떻게 생성할 것인가?
        </h2>

        <div className="space-y-4 mb-8">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-ds-primary text-white flex items-center justify-center rounded-lg text-sm font-bold">
                1
              </span>
              <h3 className="font-bold text-ds-on-surface">
                프레임워크와 인프라 결정
              </h3>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              어떤 프레임워크와 인프라 기반으로 만들지를 먼저 고민하고
              요청합니다.
            </p>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-ds-primary text-white flex items-center justify-center rounded-lg text-sm font-bold">
                2
              </span>
              <h3 className="font-bold text-ds-on-surface">
                Plan Mode로 시작
              </h3>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              바로 개발에 들어가지 않고 Plan Mode를 활용하여 구조를 먼저
              설계합니다.
            </p>
          </div>
        </div>

        {/* Example prompt */}
        <div className="bg-ds-surface-lowest border border-ds-outline-variant/15 rounded-xl overflow-hidden">
          <div className="px-4 py-2 bg-ds-surface-low/50">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider">
              Example Prompt
            </p>
          </div>
          <pre className="px-4 py-4 text-sm text-ds-on-surface-variant font-mono leading-relaxed overflow-x-auto">
            {`Spring Initializr를 이용해서 Spring Boot 4 최신버전,
JPA/H2/Lombok 을 사용하는 프로젝트를 생성해줘
- Gradle Kotlin DSL
- package: moz.ai.reminder
- project name: mozreminder`}
          </pre>
        </div>
      </section>

      {/* Section 3: 진행 순서 */}
      <section className="mb-16" id="workflow">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          진행 순서
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          어떤 방향으로 진행할지는 프로젝트의 범위에 따라 결정합니다.
        </p>

        <div className="space-y-3 mb-8">
          {[
            {
              level: "1",
              flow: "prompt → 개발",
              desc: "간단한 작업이나 빠른 프로토타이핑",
            },
            {
              level: "2",
              flow: "prompt → plan → 개발",
              desc: "중간 규모의 기능 구현",
            },
            {
              level: "3",
              flow: "prompt → prd.md → 개발",
              desc: "요구사항을 문서화한 후 개발",
            },
            {
              level: "4",
              flow: "prompt → spec → implementation plan → task → 개발 (SDD)",
              desc: "체계적인 대규모 개발",
            },
            {
              level: "5",
              flow: "prompt → slice별 개발, 검증, 가이드 갱신",
              desc: "User layer 등 슬라이스 단위 반복 개발",
            },
          ].map((item) => (
            <div
              key={item.level}
              className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                item.level === "4" || item.level === "5"
                  ? "bg-ds-primary-container/20 border-l-4 border-ds-primary"
                  : "bg-ds-surface-lowest"
              }`}
            >
              <span className="w-7 h-7 bg-ds-primary/10 text-ds-primary flex items-center justify-center rounded-md text-sm font-bold shrink-0">
                {item.level}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-ds-on-surface font-mono break-all">
                  {item.flow}
                </p>
                <p className="text-sm text-ds-on-surface-variant mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-1">추천 방식</p>
              <p className="text-sm text-ds-on-surface-variant">
                4번과 5번의 조합이 좋은 방법입니다. spec.md를 기반으로 phase별
                개발을 진행하고, 각 phase 마지막에 Acceptance Criteria를 두어
                완료 여부를 판단합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Phase approach details */}
        <div className="mt-6 space-y-4">
          <div className="bg-ds-surface-lowest border border-ds-outline-variant/15 rounded-xl overflow-hidden">
            <div className="px-4 py-2 bg-ds-surface-low/50">
              <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider">
                PRD → Spec 변환 프롬프트 예시
              </p>
            </div>
            <pre className="px-4 py-4 text-sm text-ds-on-surface-variant font-mono leading-relaxed overflow-x-auto">
              {`prd.md 를 spec.md 로 변경해줘
spec.md 의 내용을 단순한 것부터 점점 기능을 추가하는
방식으로 개발하도록 phase 를 구분해서 plan.md 에
개발계획을 넣어줘. 기술에 대한 내용도 같이 넣어줘.`}
            </pre>
          </div>

          <div className="bg-ds-surface-lowest border border-ds-outline-variant/15 rounded-xl overflow-hidden">
            <div className="px-4 py-2 bg-ds-surface-low/50">
              <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider">
                Phase별 개발 진행 프롬프트 예시
              </p>
            </div>
            <pre className="px-4 py-4 text-sm text-ds-on-surface-variant font-mono leading-relaxed overflow-x-auto">
              {`@plan.md 를 구현하는 세부 작업을 정리해서
tasks.md 리스트를 만들고, 체크 가능하도록 해줘.

이제 @tasks.md의 phase 1 기능 전체를 개발하고,
task 하나가 완료되면 tasks.md 파일에 check 해줘

phase2 ~ phase5 까지 계속 진행하고
phase 하나 마치면 commit 해줘`}
            </pre>
          </div>
        </div>
      </section>

      {/* Section 4: CLAUDE.md 관리 */}
      <section className="mb-16" id="claude-md">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          CLAUDE.md 관리
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          CLAUDE.md는 프로젝트의 규칙과 컨벤션을 AI에게 전달하는 핵심
          파일입니다. 효과적으로 관리하는 것이 프로젝트 품질에 직결됩니다.
        </p>

        <div className="space-y-4 mb-8">
          {/* Warning */}
          <div className="bg-red-50/60 border-l-4 border-red-500/70 p-6 rounded-r-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500/80 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-ds-on-surface mb-1">주의사항</p>
                <p className="text-sm text-ds-on-surface-variant">
                  CLAUDE.md에 AI가 직접 작성한 내용이 너무 길어지면 실행 시
                  누락되는 경우가 생깁니다. 직접 파일을 확인해서 AI가 알아서 잘
                  하는 내용은 제거하세요.
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-ds-surface-low p-6 rounded-2xl">
              <h3 className="font-bold text-ds-on-surface mb-3">
                저장 위치
              </h3>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                코딩 관례는{" "}
                <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">
                  CLAUDE.md
                </code>
                에 명시적으로 남기는 게 중요합니다.{" "}
                <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">
                  ~/.claude/projects
                </code>
                의 MEMORY.md에도 남지만 CLAUDE.md에 남기는 것이 더 확실합니다.
              </p>
            </div>
            <div className="bg-ds-surface-low p-6 rounded-2xl">
              <h3 className="font-bold text-ds-on-surface mb-3">
                커밋 컨벤션
              </h3>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                커밋 컨벤션처럼 매번 요청할 수 없는 규칙은 CLAUDE.md에
                기술합니다. 반복되는 작업이 있다면 Skill로 만드는 것도
                고려하세요.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-ds-surface-lowest border border-ds-outline-variant/15 rounded-xl overflow-hidden">
          <div className="px-4 py-2 bg-ds-surface-low/50">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider">
              CLAUDE.md 업데이트 흐름
            </p>
          </div>
          <div className="p-4">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                "요청한 대로 소스 확인",
                "다듬기",
                "CLAUDE.md 규칙 업데이트",
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="bg-ds-primary/10 text-ds-primary px-3 py-1.5 rounded-lg font-medium">
                    {step}
                  </span>
                  {i < 2 && (
                    <ArrowRight className="w-4 h-4 text-ds-on-surface-variant/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 도구, 에이전트, 스킬 */}
      <section className="mb-16" id="tools-agents-skills">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          도구, 에이전트, 스킬
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          Claude Code가 가진 핵심 구성 요소들입니다. 각각의 역할을 이해하면 더
          효과적으로 활용할 수 있습니다.
        </p>

        {/* Tools */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-ds-on-surface mb-4">
            도구 (Tools)
          </h3>
          <div className="bg-ds-surface-low rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ds-surface-lowest/60">
                  <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                    도구
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                    설명
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ds-outline-variant/10">
                {[
                  ["Bash", "셸 명령 실행"],
                  ["Read", "파일 읽기 (이미지, PDF, 노트북 포함)"],
                  ["Write", "파일 생성/덮어쓰기"],
                  ["Edit", "파일 내 문자열 치환 (부분 수정)"],
                  ["Glob", "파일 패턴 검색 (예: **/*.java)"],
                  ["Grep", "파일 내용 정규식 검색"],
                  ["Agent", "서브 에이전트 실행"],
                  ["Skill", "등록된 스킬 호출"],
                  ["ToolSearch", "지연 로드된 도구 스키마 조회"],
                ].map(([tool, desc]) => (
                  <tr key={tool}>
                    <td className="px-4 py-3 font-mono font-semibold text-ds-primary">
                      {tool}
                    </td>
                    <td className="px-4 py-3 text-ds-on-surface-variant">
                      {desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ds-on-surface-variant mt-3">
            이 외에 AskUserQuestion, WebFetch, WebSearch, TaskCreate 등의 지연
            로드 도구가 필요 시 활성화됩니다.
          </p>
        </div>

        {/* Agents */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-ds-on-surface mb-4">
            에이전트 (Agents)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "general-purpose",
                desc: "복잡한 멀티스텝 작업, 코드 검색, 리서치 (모든 도구 사용 가능)",
              },
              {
                name: "Explore",
                desc: "코드베이스 빠른 탐색 — 파일 패턴 검색, 키워드 검색, 구조 파악",
              },
              {
                name: "Plan",
                desc: "구현 계획 설계 — 아키텍처 분석, 단계별 계획 수립",
              },
              {
                name: "claude-code-guide",
                desc: "Claude Code/Agent SDK/API 관련 질문 답변",
              },
            ].map((agent) => (
              <div
                key={agent.name}
                className="bg-ds-surface-lowest p-5 rounded-xl"
              >
                <p className="font-mono font-bold text-ds-on-surface mb-1">
                  {agent.name}
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {agent.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-bold text-ds-on-surface mb-4">
            스킬 (Skills)
          </h3>
          <div className="bg-ds-surface-low rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ds-surface-lowest/60">
                  <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                    스킬
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                    용도
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ds-outline-variant/10">
                {[
                  ["update-config", "settings.json 설정 변경 (권한, 환경변수, 훅 등)"],
                  ["keybindings-help", "키보드 단축키 커스터마이징"],
                  ["simplify", "변경된 코드의 품질/효율성 리뷰 및 수정"],
                  ["loop", "반복 실행 스케줄링 (예: /loop 5m /foo)"],
                  ["claude-api", "Claude API / Anthropic SDK 코드 작성"],
                  ["/skill-creator", "커스텀 스킬 생성"],
                ].map(([skill, desc]) => (
                  <tr key={skill}>
                    <td className="px-4 py-3 font-mono font-semibold text-ds-primary">
                      {skill}
                    </td>
                    <td className="px-4 py-3 text-ds-on-surface-variant">
                      {desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-ds-on-surface-variant mt-4">
            반복되는 작업이 있을 경우{" "}
            <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-xs font-mono">
              /skill-creator
            </code>
            를 사용하여 커스텀 스킬을 만들 수 있습니다.
          </p>
        </div>
      </section>

      {/* Section 6: Plugin */}
      <section className="mb-16" id="plugin">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          Plugin
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          플러그인은{" "}
          <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">
            .claude/
          </code>{" "}
          폴더에 직접 설정하는 것들(skills, hooks, MCP 서버 등)을 하나의
          패키지로 묶어서 설치·공유·버전관리 할 수 있게 만든 배포 단위입니다.
        </p>

        <div className="bg-red-50/60 border-l-4 border-red-500/70 p-6 rounded-r-xl mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500/80 shrink-0 mt-0.5" />
            <p className="text-sm text-ds-on-surface-variant">
              아무 플러그인을 막 설치해서 사용하지 말고, 클로드 코드팀이 배포한{" "}
              <span className="font-semibold text-ds-on-surface">
                공식 플러그인
              </span>
              을 위주로 사용하도록 합니다.
            </p>
          </div>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            공식 플러그인 저장소
          </p>
          <a
            href="https://github.com/anthropics/claude-plugins-official"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-ds-surface-lowest flex items-center justify-center rounded-lg shrink-0">
              <Puzzle className="w-5 h-5 text-ds-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                anthropics/claude-plugins-official
              </p>
              <p className="text-xs text-ds-on-surface-variant">github.com</p>
            </div>
          </a>
        </div>
      </section>

      {/* Section 7: Agent & Agent Team */}
      <section className="mb-16" id="agent-team">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          Agent & Agent Team
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          커스텀 에이전트를 만들어 특정 작업을 자동화하고, Agent Team으로
          구성하면 TDD 등 복잡한 워크플로우도 자동으로 수행할 수 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Custom Agent */}
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-5 h-5 text-ds-primary" />
              <h3 className="font-bold text-ds-on-surface">
                커스텀 Agent 만들기
              </h3>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-4">
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">
                /agents
              </code>{" "}
              명령으로 새로운 에이전트를 생성할 수 있습니다. 에이전트가 무엇을
              하고 언제 사용해야 하는지 상세히 기술하면 됩니다.
            </p>
            <div className="bg-ds-surface-lowest/60 rounded-lg p-4">
              <p className="text-xs text-ds-secondary font-bold uppercase tracking-wider mb-1">
                Example
              </p>
              <p className="text-sm text-ds-on-surface-variant">
                코드를 분석해서 품질을 평가하고 리포트를 생성하는 에이전트 —
                가독성, 아키텍처, 테스트, 보안 등을 분석하고 점수를 매김
              </p>
            </div>
          </div>

          {/* Agent Team */}
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-ds-primary" />
              <h3 className="font-bold text-ds-on-surface">Agent Team</h3>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-4">
              환경변수{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">
                CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS
              </code>
              를{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">
                1
              </code>
              로 설정하여 활성화합니다. settings.json의{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">
                env
              </code>{" "}
              필드에서 설정할 수 있습니다.
            </p>
            <div className="bg-ds-surface-lowest/60 rounded-lg p-4">
              <p className="text-xs text-ds-secondary font-bold uppercase tracking-wider mb-1">
                TDD Team 예시
              </p>
              <p className="text-sm text-ds-on-surface-variant">
                Red(실패 테스트 작성) → Green(테스트 통과 코드) →
                Refactor(리팩터링) 사이클을 팀이 자동 수행
              </p>
            </div>
          </div>
        </div>

        <div className="bg-ds-surface-lowest/50 border-l-4 border-ds-outline-variant/40 p-6 rounded-r-xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            생성한 팀을 다른 세션에서도 사용하려면{" "}
            <span className="font-semibold text-ds-on-surface">
              커스텀 에이전트(스킬)
            </span>
            를 구성해야 합니다.
          </p>
        </div>
      </section>

      {/* Source */}
      <section className="mb-16" id="source">
        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            Source
          </p>
          <a
            href="https://www.youtube.com/watch?v=gdg4DBcakIg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-red-500/10 flex items-center justify-center rounded-lg shrink-0">
              <svg
                className="w-5 h-5 text-red-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                클로드 코드를 이용해 스프링 앱 개발하기 - Live
              </p>
              <p className="text-xs text-ds-on-surface-variant">youtube.com</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
