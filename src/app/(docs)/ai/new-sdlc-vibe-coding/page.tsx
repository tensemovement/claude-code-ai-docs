import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  ArrowRight,
  Cpu,
  Wrench,
  Database,
  Workflow,
  Rocket,
  Quote,
  Lightbulb,
  Factory,
  BookOpen,
} from "lucide-react";

export default function NewSdlcVibeCodingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "AI", href: "/ai" },
          { label: "바이브 코딩과 새로운 SDLC" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        바이브 코딩과 새로운 SDLC
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        Google(Addy Osmani 외)이 펴낸 백서 <em>The New SDLC With Vibe Coding</em>의
        정리. 즉흥적인 프롬프팅(ad-hoc prompting)에서 규율 있는{" "}
        <strong>에이전틱 엔지니어링(agentic engineering)</strong>으로 넘어가는
        흐름을 짚고, 코드 <em>작성</em>에서 <strong>의도(intent) 표현</strong>으로
        개발자의 인터페이스가 바뀌면서 소프트웨어 생명주기 전체가 어떻게
        재편되는지 다룹니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          소프트웨어 엔지니어링의 가장 근본적인 전환은 새 언어도, 프레임워크도,
          클라우드 서비스도 아니다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          코드를 <strong>작성</strong>하는 일에서 <strong>의도를 표현</strong>하고,
          그 의도를 동작하는 소프트웨어로 번역하는 일을 지능형 시스템에 맡기는
          방향으로의 이동 &mdash; 즉 <strong>구문(syntax)에서 의도(intent)로</strong>의
          전환입니다.
        </p>
      </div>

      {/* 1. Syntax to Intent */}
      <section className="mb-16" id="syntax-to-intent">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          구문에서 의도로
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          수십 년간 개발자의 1차 인터페이스는 구문이었습니다 &mdash; 중괄호,
          세미콜론, 타입 주석, 그리고 언어의 엄밀한 문법. 그 시대가 저물고 있습니다.
          이제 개발자는 <strong>무엇을 만들지(what)</strong>를 표현하고, 모델이{" "}
          <strong>어떻게 만들지(how)</strong>를 구현합니다. 이 변화는 자동완성에서
          시작해 자율 에이전트까지, 각 세대가 이전 세대를 보존하면서 한 명의
          엔지니어가 해낼 수 있는 한계치를 끌어올려 온 결과입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { v: "85%", d: "전문 개발자 중 AI 코딩 에이전트를 정기적으로 사용하는 비율" },
            { v: "51%", d: "AI 코딩 에이전트를 매일 사용하는 비율" },
            { v: "41%", d: "새로 작성되는 코드 중 AI가 생성한 것으로 추정되는 비율" },
          ].map((s) => (
            <div key={s.v} className="bg-ds-primary-container/20 p-6 rounded-2xl">
              <p className="text-3xl font-extrabold text-ds-primary mb-2">{s.v}</p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-4">
            자동완성에서 자율성으로
          </p>
          <div className="flex flex-col md:flex-row md:items-stretch gap-2">
            {[
              { t: "자동완성", d: "다음 몇 글자 예측", y: "~2021" },
              { t: "인라인 제안", d: "시그니처로 함수 완성", y: "~2022" },
              { t: "챗 기반 생성", d: "자연어로 기능 설명", y: "~2023" },
              { t: "코딩 에이전트", d: "다중 파일 · 도구 호출 · 자가 수정", y: "~2024-25" },
              { t: "자율 에이전트", d: "레포 클론 · 계획 · PR 제출", y: "~2025-26" },
            ].map((step, i, arr) => (
              <div key={step.t} className="flex-1 flex items-center gap-2">
                <div className="flex-1 bg-ds-surface p-4 rounded-xl h-full">
                  <p className="text-sm font-semibold text-ds-on-surface">
                    {step.t}
                  </p>
                  <p className="text-xs text-ds-on-surface-variant mt-1 leading-relaxed">
                    {step.d}
                  </p>
                  <p className="text-[11px] text-ds-secondary mt-2 font-medium">
                    {step.y}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-ds-secondary shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-ds-on-surface-variant mt-4 italic">
            구문(More human effort) → 의도(More machine autonomy). 각 세대는 이전
            세대를 지우지 않고 그 위에 천장을 높였습니다.
          </p>
        </div>
      </section>

      {/* 2. AI Agents refresher */}
      <section className="mb-16" id="agent-refresher">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          AI 에이전트, 다시 짚어보기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI 에이전트는 목표를 인식하고(perceive), 단계를 계획하며(plan), 도구로
          행동하고(act), 결과를 관찰해(observe) 목표가 달성되거나 종료 조건에
          도달할 때까지 <strong>스스로 루프를 돈다</strong>는 점에서 챗봇과
          다릅니다. 모든 에이전트는 단순하든 정교하든 다섯 개 부품으로 이루어집니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { icon: Cpu, t: "모델 (Model)", d: "추론 엔진. 컨텍스트를 읽고 다음 생각 · 다음 도구 호출 · 다음 메시지를 만들어냅니다." },
            { icon: Wrench, t: "도구 (Tools)", d: "모델을 세계와 연결합니다. 호출 가능한 API, 실행 가능한 코드, 질의할 DB, 위임할 다른 에이전트." },
            { icon: Database, t: "메모리 (Memory)", d: "상태. 과거 상호작용 회상, 프로젝트 규칙 검색, 세션 간 컨텍스트 유지로 백지에서 다시 시작하지 않게 합니다." },
            { icon: Workflow, t: "오케스트레이션 (Orchestration)", d: "루프를 돌리는 코드. 매 호출의 컨텍스트를 조립하고 도구 호출을 디스패치하며 계속 여부를 판단합니다." },
          ].map((p) => (
            <div key={p.t} className="bg-ds-surface-low p-6 rounded-2xl flex gap-4 items-start">
              <p.icon className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  {p.t}
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {p.d}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl flex gap-4 items-start">
          <Rocket className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-ds-on-surface mb-1">
              배포 (Deployment)
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              프로토타입을 서비스로 바꾸는 부분 &mdash; 호스팅, 신원, 관측 가능성,
              에이전트가 돌아가는 프로덕션 인프라. 이 부품들은{" "}
              <strong>인식 → 계획 → 행동 → 관찰 → 반복</strong>이라는 하나의 연속
              루프로 함께 작동하며, 이 루프가 모든 에이전트의 심장입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Spectrum */}
      <section className="mb-16" id="spectrum">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          스펙트럼: 바이브 코딩 → 에이전틱 엔지니어링
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          2025년 2월 Andrej Karpathy가 제안한 &ldquo;바이브 코딩&rdquo;은 너무
          넓게 쓰이며 의미를 잃었고, 그 자신도 2026년 초 더 규율 있는 쪽을 가리키는{" "}
          <strong>&ldquo;에이전틱 엔지니어링&rdquo;</strong>을 제안했습니다. 둘은
          양자택일이 아니라 <strong>하나의 스펙트럼</strong>입니다. 핵심 구분선은
          AI를 쓰느냐가 아니라, AI의 산출물을 <strong>어떻게 검증하느냐</strong>
          입니다.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left">
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low rounded-tl-xl">
                  차원
                </th>
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low">
                  바이브 코딩
                </th>
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low">
                  구조화된 AI 보조
                </th>
                <th className="p-3 font-bold text-ds-primary bg-ds-primary-container/20 rounded-tr-xl">
                  에이전틱 엔지니어링
                </th>
              </tr>
            </thead>
            <tbody className="text-ds-on-surface-variant align-top">
              {[
                ["의도 명세", "캐주얼한 자연어 프롬프트", "예시·제약이 담긴 상세 프롬프트", "정식 스펙·아키텍처 문서·메모리 파일"],
                ["검증", "“되는 것 같은데?”", "수동 테스트·스팟 체크", "자동 테스트·CI/CD 게이트·LM 심사"],
                ["코드베이스 이해", "최소한; 생성 코드를 안 읽기도", "핵심 경로만 선택적 리뷰", "아키텍처 전반 리뷰; 구현은 AI가"],
                ["에러 처리", "에러 메시지 복붙해 AI에 전달", "개발자가 원인 진단, AI가 수정", "에이전트가 경계 내 자가 진단; 사람은 구조 이슈"],
                ["적정 범위", "프로토타입·스크립트·해커톤", "기존 코드베이스 내 기능", "프로덕션 시스템·팀 단위 개발"],
                ["리스크 프로파일", "높음; 폐기 가능한 코드에 한해 허용", "중간; 핵심 지점에 사람 판단", "낮음; 모든 단계에서 체계적 검증"],
              ].map((row, ri) => (
                <tr key={ri}>
                  <td className="p-3 font-semibold text-ds-on-surface bg-ds-surface-low/50">
                    {row[0]}
                  </td>
                  <td className="p-3 bg-ds-surface-low/30">{row[1]}</td>
                  <td className="p-3 bg-ds-surface-low/30">{row[2]}</td>
                  <td className="p-3 bg-ds-primary-container/10">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-xl flex gap-3">
          <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">적용 팁:</strong> 스펙트럼에서의
            올바른 위치는 <strong>이해관계(stakes)</strong>에 달려 있습니다. 주말
            프로토타입은 순수 바이브 코딩으로 충분하지만, 금융 거래를 처리하는
            프로덕션 API는 에이전틱 엔지니어링을 요구합니다. 진짜 실력은{" "}
            <strong>각 작업마다 선을 어디에 그을지 아는 것</strong>입니다. 테스트는
            결정론적 부분을, 평가(eval)는 비결정론적 부분을 검증합니다 &mdash; 둘
            다 없으면 프롬프트가 아무리 정교해도 그것은 결국 바이브 코딩입니다.
          </p>
        </div>
      </section>

      {/* 4. Context Engineering */}
      <section className="mb-16" id="context-engineering">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          컨텍스트 엔지니어링: 진짜 실력
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI 생성 코드의 품질은 프롬프트의 영리함보다 제공된{" "}
          <strong>컨텍스트의 질</strong>에 달려 있습니다. 개발자는 여섯 가지
          컨텍스트를 다뤄야 합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {[
            ["지시 (Instructions)", "에이전트의 역할 · 목표 · 운영 경계"],
            ["지식 (Knowledge)", "검색된 문서 · 아키텍처 다이어그램 · 도메인 데이터"],
            ["메모리 (Memory)", "단기 세션 로그(방금 무슨 일이) · 장기 영속 상태(프로젝트가 무엇인지)"],
            ["예시 (Examples)", "퓨샷 행동 시연 · 코드베이스 참조 패턴"],
            ["도구 (Tools)", "에이전트가 호출할 API · 스크립트 · 외부 서비스의 정확한 정의"],
            ["가드레일 (Guardrails)", "하드 제약 · 포매팅 규칙 · 안전성 검증"],
          ].map(([t, d]) => (
            <div key={t} className="bg-ds-surface-low p-5 rounded-xl">
              <p className="text-sm font-semibold text-ds-on-surface mb-1">{t}</p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {d}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
              정적 컨텍스트 (Static)
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              항상 로드됩니다 &mdash; 시스템 지시, 규칙 파일
              (<code className="text-ds-primary">AGENTS.md</code>,{" "}
              <code className="text-ds-primary">CLAUDE.md</code>,{" "}
              <code className="text-ds-primary">GEMINI.md</code>), 글로벌 메모리,
              페르소나. 모든 상호작용에 존재하므로 <strong>비싸지만</strong>{" "}
              에이전트가 핵심 규칙을 절대 잊지 않습니다.
            </p>
          </div>
          <div className="bg-ds-primary-container/20 p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-primary uppercase tracking-[0.15em] mb-3">
              동적 컨텍스트 (Dynamic)
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              필요할 때 로드됩니다 &mdash; 작업 매칭으로 트리거되는 스킬, 실행 중
              검색된 도구 결과, RAG로 가져온 문서, 윈도잉된 세션 히스토리.
              <strong>필요할 때만 토큰 비용을 내므로 효율적</strong>입니다.
            </p>
          </div>
        </div>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl flex gap-3">
          <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            동적 컨텍스트를 다루는 가장 강력한 패턴은{" "}
            <strong className="text-ds-on-surface">에이전트 스킬(Agent Skills)</strong>
            입니다. 절차적 지식을 담은 이식 가능한 패키지로, 작업이 요구할 때만
            로드됩니다. 점진적 공개(progressive disclosure)를 통해 에이전트는 가벼운
            제너럴리스트로 남으면서도 수십 개의 전문 능력을 짊어지고, 그중 실제로
            쓰는 하나의 토큰 비용만 지불합니다. &mdash;{" "}
            <em>
              &ldquo;프롬프트 엔지니어링&rdquo;에서 &ldquo;컨텍스트
              엔지니어링&rdquo;으로의 이동은, AI를 속여 좋은 코드를 짜게 하는 게
              아니라 &ldquo;새 팀원이 일을 잘하려면 무엇을 알아야 하는가&rdquo;를
              묻는 일입니다.
            </em>
          </p>
        </div>
      </section>

      {/* 5. The New SDLC */}
      <section className="mb-16" id="new-sdlc">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          새로운 소프트웨어 개발 생명주기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI는 생명주기를 극적으로, 그러나 <strong>불균등하게</strong> 압축합니다.
          몇 주 걸리던 구현이 몇 시간으로 줄지만, 요구사항 · 아키텍처 · 검증은
          여전히 사람의 속도에 묶여 있습니다. 결과는 더 빠른 옛 SDLC가 아니라{" "}
          <strong>다른 워크플로우</strong>입니다 &mdash; 단계의 경계가 흐려지고,
          반복 주기가 주에서 분으로 줄며, 개발자의 역할이 1차 구현자에서{" "}
          <strong>시스템 설계자이자 품질 결정자</strong>로 이동합니다.
        </p>

        <div className="space-y-3 mb-8">
          {[
            ["요구사항 · 계획", "AI가 제품 브리프에서 유저 스토리를 만들고, 사람이 놓친 엣지 케이스를 찾고, 명세에서 인터랙티브 프로토타입을 생성합니다. 요구사항은 팀 간 넘기는 문서가 아니라 사람과 AI의 대화가 됩니다."],
            ["설계 · 아키텍처", "트레이드오프 판단이 필요한 가장 인간 중심적인 단계. AI는 결정이 내려진 뒤 그것을 일관되게 구현합니다. 개발자는 보일러플레이트를 짜는 대신 구조적 결정을 내리고 문서화합니다."],
            ["구현", "자연어 설명에서 다중 파일 기능을 생성합니다. 생산성은 25~39% 향상 보고가 있지만, METR 연구는 검증·디버깅·교정 시간 때문에 숙련 개발자가 오히려 19% 더 걸린 경우도 보고합니다. AI는 구현을 없애기보다 '작성'에서 '리뷰·유도·검증'으로 바꿉니다."],
            ["테스트 · QA", "산출물(output)뿐 아니라 도달 과정(trajectory)도 평가해야 합니다. 검증 단계를 건너뛴 매끄러운 출력이 눈에 보이는 에러보다 더 위험합니다. 테스트·평가는 AI에 의도를 전달하는 1차 수단이 됩니다."],
            ["코드 리뷰 · 배포", "AI가 1차 리뷰어로서 버그·스타일·보안·성능 이슈를 사람보다 먼저 잡아냅니다. 배포 파이프라인도 AI를 인지해 헬스 모니터링, 자동 롤백, 리스크 예측을 수행합니다."],
            ["유지보수 · 진화", "가장 과소평가된 전환. 한때 '건드리면 안 되는' 레거시 코드를 AI가 읽고 패턴을 이해해 안전하게 리팩터링·현대화합니다. 너무 지루하고 위험해 미뤄지던 일이 가능해집니다."],
          ].map(([t, d], i) => (
            <div key={t} className="bg-ds-surface-low p-6 rounded-2xl">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-sm font-bold text-ds-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-ds-on-surface">{t}</p>
              </div>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {d}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl flex gap-3">
          <Factory className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-base font-semibold text-ds-on-surface mb-2">
              팩토리 모델 (The Factory Model)
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              이 전환들을 묶는 멘탈 모델. 개발자의 1차 산출물은 코드가 아니라{" "}
              <strong>코드를 생산하는 시스템</strong>입니다 &mdash; 무엇을 만들지
              정의하는 명세·컨텍스트, 명세를 구현으로 옮기는 에이전트, 정확성을
              검증하는 테스트·품질 게이트, 실패를 에이전트에 되돌리는 피드백 루프,
              안전하고 예측 가능한 행동으로 가두는 가드레일. 공장 관리자가 위젯을
              직접 조립하지 않고 조립 라인을 설계하듯, 현대 개발자는{" "}
              <strong>개발 시스템을 설계하고 그 산출물이 기준을 충족하게 합니다</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Harness Engineering */}
      <section className="mb-16" id="harness">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          하네스 엔지니어링: 모델을 둘러싼 것
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          빌더들이 흔히 빠지는 함정은 <strong>모델을 시스템으로 착각</strong>하는
          것입니다. 모델은 돌아가는 에이전트에 들어가는 하나의 입력일 뿐입니다.
          프롬프트, 도구, 컨텍스트 정책, 훅, 샌드박스, 서브에이전트, 관측 가능성
          &mdash; 모델이 무언가를 실제로 끝내게 해주는 이 모든 비계(scaffolding)가{" "}
          <strong>하네스</strong>입니다.
        </p>

        <div className="bg-ds-surface-low p-8 rounded-2xl mb-8 text-center">
          <p className="text-2xl md:text-3xl font-extrabold text-ds-on-surface tracking-tight">
            Agent = Model + Harness
          </p>
          <p className="text-sm text-ds-on-surface-variant mt-3">
            모델은 엔진이고, 하네스는 자동차이자 도로이자 교통 법규입니다. Claude
            Code · Cursor · Codex · Antigravity를 쓸 때 경험하는 동작의 대부분은{" "}
            <strong>어떤 모델이냐보다 하네스가 무엇을 하느냐</strong>가 좌우합니다.
          </p>
        </div>

        <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-4">
          구체적으로 하네스는 다음을 포함합니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {[
            ["지시 · 규칙 파일", "에이전트가 누구이고 무엇을 금지당하는지 정의 (AGENTS.md, CLAUDE.md, 스킬, 서브에이전트 프롬프트)"],
            ["도구", "호출 가능한 함수·MCP 서버·API, 그리고 언제·어떻게 부를지 알려주는 산문"],
            ["샌드박스 · 실행 환경", "에이전트 코드가 실제로 돌아가는 곳, 접근 가능한 것과 닿을 수 없는 것"],
            ["오케스트레이션 로직", "서브에이전트 스폰, 모델 라우팅, 전문가 간 핸드오프 규칙"],
            ["가드레일 · 훅", "특정 생명주기 시점에 도는 결정론적 코드 (도구 호출 전, 파일 편집 후, 커밋 전)"],
            ["관측 가능성", "로그·트레이스·평가·비용/지연 계측. 없으면 에이전트가 잘하는지 조용히 망가지는지 알 수 없습니다"],
          ].map(([t, d]) => (
            <div key={t} className="bg-ds-surface-low p-5 rounded-xl">
              <p className="text-sm font-semibold text-ds-on-surface mb-1">{t}</p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {d}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            공개 벤치마크가 하네스 효과의 크기를 보여줍니다. <strong>Terminal Bench
            2.0</strong>에서 한 팀은 모델을 전혀 바꾸지 않고 하네스만 바꿔 코딩
            에이전트를 Top 30 밖에서 Top 5로 끌어올렸고, LangChain의 한 연구는 고정된
            모델 주위의 시스템 프롬프트·도구·미들웨어만 조정해 점수를 13.7점
            높였습니다. <strong className="text-ds-on-surface">대부분의 에이전트
            실패는, 솔직히 들여다보면 모델 실패가 아니라 설정 실패</strong>입니다
            &mdash; 빠진 도구, 모호한 규칙, 없는 가드레일, 노이즈로 가득 찬 컨텍스트.
          </p>
        </div>
      </section>

      {/* 7. Conductor vs Orchestrator */}
      <section className="mb-16" id="conductor-orchestrator">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          개발자의 진화하는 역할: 지휘자와 오케스트레이터
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI가 구현을 떠맡으면서 개발자는 유동적으로 오가는 두 모드 사이에서
          일하게 됩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border-t-2 border-emerald-500 p-6 rounded-b-xl">
            <p className="text-sm font-bold text-ds-on-surface mb-1">
              지휘자 (Conductor)
            </p>
            <p className="text-xs text-emerald-700 dark:text-emerald-400 mb-3">
              실시간 · 동기 · IDE 안
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              IDE 안에서 코드가 나타나는 걸 지켜보며 프롬프트와 교정으로 AI를
              이끕니다. 키 입력 수준의 통제, 즉각 피드백, 단일 파일 범위. 복잡한
              로직·디버깅·낯선 코드베이스에 적합 (Copilot, Gemini Code Assist,
              Cursor, Windsurf).
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/30 border-t-2 border-blue-500 p-6 rounded-b-xl">
            <p className="text-sm font-bold text-ds-on-surface mb-1">
              오케스트레이터 (Orchestrator)
            </p>
            <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
              비동기 · 고수준 · 다중 에이전트
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              목표를 정의해 에이전트에 위임하고 결과를 리뷰합니다. 키 입력이 아니라
              산출물을 검토. 명세 · 분해 · 평가 · 시스템 설계 능력을 요구합니다.
              버그 수정·기능 구현·마이그레이션·테스트 생성에 적합 (Jules, Copilot
              agent, Cursor background agents, Claude Code).
            </p>
          </div>
        </div>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <p className="text-base font-semibold text-ds-on-surface mb-2">
            80% 문제 (The 80% Problem)
          </p>
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            AI는 기능 코드의 약 80%를 빠르게 만들지만, 나머지 20% &mdash; 엣지
            케이스, 에러 처리, 통합 지점, 미묘한 정확성 요구 &mdash; 는 현재 모델이
            자주 결여한 깊은 맥락 지식을 요구합니다. AI 에러는 단순 구문 실수에서{" "}
            <strong>코드가 &ldquo;맞아 보이고&rdquo; 기본 테스트도 통과하는</strong>{" "}
            더 음흉한 개념적 실패로 진화했습니다. 가장 잘 헤쳐나가는 개발자는 AI를
            잘하는 일(잘 명세된 작업의 빠른 구현)에 쓰고, 자신의 주의력은 AI가
            약한 일(모호한 요구, 아키텍처 트레이드오프, 정확성 검증)에 남겨둡니다.
          </p>
        </div>
      </section>

      {/* 8. Coding agents in practice */}
      <section className="mb-16" id="agents-in-practice">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          실전의 코딩 에이전트
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          코딩 에이전트는 일상에서 세 곳에 나타나며, 대부분의 개발자는 하루에 셋을
          모두 씁니다. 올바른 출발점은 작업에 달려 있지, 어느 범주가 자율성
          사다리에서 가장 높은지가 아닙니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            ["에디터 안에서", "타이핑하는 동안 다음 줄을 제안하는 인라인 완성, 코드를 설명·수정하는 챗 패널. 흐름을 유지한 채 작업할 때 (Copilot, Cursor, Windsurf, JetBrains AI)."],
            ["터미널에서", "명령줄에서 띄워 자연어로 목표를 건네면 코드베이스 전반을 다룹니다. 다중 파일 작업·낯선 코드 탐색에 적합 (Antigravity CLI, Claude Code, Codex CLI, Open Code, Cline)."],
            ["백그라운드에서", "작업을 받아 클라우드 샌드박스에서 수 시간 자율 실행하고 PR을 산출. 알려진 버그 수정·테스트 생성·프레임워크 마이그레이션에 적합 (Jules, Copilot agent, Cursor background agents, AlphaEvolve)."],
          ].map(([t, d]) => (
            <div key={t} className="bg-ds-surface-low p-6 rounded-2xl">
              <p className="text-sm font-semibold text-ds-on-surface mb-2">{t}</p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {d}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-sm font-semibold text-ds-on-surface mb-2">
            프로덕션 에이전트를 바이브 코딩하기
          </p>
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            만들어야 할 것이 <strong>에이전트 자체</strong>일 때 &mdash; 환불 요청을
            처리하는 고객지원 봇, 근거 있는 리포트를 내는 리서치 어시스턴트 &mdash;
            그것은 터미널에서 푸는 작업이 아니라 자체 도구·메모리·평가·배포 인프라가
            필요한 제품입니다. 프로토타입을 만들던 같은 터미널 워크플로우가 이제
            영속 메모리·거버넌스·관측 가능성을 갖춘 실서비스 에이전트까지 만들어냅니다.
            예컨대 Google의{" "}
            <code className="text-ds-primary">Agents CLI</code>는 선호하는 코딩
            에이전트와 함께 동작하며, 한 번 설치하면 스캐폴딩 → 코드 작성 → 평가 →
            Agent Runtime 배포 → 관측 연결까지 ADK 전체 생명주기를 스킬로 제공합니다.
            개발자는 새 SDK를 배우지 않고, 원하는 바를 말하면 코딩 에이전트가 각
            단계에서 알맞은 스킬을 씁니다.
          </p>
        </div>
      </section>

      {/* 9. Economics */}
      <section className="mb-16" id="economics">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          AI 개발의 경제학
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI의 영향을 논할 때 흔히 개발 속도(velocity)에서 시작해 거기서 끝나지만,
          엔지니어링 리더에게 더 중요한 지표는 <strong>총소유비용(TCO)</strong>
          입니다. AI 시대에는 운영비(OpEx)가 <strong>토큰 경제</strong>에 크게
          좌우됩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-red-50 dark:bg-red-950/30 border-t-2 border-red-400 p-6 rounded-b-xl">
            <p className="text-sm font-bold text-ds-on-surface mb-1">
              바이브 코딩 &mdash; 낮은 CapEx, 높은 OpEx
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed mt-2">
              진입 장벽은 사실상 0이지만 복리로 쌓이는 운영비가 숨어 있습니다.{" "}
              <strong>토큰 소각률</strong>(비정형 파일을 컨텍스트에 쏟아붓고 같은
              실수를 반복 수정), <strong>유지보수 세금</strong>(구조 없는
              스파게티 코드의 역공학 비용), <strong>보안 교정</strong>(설계 단계가
              아닌 프로덕션에서 잡는 비용은 기하급수적). 복잡한 시스템에서는
              경제적 막다른 길에 이릅니다.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/30 border-t-2 border-blue-500 p-6 rounded-b-xl">
            <p className="text-sm font-bold text-ds-on-surface mb-1">
              에이전틱 엔지니어링 &mdash; 높은 CapEx, 낮은 OpEx
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed mt-2">
              API 스키마 설계, 결정론적 테스트 스위트 구축, 에이전트 컨텍스트 구조화에
              <strong>선투자</strong>합니다. 초기 비용은 높지만 기능을 출시·유지하는
              한계비용이 급감합니다. 엄격히 통제된 &ldquo;공장&rdquo; 안에서 산출물이
              구조적으로 건전하고 사전 테스트되며 회사 표준에 정렬됩니다. 성숙한
              코드베이스일수록 경제적으로 지속 가능합니다.
            </p>
          </div>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl space-y-4">
          <div>
            <p className="text-sm font-semibold text-ds-on-surface mb-1">
              재무 레버로서의 컨텍스트 엔지니어링
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              LLM은 보내는 모든 정보에 과금합니다. 10만 토큰 레포 전체를 매
              프롬프트에 넣는 것은 규모에서 재정적으로 불가능합니다. 정밀한{" "}
              <code className="text-ds-primary">AGENTS.md</code>와 가드레일처럼{" "}
              <strong>밀도 높은 고신호 페이로드</strong>를 올바르게 제공하면 1차 성공률이
              올라가 바이브 코딩을 괴롭히는 시행착오 루프를 피합니다.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ds-on-surface mb-1">
              지능형 모델 라우팅
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              잘 설계된 팩토리 모델은 고난도 작업(요구사항·아키텍처·초기 구현)에만
              크고 강력한 모델을 쓰고, 결정론적 저난도 작업(테스트 생성·코드
              리뷰·CI/CD 모니터링)은 더 작고 빠르고 저렴한 모델로 자동 라우팅합니다.
              다중 모델 생태계를 오케스트레이션해 <strong>품질을 유지하면서 운영
              토큰 비용을 체계적으로 낮춥니다</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Where to start */}
      <section className="mb-16" id="where-to-start">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          어디서 시작할 것인가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          구문에서 의도로의 전환은 미래가 아니라 오늘의 일입니다. 핵심 원리는
          하나입니다 &mdash; <strong>AI는 그것이 안착한 엔지니어링 문화를
          증폭한다</strong>.
        </p>

        <div className="space-y-4">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
              개인 개발자
            </p>
            <ul className="space-y-2 text-sm text-ds-on-surface-variant leading-relaxed list-disc pl-5">
              <li>
                프로젝트에{" "}
                <code className="text-ds-primary">AGENTS.md</code>(또는 동등물)를
                둔다. 열 줄로 시작하고, 에이전트가 또 실수할 때마다 규칙을 한 줄씩
                추가한다.
              </li>
              <li>코딩 에이전트용 스킬 세트를 설치하고, 반복 워크플로우 하나를 골라 첫 에이전트로 만든다. 끝까지 하나 만들어보는 것이 백 번 읽는 것보다 낫다.</li>
              <li>
                <strong>코드를 생성하기 전에 테스트와 평가를 먼저 쓴다.</strong> 둘은
                AI와 맺는 계약이며, 어떤 프롬프트보다 의도를 정확히 전달한다.
              </li>
              <li>출시될 모든 줄을 리뷰한다. 영리해 보이는 것을 의심하고, import가 실제 패키지인지 확인하고, 에러 처리가 현실적 실패를 덮는지 검증한다. 기초 실력(디버깅·시스템 설계·성능 직관)을 날카롭게 유지한다.</li>
            </ul>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
              엔지니어링 리더
            </p>
            <ul className="space-y-2 text-sm text-ds-on-surface-variant leading-relaxed list-disc pl-5">
              <li>
                컨텍스트 엔지니어링을 팀의 1급 실천으로 만든다.{" "}
                <code className="text-ds-primary">AGENTS.md</code>·시스템 프롬프트·평가
                스위트·스킬 라이브러리를 코드처럼 리뷰·버전 관리하고 담당자를 둔다.
              </li>
              <li><strong>데모가 아니라 평가에 기준을 둔다.</strong> 데모는 한 번 성공을, 평가 스위트는 안정적 성공을 증명한다. 명확한 루브릭과 함께 평가 커버리지를 출시 전제 조건으로 요구한다.</li>
              <li>AI 생성 코드에 맞게 코드 리뷰를 재설계한다. 환각된 의존성·부실한 에러 처리·맞아 보이는 미묘한 정확성 결함에 특히 주의하도록 리뷰어를 훈련한다.</li>
              <li>프로토타이핑 작업과 프로덕션 작업을 팀 규범에서 구분한다. 경계가 흐릿한 팀은 프로토타입을 사고로 출시한다. 하네스 컴포넌트를 공유 자산으로 투자한다.</li>
            </ul>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
              조직
            </p>
            <ul className="space-y-2 text-sm text-ds-on-surface-variant leading-relaxed list-disc pl-5">
              <li><strong>AI 보조 개발을 생산성 기능이 아니라 엔지니어링 투자로 취급한다.</strong> 비계 없이 에이전트만 도입하면 품질 없는 속도가 기술 부채로 복리 누적된다.</li>
              <li>규모보다 프로덕션 기반을 먼저 투자한다. CI의 trajectory·최종 응답 평가, 모든 실행의 트레이스, 에이전트별 스코프 권한, 생성 코드 실패 모드에 맞춘 보안 리뷰를 첫 프로덕션 에이전트 출시 <em>전에</em> 갖춘다.</li>
              <li>도구·에이전트 간 통신에 열린 표준을 채택한다. 도구 접근의 MCP, 교차 위임의 A2A는 멀티 에이전트 시스템의 연결 조직으로 수렴 중이다.</li>
              <li><strong>채용과 역량 개발을 구현이 아니라 판단 중심으로 재구성한다.</strong> 앞으로 가장 가치 있는 엔지니어는 코드를 가장 많이 쓰는 사람이 아니라 에이전트를 잘 지휘하는 사람이다.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 11. Conclusion */}
      <section className="mb-16" id="conclusion">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          결론: 의도가 새로운 인터페이스다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          구문에서 의도로의 전환은 미래 예측이 아니라 현재의 현실입니다. SDLC는
          이미 AI 역량을 중심으로 압축·재구조화되고 있습니다. 질문은 이 전환이 일어날
          것이냐가 아니라, 개인 · 팀 · 조직이 <strong>얼마나 효과적으로 헤쳐나갈
          것이냐</strong>입니다. 세 가지 원리가 오래 유효합니다.
        </p>

        <div className="space-y-4 mb-8">
          {[
            ["구조는 확장되고, 바이브는 그렇지 않다", "바이브 코딩은 탐색·프로토타이핑·개인 프로젝트엔 유효하지만, 조직이 의존하는 소프트웨어에는 에이전틱 엔지니어링의 규율(명세·테스트·가드레일·아키텍처에 대한 사람의 감독)이 선택이 아니다. '되는 것 같다'와 '모든 조건에서 정확히 동작한다' 사이의 간극에 프로덕션 장애·보안 취약점·유지보수 악몽이 산다."],
            ["AI는 당신의 엔지니어링 문화를 증폭한다", "강한 테스트 관행·명확한 아키텍처 표준·건강한 코드 리뷰를 가진 조직은 그렇지 않은 곳보다 AI에서 훨씬 더 큰 가치를 얻는다. AI는 힘의 증폭기이며 강점과 약점을 모두 증폭한다."],
            ["인간의 역할은 줄지 않고 진화한다", "아키텍처를 이해하고, 정밀한 명세를 정의하며, 출력을 비판적으로 평가하고, 제약·피드백 루프 시스템을 설계하는 빌더가 그 어느 때보다 가치 있다. 중요한 기술이 구현에서 판단으로, 코드 작성에서 코드를 생산하는 시스템 설계로 이동한다."],
          ].map(([t, d], i) => (
            <div key={t} className="bg-ds-surface-low p-6 rounded-2xl">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-sm font-bold text-ds-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-ds-on-surface">{t}</p>
              </div>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {d}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <p className="text-base font-semibold text-ds-on-surface italic">
            &ldquo;생성(generation)은 풀렸다. 검증 · 판단 · 방향 설정이 새로운
            기예(craft)다.&rdquo;
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
            href="https://www.kaggle.com/whitepaper-the-new-SDLC-with-vibe-coding"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#20beff]/10 flex items-center justify-center rounded-lg shrink-0">
              <BookOpen className="w-5 h-5 text-[#20beff]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                The New SDLC With Vibe Coding &mdash; From ad-hoc prompting to
                Agentic Engineering
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Addy Osmani · Shubham Saboo · Sokratis Kartakis (Google) | kaggle.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
