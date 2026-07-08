import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Dna,
  FileText,
  GitBranch,
  Layers,
  Notebook,
  Scale,
  ShieldAlert,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

export default function HarnessEngineeringPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "AI", href: "/ai" },
          { label: "하네스 엔지니어링과 자기개선" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        하네스 엔지니어링과 자기개선
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        Lilian Weng이 재귀적 자기개선(RSI)으로 가는 실질적 경로로 &ldquo;하네스
        엔지니어링&rdquo;을 제시한 글을 정리합니다. 모델 가중치를 직접 고치는
        대신, 모델을 둘러싼 소프트웨어 계층을 최적화하는 최근 연구 35편을
        네 갈래로 묶어 소개합니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          자기개선 AI는 가중치를 다시 쓰는 데서 시작하지 않는다. 하네스에서
          시작한다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          모델을 감싸는 소프트웨어 — 무엇을 어떻게 생각하고, 어떤 도구를
          호출하며, 무엇을 기억하고, 결과를 어떻게 판정할지 결정하는 계층이
          먼저 진화한다.
        </p>
      </div>

      {/* Section 1: 하네스란 무엇인가 */}
      <section className="mb-16" id="what-is-harness">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          하네스란 무엇인가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          Weng은 하네스를{" "}
          <span className="font-semibold text-ds-on-surface">
            &ldquo;베이스 모델을 둘러싸고 실행을 오케스트레이션하는
            시스템&rdquo;
          </span>
          으로 정의합니다. 초기 에이전트 프레임워크가 프롬프트 템플릿에
          가까웠다면, 하네스 엔지니어링은 워크플로우 설계(루프 엔지니어링),
          평가, 권한 제어, 영속적 상태 관리까지 포괄합니다 — 프롬프트보다는
          런타임·소프트웨어 시스템 설계에 더 가깝습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "생각하고 계획하기", desc: "모델이 문제를 어떻게 분해하고 다음 행동을 정하는가" },
            { title: "도구를 호출하고 행동하기", desc: "무엇을 실행할 수 있고, 어떤 권한 경계 안에서 움직이는가" },
            { title: "지각하고 컨텍스트를 관리하기", desc: "무엇을 보고, 무엇을 기억에 남길지 선택하는가" },
            { title: "산출물을 저장하고 평가하기", desc: "결과를 어디에 남기고, 무엇을 기준으로 성공을 판정하는가" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-ds-surface-low p-6 rounded-2xl hover:bg-ds-surface-high transition-colors"
            >
              <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg shrink-0">
                <Layers className="w-5 h-5 text-ds-primary" />
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

      {/* Section 2: 네 갈래 연구 개관 */}
      <section className="mb-16" id="four-areas">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          네 갈래의 연구
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          Weng은 최근 연구를 네 영역으로 정리합니다. 컨텍스트를 다루는
          법에서 출발해, 워크플로우 구조 자체, 하네스의 자기 진단, 마지막엔
          진화적 탐색까지 — 탐색 대상이 점점 넓어지는 흐름입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Notebook, title: "컨텍스트 엔지니어링", desc: "ACE · MCE · Meta-Harness — 컨텍스트를 살아있는 매뉴얼처럼 다룬다" },
            { icon: Workflow, title: "워크플로우 설계 자동화", desc: "ADAS · AFlow · AI Scientist — 워크플로우 구조 자체를 탐색 대상으로" },
            { icon: BrainCircuit, title: "자기개선 하네스", desc: "Self-Harness · STOP — 하네스가 스스로의 약점을 진단하고 고친다" },
            { icon: Dna, title: "진화적 프로그램 탐색", desc: "AlphaEvolve · Darwin Gödel Machine · ShinkaEvolve — 코드 자체를 개체군처럼 진화" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-ds-surface-lowest p-6 rounded-xl"
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

      {/* Section 3: 컨텍스트 엔지니어링 */}
      <section className="mb-16" id="context-engineering">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          1. 컨텍스트 엔지니어링
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          쌓이기만 하는 프롬프트 더미 대신, 컨텍스트를 지속적으로 갱신되는
          &ldquo;운영 매뉴얼&rdquo;로 취급하는 접근입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-ds-surface-low p-6 rounded-xl">
            <h3 className="font-bold text-ds-on-surface mb-2">
              ACE (Agentic Context Engineering)
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              세 역할이 함께 작동합니다.{" "}
              <span className="font-semibold text-ds-on-surface">
                Generator
              </span>
              는 작업 궤적을 생성하고,{" "}
              <span className="font-semibold text-ds-on-surface">
                Reflector
              </span>
              는 성공·실패 궤적에서 핵심 통찰을 추출하며,{" "}
              <span className="font-semibold text-ds-on-surface">
                Curator
              </span>
              는 이를 구조화된 항목으로 정리해 매뉴얼을 점진적으로
              업데이트합니다.
            </p>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-xl">
            <h3 className="font-bold text-ds-on-surface mb-2">
              MCE (Meta Context Engineering)
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              &ldquo;컨텍스트를 어떻게 관리할지&rdquo;와 &ldquo;컨텍스트에
              무엇을 담을지&rdquo;를 두 계층으로 분리합니다. 외부 계층은
              컨텍스트 관리 능력 자체를 진화시키고, 내부 계층은 그 능력을
              활용해 특정 작업의 컨텍스트를 최적화합니다.
            </p>
          </div>

          <div className="bg-ds-primary-container/20 p-6 rounded-xl border-l-4 border-ds-primary">
            <h3 className="font-bold text-ds-primary mb-2">Meta-Harness</h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              탐색으로 발견한 하네스가 ACE·MCE 같은 최고의 수작업 베이스라인
              대비{" "}
              <span className="font-semibold text-ds-on-surface">
                7.7~8.6점 높은 성능
              </span>
              을, 그것도{" "}
              <span className="font-semibold text-ds-on-surface">
                4배 적은 컨텍스트
              </span>
              로 달성했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 워크플로우 설계 자동화 */}
      <section className="mb-16" id="workflow-automation">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          2. 워크플로우 설계 자동화
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          처음엔 사람이 작업 워크플로우를 설계했고, 이후 모델이 설계에
          참여하기 시작했으며, 마침내 워크플로우의 구조 자체가 탐색 대상이
          되었습니다.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "AI Scientist",
              desc: "아이디어 발상, 코딩, 실험 실행, 결과 분석, 논문 작성, 동료 평가까지 — 연구 파이프라인 전체를 자동화합니다.",
            },
            {
              title: "ADAS (Automated Design of Agentic Systems)",
              desc: "에이전트 워크플로우 설계 자체를 탐색 가능한 최적화 문제로 취급합니다. 메타 에이전트가 계속해서 새 워크플로우 설계를 제안하고 평가받습니다.",
            },
            {
              title: "AFlow",
              desc: "워크플로우를 그래프로 표현하고 몬테카를로 트리 탐색(MCTS)을 이용해 더 나은 그래프 구조를 찾습니다.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-ds-surface-low p-6 rounded-xl">
              <h3 className="font-bold text-ds-on-surface mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: 자기개선 하네스 */}
      <section className="mb-16" id="self-improving-harness">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          3. 자기개선 하네스
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          Self-Harness, STOP 같은 연구에서 모델은 더 이상 하네스를 그저
          사용하는 데 그치지 않고, 하네스의 부족한 지점을 스스로 분석해
          개선안을 제안하기 시작합니다.
        </p>

        <div className="bg-ds-surface-low p-8 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider mb-4">
            Weakness Mining 절차
          </p>
          <div className="space-y-4">
            {[
              "에이전트가 작업을 수행하며 남긴 궤적을 수집한다 — 도구 호출, 에러 로그, 실패 결과, 검증기 피드백",
              "이 데이터에서 반복적으로 나타나는 실패 패턴을 식별한다",
              "식별된 패턴을 근거로 하네스 자체에 대한 개선안을 제안한다",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-7 h-7 bg-ds-primary-container/40 flex items-center justify-center rounded-full shrink-0 text-xs font-bold text-ds-primary">
                  {i + 1}
                </div>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed pt-0.5">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: 진화적 프로그램 탐색 */}
      <section className="mb-16" id="evolutionary-search">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          4. 진화적 프로그램 탐색
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          하네스를 구성하는 코드 자체를 개체군(population)으로 놓고 진화
          알고리즘으로 탐색하는 접근입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-ds-surface-low p-6 rounded-xl">
            <h3 className="font-bold text-ds-on-surface mb-2">AlphaEvolve</h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              과학적·알고리즘적 발견을 위한 코딩 에이전트로, 코드를 진화시켜
              더 나은 알고리즘을 발견합니다.
            </p>
          </div>

          <div className="bg-ds-primary-container/20 p-6 rounded-xl border-l-4 border-ds-primary">
            <h3 className="font-bold text-ds-primary mb-2">
              Darwin Gödel Machine (DGM)
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              편집 가능한 하네스 코드 저장소 자체를 LLM 코딩 에이전트로
              진화시킵니다. Claude 3.5 Sonnet을 베이스 모델로 사용해,
              SWE-bench Verified 성능을{" "}
              <span className="font-semibold text-ds-on-surface">
                20%에서 50%로
              </span>{" "}
              끌어올렸습니다.
            </p>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-xl">
            <h3 className="font-bold text-ds-on-surface mb-2">
              ShinkaEvolve
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-3">
              샘플 효율을 높이기 위해 세 가지 요소를 도입했습니다.
            </p>
            <ul className="space-y-2">
              {[
                "성능 순위와 자손 수의 균형을 맞추는 부모 샘플링으로 탐색 효율 개선",
                "임베딩 코사인 유사도로 기존 개체군과 지나치게 비슷한 후보를 걸러내는 코드-신규성 거부 샘플링",
                "성공한 해법의 좋은 패턴을 메타-스크래치패드에 기록해 이후 변이를 안내",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-ds-on-surface-variant"
                >
                  <ArrowUpRight className="w-4 h-4 text-ds-primary shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: SIA */}
      <section className="mb-16" id="joint-optimization">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          하네스와 가중치의 공동 최적화 — SIA
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          지금까지의 연구 대부분은 스캐폴드(하네스)만 바꾸거나 가중치만
          고정된 파이프라인으로 학습시키는, 한 번에 한 손잡이만 돌리는
          방식이었습니다.{" "}
          <span className="font-semibold text-ds-on-surface">
            SIA (Self Improving AI with Harness &amp; Weight Updates)
          </span>
          는 Feedback-Agent가 하네스와 가중치를 동시에 업데이트하도록
          시도합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-ds-surface-lowest p-6 rounded-xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider mb-3">
              하네스 업데이트가 개선하는 것
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              파싱, 재시도, 도구 사용, 탐색 절차 — 모델을 둘러싼
              &ldquo;소프트웨어 엔지니어링&rdquo; 부분을 주로 개선합니다.
            </p>
          </div>
          <div className="bg-ds-primary-container/20 p-6 rounded-xl border-l-4 border-ds-primary">
            <p className="text-xs font-bold text-ds-primary uppercase tracking-wider mb-3">
              가중치 업데이트가 개선하는 것
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              스캐폴드가 끝내 발견하지 못하는 과제 고유의 직관을
              더해줍니다.
            </p>
          </div>
        </div>

        <p className="text-sm text-ds-on-surface-variant leading-relaxed mt-6">
          중국어 법률 죄명 분류, 저수준 GPU 커널 최적화, 단일세포 RNA
          디노이징이라는 서로 다른 세 도메인에서 검증한 결과, 하네스와
          가중치를 함께 업데이트한 SIA-W+H가 하네스만 업데이트한 버전을
          앞섰습니다.
        </p>
      </section>

      {/* Section 8: 핵심 통찰 */}
      <section className="mb-16" id="core-insight">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          핵심 통찰: 코드는 하네스 최적화의 보편 언어
        </h2>
        <div className="bg-ds-surface-low/50 border-l-4 border-ds-outline-variant/40 p-6 rounded-r-xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            하네스는 결국 코드로 표현됩니다. 그리고 코드는 LLM 기반 코딩
            에이전트가 인간 엔지니어와{" "}
            <span className="font-semibold text-ds-on-surface">
              동일한 설계 공간을 탐색
            </span>
            할 수 있게 해주는 보편 언어입니다. 이것이 위 네 갈래 연구를
            관통하는 공통된 전제입니다.
          </p>
        </div>
      </section>

      {/* Section 9: 7가지 열린 과제 */}
      <section className="mb-16" id="open-challenges">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          7가지 열린 과제
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          Weng은 글을 낙관으로만 마무리하지 않습니다. 하네스 기반 자기개선이
          실제로 지속 가능하려면 아직 풀리지 않은 문제들이 남아 있습니다.
        </p>

        <div className="space-y-3">
          {[
            {
              icon: ShieldAlert,
              title: "약한 평가자 (Weak Evaluators)",
              desc: "빠르고 정확한 검증기 없이는 자기개선 루프가 최적화할 정직한 신호 자체가 없고, 대신 주어진 대리 지표를 해킹하게 됩니다.",
            },
            {
              icon: GitBranch,
              title: "메모리 생애주기",
              desc: "작업이 자율적이고 독립적일수록 메모리 관리의 부담이 커집니다. 이는 언젠가 소프트웨어 시스템의 문제를 넘어 지능 그 자체의 일부가 될 수도 있습니다.",
            },
            {
              icon: FileText,
              title: "부정적 결과의 소실",
              desc: "연구자는 성공 사례를 더 많이 발표하는 경향이 있고, 성공 사례가 지배적인 데이터로 학습한 모델은 언제 가설을 포기하고 실패를 정직하게 보고해야 하는지 판단하기 어려워합니다.",
            },
            {
              icon: Dna,
              title: "다양성 붕괴",
              desc: "진화·RL 루프는 이미 알려진 고보상 패턴을 착취하는 경향이 있습니다. 특히 개방형 연구에서는 최선의 경로가 현재 평가자 기준으로 처음엔 더 나빠 보일 수 있어, 개체군이 유사한 변형으로 붕괴하지 않도록 하는 장치가 필요합니다.",
            },
            {
              icon: Scale,
              title: "리워드 해킹",
              desc: "대리 지표를 진짜 목표로 착각해 최적화하면, 지표는 오르지만 실제 목적은 달성하지 못하는 결과로 이어집니다.",
            },
            {
              icon: Cpu,
              title: "장기 비용과 성공 지표",
              desc: "짧은 벤치마크 점수를 넘어, 장기적으로 지속 가능한 성공을 어떻게 정의하고 측정할지에 대한 합의가 아직 부족합니다.",
            },
            {
              icon: Users,
              title: "인간의 역할",
              desc: "루프의 자율성이 커질수록 사람은 어디에 남아야 하는가 — 감독, 방향 설정, 최종 판단의 경계를 다시 그어야 합니다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-ds-surface-lowest p-5 rounded-xl hover:bg-white hover:shadow-[0px_12px_32px_rgba(42,52,57,0.06)] transition-all"
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

      {/* Section 10: 왜 중요한가 */}
      <section className="mb-16" id="why-it-matters">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          왜 중요한가
        </h2>
        <div className="bg-ds-primary-container/20 p-6 rounded-xl border-l-4 border-ds-primary">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <Sparkles className="w-4 h-4 text-ds-primary inline-block mr-1 -mt-1" />
            가까운 미래의 자기개선 경로는 모델이 스스로의 뇌(가중치)를 다시
            쓰는 것이 아니라, 모델이 답에 도달하는 방식 — 즉 하네스를
            최적화하는 것일 가능성이 큽니다. 이는 Claude Code와 같은 에이전트
            하네스를 설계·운영하는 실무자에게도 곧바로 적용되는 관점입니다.
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
            href="https://lilianweng.github.io/posts/2026-07-04-harness/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-ds-on-surface/5 flex items-center justify-center rounded-lg shrink-0">
              <Notebook className="w-5 h-5 text-ds-on-surface" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                Harness Engineering for Self-Improvement — Lilian Weng
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                lilianweng.github.io (Lil&apos;Log)
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
