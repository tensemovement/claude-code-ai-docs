import { Breadcrumb } from "@/components/layout/breadcrumb";
import {
  Coins,
  Cog,
  RefreshCw,
  Layers,
  Brain,
  Zap,
  Copy,
  Workflow,
  Swords,
  Quote,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

export default function AgenticCodingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Claude Code", href: "/claude-code" },
          { label: "에이전트 코딩의 최전선" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        에이전트 코딩의 최전선
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-6">
        결과물이 아닌 생성 장치를 만든다 — Lablup 신정규 대표가 Backend.AI:GO를
        40일간 130억 토큰으로 만든 실전 경험을 바탕으로, 에이전트 코딩 방법론과
        소프트웨어 산업의 구조적 변화를 이야기합니다.
      </p>

      {/* Source info */}
      <div className="flex flex-wrap gap-3 mb-16">
        <a
          href="https://aifrontier.kr/ko/episodes/ep86/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ds-primary hover:underline"
        >
          AI 프론티어 EP86
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <span className="text-ds-on-surface-variant/40">|</span>
        <a
          href="https://www.youtube.com/watch?v=EQ-Rnx-k-Ec"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ds-primary hover:underline"
        >
          YouTube
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <span className="text-ds-on-surface-variant/40">|</span>
        <span className="text-sm text-ds-on-surface-variant">
          출연: 신정규 (Lablup 대표) | 노정석, 최승준 (AI 프론티어)
        </span>
      </div>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          단순한 &quot;바이브 코딩&quot; 팁이 아니다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          소프트웨어의 정의 자체가 바뀌고 있다는 관점에서, 실무자가 지금 무엇을
          해야 하는지를 다룹니다.
        </p>
      </div>

      {/* Section 1: 토큰은 새로운 자본이다 */}
      <section className="mb-16" id="token-capital">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Coins className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            1. 토큰은 새로운 자본이다
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Anthropic의 holiday 토큰 두 배 이벤트가 Backend.AI:GO 탄생의
          계기였습니다. 토큰을 쓸 수 있는 양이 IT 회사의 경쟁력과 직결되는 시대가
          됐습니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-6">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            3년 걸리던 100만 줄의 코드를 40일에 만들 수 있었던 건{" "}
            <span className="font-semibold text-ds-on-surface">
              Claude Code Max 2개 + 8개 PC 병렬 운영
            </span>
            이라는 토큰 투입량 덕분이었습니다.
          </p>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-1">시사점</p>
              <p className="text-sm text-ds-on-surface-variant">
                토큰 비용 최적화가 곧 개발 경쟁력입니다. 같은 결과를 더 적은
                thinking으로 내는 adaptive thinking budget, 또는 5~10배 빠른 고속
                inference — 이 두 축이 다음 경쟁의 핵심이 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: harness가 모델보다 중요하다 */}
      <section className="mb-16" id="harness">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Cog className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            2. harness가 모델보다 중요하다
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Backend.AI:GO를 통해 Claude Code의 백엔드 모델을 Gemini, Codex 등으로
          교체하며 테스트한 결론:
        </p>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl mb-6">
          <p className="text-base font-semibold text-ds-on-surface italic">
            &quot;Claude Code의 핵심 경쟁력은 Opus나 Sonnet이 아니다. Claude Code
            그 자체다.&quot;
          </p>
        </div>

        <div className="space-y-3">
          {[
            "같은 모델도 어떤 harness에 붙이느냐에 따라 결과가 완전히 달라진다",
            "모델을 감싸서 결정론적으로 동작하게 만드는 코드 레이어가 진짜 경쟁력",
            "사람과의 alignment를 맞추는 인터랙션 설계가 핵심",
            "Claude Code harness + Gemini 3 Pro 조합이 매우 효과적이었다는 흥미로운 결과",
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

      {/* Section 3: 최종 결과물에 손대지 마라 */}
      <section className="mb-16" id="generation-device">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <RefreshCw className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            3. 최종 결과물에 손대지 마라 — 생성 장치를 고쳐라
          </h2>
        </div>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl mb-8">
          <p className="text-base font-semibold text-ds-on-surface italic">
            &quot;코딩하는 대상이 최종 목적지가 아니라, 코딩을 하는 에이전트를
            만드는 것이다.&quot;
          </p>
        </div>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          에이전트 코딩의 가장 핵심적인 사고 전환입니다. 실전 프로세스:
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              step: "1",
              title: "컨텍스트 빌딩",
              desc: "원하는 것을 바로 지시하지 않고, 먼저 AI에게 탐색/조사시켜 컨텍스트를 쌓는다",
            },
            {
              step: "2",
              title: "soul document 작성",
              desc: "CLAUDE.md에 에이전트의 행동 방식을 기술한다 (단순 프로젝트 설명이 아님)",
            },
            {
              step: "3",
              title: "생성 장치 반복",
              desc: "결과물이 마음에 안 들어도 결과물을 직접 수정하지 않고, 그것을 만드는 에이전트/skill/command를 수정한다",
            },
            {
              step: "4",
              title: "자기 비판 루프",
              desc: "여러 각도에서 AI 스스로 비판하게 하고, 그 결과로 harness 자체를 업데이트한다",
            },
          ].map((item) => (
            <div key={item.step} className="bg-ds-surface-low p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-ds-primary text-white flex items-center justify-center rounded-lg text-sm font-bold">
                  {item.step}
                </span>
                <h3 className="font-bold text-ds-on-surface">{item.title}</h3>
              </div>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <p className="text-sm text-ds-on-surface-variant">
              이 방식으로 Backend.AI:GO는 cron +{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">
                Claude -p
              </code>{" "}
              만으로 GitHub 이슈 자동 검증 → 개발 계획 → 구현 → 테스트 → merge까지
              전 과정을 자동화했습니다.{" "}
              <span className="font-semibold text-ds-on-surface">
                764개의 PR
              </span>
              이 이 파이프라인을 통해 처리됐습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 소프트웨어의 정의가 바뀌고 있다 */}
      <section className="mb-16" id="software-redefined">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Layers className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            4. 소프트웨어의 정의가 바뀌고 있다
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          미래 소프트웨어의 구성:
        </p>

        <div className="bg-ds-surface-low rounded-2xl overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ds-surface-lowest/60">
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                  구성 요소
                </th>
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                  비중
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ds-outline-variant/10">
              <tr>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  AI 코어 엔진 (모델)
                </td>
                <td className="px-4 py-3 font-bold text-ds-primary">~80%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  결정론적 제어 코드
                </td>
                <td className="px-4 py-3 font-bold text-ds-on-surface">~10%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  인터페이스 (UI/UX, A2A, MCP)
                </td>
                <td className="px-4 py-3 font-bold text-ds-on-surface">~10%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          코드 자체의 가치는 0으로 수렴합니다. 하지만 소프트웨어가 사라지는 게
          아닙니다. 천공 카드에서 키보드로, 패키지에서 웹/모바일로 바뀌었듯이 지금은
          코드 중심에서 모델 중심으로 세 번째 대변혁이 일어나고 있습니다.
        </p>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl">
          <p className="text-base font-semibold text-ds-on-surface italic">
            &quot;옛날에는 소프트웨어를 사람이 손으로 만들었구나, 하고 역사책에서
            보게 될 것이다.&quot;
          </p>
        </div>
      </section>

      {/* Section 5: 인지 부하는 줄지 않는다 */}
      <section className="mb-16" id="cognitive-load">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Brain className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            5. 인지 부하는 줄지 않는다 — 바이오 토큰의 한계
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          40일 동안 3년 치 코드를 짰지만, 사람으로서는 3년 치 늙었습니다. AI에게
          맡겨도 끊임없는 피드백이 들어오기 때문에 인지 부하가 줄지 않습니다.
        </p>

        <div className="bg-red-50/60 border-l-4 border-red-500/70 p-6 rounded-r-xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            모바일 게임 가챠와 같은 도파민 구조: 에이전트가 빠르게 결과를 내놓으면
            더 시키고 싶어지고, 더 시키면 또 잘 되고, 거기서 빠져나오지 못합니다.
            이것이 개인의 삶을 피폐하게 만들고, 도파민이 끊기면 프로덕트도 버려지는{" "}
            <span className="font-semibold text-ds-on-surface">
              이중의 위험
            </span>
            을 만듭니다.
          </p>
        </div>
      </section>

      {/* Section 6: 인스턴트 앱 시대 */}
      <section className="mb-16" id="instant-app">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Zap className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            6. 인스턴트 앱 시대 — 살아남는 것의 조건
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          소프트웨어가 폭발적으로 늘어나지만 대부분 수명이 짧습니다. 필요할 때
          만들고 버리는 인스턴트 앱이 주류가 될 것입니다.
        </p>

        <div className="space-y-3 mb-8">
          <p className="text-sm font-bold text-ds-on-surface mb-2">
            살아남는 소프트웨어의 공통점:
          </p>
          {[
            "앱을 통해서만 가능한 소셜 기반 사용성",
            "생활 밀착형 생산성 도구",
            "오랫동안 유지된 브랜드 — \"빨리 망하지 않겠다\"는 확신",
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

        <div className="bg-ds-surface-lowest/50 border-l-4 border-ds-outline-variant/40 p-6 rounded-r-xl">
          <p className="text-sm text-ds-on-surface-variant italic">
            한 사람이 쓰는 앱은 30개를 넘지 않고, 상위 10개가 사용량의 90%를
            차지한다.
          </p>
        </div>
      </section>

      {/* Section 7: 복제의 시대에서 스타트업이 살아남는 법 */}
      <section className="mb-16" id="startup-survival">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Copy className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            7. 복제의 시대에서 스타트업이 살아남는 법
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          NotebookLM 클론이 나흘이면 나오는 시대. 스타트업에게 가장 안 좋은 것은
          모든 아이템의 복제가 너무 쉽다는 것입니다.
        </p>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-1">물레방아론</p>
              <p className="text-sm text-ds-on-surface-variant">
                사업은 낙차가 큰 곳에 물레방아를 설치하는 것. 지금 낙차가 가장 큰
                곳은 IT 내부가 아니라, AI로 인해 새로 IT 영역에 편입되는
                도메인입니다. CS 전문가가 도메인을 배우는 것이 도메인 전문가가 CS를
                배우는 것보다 빠릅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 즉시 적용 가능한 실천 사항 */}
      <section className="mb-16" id="practices">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Workflow className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            즉시 적용 가능한 실천 사항
          </h2>
        </div>

        <h3 className="text-lg font-bold text-ds-on-surface mb-4">
          에이전트 코딩 워크플로우
        </h3>

        <div className="space-y-3 mb-10">
          {[
            {
              num: "1",
              text: "새 세션에서 바로 일 시키지 말 것 — 먼저 2~3턴의 컨텍스트 빌딩 대화를 깔아둔다",
            },
            {
              num: "2",
              text: "CLAUDE.md를 soul document로 다루기 — 프로젝트 설명이 아닌, 에이전트 행동 지침서로 작성한다",
            },
            {
              num: "3",
              text: "\"다른 에이전트에게 줄 데이터\"로 프레이밍 — AI가 방어적이 되지 않도록, 자기를 고치려는 게 아니라 협업 데이터라는 맥락을 준다",
            },
            {
              num: "4",
              text: "결과물 직접 수정 금지 — 결과가 마음에 안 들면 생성 장치(skill, command, agent)를 수정한다",
            },
            {
              num: "5",
              text: "한국어 음성 입력 활용 — 영어 대비 품질 차이 미미, 입력 속도가 병목",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="flex items-start gap-4 bg-ds-surface-lowest p-4 rounded-xl"
            >
              <span className="w-7 h-7 bg-ds-primary/10 text-ds-primary flex items-center justify-center rounded-md text-sm font-bold shrink-0">
                {item.num}
              </span>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-bold text-ds-on-surface mb-4">
          조직 적용 시사점
        </h3>

        <div className="space-y-3">
          {[
            "비개발 직군도 30분이면 Claude Code 사용 가능 (Lablup CFO, 콘텐츠 담당자 사례)",
            "핵심은 남이 만든 skill을 다운받는 게 아니라, 내 일을 위탁하는 나만의 harness를 만드는 것",
            "지금 안 되는 건 2개월만 미뤄라 — 모델 성능이 빠르게 올라가고 있다",
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

      {/* Claude Code vs Codex */}
      <section className="mb-16" id="comparison">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Swords className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            Claude Code vs Codex — 두 가지 진화 방향
          </h2>
        </div>

        <div className="bg-ds-surface-low rounded-2xl overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ds-surface-lowest/60">
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface" />
                <th className="text-left px-4 py-3 font-bold text-ds-primary">
                  Claude Code (아스라다)
                </th>
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                  Codex (오가)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ds-outline-variant/10">
              <tr>
                <td className="px-4 py-3 font-semibold text-ds-on-surface">
                  철학
                </td>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  사람과 align 맞추며 공진화
                </td>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  AI가 최적해를 스스로 추구
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-ds-on-surface">
                  최고 성능
                </td>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  상대적 낮음
                </td>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  더 높음
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-ds-on-surface">
                  사용 경험
                </td>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  편안함, 과정을 함께함
                </td>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  결과는 좋지만 과정 불투명
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-ds-surface-lowest/50 border-l-4 border-ds-outline-variant/40 p-6 rounded-r-xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            사이버 포뮬러 애니메이션의 비유: 사람과 함께 성장하는 AI(아스라다)와
            사람을 신뢰하지 않고 스스로 최적 주행하는 AI(오가). 두 접근 모두
            유효하지만, 어떤 철학의 도구를 선택하느냐에 따라{" "}
            <span className="font-semibold text-ds-on-surface">
              사용자의 성장 경로가 달라집니다.
            </span>
          </p>
        </div>
      </section>

      {/* 기억해야 할 문장들 */}
      <section className="mb-16" id="quotes">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Quote className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            기억해야 할 문장들
          </h2>
        </div>

        <div className="space-y-4">
          {[
            "코드의 가치는 거의 0으로 수렴하게 된다.",
            "Claude Code의 핵심 경쟁력은 Opus나 Sonnet 엔진이 아니다. Claude Code 그 자체다.",
            "내 걸 만들게 되면 그 가속이 시작된다.",
            "진짜 파도는 이제부터 올 거다.",
            "지금 안 되면 2개월만 미루라. 그때 되면 된다.",
          ].map((quote) => (
            <div
              key={quote}
              className="bg-ds-surface-lowest border-l-4 border-ds-primary/40 p-5 rounded-r-xl"
            >
              <p className="text-sm font-medium text-ds-on-surface italic">
                &quot;{quote}&quot;
              </p>
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
          <div className="space-y-3">
            <a
              href="https://www.youtube.com/watch?v=EQ-Rnx-k-Ec"
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
                  AI 프론티어 EP86 — 에이전트 코딩의 최전선
                </p>
                <p className="text-xs text-ds-on-surface-variant">
                  신정규 (Lablup 대표) | youtube.com
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-ds-on-surface-variant group-hover:text-ds-primary transition-colors shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
