import { Breadcrumb } from "@/components/layout/breadcrumb";
import { AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

export default function AgenticCodingTrapPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Claude Code", href: "/claude-code" },
          { label: "에이전트 코딩이라는 함정" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        에이전트 코딩이라는 함정
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-6">
        인지 부채와 스킬 위축에 대한 경계 — Lars Faye는 코딩 에이전트에 대한
        과도한 의존이 정작 그 에이전트를 효과적으로 감독하는 데 필요한
        역량 자체를 갉아먹고 있다고 경고합니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          에이전트 코딩에 대한 비판적 시각.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          &quot;전통적 코딩은 죽었다, SDD가 미래다&quot;라는 업계의 분위기에 대해
          숨겨진 비용 — 인지 부채, 스킬 위축, 벤더 락인 — 을 직시할 것을 요구합니다.
        </p>
      </div>

      {/* Section 1: 감독의 역설 */}
      <section className="mb-16" id="paradox-of-supervision">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          1. 감독의 역설 (The Paradox of Supervision)
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Anthropic의 최근 연구에서 솔직하게 인정한 핵심 모순입니다. 코딩
          에이전트를 효과적으로 사용하려면 감독이 필요한데, 그 감독은 정확히
          에이전트 사용으로 인해 위축되는 코딩 역량을 요구합니다.
        </p>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl mb-6">
          <p className="text-base font-semibold text-ds-on-surface italic">
            &quot;Claude를 효과적으로 쓰려면 감독이 필요하지만, Claude를 감독하려면
            바로 그 코딩 역량이 있어야 한다.&quot;
          </p>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-1">시사점</p>
              <p className="text-sm text-ds-on-surface-variant">
                에이전트 코딩의 성공은 결국 비판적으로 사고하고 아키텍처 수준에서
                생성된 코드의 결함을 짚어낼 수 있는 숙련된 개발자에 달려 있습니다.
                그런데 그 사고력 자체가 AI에 위탁될수록 점점 무뎌집니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 빠른 스킬 위축 */}
      <section className="mb-16" id="skill-atrophy">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          2. 스킬은 빠르게 위축된다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          이 위축은 수년이 아니라 수개월 단위로 진행될 수 있습니다. AI 도구에
          의존하는 시간이 길어질수록, 직접 디버깅하고 설계하던 감각은 놀랄 만큼
          빠르게 사라집니다.
        </p>

        <div className="bg-red-50/60 border-l-4 border-red-500/70 p-6 rounded-r-xl mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-1">
                Anthropic 연구가 드러낸 수치
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                AI를 무겁게 사용하는 그룹에서{" "}
                <span className="font-semibold text-ds-on-surface">
                  디버깅 능력이 47% 감소
                </span>
                한 것으로 관찰됐습니다. 코드를 직접 읽고 가설을 세우는 감각이
                AI에 위탁되면서 그만큼 둔화된 것입니다.
              </p>
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed text-ds-on-surface-variant">
          한 번 둔해진 감각은 다시 끌어올리는 데 시간이 듭니다. 그래서 위축은
          단발성 비용이 아니라 누적되는 부채입니다.
        </p>
      </section>

      {/* Section 3: SDD 과대광고 */}
      <section className="mb-16" id="sdd-trap">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          3. Spec Driven Development의 함정
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          업계는 &quot;전통적 코딩은 끝났다, 이제 SDD(Spec Driven Development)가
          미래다&quot;라고 외칩니다. 요구사항을 정의하고, 계획을 생성하고, 슬롯
          머신처럼 에이전트 인스턴스를 돌리며 결과를 받아내는 워크플로우입니다.
        </p>

        <div className="space-y-3 mb-6">
          {[
            "오케스트레이터(개발자)와 실제 코드 사이의 거리가 점점 멀어진다",
            "결과물을 “좋은 취향”으로 검토하라고 하지만, 검토 능력 자체가 점점 약해진다",
            "계획서를 잘 쓰는 능력이 곧 검수 능력을 보장하지는 않는다",
            "수천 줄의 생성 코드에서 결함을 짚어내려면 여전히 깊은 코드 이해가 필요하다",
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

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl">
          <p className="text-base font-semibold text-ds-on-surface italic">
            &quot;계획을 만들고, 코드 작성에서 손을 떼라 — 이것이 SDD가 약속하는
            바이지만, 거리를 두는 만큼 검수의 신뢰도도 함께 떨어진다.&quot;
          </p>
        </div>
      </section>

      {/* Section 4: 인지 부채 */}
      <section className="mb-16" id="cognitive-debt">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          4. 인지 부채 (Cognitive Debt)
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          코딩 에이전트의 가치를 끌어내려면, 비판적 사고와 인지적 명료함이
          유지된 개발자가 있어야 합니다. 문제는 AI 도구가 바로 그 비판적 사고와
          명료함에 부정적인 영향을 준다는 것이 여러 연구에서 확인된다는
          점입니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-6">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            기술 부채(technical debt)와 마찬가지로 인지 부채도{" "}
            <span className="font-semibold text-ds-on-surface">
              지금은 보이지 않지만 시간이 갈수록 이자가 붙는
            </span>{" "}
            형태로 누적됩니다. 한동안은 더 빨리 일하는 것처럼 느껴지지만,
            새 문제·새 도메인을 만났을 때 기초 체력이 무너져 있음을 발견하게
            됩니다.
          </p>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <p className="text-sm text-ds-on-surface-variant">
              핵심 처방은 단순합니다. AI를{" "}
              <span className="font-semibold text-ds-on-surface">
                코드 생성기
              </span>
              가 아니라{" "}
              <span className="font-semibold text-ds-on-surface">
                개념 탐구의 파트너
              </span>
              로 사용하는 비중을 의식적으로 늘리는 것입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: 정량 가능한 트레이드오프 */}
      <section className="mb-16" id="tradeoffs">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          5. 정량 가능한 트레이드오프
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          에이전트 코딩의 비용은 추상적인 위험이 아니라, 구체적으로 측정
          가능한 네 축으로 나타납니다.
        </p>

        <div className="bg-ds-surface-low rounded-2xl overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ds-surface-lowest/60">
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                  트레이드오프
                </th>
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                  실제 영향
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ds-outline-variant/10">
              <tr>
                <td className="px-4 py-3 font-semibold text-ds-on-surface">
                  주변 시스템의 복잡도 증가
                </td>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  AI의 비결정성을 보완하기 위해 가드레일·테스트·검증 레이어가
                  계속 늘어남
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-ds-on-surface">
                  스킬 위축
                </td>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  디버깅·설계·리뷰 역량이 수개월 단위로 둔화
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-ds-on-surface">
                  벤더 락인
                </td>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  Claude Code 장애로 팀 전체가 멈추는 사례가 이미 발생
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-ds-on-surface">
                  비용의 변동성
                </td>
                <td className="px-4 py-3 text-ds-on-surface-variant">
                  토큰 가격·요금제 변경에 따라 동일 워크플로우의 비용이 흔들림
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-ds-surface-lowest/50 border-l-4 border-ds-outline-variant/40 p-6 rounded-r-xl">
          <p className="text-sm text-ds-on-surface-variant italic">
            네 축 모두 &quot;다음 분기&quot;가 아니라 지금 이 시점의 의사결정에
            반영되어야 하는 비용입니다.
          </p>
        </div>
      </section>

      {/* Section 6: 실천 사항 */}
      <section className="mb-16" id="practices">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          위축에 저항하기 위한 실천
        </h2>

        <div className="space-y-3 mb-8">
          {[
            {
              num: "1",
              text: "주기적으로 AI 없이 처음부터 끝까지 작은 프로젝트를 직접 짜본다 — 손 감각의 기초 체력 점검",
            },
            {
              num: "2",
              text: "생성된 코드를 머지하기 전에 전체를 읽고, 한 줄 단위로 의도를 설명할 수 있는지 확인한다",
            },
            {
              num: "3",
              text: "AI를 코드 생성기보다 개념 탐구·트레이드오프 토론 파트너로 더 많이 사용한다",
            },
            {
              num: "4",
              text: "디버깅은 가능하면 AI에 통째로 위임하지 않고, 가설을 직접 세운 뒤 검증 도구로만 활용한다",
            },
            {
              num: "5",
              text: "벤더 락인 리스크를 인정하고, 핵심 워크플로우는 한 가지 도구가 죽어도 굴러갈 수 있게 설계한다",
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
      </section>

      {/* 기억해야 할 문장들 */}
      <section className="mb-16" id="quotes">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          기억해야 할 문장들
        </h2>

        <div className="space-y-4">
          {[
            "코딩 에이전트의 사용은, 그 에이전트를 효과적으로 관리하는 데 필요한 바로 그 역량을 적극적으로 갉아먹고 있다.",
            "Claude를 감독하려면 Claude로 인해 위축되는 그 코딩 역량이 있어야 한다.",
            "거리를 두는 만큼 검수의 신뢰도도 함께 떨어진다.",
            "인지 부채는 지금 보이지 않지만, 시간이 갈수록 이자가 붙는다.",
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
          <a
            href="https://larsfaye.com/articles/agentic-coding-is-a-trap"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-ds-primary/10 flex items-center justify-center rounded-lg shrink-0">
              <svg
                className="w-5 h-5 text-ds-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                Agentic Coding is a Trap — Remaining vigilant about cognitive debt and atrophy
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Lars Faye | larsfaye.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
