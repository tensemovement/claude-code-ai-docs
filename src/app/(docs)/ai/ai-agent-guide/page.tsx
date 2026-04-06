import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  Target,
  LayoutGrid,
  Users,
  BarChart3,
  TrendingUp,
  Bot,
  ArrowUpRight,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
} from "lucide-react";

export default function AIAgentGuidePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "AI", href: "/ai" },
          { label: "AI Agent 관리 가이드" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        AI Agent 관리 가이드
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        Peter Drucker의 경영자 5대 기능을 AI Agent 활용에 적용합니다. AI
        Agent를 단순히 사용하는 것이 아니라, 관리자의 관점에서 체계적으로
        운용하는 프레임워크를 제시합니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          AI Agent는 도구가 아니라 팀원이다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          Drucker가 말한 관리자의 역할 — 계획, 조직, 통합, 측정, 개발 — 은 AI
          Agent를 다룰 때도 그대로 적용됩니다.
        </p>
      </div>

      {/* Overview: 5 Functions */}
      <section className="mb-16" id="overview">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          Drucker의 5대 기능과 AI Agent
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          Peter Drucker는 경영자의 핵심 기능을 5가지로 정의했습니다. AI Agent를
          효과적으로 활용하려면 이 다섯 가지 기능을 AI 관리의 렌즈로 재해석해야
          합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {[
            {
              num: "01",
              icon: Target,
              title: "Plan",
              subtitle: "계획",
              color: "bg-emerald-50 dark:bg-emerald-950/30",
              border: "border-emerald-500",
            },
            {
              num: "02",
              icon: LayoutGrid,
              title: "Organize",
              subtitle: "조직",
              color: "bg-teal-50 dark:bg-teal-950/30",
              border: "border-teal-500",
            },
            {
              num: "03",
              icon: Users,
              title: "Integrate",
              subtitle: "통합",
              color: "bg-cyan-50 dark:bg-cyan-950/30",
              border: "border-cyan-500",
            },
            {
              num: "04",
              icon: BarChart3,
              title: "Measure",
              subtitle: "측정",
              color: "bg-sky-50 dark:bg-sky-950/30",
              border: "border-sky-500",
            },
            {
              num: "05",
              icon: TrendingUp,
              title: "Develop",
              subtitle: "개발",
              color: "bg-blue-50 dark:bg-blue-950/30",
              border: "border-blue-500",
            },
          ].map((item) => (
            <div
              key={item.num}
              className={`${item.color} border-t-2 ${item.border} p-4 rounded-b-xl text-center`}
            >
              <p className="text-xs font-bold text-ds-on-surface-variant mb-2">
                {item.num}
              </p>
              <item.icon className="w-6 h-6 text-ds-primary mx-auto mb-2" />
              <p className="text-sm font-bold text-ds-on-surface">
                {item.title}
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1: Plan */}
      <section className="mb-16" id="plan">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Target className="w-5 h-5 text-ds-primary" />
          </div>
          <div>
            <p className="text-xs font-bold text-ds-primary uppercase tracking-[0.15em]">
              01 Plan
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
              목표를 설정하고 업무를 정의하라
            </h2>
          </div>
        </div>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          Drucker는 관리자가 목표를 설정하고, 달성에 필요한 작업을 결정해야
          한다고 했습니다. AI Agent에게도 명확한 목표와 범위를 정의해야 합니다.
        </p>

        <div className="bg-ds-surface-low p-8 rounded-2xl mb-6">
          <h3 className="text-lg font-bold text-ds-on-surface mb-4">
            AI Agent 계획 수립 원칙
          </h3>
          <ul className="space-y-3">
            {[
              "Agent가 달성해야 할 구체적인 목표를 먼저 정의한다",
              "하나의 Agent에 하나의 명확한 역할을 부여한다",
              "Agent가 다룰 수 있는 범위와 다룰 수 없는 범위를 구분한다",
              "성공과 실패의 기준을 미리 설정한다",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-ds-on-surface-variant"
              >
                <ArrowUpRight className="w-4 h-4 text-ds-primary shrink-0 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/60 dark:bg-red-950/20 p-6 rounded-xl border-l-4 border-red-500/70">
            <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">
              Bad
            </p>
            <p className="text-sm text-ds-on-surface-variant">
              &ldquo;이 코드 전체를 리팩토링해줘&rdquo; — 범위가 모호하고 목표가
              불명확
            </p>
          </div>
          <div className="bg-ds-primary-container/20 p-6 rounded-xl border-l-4 border-ds-primary">
            <p className="text-xs font-bold text-ds-primary uppercase tracking-wider mb-2">
              Good
            </p>
            <p className="text-sm text-ds-on-surface-variant">
              &ldquo;이 함수의 응답 시간을 50% 줄이기 위해 캐싱 레이어를
              추가해줘&rdquo; — 목표와 방법이 명확
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Organize */}
      <section className="mb-16" id="organize">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <LayoutGrid className="w-5 h-5 text-ds-primary" />
          </div>
          <div>
            <p className="text-xs font-bold text-ds-primary uppercase tracking-[0.15em]">
              02 Organize
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
              업무를 나누고 적합한 Agent를 배치하라
            </h2>
          </div>
        </div>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          업무를 작업 단위로 분해하고, 각 작업에 적합한 Agent를 선택하여
          배치합니다. 모든 일을 하나의 Agent에 맡기는 것은 비효율적입니다.
        </p>

        <div className="bg-ds-surface-low p-8 rounded-2xl mb-6">
          <h3 className="text-lg font-bold text-ds-on-surface mb-4">
            Agent 조직화 전략
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "업무 분해",
                desc: "복잡한 작업을 독립적인 하위 작업으로 나눈다. 각 하위 작업은 하나의 Agent가 처리할 수 있는 크기여야 한다.",
              },
              {
                title: "Agent 선택",
                desc: "코딩에는 코딩 Agent, 리서치에는 검색 Agent, 문서 작성에는 문서 Agent. 특화된 Agent가 범용 Agent보다 낫다.",
              },
              {
                title: "권한 설정",
                desc: "Agent가 접근할 수 있는 파일, API, 리소스의 범위를 명확히 한다. 최소 권한 원칙을 적용한다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-ds-surface-lowest/60 p-4 rounded-xl"
              >
                <div className="w-2 h-2 bg-ds-primary rounded-full shrink-0 mt-2" />
                <div>
                  <p className="font-bold text-ds-on-surface text-sm mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Integrate */}
      <section className="mb-16" id="integrate">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Users className="w-5 h-5 text-ds-primary" />
          </div>
          <div>
            <p className="text-xs font-bold text-ds-primary uppercase tracking-[0.15em]">
              03 Integrate
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
              인간과 Agent를 하나의 팀으로 통합하라
            </h2>
          </div>
        </div>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          Drucker는 동기 부여와 효과적인 커뮤니케이션을 통해 사람들을 하나의
          팀으로 만들라고 했습니다. AI Agent와의 협업에서도 원활한 소통 구조가
          핵심입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-ds-surface-low p-8 rounded-2xl hover:bg-ds-surface-high transition-colors group">
            <h3 className="text-lg font-bold text-ds-on-surface mb-2 group-hover:text-ds-primary transition-colors">
              컨텍스트 공유
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-4">
              Agent에게 프로젝트의 배경, 코드 컨벤션, 아키텍처 결정 사항을
              충분히 전달합니다. CLAUDE.md, AGENTS.md 같은 프로젝트 문서가 이
              역할을 합니다.
            </p>
            <div className="bg-ds-surface-lowest/60 rounded-lg p-4">
              <p className="text-xs text-ds-secondary font-bold uppercase tracking-wider mb-1">
                Tip
              </p>
              <p className="text-sm text-ds-on-surface-variant">
                프로젝트의 규칙과 컨텍스트를 문서화할수록 Agent의 출력 품질이
                올라갑니다.
              </p>
            </div>
          </div>

          <div className="bg-ds-surface-low p-8 rounded-2xl hover:bg-ds-surface-high transition-colors group">
            <h3 className="text-lg font-bold text-ds-on-surface mb-2 group-hover:text-ds-primary transition-colors">
              피드백 루프
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-4">
              Agent의 출력을 검토하고, 수정 방향을 제시하는 반복적인 피드백
              과정을 구축합니다. 한 번에 완벽한 결과를 기대하지 않습니다.
            </p>
            <div className="bg-ds-surface-lowest/60 rounded-lg p-4">
              <p className="text-xs text-ds-secondary font-bold uppercase tracking-wider mb-1">
                Tip
              </p>
              <p className="text-sm text-ds-on-surface-variant">
                Agent의 작업 결과를 코드 리뷰하듯 검토하면 품질과 신뢰도가 모두
                향상됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-red-50/60 dark:bg-red-950/20 border-l-4 border-red-500/70 p-6 rounded-r-xl mt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500/80 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-1">
                자동 조종 모드의 함정
              </p>
              <p className="text-sm text-ds-on-surface-variant">
                Agent에게 모든 것을 맡기고 결과만 받는 것은 위험합니다. 관리자는
                항상 방향을 제시하고, 중간 결과를 확인하며, 필요할 때 개입해야
                합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Measure */}
      <section className="mb-16" id="measure">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <BarChart3 className="w-5 h-5 text-ds-primary" />
          </div>
          <div>
            <p className="text-xs font-bold text-ds-primary uppercase tracking-[0.15em]">
              04 Measure
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
              성과를 측정하고 개선점을 파악하라
            </h2>
          </div>
        </div>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          Drucker는 각 팀원에게 목표를 설정하고 진행 상황을 측정하라고
          했습니다. AI Agent의 성과도 정량적으로 측정해야 개선할 수 있습니다.
        </p>

        <div className="bg-ds-surface-low p-8 rounded-2xl mb-6">
          <h3 className="text-lg font-bold text-ds-on-surface mb-4">
            AI Agent 성과 측정 지표
          </h3>
          <div className="space-y-3">
            {[
              {
                label: "정확도",
                desc: "Agent가 생성한 코드/콘텐츠의 정확성과 오류율",
              },
              {
                label: "효율성",
                desc: "수동 작업 대비 시간 절감 비율과 반복 작업 감소량",
              },
              {
                label: "자율성",
                desc: "인간 개입 없이 완료한 작업의 비율",
              },
              {
                label: "일관성",
                desc: "코드 스타일, 품질 기준, 프로젝트 규칙 준수 정도",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-ds-surface-lowest"
              >
                <div className="flex-1">
                  <p className="font-bold text-ds-on-surface text-sm">
                    {item.label}
                  </p>
                  <p className="text-sm text-ds-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ds-surface-low/50 border-l-4 border-ds-outline-variant/40 p-6 rounded-r-xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            측정의 목적은 Agent를 평가하는 것이 아니라,{" "}
            <span className="font-semibold text-ds-on-surface">
              프롬프트와 워크플로우를 개선
            </span>
            하는 데 있습니다. 낮은 성과는 Agent의 한계가 아니라 지시의 부정확함을
            의미할 수 있습니다.
          </p>
        </div>
      </section>

      {/* Section 5: Develop */}
      <section className="mb-16" id="develop">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <TrendingUp className="w-5 h-5 text-ds-primary" />
          </div>
          <div>
            <p className="text-xs font-bold text-ds-primary uppercase tracking-[0.15em]">
              05 Develop
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
              Agent와 함께 성장하라
            </h2>
          </div>
        </div>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          Drucker는 팀원의 개인적, 직업적 성장을 돕는 것이 관리자의 마지막
          기능이라고 했습니다. AI Agent 시대에는 Agent의 역량을 확장하는 동시에,
          관리자 자신도 성장해야 합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-ds-surface-low p-8 rounded-2xl">
            <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg mb-4">
              <Bot className="w-5 h-5 text-ds-primary" />
            </div>
            <h3 className="text-lg font-bold text-ds-on-surface mb-2">
              Agent 역량 확장
            </h3>
            <ul className="space-y-2">
              {[
                "프롬프트를 반복 개선하여 출력 품질을 높인다",
                "프로젝트 문서(CLAUDE.md)를 지속적으로 업데이트한다",
                "새로운 도구와 MCP 서버를 연결해 Agent의 능력을 확장한다",
                "성공한 패턴을 템플릿화하여 재사용한다",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-ds-on-surface-variant"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-ds-primary shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ds-surface-low p-8 rounded-2xl">
            <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg mb-4">
              <Lightbulb className="w-5 h-5 text-ds-primary" />
            </div>
            <h3 className="text-lg font-bold text-ds-on-surface mb-2">
              관리자의 성장
            </h3>
            <ul className="space-y-2">
              {[
                "AI의 강점과 한계를 정확히 파악하는 판단력을 키운다",
                "더 높은 수준의 추상화와 설계 능력에 집중한다",
                "Agent가 대체할 수 없는 창의적 사고와 비전을 개발한다",
                "인간-AI 협업의 최적 비율을 실험하고 학습한다",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-ds-on-surface-variant"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-ds-primary shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-16" id="summary">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          핵심 요약
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI Agent를 효과적으로 활용하는 것은 새로운 기술을 배우는 것이 아니라,
          좋은 관리자가 되는 것입니다.
        </p>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="space-y-3">
            {[
              {
                fn: "Plan",
                key: "명확한 목표와 범위를 정의하라",
              },
              {
                fn: "Organize",
                key: "작업을 나누고 적합한 Agent를 배치하라",
              },
              {
                fn: "Integrate",
                key: "컨텍스트를 공유하고 피드백 루프를 구축하라",
              },
              {
                fn: "Measure",
                key: "성과를 측정하고 프로세스를 개선하라",
              },
              {
                fn: "Develop",
                key: "Agent와 관리자 모두 지속적으로 성장하라",
              },
            ].map((item) => (
              <div key={item.fn} className="flex items-center gap-3">
                <span className="text-xs font-bold text-ds-primary bg-ds-primary-container/30 px-2 py-1 rounded-md min-w-[80px] text-center">
                  {item.fn}
                </span>
                <span className="text-sm text-ds-on-surface-variant">
                  {item.key}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source */}
      <section className="mb-16" id="source">
        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            Source
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ds-primary-container/30 flex items-center justify-center rounded-lg shrink-0">
              <ExternalLink className="w-5 h-5 text-ds-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface">
                Peter Drucker &mdash; The 5 Functions of a Manager
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Peter F. Drucker, &ldquo;The Practice of Management&rdquo;
                (1954)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
