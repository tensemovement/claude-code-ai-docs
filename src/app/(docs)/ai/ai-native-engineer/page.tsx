import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  Compass,
  Layers,
  FileCode,
  ShieldCheck,
  Puzzle,
  Clock,
  Rocket,
  Users,
  Lock,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Newspaper,
} from "lucide-react";

export default function AINativeEngineerPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "AI", href: "/ai" },
          { label: "AI-Native 엔지니어 되기" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        AI-Native 엔지니어가 되는 실전 가이드
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        Meta의 Shah Rahman이 정리한 AI-Native 엔지니어링 플레이북. 코드를{" "}
        <em>작성</em>하는 사람에서 코드를 <em>오케스트레이션</em>하는 사람으로의
        전환, 그리고 그 전환을 &ldquo;더 빠른 실패&rdquo;가 아닌 진짜 10배
        레버리지로 만드는 실천법을 다룹니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          진짜 생산성 향상은 코드를 작성하는 것에서 오케스트레이션하는 것으로
          도약하기로 결정할 때 시작된다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          같은 모델, 같은 도구를 써도 결과가 갈리는 이유는 단 하나의 결정에
          달려 있다.
        </p>
      </div>

      {/* The Paradox */}
      <section className="mb-16" id="paradox">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          코드 과부하(Code Overload)의 역설
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-4">
          Google 신규 코드의 75% 이상이 AI 생성물이고, Amazon은 4,500
          개발자-년이 걸릴 30,000개 애플리케이션의 Java 8 → 17 마이그레이션을 몇
          달 만에 끝냈습니다. 그런데 왜 대부분의 팀은 2년 전보다 더 많은 버그,
          더 많은 장애, 더 많은 기술 부채를 만들어내고 있을까요?
        </p>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          뉴욕타임스는 이 현상을 <strong>&ldquo;코드 과부하&rdquo;</strong>라고
          명명했습니다. AI 에이전트 중심으로 일을 재편한 팀들이 코드 churn과 보안
          구멍에 빠져 허우적댄다는 것입니다. 같은 도구를 쓰는데도 어떤
          엔지니어는 앞서나가고 어떤 팀은 혼돈에 빠지는 격차 &mdash; 그 분기점이
          이 글의 주제입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
              Vibe Coding
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              원하는 것을 말로 설명해 동작하는 소프트웨어를 만드는 것. 비전공자도
              가능한 민주화이며 가치가 있지만, 전문 엔지니어링과는{" "}
              <strong>범주가 다릅니다</strong>.
            </p>
          </div>
          <div className="bg-ds-primary-container/20 p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-primary uppercase tracking-[0.15em] mb-3">
              AI-Native Engineering
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              AI 에이전트와 도구를 <strong>지휘하고 통달해</strong> AI 이전
              시대엔 불가능했던 것을 만드는 일. 코딩 지식은 여전히 기본 전제이며,
              오케스트레이터로서 10배 엔지니어링을 100배 산출로 바꿉니다.
            </p>
          </div>
        </div>
      </section>

      {/* Four Core Practices */}
      <section className="mb-16" id="core-practices">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          4가지 핵심 실천
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI-Native 엔지니어링을 vibe coding과 일상적 혼돈에서 갈라놓는 네 가지
          규율입니다.
        </p>

        <div className="space-y-4">
          {[
            {
              num: "01",
              icon: Layers,
              title: "동기화된 컨텍스트 엔지니어링",
              en: "Synchronized Context Engineering",
              desc: "AI-Native 엔지니어의 가장 중요한 단일 역량. 아키텍처 다이어그램, 코딩 표준, 비즈니스 규칙, 팀 컨벤션을 AI 작업 메모리에 체계적으로 주입한다. 출력 품질은 받은 컨텍스트 품질에 의해 제한된다. CLAUDE.md 같은 컨텍스트 파일은 선택적 문서가 아니라 핵심 인프라이며, 엄격히 실천하는 팀은 40~50% 속도 향상을 보고한다.",
            },
            {
              num: "02",
              icon: FileCode,
              title: "명세 주도 개발",
              en: "Specification-Driven Development",
              desc: "AI 코드 품질은 입력 명세 품질을 따라간다. AI가 전례 없는 속도로 garbage를 생성할 수 있기에 'garbage in, garbage out'이 더 강하게 작동한다. 만들기 전에 무엇을 원하는지 정의하고, 명확한 성공 기준이 있는 마일스톤으로 쪼개고, 체크포인트마다 검증하며 점진적으로 실행하라.",
            },
            {
              num: "03",
              icon: ShieldCheck,
              title: "비판적 검증",
              en: "Critical Verification",
              desc: "AI 생성 코드의 약 45%가 보안 결함을 포함한다. Stanford 연구는 AI 보조 개발자가 더 안전하지 않은 코드를 쓰면서 더 안전하다고 확신하는 위험한 조합을 발견했다. 병목은 코드 작성에서 '코드가 신뢰성·보안을 갖추고 동작함을 증명'하는 것으로 영구히 이동했다. 검증은 이제 타협 불가다.",
            },
            {
              num: "04",
              icon: Puzzle,
              title: "문제 분해",
              en: "Problem Decomposition",
              desc: "크고 복잡한 문제를 AI에 과신하지 마라. AI가 다룰 수 있는 단위로 쪼개, 루틴 구현의 70~80%는 에이전트가 맡고 엣지 케이스·커스텀 로직·도메인 특수성은 사람이 처리한다. 복잡한 문제는 컨텍스트 오염과 slop을 부르고, 에이전트는 여기서 회복하기 매우 어렵다.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-ds-surface-low p-6 rounded-2xl flex gap-5"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 bg-ds-primary-container/30 flex items-center justify-center rounded-xl">
                  <item.icon className="w-6 h-6 text-ds-primary" />
                </div>
                <p className="text-xs font-bold text-ds-on-surface-variant text-center mt-2">
                  {item.num}
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-ds-on-surface">
                  {item.title}
                </h3>
                <p className="text-xs text-ds-secondary font-medium mb-2">
                  {item.en}
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Time Allocation */}
      <section className="mb-16" id="time-allocation">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          시간 배분: 40 / 20 / 40
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          대부분의 개발자는 코드 생성에 시간을 쏟지만, AI-Native 작업의 최적
          배분은 다릅니다. 생성 단계는 빠르고, 컨텍스트와 검증이 새로운 시간
          소모처가 됩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              pct: "40%",
              title: "컨텍스트 설정",
              sub: "Context-setting",
              color: "bg-emerald-50 dark:bg-emerald-950/30",
              border: "border-emerald-500",
            },
            {
              pct: "20%",
              title: "생성 · 테스트 반복",
              sub: "Generation & Testing",
              color: "bg-sky-50 dark:bg-sky-950/30",
              border: "border-sky-500",
            },
            {
              pct: "40%",
              title: "리뷰 · 검증",
              sub: "Reviewing & Verification",
              color: "bg-blue-50 dark:bg-blue-950/30",
              border: "border-blue-500",
            },
          ].map((item) => (
            <div
              key={item.sub}
              className={`${item.color} border-t-2 ${item.border} p-6 rounded-b-xl text-center`}
            >
              <p className="text-3xl font-extrabold text-ds-on-surface mb-1">
                {item.pct}
              </p>
              <p className="text-sm font-bold text-ds-on-surface">
                {item.title}
              </p>
              <p className="text-xs text-ds-on-surface-variant">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Individual Transformation Journey */}
      <section className="mb-16" id="journey">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          개인의 전환 여정
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI-Native 엔지니어로의 전환은 세 단계로 이루어집니다.
        </p>

        <div className="space-y-4">
          {[
            {
              icon: Compass,
              phase: "Phase 1",
              title: "기반 다지기",
              time: "최대 2주",
              desc: "Codex, Claude Code, Cursor 중 하나의 주력 어시스턴트를 골라 매일 깊게 써보며 역량과 한계에 대한 직관을 쌓는다. AI가 가치를 더하는 순간과 오히려 일을 늘리는 순간을 구분하는 판단력을 기르는 것이 목표.",
            },
            {
              icon: Layers,
              phase: "Phase 2",
              title: "통합하기",
              time: "최대 한 달",
              desc: "구조화된 프롬프팅 프레임워크를 채택하고, 팀 표준·아키텍처 패턴을 담은 프로젝트 컨텍스트 파일을 만든다. 'Plan → Execute → Review' 워크플로우를 도입하고, 검증 체크포인트가 있는 작은 루프를 돈다. 타이트한 human-in-the-loop 사이클이 대규모 자율 실행보다 훨씬 나은 결과를 낸다.",
            },
            {
              icon: Rocket,
              phase: "Phase 3",
              title: "통달하기",
              time: "지속",
              desc: "멀티 스텝·멀티 파일 작업에 에이전트를 투입하고, AI 코드 리뷰 워크플로우와 멀티 에이전트·병렬 세션·교차 검증 루프를 운용한다. 목표 지표: AI 생성 코딩 비율 80%+, 재작성률 20% 미만.",
            },
          ].map((item) => (
            <div
              key={item.phase}
              className="bg-ds-surface-low p-6 rounded-2xl flex gap-5 items-start"
            >
              <div className="w-12 h-12 bg-ds-primary-container/30 flex items-center justify-center rounded-xl shrink-0">
                <item.icon className="w-6 h-6 text-ds-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-bold text-ds-primary">
                    {item.phase}
                  </span>
                  <h3 className="text-lg font-bold text-ds-on-surface">
                    {item.title}
                  </h3>
                  <span className="text-xs text-ds-on-surface-variant bg-ds-primary-container/20 px-2 py-0.5 rounded-md">
                    {item.time}
                  </span>
                </div>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Transformation */}
      <section className="mb-16" id="team">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          팀 전환: 문화라는 토대
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          연구에 따르면 전환 성공의 70%는 운영·문화적 변화에서 옵니다. 리더가
          매일 AI를 직접 쓰며 변화를 모델링하고, 세 가지 문화적 기둥을 세워야
          합니다.
        </p>

        <div className="space-y-3">
          {[
            {
              icon: Users,
              title: "심리적 안전",
              desc: "MIT 연구: 리더의 83%가 심리적 안전이 AI 이니셔티브 성공을 측정 가능하게 개선한다고 본다. 'AI 실패 사례'를 학습 기회로 축하하고, 모두가 집단 학습에 포함되도록 하라.",
            },
            {
              icon: CheckCircle2,
              title: "진화한 코드 리뷰",
              desc: "AI 생성 코드량은 전통적 인간 리뷰를 압도한다. AI 생성 코드와 인간 코드를 구분하는 별도 리뷰 루브릭을 두고, 'AI 생성 + AI 리뷰' PR이라는 위험한 조합은 명시적으로 가드레일을 건다.",
            },
            {
              icon: Layers,
              title: "공유 컨텍스트 라이브러리",
              desc: "컨텍스트 파일·평가셋·에이전트 설정을 팀 전체에 표준화하라. 단, 표준화를 두고 경쟁하며 통제 불가능하게 증식하는 현상은 경계해야 한다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-ds-surface-low p-5 rounded-xl flex gap-4 items-start"
            >
              <item.icon className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-ds-on-surface mb-1">
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

      {/* ADLC */}
      <section className="mb-16" id="adlc">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          에이전틱 개발 생명주기 (ADLC)
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          전통적 SDLC는 AI 에이전트가 인간과 함께 개발하는 방식에 맞지 않습니다.
          AI-Native 엔지니어링은 각 단계를 재정의하는 Agentic Development Life
          Cycle로 진화합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              step: "Planning",
              ko: "계획",
              desc: "가장 중요한 단계. 여러 에이전트로 병렬 탐색하고, 코드베이스를 근거로 명세하며, 모호성을 표시하고 서브태스크로 분해한다. 계획 에이전트가 탐색 결과를 통합해 구현 전략을 만든다.",
            },
            {
              step: "Building",
              ko: "구축",
              desc: "에이전트가 주니어~미드레벨 엔지니어처럼 기능을 end-to-end 구현하고, 엔지니어는 직접 코딩 대신 여러 에이전트를 지휘하는 테크 리드로 일한다.",
            },
            {
              step: "Testing",
              ko: "테스트",
              desc: "TDD의 재림. 에이전트가 테스트 계획을 먼저 쓰고 코드를 구현한다. 모든 테스트는 처음엔 실패했다가 점진적으로 통과한다. 단위 테스트에 과몰입해 통합·시스템 테스트를 놓치지 마라.",
            },
            {
              step: "Review",
              ko: "리뷰",
              desc: "기능성·품질·확장성·성능·신뢰성·보안·프라이버시 등 차원별 에이전트 swarm을 배치한다. 한 곳에서 취약점이 발견되면 '일반화 원칙'으로 같은 유형을 코드 전반에서 선제 제거한다.",
            },
            {
              step: "Documentation",
              ko: "문서화",
              desc: "사후 문서화에서 연속 생성으로. 에이전트가 요약·설계 결정·아키텍처 다이어그램·체인지로그를 실시간 생성해, 수십 년간 시달린 stale 문서 문제를 해결한다.",
            },
            {
              step: "Codify ADLC",
              ko: "체계화",
              desc: "개인(Layer-1)·팀(Layer-2) 실천을 자기진화하는 컨텍스트 파일·스킬 라이브러리·MCP 도구로 인코딩해, ADLC가 부족 지식에 머물지 않고 조직 전체로 확장되게 한다.",
            },
          ].map((item, idx) => (
            <div key={item.step} className="bg-ds-surface-low p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-ds-primary bg-ds-primary-container/30 w-6 h-6 flex items-center justify-center rounded-md">
                  {idx + 1}
                </span>
                <h3 className="text-base font-bold text-ds-on-surface">
                  {item.step}
                  <span className="text-ds-on-surface-variant font-normal text-sm ml-1.5">
                    {item.ko}
                  </span>
                </h3>
              </div>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-5 rounded-r-xl mt-4 flex gap-3">
          <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">Pro Tip.</strong> 계획·구축·테스트
            에이전트를 분리하라. 각 swarm이 서로 다른 관점에서 코드베이스를
            깊이 이해하고, 지름길을 택한 구축 에이전트나 커버리지를 건너뛴 테스트
            에이전트를 다른 에이전트가 책임 추궁할 수 있다.
          </p>
        </div>
      </section>

      {/* Where AI Creates Leverage */}
      <section className="mb-16" id="leverage">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          AI가 진짜 레버리지를 만드는 곳
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI는 <strong>만드는 비용</strong>을 극적으로 낮췄지만, 그것은 전체
          개발 비용의 20~30%에 불과합니다. 무엇을 만들고 무엇을 버릴지{" "}
          <strong>결정하는 비용</strong>은 거의 그대로입니다. 레버리지는 실행
          조율이 아니라 학습 가속에서 나옵니다.
        </p>

        <div className="space-y-3">
          {[
            {
              title: "더 저렴한 실험",
              desc: "기능의 70% 이상이 실제 사용자에게 도달하지 못한다. AI는 본격 개발 전에 '이게 중요한가'를 값싸게 검증하게 해준다. 규율: 비현실적 개념을 가차 없이 죽여라.",
            },
            {
              title: "사용자 리서치를 위한 빠른 프로토타이핑",
              desc: "v0, Replit Agent, Bolt.new로 자연어에서 몇 분 만에 동작 프로토타입을 만든다. 문서를 동작 프로토타입이 대체하고, 사용자 테스트 신호 품질이 올라간다.",
            },
            {
              title: "판단이 아닌 보일러플레이트 자동화",
              desc: "스캐폴딩·비신규 코드·테스트·문서·데이터 모델은 AI가 맡고, 팀은 핵심 비즈니스 로직·공감적 UX·신규 구현·무엇을 남기고 버릴지의 결정에 집중한다.",
            },
            {
              title: "'50%까지 설계' 원칙",
              desc: "핵심 사용자 여정만 가능한 최소 기능을 출시하고, 사용자가 망설이거나 오해하거나 이탈하는 지점을 관찰한다. 상상이 아닌 실제 제품 과제가 드러난다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-ds-surface-low p-5 rounded-xl flex gap-4 items-start"
            >
              <CheckCircle2 className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-ds-on-surface mb-1">
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

      {/* Guardrails */}
      <section className="mb-16" id="guardrails">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          가드레일 &mdash; 선택이 아니다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI 생성 코드의 보안 환경은 진짜로 경고등이 켜진 상태입니다. 저자의
          환경에서는 <strong>주당 약 한 건</strong>의 새로운 비보안 AI 통합이
          나타났고, 상당수가 프로덕션 장애로 이어졌습니다.
        </p>

        <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-2xl mb-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
            <h3 className="text-base font-bold text-ds-on-surface">
              실제 사고 사례
            </h3>
          </div>
          <div className="space-y-3">
            {[
              {
                t: "Chat 통합 RCE",
                d: "AI로 이틀 만에 만든 통합이 2FA를 우회하고 열린 ACL을 악용해 원격 코드 실행에 도달. 탐지·완화·수정에 수십 시간 소요.",
              },
              {
                t: "무단 DB 접근",
                d: "AI 코딩 에이전트가 약 1,500개의 보안 테이블에 권한 없이 접근해 민감 데이터를 프롬프트 인젝션 위험에 노출.",
              },
              {
                t: "Google Docs 프롬프트 인젝션",
                d: "문서에 심긴 프롬프트 인젝션으로 입력 필터링을 우회해 원격 코드 실행 달성.",
              },
              {
                t: "공급망 오염 (Slopsquatting)",
                d: "AI가 존재하지 않는 패키지명을 환각하면, 공격자가 그 이름을 악성 코드와 함께 등록하는 2025년형 신종 공격 벡터.",
              },
            ].map((item) => (
              <div key={item.t} className="flex gap-3">
                <span className="text-sm font-bold text-red-500 shrink-0">
                  &bull;
                </span>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  <strong className="text-ds-on-surface">{item.t}.</strong>{" "}
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              icon: Lock,
              title: "에이전트 신원 · 접근 제어",
              desc: "step-up 2FA, 최소 권한 원칙, 공유 자격증명·열린 ACL 금지. 읽기 전용부터 시작해 신뢰를 쌓은 뒤 권한을 넓혀라.",
            },
            {
              icon: ShieldCheck,
              title: "프롬프트 인젝션 방어",
              desc: "외부 콘텐츠는 숨은 명령을 담을 수 있다. 입력 필터링·콘텐츠 검증·컨텍스트 정화를 적용하고, 신뢰 불가 명령을 자동 실행하지 마라. 자동 승인의 유혹에 저항하라.",
            },
            {
              icon: AlertTriangle,
              title: "정적 분석 통합",
              desc: "Python 스니펫의 약 30%, JS의 25%가 보안 취약점을 포함한다. CI/CD에 고급 정적 분석을 중앙화하고, 인증·결제·PII 처리에는 인간 리뷰를 의무화하라.",
            },
            {
              icon: CheckCircle2,
              title: "자동 품질 게이트",
              desc: "Ralph Loop 같은 자율 루프로 성공 기준 충족까지 반복 검증. diff 제출 전 타입 체크·린트·테스트 실행, 프로덕션 배포 전 다단계 canary 게이트.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-ds-surface-low p-5 rounded-xl flex gap-4 items-start"
            >
              <item.icon className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-ds-on-surface mb-1">
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

      {/* The Engineer of 2026 */}
      <section className="mb-16" id="future">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          2026년 이후의 엔지니어
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          새 환경에서 번창하는 엔지니어는 AI를 실행의 협업 파트너로 다루면서,
          AI가 복제할 수 없는 시스템 사고·비판적 판단·소통 능력을 유지합니다. AI는
          기존 전문성을 <strong>대체</strong>하는 게 아니라{" "}
          <strong>증폭</strong>합니다.
        </p>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="space-y-3">
            {[
              {
                k: "도메인 전문성",
                v: "AI-Native 생산성의 핵심 차별화 요소. 수학·과학·금융·헬스·법률 등 도메인 역량을 갈고닦아라.",
              },
              {
                k: "스킬 위축 방지",
                v: "Gartner는 2026년까지 조직의 50%가 'AI-free' 역량 평가를 요구할 것으로 본다. 가끔은 AI 없이 일해 기초 능력을 보존하라.",
              },
              {
                k: "생산성 역설",
                v: "개인의 생산성 향상이 팀·회사 수준에선 안 나타나기 일쑤다. 코딩 속도가 아니라 end-to-end 사이클 타임과 기능 속도에 집중하라.",
              },
              {
                k: "다년간의 전환",
                v: "이것은 일회성 도구 도입이 아니라 새로운 일하는 방식이다. 도구 업그레이드로 취급한 팀은 일관되게 실패한다.",
              },
            ].map((item) => (
              <div key={item.k} className="flex gap-3">
                <span className="text-xs font-bold text-ds-primary bg-ds-primary-container/30 px-2 py-1 rounded-md min-w-[110px] text-center shrink-0">
                  {item.k}
                </span>
                <span className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {item.v}
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
          <a
            href="https://blog.bytebytego.com/p/a-practical-guide-to-becoming-an"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#0f172a]/10 flex items-center justify-center rounded-lg shrink-0">
              <Newspaper className="w-5 h-5 text-[#0f172a] dark:text-ds-on-surface" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                A Practical Guide to Becoming an AI-Native Engineer
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Shah Rahman (Meta) | ByteByteGo Newsletter
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
