import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Lightbulb, CheckCircle2, Quote } from "lucide-react";

export default function UnderstandAnythingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Design", href: "/design" },
          { label: "Understand-Anything" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        Understand-Anything — 코드베이스를 지식 그래프로
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-6">
        Claude Code 플러그인으로, 멀티 에이전트 파이프라인이 프로젝트를
        스캔해 파일·함수·클래스·의존성을 인터랙티브 지식 그래프로
        시각화합니다. 코드를 &quot;블라인드로 읽지 말고, 큰 그림을 먼저
        보자&quot;라는 철학에서 출발한 도구입니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          &quot;Graphs that teach &gt; graphs that impress.&quot;
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          멋있어 보이는 그래프가 아니라, 가르쳐 주는 그래프가 좋다는
          명제입니다. 시각화는 미적 만족이 아니라 인지 부하를 줄이는
          데 우선순위를 둡니다.
        </p>
      </div>

      {/* Section 1: 풀려는 문제 */}
      <section className="mb-16" id="problem">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          1. 풀려는 문제 — 200,000 라인 앞에서 어디부터 봐야 하나
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          새 팀에 합류했을 때 가장 큰 장벽은 코드 자체가 아니라 &quot;어디서
          시작해야 할지 모르겠다&quot;는 막막함입니다. Understand-Anything은
          그 첫 한 시간을 줄이는 데 집중합니다.
        </p>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. 그냥 README와 폴더 구조를 읽으면 되지 않나요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                README는 의도를 알려주지만 실행 흐름은 보여주지 않습니다.
                폴더 구조는 정적이지만 의존성은 동적이에요.
                Understand-Anything은 정적 분석으로 그래프를 만든 뒤
                레이어별 색상, 가이드 투어, 변경 영향 분석으로 &quot;실제로
                어떻게 돌아가는가&quot;를 시각적으로 드러냅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 멀티 에이전트 파이프라인 */}
      <section className="mb-16" id="multi-agent-pipeline">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          2. 멀티 에이전트 파이프라인 — 7개 에이전트가 협업한다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          하나의 거대 에이전트가 모든 일을 하는 대신, 역할별로 분리된
          전문 에이전트가 순서대로 일을 넘겨 받습니다. 각 단계의 산출물이
          다음 단계의 입력이 되는 파이프라인 구조입니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-6">
          <div className="space-y-3">
            {[
              {
                step: "1",
                name: "project-scanner",
                desc: "프로젝트 파일을 발견하고 사용 언어·프레임워크를 감지",
              },
              {
                step: "2",
                name: "file-analyzer",
                desc: "함수·클래스·import를 추출해 그래프의 노드와 엣지 생성",
              },
              {
                step: "3",
                name: "architecture-analyzer",
                desc: "API · Service · Data · UI · Utility 등 아키텍처 레이어 식별",
              },
              {
                step: "4",
                name: "tour-builder",
                desc: "의존성 순서를 따르는 가이드 학습 투어 자동 생성",
              },
              {
                step: "5",
                name: "graph-reviewer",
                desc: "그래프의 완전성과 참조 무결성 검증",
              },
              {
                step: "6",
                name: "domain-analyzer",
                desc: "비즈니스 도메인·플로우·프로세스 추출 (/understand-domain)",
              },
              {
                step: "7",
                name: "article-analyzer",
                desc: "위키 문서에서 엔티티·주장·암시적 관계 추출 (/understand-knowledge)",
              },
            ].map((agent) => (
              <div
                key={agent.name}
                className="flex items-start gap-4 bg-ds-surface-lowest p-4 rounded-xl"
              >
                <span className="w-7 h-7 bg-ds-primary/10 text-ds-primary flex items-center justify-center rounded-md text-sm font-bold shrink-0">
                  {agent.step}
                </span>
                <div className="flex-1">
                  <p className="font-mono text-sm font-semibold text-ds-primary">
                    {agent.name}
                  </p>
                  <p className="text-sm text-ds-on-surface-variant mt-0.5">
                    {agent.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <p className="text-sm text-ds-on-surface-variant">
              파이프라인 구조의 장점은 &quot;단계별 검증&quot;입니다.
              graph-reviewer가 실제로 별도 단계로 분리되어 있어,
              file-analyzer의 추출 누락이나 architecture-analyzer의 분류
              오류를 사후에 잡아냅니다. 단일 거대 에이전트로는 얻기 어려운
              품질 보증입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: 슬래시 명령 */}
      <section className="mb-16" id="commands">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          3. 슬래시 명령 — 8개의 진입점
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          모든 기능은 Claude Code 슬래시 명령으로 노출됩니다. 각 명령은
          파이프라인의 특정 출력을 활용하도록 설계되었습니다.
        </p>

        <div className="bg-ds-surface-low rounded-2xl overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ds-surface-lowest/60">
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                  명령
                </th>
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                  역할
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ds-outline-variant/10">
              {[
                {
                  cmd: "/understand",
                  desc: "코드베이스 전체 분석 + 지식 그래프 빌드",
                },
                {
                  cmd: "/understand-dashboard",
                  desc: "인터랙티브 웹 대시보드 실행 (그래프 탐색용)",
                },
                {
                  cmd: "/understand-chat",
                  desc: "코드베이스에 대해 자연어로 질문",
                },
                {
                  cmd: "/understand-diff",
                  desc: "현재 변경사항이 만들 영향(ripple) 분석",
                },
                {
                  cmd: "/understand-explain",
                  desc: "특정 파일·함수의 심층 설명",
                },
                {
                  cmd: "/understand-onboard",
                  desc: "온보딩 가이드 자동 생성",
                },
                {
                  cmd: "/understand-domain",
                  desc: "비즈니스 도메인 지식 추출",
                },
                {
                  cmd: "/understand-knowledge",
                  desc: "Karpathy 패턴 LLM 위키 분석",
                },
              ].map((row) => (
                <tr key={row.cmd}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <code className="font-mono text-xs bg-ds-surface-lowest px-2 py-1 rounded text-ds-primary">
                      {row.cmd}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-ds-on-surface-variant">
                    {row.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: 그래프 시각화 모드 */}
      <section className="mb-16" id="visualization">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          4. 그래프 시각화 — 구조 · 도메인 · 지식의 세 갈래
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          같은 코드베이스를 세 가지 시점에서 동시에 볼 수 있습니다. 각
          시점은 서로 보완적이며, 다른 질문에 답하기 위해 설계되었습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-2">
              Structural
            </p>
            <h3 className="font-bold text-ds-on-surface mb-2">구조 그래프</h3>
            <p className="text-sm text-ds-on-surface-variant">
              파일·함수·클래스를 노드로, 호출·import 관계를 엣지로
              표현하는 force-directed 그래프. 코드의 연결 구조를 한눈에.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-2">
              Domain
            </p>
            <h3 className="font-bold text-ds-on-surface mb-2">도메인 뷰</h3>
            <p className="text-sm text-ds-on-surface-variant">
              코드를 비즈니스 프로세스·워크플로우에 매핑. 기획자나 PM과의
              대화에서 &quot;어떤 코드가 어떤 기능에 해당하나&quot;를
              즉시 보여줍니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-2">
              Knowledge
            </p>
            <h3 className="font-bold text-ds-on-surface mb-2">지식 그래프</h3>
            <p className="text-sm text-ds-on-surface-variant">
              Karpathy 패턴의 LLM 위키 문서를 분석해 엔티티·주장·암시적
              관계를 force-directed 그래프로 시각화.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: 핵심 기능 */}
      <section className="mb-16" id="features">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          5. 핵심 기능
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          그래프를 만드는 데서 끝나지 않고, 그 위에서 검색·질문·변경 영향
          분석까지 수행하도록 설계되어 있습니다.
        </p>

        <div className="space-y-3">
          {[
            "구조 그래프 탐색 — 파일·함수·클래스의 force-directed 그래프, 패닝/줌 지원",
            "가이드 투어 — 의존성 순서로 정렬된 아키텍처 워크스루 자동 생성",
            "퍼지 + 시맨틱 검색 — 이름으로도, 의미로도 코드를 찾을 수 있음",
            "Diff 영향 분석 — 현재 변경이 어디까지 영향을 미치는지 그래프 위에 하이라이트",
            "레이어 색상 코딩 — API · Service · Data · UI · Utility를 자동으로 색상 분리",
            "페르소나 적응 UI — 주니어 개발자, PM, 파워 유저별로 정보량 조절",
            "12개 프로그래밍 패턴 설명 — 코드 맥락에서 패턴을 자동 식별하고 해설",
            "증분 업데이트 — 변경된 부분만 다시 분석해 빠르게 그래프 갱신",
            "JSON 그래프 공유 — 분석 결과를 버전 관리에 커밋해 팀과 공유",
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

      {/* Section 6: 설치와 시작 */}
      <section className="mb-16" id="getting-started">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          6. 설치와 시작
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          설치는 한 줄, 사용은 세 단계입니다. Claude Code뿐 아니라 Codex,
          Cursor, Copilot, Gemini CLI 등 다양한 에이전트 환경에서 동작합니다.
        </p>

        <div className="space-y-4">
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-2">
              1) 설치 (macOS/Linux)
            </h3>
            <pre className="bg-ds-surface-lowest p-3 rounded-lg text-xs overflow-x-auto text-ds-on-surface-variant">
{`curl -fsSL https://raw.githubusercontent.com/Lum1104/Understand-Anything/main/install.sh | bash`}
            </pre>
          </div>

          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-2">
              2) 분석 실행
            </h3>
            <p className="text-sm text-ds-on-surface-variant mb-2">
              Claude Code에서{" "}
              <code className="text-xs bg-ds-surface-lowest px-1.5 py-0.5 rounded text-ds-primary">
                /understand
              </code>
              를 입력하면 멀티 에이전트 파이프라인이 프로젝트를 스캔하고
              지식 그래프를 빌드합니다.
            </p>
          </div>

          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-2">
              3) 대시보드 탐색
            </h3>
            <p className="text-sm text-ds-on-surface-variant mb-2">
              <code className="text-xs bg-ds-surface-lowest px-1.5 py-0.5 rounded text-ds-primary">
                /understand-dashboard
              </code>
              로 인터랙티브 웹 대시보드를 열어 그래프를 탐색하고, 투어를
              따라가며, 코드에 자연어로 질문합니다.
            </p>
          </div>
        </div>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl mt-6">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. 분석 결과를 팀과 공유할 수 있나요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                네, 분석 결과는 JSON 파일로 저장되며 버전 관리에 그대로
                커밋할 수 있습니다. 팀원이 같은 그래프를 보고 같은 투어를
                따라갈 수 있어, 온보딩 문서를 별도로 작성할 필요가 줄어듭니다.
                증분 업데이트도 지원해 코드 변경에 따라 그래프만 빠르게 갱신됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: 정리 */}
      <section className="mb-16" id="takeaway">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          7. 정리 — 코드는 읽지 말고 그리자
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Understand-Anything이 보여주는 통찰은 분명합니다. 거대한
          코드베이스를 다루는 핵심은 더 빠르게 읽는 능력이 아니라, 더
          좋은 시각적 모델을 갖는 능력입니다.
        </p>

        <div className="space-y-3">
          {[
            "그래프는 가르쳐야 한다 — 멋있는 시각화보다 인지 부하를 줄이는 그래프가 우선",
            "에이전트는 역할별로 분리한다 — 7개 에이전트가 파이프라인으로 협업하며 graph-reviewer가 품질을 보증",
            "구조 · 도메인 · 지식의 세 시점 — 같은 코드를 다른 질문으로 보면 답이 달라진다",
            "온보딩은 그래프 + 투어 + Q&A로 — README보다 실행 흐름과 의존성이 먼저 보여야 한다",
            "변경의 영향은 그래프 위에 그려야 한다 — Diff 영향 분석으로 리뷰의 사각지대를 줄인다",
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

      {/* Source */}
      <section className="mb-16" id="source">
        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            Source
          </p>
          <a
            href="https://github.com/Lum1104/Understand-Anything"
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
                Lum1104/Understand-Anything — Graphs that teach &gt; graphs
                that impress
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Lum1104 | github.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
