import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  GitMerge,
  Gauge,
  ShieldCheck,
  FileStack,
  Compass,
  GraduationCap,
  Scale,
  Newspaper,
  Quote,
} from "lucide-react";

export default function VibeCoderVsEngineerPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "AI", href: "/ai" },
          { label: "바이브 코더 vs 소프트웨어 엔지니어" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        바이브 코더 vs 소프트웨어 엔지니어
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        Yusuf Aytas가 정리한, AI 시대에 흐려지기 쉬운 경계에 관한 글. 둘을
        가르는 것은 <em>도구</em>가 아니라 <strong>책임이 어디서 시작되고 어디서
        끝나는가</strong>입니다. 같은 사람이 발견(discovery) 단계에서는 바이브
        코딩을, 전달(delivery) 단계에서는 엔지니어링 규율을 오갈 수 있어야
        합니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          차이는 도구가 아니다. 차이는 책임이 어디서 시작되고 어디서 끝나는가에
          있다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          도구가 강력해지면 사람들은 그 도구에 정체성을 두르고, 결국 그 기술
          전체가 도구 하나로 환원되어 버린다 &mdash; 과거 Java 중심 시대가 그랬던
          것처럼.
        </p>
      </div>

      {/* The Wrong Metric */}
      <section className="mb-16" id="wrong-metric">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          잘못된 지표
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          AI의 성공을 &ldquo;처음 동작하는 버전까지 걸린 시간&rdquo;으로 재면
          핵심을 놓칩니다. 진짜 지표는 <strong>&ldquo;안전하게 머지되기까지
          걸린 시간(time to safe merge)&rdquo;</strong>입니다. 여기엔 코드 리뷰,
          테스트 품질, 리스크 평가, 롤백 절차, 그리고 유지보수 비용이 모두
          포함됩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
              Time to First Version
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              데모가 돌아가기까지의 시간. 무언가를 <strong>보여줄 수 있다</strong>는
              것만 증명할 뿐, 팀이 그것을 흡수했는지는 말해주지 않습니다.
              데모는 잘못된 결승선입니다.
            </p>
          </div>
          <div className="bg-ds-primary-container/20 p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-primary uppercase tracking-[0.15em] mb-3">
              Time to Safe Merge
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              리뷰 · 테스트 · 리스크 · 롤백 · 유지보수까지 포함한 시간. AI가 코드
              생성을 싸게 만들면서 <strong>안전한 머지를 더 비싸게</strong>
              만든다면, 팀은 생각만큼 이득을 본 게 아닙니다.
            </p>
          </div>
        </div>
      </section>

      {/* Output Is Not Progress */}
      <section className="mb-16" id="output-not-progress">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          산출물은 진척이 아니다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          생성된 코드는 확장적(expansive)이 아니라 <strong>제약적
          (constrained)</strong>이어야 합니다. 크고 지저분한 변경은 일을 하류의
          유지보수 팀으로 떠넘길 뿐입니다. AI가 만든 코드도 손으로 쓴 코드와
          똑같은 기준을 충족해야 합니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            좋은 변경은 <strong className="text-ds-on-surface">좁고(narrow)</strong>,{" "}
            <strong className="text-ds-on-surface">설명 가능하며
            (explainable)</strong>,{" "}
            <strong className="text-ds-on-surface">경계가 분명해
            (bounded)</strong>, 시스템 전체를 끌고 다니지 않고도 머지할 수 있어야
            합니다.
          </p>
        </div>
      </section>

      {/* AI Cannot Take the Blame */}
      <section className="mb-16" id="ownership">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          AI는 책임을 질 수 없다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          사람이 쓴 코드에는 보통 <strong>결정의 흔적(decision trail)</strong>이
          남습니다. 반면 AI가 만든 코드에는 의도적 선택이 아니라{" "}
          &ldquo;완성(completion)&rdquo;이 담겨 있습니다. 진짜 오너십은 리뷰
          이전에 생성된 결과물을 <strong>내가 소유한 엔지니어링 결정</strong>으로
          전환하는 데서 나옵니다.
        </p>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl flex gap-3">
          <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            오너십이 세 번째 차이다. 바이브 코더는 &ldquo;모델이 생성했다&rdquo;고
            말할 수 있다. 소프트웨어 엔지니어는{" "}
            <strong className="text-ds-on-surface">&ldquo;내가 소유한다(I own
            it)&rdquo;</strong>고 말해야 한다. 책임은 모델에 머물 수 없다.
          </p>
        </div>
      </section>

      {/* Context Is Not Just Files */}
      <section className="mb-16" id="context">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          컨텍스트는 파일만이 아니다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          모델은 코드를 읽지만 시스템을 총체적으로 이해하지는 못합니다.
          엔지니어링 컨텍스트는 코드 바깥에 흩어져 있습니다 &mdash; 장애 이력,
          마이그레이션 경험, 고객 행동, 운영의 고통, 팀 컨벤션, 보안 요구사항,
          컴플라이언스 규칙. 그래서{" "}
          <strong>숙련된 엔지니어일수록 AI에게 자유가 아니라 경계와 제약을
          줄 때</strong> 가장 큰 가치를 얻습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            "장애 · 마이그레이션 이력",
            "고객 행동 · 운영의 고통",
            "팀 컨벤션 · 보안 · 컴플라이언스",
          ].map((item) => (
            <div
              key={item}
              className="bg-ds-surface-low p-5 rounded-xl flex gap-3 items-start"
            >
              <FileStack className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-ds-on-surface-variant leading-relaxed mt-4 italic">
          &ldquo;프로덕션에는 제약이 필요하다(Production needs
          constraints).&rdquo;
        </p>
      </section>

      {/* Discovery vs Delivery */}
      <section className="mb-16" id="discovery-delivery">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          바이브 코딩의 자리: 발견 vs 전달
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          핵심은 AI를 금지하느냐가 아니라 <strong>어디에 배치하느냐
          (placement)</strong>입니다. 틀려도 비용이 낮은 발견 단계에서는 바이브
          코딩을, 결과가 고객 &middot; 팀 &middot; 비즈니스에 영향을 주는 전달
          단계에서는 엔지니어링 규율을 쓰십시오.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border-t-2 border-emerald-500 p-6 rounded-b-xl">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <p className="text-sm font-bold text-ds-on-surface">
                Discovery &middot; 발견
              </p>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              아이디어 탐색과 빠른 프로토타이핑. 지저분함이 허용되고, 틀렸을 때의
              비용이 낮습니다. <strong>바이브 코딩이 빛나는 영역</strong>.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/30 border-t-2 border-blue-500 p-6 rounded-b-xl">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <p className="text-sm font-bold text-ds-on-surface">
                Delivery &middot; 전달
              </p>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              결과가 고객에게 닿는 영역. 틀렸을 때의 비용을 고객 &middot; 팀
              &middot; 비즈니스가 떠안습니다. <strong>엔지니어링 규율이
              필요한 영역</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* The Apprenticeship Problem */}
      <section className="mb-16" id="apprenticeship">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          도제(Apprenticeship)의 문제
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          주니어 엔지니어는 AI를 쓰면 더 생산적으로 <em>보이지만</em> 실제로는{" "}
          <strong>덜 배웁니다</strong>. 이는 엔지니어 성장의 핵심인 멘탈 모델
          형성을 약화시키고, 팀을 단단하게 만드는 동료 학습(peer learning)을
          가로막습니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl flex gap-4 items-start">
          <GraduationCap className="w-6 h-6 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            코드 리뷰는 일종의{" "}
            <strong className="text-ds-on-surface">
              &ldquo;기여자 포커(contributor poker)&rdquo;
            </strong>
            로 작동해, 키워줄 만한 팀원을 가려냅니다. AI 제출물은 이 피드백
            루프를 끊어버립니다. &mdash;{" "}
            <em>
              &ldquo;바이브 코딩은 더 빨리 배우게 해준다. 소프트웨어 엔지니어링은
              그 배움의 대가를 평생 치르지 않게 해준다.&rdquo;
            </em>
          </p>
        </div>
      </section>

      {/* The Difference (Conclusion) */}
      <section className="mb-16" id="the-difference">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          진짜 차이 &mdash; 그리고 결론
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          바이브 코더는 아이디어 도출과 빠른 프로토타이핑에 강합니다. 소프트웨어
          엔지니어는 리뷰 &middot; 보안 &middot; 테스트 &middot; 운영 &middot;
          미래의 변경을 통해 <strong>시스템을 소유</strong>합니다. 진짜 실력은{" "}
          <strong>어느 모드로 일해야 하는지 아는 것</strong>입니다.
        </p>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-center gap-2 mb-3">
            <Scale className="w-5 h-5 text-ds-primary" />
            <p className="text-base font-semibold text-ds-on-surface">
              금지도, 무비판적 수용도 아니다
            </p>
          </div>
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            같은 사람이 발견 단계에서는 바이브 코딩을 하고, 전달 단계에서는
            엔지니어링으로 전환해야 합니다. 틀려도 비용이 낮은 곳에는 바이브
            코딩을, 비용을 고객 &middot; 팀 &middot; 비즈니스가 떠안는 곳에는
            엔지니어링 규율을 쓰십시오. 이 구분은 <strong>능력의 차이가 아니라
            책임의 차이</strong>를 반영합니다.
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
            href="https://yusufaytas.com/vibe-coder-vs-software-engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#0f172a]/10 flex items-center justify-center rounded-lg shrink-0">
              <Newspaper className="w-5 h-5 text-[#0f172a] dark:text-ds-on-surface" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                Vibe Coder vs Software Engineer
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Yusuf Aytas | yusufaytas.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
