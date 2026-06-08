import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Lightbulb, CheckCircle2 } from "lucide-react";

type CompareRow = {
  label: string;
  subagents: string;
  skills: string;
  teams: string;
  workflows: string;
};

type Step = {
  step: string;
  title: string;
  desc: string;
};

type Limit = {
  constraint: string;
  why: string;
};

const compareRows: CompareRow[] = [
  {
    label: "정체",
    subagents: "Claude가 띄우는 워커",
    skills: "Claude가 따르는 지침",
    teams: "동료 세션을 감독하는 리드 에이전트",
    workflows: "런타임이 실행하는 스크립트",
  },
  {
    label: "다음 작업 결정 주체",
    subagents: "Claude (턴 단위)",
    skills: "Claude (프롬프트에 따라)",
    teams: "리드 에이전트 (턴 단위)",
    workflows: "스크립트",
  },
  {
    label: "중간 결과 저장 위치",
    subagents: "Claude의 컨텍스트 윈도우",
    skills: "Claude의 컨텍스트 윈도우",
    teams: "공유 작업 목록",
    workflows: "스크립트 변수",
  },
  {
    label: "재사용 대상",
    subagents: "워커 정의",
    skills: "지침",
    teams: "팀 정의",
    workflows: "오케스트레이션 자체",
  },
  {
    label: "규모",
    subagents: "턴당 소수의 위임 작업",
    skills: "서브에이전트와 동일",
    teams: "장기 실행 동료 몇 명",
    workflows: "실행당 수십~수백 에이전트",
  },
  {
    label: "중단 시",
    subagents: "턴 재시작",
    skills: "턴 재시작",
    teams: "팀원은 계속 실행",
    workflows: "같은 세션 내에서 재개 가능",
  },
];

const deepResearchSteps: Step[] = [
  {
    step: "1",
    title: "워크플로우 실행",
    desc: "/deep-research에 조사할 질문을 넘긴다. 여러 각도로 웹 검색을 펼치고, 찾은 출처를 가져와 교차 검증한 뒤, 인용이 달린 리포트로 종합한다.",
  },
  {
    step: "2",
    title: "워크플로우 허용",
    desc: "Claude Code가 워크플로우 실행 여부를 묻는다. Yes를 선택해 진행한다. 정확한 프롬프트는 권한 모드에 따라 달라진다.",
  },
  {
    step: "3",
    title: "진행 상황 관찰",
    desc: "실행은 백그라운드에서 시작되어 세션은 그대로 사용할 수 있다. /workflows로 실행을 선택해 진행 뷰를 열면 단계별 에이전트 수·토큰 합계·경과 시간을 볼 수 있다.",
  },
  {
    step: "4",
    title: "리포트 읽기",
    desc: "실행이 끝나면 리포트가 세션에 도착한다. 각 주장이 인용한 출처가 표시되고, 교차 검증을 통과하지 못한 주장은 이미 걸러져 있다.",
  },
];

const limits: Limit[] = [
  {
    constraint: "실행 중 사용자 입력 불가",
    why: "에이전트 권한 프롬프트만 실행을 멈출 수 있다. 단계 간 승인이 필요하면 각 단계를 별도 워크플로우로 실행한다",
  },
  {
    constraint: "워크플로우 자체의 직접 파일/셸 접근 불가",
    why: "읽기·쓰기·명령 실행은 에이전트가 한다. 스크립트는 에이전트를 조율할 뿐이다",
  },
  {
    constraint: "동시 에이전트 최대 16개 (코어 적은 머신은 더 적음)",
    why: "로컬 자원 사용량을 제한한다",
  },
  {
    constraint: "실행당 총 1,000 에이전트",
    why: "폭주 루프를 방지한다",
  },
];

export default function WorkflowsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Claude Code", href: "/claude-code" },
          { label: "동적 워크플로우" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        동적 워크플로우로 서브에이전트를 대규모로 오케스트레이션
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-6">
        동적 워크플로우는 Claude가 작성하고 당신이 다시 실행할 수 있는
        스크립트로 수많은 서브에이전트를 조율합니다. 코드베이스 감사, 대규모
        마이그레이션, 출처를 서로 교차 검증해야 하는 리서치에 적합합니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          워크플로우는 &quot;계획&quot;을 코드로 옮긴다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          서브에이전트·스킬·에이전트 팀에서는 Claude가 턴마다 무엇을 띄울지
          결정하고 모든 결과가 컨텍스트 윈도우에 쌓인다. 워크플로우 스크립트는
          루프·분기·중간 결과를 스스로 보관하므로, Claude의 컨텍스트에는 최종
          답변만 남는다.
        </p>
      </div>

      {/* Section: 안내 */}
      <div className="bg-ds-surface-low p-5 rounded-2xl mb-16">
        <p className="text-sm text-ds-on-surface-variant">
          동적 워크플로우는 <strong className="text-ds-on-surface">리서치
          프리뷰</strong> 단계입니다. Claude Code v2.1.154 이상이 필요하며 모든
          유료 플랜과 Anthropic API, Amazon Bedrock·Google Cloud Vertex AI·
          Microsoft Foundry에서 사용할 수 있습니다. Pro에서는{" "}
          <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">
            /config
          </code>
          의 Dynamic workflows 항목에서 켭니다.
        </p>
      </div>

      {/* Section 1: 언제 쓰는가 */}
      <section className="mb-16" id="when-to-use">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          1. 언제 워크플로우를 쓰는가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          서브에이전트·스킬·에이전트 팀·워크플로우는 모두 다단계 작업을
          수행할 수 있습니다. 차이는 <strong className="text-ds-on-surface">누가
          계획을 쥐고 있느냐</strong>입니다. 한 대화가 조율할 수 있는 것보다
          많은 에이전트가 필요하거나, 오케스트레이션 자체를 읽고 다시 돌릴 수
          있는 스크립트로 코드화하고 싶을 때 워크플로우를 선택합니다.
        </p>

        <div className="bg-ds-surface-low rounded-2xl overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-3 font-bold text-ds-secondary text-xs uppercase tracking-wider"></th>
                <th className="px-4 py-3 font-bold text-ds-on-surface">서브에이전트</th>
                <th className="px-4 py-3 font-bold text-ds-on-surface">스킬</th>
                <th className="px-4 py-3 font-bold text-ds-on-surface">에이전트 팀</th>
                <th className="px-4 py-3 font-bold text-ds-primary">워크플로우</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ds-outline-variant/10">
              {compareRows.map((row) => (
                <tr key={row.label} className="align-top">
                  <td className="px-4 py-3 font-semibold text-ds-on-surface whitespace-nowrap">
                    {row.label}
                  </td>
                  <td className="px-4 py-3 text-ds-on-surface-variant">{row.subagents}</td>
                  <td className="px-4 py-3 text-ds-on-surface-variant">{row.skills}</td>
                  <td className="px-4 py-3 text-ds-on-surface-variant">{row.teams}</td>
                  <td className="px-4 py-3 text-ds-on-surface-variant">{row.workflows}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <p className="text-sm text-ds-on-surface-variant">
              계획을 코드로 옮기면 단순히 에이전트를 더 돌리는 것을 넘어 반복
              가능한 품질 패턴을 적용할 수 있습니다. 독립된 에이전트들이 서로의
              결과를 적대적으로 검증한 뒤 보고하게 하거나, 하나의 계획을 여러
              각도에서 작성해 서로 견주게 만들어 단일 패스보다 신뢰할 수 있는
              결과를 얻습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 번들 워크플로우 */}
      <section className="mb-16" id="bundled">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          2. 번들 워크플로우 실행하기 (/deep-research)
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          워크플로우를 가장 빠르게 체험하는 방법은{" "}
          <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">
            /deep-research
          </code>
          를 실행하는 것입니다. Claude Code에 내장된 워크플로우로, 하나의
          질문을 여러 출처에 걸쳐 조사합니다. 에이전트들이 백그라운드에서 여러
          단계를 거치는 동안 세션은 그대로 쓸 수 있고, 턴 단위 기록 대신 마지막에
          하나의 리포트를 받습니다.
        </p>

        <div className="bg-ds-surface-lowest border border-ds-outline-variant/15 rounded-xl overflow-hidden mb-6">
          <pre className="px-4 py-4 text-sm text-ds-on-surface-variant font-mono leading-relaxed overflow-x-auto">
            {`/deep-research Node.js의 권한 모델은 v20에서 v22로 가며 무엇이 바뀌었나?`}
          </pre>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-6">
          <div className="space-y-3">
            {deepResearchSteps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 bg-ds-surface-lowest p-4 rounded-xl"
              >
                <span className="w-7 h-7 bg-ds-primary/10 text-ds-primary flex items-center justify-center rounded-md text-sm font-bold shrink-0">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-ds-on-surface text-sm">
                    {item.title}
                  </p>
                  <p className="text-sm text-ds-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-sm font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
          진행 뷰 단축키 (/workflows)
        </h3>
        <div className="bg-ds-surface-low rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-ds-outline-variant/10">
              {[
                { key: "↑ / ↓", action: "단계 또는 에이전트 선택" },
                { key: "Enter / →", action: "선택한 단계로 진입, 다시 에이전트로 들어가 프롬프트·최근 툴 호출·결과 확인" },
                { key: "Esc", action: "한 단계 뒤로" },
                { key: "j / k", action: "에이전트 상세가 넘칠 때 스크롤" },
                { key: "p", action: "실행 일시정지/재개" },
                { key: "x", action: "선택 에이전트 중지, 포커스가 실행이면 워크플로우 전체 중지" },
                { key: "r", action: "선택한 실행 중 에이전트 재시작" },
                { key: "s", action: "실행 스크립트를 커맨드로 저장" },
              ].map((row) => (
                <tr key={row.key}>
                  <td className="px-4 py-3 font-mono font-semibold text-ds-primary align-top whitespace-nowrap">
                    {row.key}
                  </td>
                  <td className="px-4 py-3 text-ds-on-surface-variant">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Claude에게 작성시키기 */}
      <section className="mb-16" id="have-claude-write">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          3. Claude에게 워크플로우를 작성시키기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          내 작업을 위한 워크플로우를 Claude가 작성하게 만드는 두 가지 방법이
          있습니다.
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="font-bold text-ds-on-surface mb-2">
              프롬프트에 워크플로우를 요청
            </p>
            <p className="text-sm text-ds-on-surface-variant mb-3">
              세션의 effort 레벨을 바꾸지 않고 단일 작업을 워크플로우로 돌리려면
              프롬프트에 <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">ultracode</code>{" "}
              키워드를 포함합니다. &quot;워크플로우를 써줘&quot;처럼 직접 말로
              요청해도 같은 옵트인으로 취급됩니다. (v2.1.160 이전에는 트리거
              키워드가 <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">workflow</code>였습니다.)
            </p>
            <div className="bg-ds-surface-lowest border border-ds-outline-variant/15 rounded-xl overflow-hidden">
              <pre className="px-4 py-3 text-sm text-ds-on-surface-variant font-mono leading-relaxed overflow-x-auto">
                {`ultracode: src/routes/ 아래 모든 API 엔드포인트에서 누락된 인증 검사를 감사해줘`}
              </pre>
            </div>
          </div>

          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="font-bold text-ds-on-surface mb-2">
              Ultracode로 Claude가 알아서 판단
            </p>
            <p className="text-sm text-ds-on-surface-variant mb-3">
              Ultracode는 <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">xhigh</code>{" "}
              추론 effort와 자동 워크플로우 오케스트레이션을 결합한 설정입니다.
              켜두면 Claude가 모든 실질적 작업마다 워크플로우를 계획합니다. 하나의
              요청이 코드 이해 → 변경 → 검증처럼 여러 워크플로우로 이어질 수
              있어 토큰과 시간이 더 듭니다. 현재 세션 동안만 유지되며{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">/effort high</code>로 되돌립니다.
            </p>
            <div className="bg-ds-surface-lowest border border-ds-outline-variant/15 rounded-xl overflow-hidden">
              <pre className="px-4 py-3 text-sm text-ds-on-surface-variant font-mono leading-relaxed overflow-x-auto">
                {`/effort ultracode`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <p className="text-sm text-ds-on-surface-variant">
              키워드를 의도하지 않았다면 macOS는 <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">Option+W</code>,
              Windows·Linux는 <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">Alt+W</code>로
              하이라이트를 해제할 수 있습니다. 아예 트리거를 끄려면{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">/config</code>에서
              Ultracode keyword trigger를 끕니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 승인과 권한 */}
      <section className="mb-16" id="approve">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          4. 실행 전 계획 승인하기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          CLI에서는 실행마다 계획된 단계와 함께 승인 프롬프트가 표시됩니다.{" "}
          <strong className="text-ds-on-surface">Yes, run it</strong>(실행),{" "}
          <strong className="text-ds-on-surface">don&apos;t ask again</strong>(이
          프로젝트에서 이 워크플로우는 다시 묻지 않음),{" "}
          <strong className="text-ds-on-surface">View raw script</strong>(스크립트
          확인), <strong className="text-ds-on-surface">No</strong>(취소) 중
          선택합니다. <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">Ctrl+G</code>로
          에디터에서 스크립트를 열고, <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">Tab</code>으로
          실행 전 프롬프트를 조정할 수 있습니다.
        </p>

        <div className="bg-ds-surface-low rounded-2xl overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-3 font-bold text-ds-on-surface">권한 모드</th>
                <th className="px-4 py-3 font-bold text-ds-on-surface">언제 묻는가</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ds-outline-variant/10">
              {[
                { mode: "Default, accept edits", when: "매 실행마다. 단, 해당 워크플로우에 대해 '다시 묻지 않음'을 선택한 경우 제외" },
                { mode: "Auto", when: "첫 실행만. Yes를 누르면 사용자 설정에 동의가 기록되어 이후 실행은 묻지 않음. ultracode가 켜져 있으면 완전히 생략" },
                { mode: "Bypass / claude -p / Agent SDK", when: "묻지 않음. 즉시 실행" },
              ].map((row) => (
                <tr key={row.mode} className="align-top">
                  <td className="px-4 py-3 font-semibold text-ds-on-surface whitespace-nowrap">{row.mode}</td>
                  <td className="px-4 py-3 text-ds-on-surface-variant">{row.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3">
          {[
            "권한 모드는 실행 시작 프롬프트만 제어한다. 워크플로우가 띄우는 서브에이전트는 세션 모드와 무관하게 항상 acceptEdits 모드로 실행되며 파일 편집은 자동 승인된다.",
            "허용 목록에 없는 셸 명령·웹 페치·MCP 툴은 실행 도중 여전히 물을 수 있다. 긴 실행에서 이를 피하려면 에이전트가 필요한 명령을 미리 허용 목록에 추가한다.",
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

      {/* Section 5: 저장과 재사용 */}
      <section className="mb-16" id="save">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          5. 워크플로우 저장 &amp; 재사용
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          반복할 작업의 워크플로우를 Claude가 작성했다면, 그 실행의 스크립트를
          커맨드로 저장할 수 있습니다. <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">/workflows</code>에서
          실행을 선택하고 <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">s</code>를
          누른 뒤, 저장 다이얼로그에서 <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">Tab</code>으로
          저장 위치를 고르고 Enter로 저장합니다. 이후 세션에서{" "}
          <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">/&lt;name&gt;</code>으로
          실행됩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-1 font-mono text-sm">.claude/workflows/</h3>
            <p className="text-sm text-ds-on-surface-variant">프로젝트에 저장 — 저장소를 클론한 모두와 공유</p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-1 font-mono text-sm">~/.claude/workflows/</h3>
            <p className="text-sm text-ds-on-surface-variant">홈 디렉터리에 저장 — 모든 프로젝트에서, 나에게만 보임</p>
          </div>
        </div>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-3">
          저장한 워크플로우는 <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">args</code>{" "}
          파라미터로 입력을 받을 수 있습니다. 스크립트는 이를 전역 변수{" "}
          <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">args</code>로
          읽으며, Claude가 구조화된 데이터로 넘기므로 파싱 없이 배열·객체 메서드를
          바로 호출할 수 있습니다.
        </p>
        <div className="bg-ds-surface-lowest border border-ds-outline-variant/15 rounded-xl overflow-hidden">
          <pre className="px-4 py-3 text-sm text-ds-on-surface-variant font-mono leading-relaxed overflow-x-auto">
            {`> /triage-issues를 이슈 1024, 1025, 1030에 대해 실행해줘`}
          </pre>
        </div>
      </section>

      {/* Section 6: 실행 원리와 제약 */}
      <section className="mb-16" id="how-it-runs">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          6. 워크플로우는 어떻게 실행되는가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          워크플로우 런타임은 대화와 분리된 격리 환경에서 스크립트를 실행합니다.
          중간 결과는 Claude의 컨텍스트가 아니라 스크립트 변수에 머뭅니다. 모든
          실행은 스크립트를{" "}
          <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">~/.claude/projects/</code>{" "}
          아래 세션 디렉터리의 파일로 기록하므로, 그 파일을 열어 Claude가 작성한
          오케스트레이션을 읽거나 이전 실행과 diff하거나 편집해 다시 띄울 수
          있습니다.
        </p>

        <h3 className="text-sm font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
          동작과 제약
        </h3>
        <div className="bg-ds-surface-low rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-3 font-bold text-ds-on-surface">제약</th>
                <th className="px-4 py-3 font-bold text-ds-on-surface">이유</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ds-outline-variant/10">
              {limits.map((row) => (
                <tr key={row.constraint} className="align-top">
                  <td className="px-4 py-3 font-semibold text-ds-on-surface">{row.constraint}</td>
                  <td className="px-4 py-3 text-ds-on-surface-variant">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 7: 실행 관리 */}
      <section className="mb-16" id="manage">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          7. 실행 관리: 재개 · 비용 · 끄기
        </h2>

        <div className="space-y-3 mb-6">
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="font-bold text-ds-on-surface mb-1">일시정지 후 재개</p>
            <p className="text-sm text-ds-on-surface-variant">
              실행을 멈춰도 재개할 수 있습니다. 이미 끝난 에이전트는 캐시된 결과를
              돌려주고 나머지는 실시간으로 돕니다. 단, 재개는 같은 Claude Code
              세션 안에서만 동작합니다. 실행 중 Claude Code를 종료하면 다음
              세션에서는 워크플로우가 처음부터 시작됩니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="font-bold text-ds-on-surface mb-1">비용</p>
            <p className="text-sm text-ds-on-surface-variant">
              워크플로우는 많은 에이전트를 띄우므로 한 번의 실행이 같은 작업을
              대화로 처리하는 것보다 훨씬 많은 토큰을 쓸 수 있습니다. 큰 작업에
              들어가기 전, 한 디렉터리나 좁은 질문 같은 작은 슬라이스로 먼저
              돌려 비용을 가늠하세요. 모든 에이전트는 세션의 모델을 사용하므로,{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">/model</code>을
              확인하거나 강한 모델이 필요 없는 단계는 더 작은 모델을 쓰도록
              요청해 비용을 제어할 수 있습니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="font-bold text-ds-on-surface mb-1">워크플로우 끄기</p>
            <p className="text-sm text-ds-on-surface-variant">
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">/config</code>의
              Dynamic workflows 토글을 끄거나,{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">~/.claude/settings.json</code>에{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">&quot;disableWorkflows&quot;: true</code>를
              설정하거나, 환경변수{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">CLAUDE_CODE_DISABLE_WORKFLOWS=1</code>을
              지정합니다. 조직 전체는 managed settings에서 끕니다.
            </p>
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
            href="https://code.claude.com/docs/en/workflows"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#d97757]/10 flex items-center justify-center rounded-lg shrink-0">
              <svg
                className="w-5 h-5 text-[#d97757]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                Orchestrate subagents at scale with dynamic workflows
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Claude Code Docs | code.claude.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
