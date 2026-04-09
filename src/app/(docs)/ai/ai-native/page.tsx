import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  Sparkles,
  Workflow,
  Brain,
  Bot,
  AlertTriangle,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

export default function AINativePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "AI", href: "/ai" },
          { label: "AI Native" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        AI Native
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        AI를 단순한 도구가 아닌 사업의 핵심으로 내장하는 관점. AI 네이티브
        사고방식이 창업과 제품 개발에 어떤 의미를 갖는지 탐구합니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          AI는 엄청난 창업 잠재력을 끌어낼 수 있는 도구이다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          하지만 AI로 만들었다는 이유만으로 사람들이 원하는 것을 만든 것은
          아니다.
        </p>
      </div>

      {/* Section 1: 두 가지 가치 */}
      <section className="mb-16" id="two-values">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          AI Native의 두 가지 가치
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI Native를 생각할 때 가장 중요한 것은 가치가 두 곳에서 나온다는 점을
          이해하는 것입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Process */}
          <div className="bg-ds-surface-low p-8 rounded-2xl hover:bg-ds-surface-high transition-colors group">
            <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg mb-4">
              <Workflow className="w-5 h-5 text-ds-primary" />
            </div>
            <h3 className="text-lg font-bold text-ds-on-surface mb-2 group-hover:text-ds-primary transition-colors">
              프로세스 혁신
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              코딩, 고객 지원 등 기존 업무에 AI를 활용하여 더 빠르고 효율적으로
              수행하는 것. AI를 일을 처리하는 도구로 사용합니다.
            </p>
            <div className="mt-4 bg-ds-surface-lowest/60 rounded-lg p-4">
              <p className="text-xs text-ds-secondary font-bold uppercase tracking-wider mb-1">
                Example
              </p>
              <p className="text-sm text-ds-on-surface-variant">
                <span className="font-semibold text-ds-on-surface">Gamma</span>{" "}
                — AI를 제품에 자연스럽게 통합하여 프레젠테이션 제작 프로세스를
                혁신
              </p>
            </div>
          </div>

          {/* Card 2: Product */}
          <div className="bg-ds-surface-low p-8 rounded-2xl hover:bg-ds-surface-high transition-colors group">
            <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg mb-4">
              <Sparkles className="w-5 h-5 text-ds-primary" />
            </div>
            <h3 className="text-lg font-bold text-ds-on-surface mb-2 group-hover:text-ds-primary transition-colors">
              제품 내장형 AI
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              AI를 제품 안에 내장하여 고객을 직접 도와 일을 처리하게 하는 것.
              AI가 사용자의 문제를 직접 해결합니다.
            </p>
            <div className="mt-4 bg-ds-surface-lowest/60 rounded-lg p-4">
              <p className="text-xs text-ds-secondary font-bold uppercase tracking-wider mb-1">
                Key Point
              </p>
              <p className="text-sm text-ds-on-surface-variant">
                AI 네이티브 창업가라면 AI가 고객을 직접 돕는 그런 지점을 찾아야
                합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 지능 배분 */}
      <section className="mb-16" id="intelligence-allocation">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          지능 배분의 경쟁 우위
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          기업의 경쟁 우위는 자원을 더 효율적으로 배분하는 데서 나옵니다. AI
          시대에는 전통적인 자원 배분에 새로운 차원이 추가됩니다.
        </p>

        {/* Resource types */}
        <div className="space-y-3 mb-8">
          {[
            { label: "자본 배분", desc: "투자와 예산의 전략적 배치" },
            { label: "인재 배분", desc: "적합한 사람을 적합한 역할에 배치" },
            {
              label: "지능 배분",
              desc: "AI 모델과 인간 역량의 최적 조합",
              highlight: true,
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                item.highlight
                  ? "bg-ds-primary-container/20 border-l-4 border-ds-primary"
                  : "bg-ds-surface-lowest"
              }`}
            >
              <div className="flex-1">
                <p
                  className={`font-bold ${
                    item.highlight
                      ? "text-ds-primary text-lg"
                      : "text-ds-on-surface"
                  }`}
                >
                  {item.label}
                </p>
                <p className="text-sm text-ds-on-surface-variant">
                  {item.desc}
                </p>
              </div>
              {item.highlight && (
                <Brain className="w-6 h-6 text-ds-primary shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Intelligence allocation details */}
        <div className="bg-ds-surface-low p-8 rounded-2xl mb-8">
          <h3 className="text-lg font-bold text-ds-on-surface mb-4">
            지능 배분이란?
          </h3>
          <ul className="space-y-3">
            {[
              "각 AI 모델에게 서로 다른 일을 배정해야 합니다",
              "제품 안에서 서로 다른 유형의 AI를 어떻게 활용할지 고민하는 것이 핵심입니다",
              "어떤 일을 인간에게, 어떤 일을 AI에게 맡길지 전략적으로 결정해야 합니다",
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

        {/* Gap widening callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-ds-surface-lowest p-6 rounded-xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider mb-2">
              격차를 줄이는 방법
            </p>
            <p className="text-sm text-ds-on-surface-variant">
              기존에 하던 일에 AI를 활용하는 것만으로는 격차를 줄이는 데
              그칩니다.
            </p>
          </div>
          <div className="bg-ds-primary-container/20 p-6 rounded-xl border-l-4 border-ds-primary">
            <p className="text-xs font-bold text-ds-primary uppercase tracking-wider mb-2">
              격차를 벌리는 방법
            </p>
            <p className="text-sm text-ds-on-surface-variant">
              기존 업무 + 새로운 일에 AI를 적용해야 경쟁 격차를 벌릴 수
              있습니다.
            </p>
          </div>
        </div>

        {/* Differentiation insight */}
        <div className="bg-ds-surface-low/50 border-l-4 border-ds-outline-variant/40 p-6 rounded-r-xl mt-8">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            전략을 고민할 때 반드시 무언가를 더 잘하는 것만 중요한 것은
            아닙니다. AI 모델보다 더 큰 가치를 낼 수 있는 지점이 어디인지, 남들이
            할 수 없는 방식으로{" "}
            <span className="font-semibold text-ds-on-surface">
              다르게 하는 것
            </span>
            이 경쟁 우위로 이어집니다.
          </p>
        </div>
      </section>

      {/* Section 3: Agentic AI */}
      <section className="mb-16" id="agentic-ai">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          Agentic AI의 도입
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          사업 운영을 도와주는 가상 직원을 만들고, 그들이 잘하는 일을 더
          확장하여 하루에 더 많은 일을 해낼 수 있게 하는 것이 Agentic AI의
          핵심입니다.
        </p>

        <div className="bg-ds-surface-low p-8 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-ds-primary-container/40 flex items-center justify-center rounded-xl shrink-0">
              <Bot className="w-6 h-6 text-ds-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-ds-on-surface mb-2">
                가상 직원으로서의 AI
              </h3>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                Agentic AI는 단순 도구를 넘어 자율적으로 판단하고 실행하는
                에이전트입니다. 반복적인 업무를 자동화하고, 팀의 역량을 확장하며,
                사업 운영의 효율성을 극대화합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 핵심 원칙 */}
      <section className="mb-16" id="core-principles">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          AI 시대의 핵심 원칙
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI 기술이 아무리 발전해도 소프트웨어 개발의 전통적인 원칙은 여전히
          유효합니다. 기술보다 중요한 것은 사용자에 대한 이해입니다.
        </p>

        <div className="space-y-4">
          {/* Warning callout */}
          <div className="bg-red-50/60 border-l-4 border-red-500/70 p-6 rounded-r-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500/80 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-ds-on-surface mb-1">
                  가장 위험한 착각
                </p>
                <p className="text-sm text-ds-on-surface-variant">
                  AI로 만들었다는 이유만으로 사람들이 원하는 것을 만들었다고
                  여기는 것. 사용자 앞에 내놓고, 직접 써보게 하고, 무엇을
                  원하는지 관찰해야 합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Principles */}
          {[
            {
              icon: Lightbulb,
              title: "업무 흐름 속 AI 접점 찾기",
              desc: "거창한 혁신이 아니라, 업무 흐름 속에서 AI를 아주 살짝 얹을 수 있는 지점을 찾는 것이 핵심입니다.",
            },
            {
              icon: Sparkles,
              title: "창업자의 통찰력",
              desc: "그 어느 때보다 지금이야말로 창업자 스스로 얻은 통찰력이 필요한 시대입니다. 판단력, 감각, 도구를 어디에 어떻게 적용할지 아는 것은 단순 AI 엔지니어링과는 전혀 다른 역량입니다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-ds-surface-lowest p-6 rounded-xl hover:bg-white hover:shadow-[0px_12px_32px_rgba(42,52,57,0.06)] transition-all"
            >
              <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg shrink-0">
                <item.icon className="w-5 h-5 text-ds-primary" />
              </div>
              <div>
                <h3 className="font-bold text-ds-on-surface mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Source */}
      <section className="mb-16" id="source">
        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            Source
          </p>
          <a
            href="https://www.youtube.com/watch?v=WvdLd87OO9o"
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
                하버드에서 가르치는 AI Native 강의 18분 요약 | HBS 렘 코닝 교수
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                youtube.com
              </p>
            </div>
          </a>
        </div>
      </section>

    </>
  );
}
