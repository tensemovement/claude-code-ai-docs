import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  Quote,
  Lightbulb,
  Compass,
  Battery,
  Scale,
  Layers,
  Cpu,
  Binary,
  Server,
  Network,
  Database,
  Boxes,
  Workflow,
  ShieldCheck,
  Globe,
} from "lucide-react";

export default function JoyOfUnderstandingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "AI", href: "/ai" },
          { label: "이해의 기쁨과 힘" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        이해의 기쁨과 힘
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        Igor Roztropiński의 에세이 <em>The Joy and Power of Understanding</em>의
        정리. 우리가 다루는 코드와 시스템을 깊이 <strong>이해</strong>하는 일은
        단지 실용적일 뿐 아니라 그 자체로 즐겁다는 것. LLM이 즉답을 쏟아내는
        시대일수록, 지름길로 이해를 건너뛰려는 본능에 저항하고{" "}
        <strong>기초(fundamentals)</strong>를 붙드는 것이 왜 장기적 통제력과
        진짜 실력, 그리고 순수한 기쁨으로 이어지는지를 다룹니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface italic">
          &ldquo;가장 고귀한 기쁨은 이해하는 기쁨이다.&rdquo;
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          &mdash; Leonardo da Vinci. 우리가 작업하는 코드와 소프트웨어 시스템을 더
          깊이 이해하는 일은 <strong>실용적</strong>이면서 동시에{" "}
          <strong>지극히 즐거운</strong> 일입니다. 그런데도 우리는 자주 그 이해를
          건너뜁니다 &mdash; 생성되거나 복붙된 해법을 그냥 받아들이면서.
        </p>
      </div>

      {/* 1. Dual value */}
      <section className="mb-16" id="dual-value">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          이해의 두 가지 가치
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          깊은 이해는 두 방향에서 값어치를 냅니다. 하나는 실용적입니다 &mdash;
          시스템을 <strong>통제하고 소유</strong>할 수 있게 합니다. 다른 하나는
          심리적입니다 &mdash; 무언가를 이해했을 때의 만족감은 진화가 우리에게
          새겨 넣은 <strong>순수한 보상</strong>입니다. 문제는 이 둘 다 좋은데도,
          우리가 자주 학습을 우회한다는 데 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-ds-surface-low p-6 rounded-2xl flex gap-4 items-start">
            <Compass className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-ds-on-surface mb-1">
                실용적 가치 &mdash; 통제와 소유
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                내가 이해하는 시스템만이 내가 <strong>고칠 수 있고, 확장할 수
                있고, 신뢰할 수 있는</strong> 시스템입니다. 이해 없이 굴러가는
                코드는 언제 어디서 무너질지 모르는 남의 집입니다.
              </p>
            </div>
          </div>
          <div className="bg-ds-surface-low p-6 rounded-2xl flex gap-4 items-start">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-ds-on-surface mb-1">
                심리적 가치 &mdash; 이해의 기쁨
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                &ldquo;아하&rdquo; 하고 맞아떨어지는 순간의 쾌감은 취미가 아니라{" "}
                <strong>본능</strong>입니다. 이해는 우리 뇌가 가장 좋아하는 보상
                중 하나이며, 그 즐거움을 스스로에게서 빼앗을 이유가 없습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Laziness & LLMs */}
      <section className="mb-16" id="laziness">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          인간의 본성: 게으름, 그리고 LLM이라는 가속기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          우리의 근본 충동은 <strong>에너지를 최소로 쓰고 이득을 최대로</strong>
          내는 것입니다. 이 게으름은 생존에는 유리했지만 학습에는 불리합니다.
          LLM은 이 게으름을 증폭합니다 &mdash; 준비된 해답을 즉시, 손 하나 까딱
          않고 내주기 때문입니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-8 flex gap-4 items-start">
          <Battery className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <em>
              &ldquo;LLM에게 어떤 테이블이 있고 어떤 데이터를 원하는지 말하면
              되는데, 굳이 SQL의 문법과 내부 동작을 왜 배우겠는가?&rdquo;
            </em>{" "}
            &mdash; 이 유혹은 논리적으로 그럴듯합니다. 하지만 저자는{" "}
            <strong>&ldquo;프롬프트하고 검증만 하면 된다&rdquo;</strong>는 주장에
            의문을 던집니다. 남이 만든 해법을 수동적으로 읽기만 해서는, 시간이
            지나도 날카로운 전문 역량이 <strong>유지되지 않기</strong> 때문입니다.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-xl flex gap-3">
          <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">핵심:</strong> LLM은 이해를
            대체하는 게 아니라 <strong>이해를 건너뛰고 싶은 유혹</strong>을
            강화합니다. 도구가 강력할수록, 그것을 지름길로 쓸지 지렛대로 쓸지는
            더욱 <strong>의식적인 선택</strong>이 됩니다.
          </p>
        </div>
      </section>

      {/* 3. Necessity of struggle */}
      <section className="mb-16" id="struggle">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          분투 없이는 숙련도 없다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          실력은 <strong>능동적 참여와 씨름</strong>에서만 자랍니다. 소프트웨어
          개발자의 가치를 정의하는 것은 지식과 경험이고, 그 지식과 경험은 남의
          해법을 읽는 것만으로는 절대 생기지 않습니다. 근육처럼, 핵심 역량은{" "}
          <strong>계속 쓰지 않으면 위축됩니다</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["능동적 씨름", "막히고, 틀리고, 다시 시도하는 과정 자체가 숙련의 재료입니다. 매끄럽게 건너뛴 문제는 배운 문제가 아닙니다."],
            ["지속적 사용", "핵심 기술은 꾸준한 연습과 실전 사용을 통해서만 유지됩니다. 쓰지 않는 능력은 조용히 사라집니다."],
            ["읽기만으로는 부족", "남의 코드를 아무리 많이 읽어도 스스로 만들어내는 능력은 자라지 않습니다. 이해는 소비가 아니라 생산에서 옵니다."],
          ].map(([t, d]) => (
            <div key={t} className="bg-ds-surface-low p-6 rounded-2xl">
              <p className="text-sm font-semibold text-ds-on-surface mb-2">{t}</p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Short vs Long term */}
      <section className="mb-16" id="tradeoffs">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          단기 vs 장기: 인지 부채는 언제 져도 되는가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          이해를 건너뛰는 것이 <strong>항상</strong> 나쁜 건 아닙니다. 맥락이
          전부입니다. 저자는 이해에 드는 비용과 이득을 상황에 따라 저울질하라고
          말합니다 &mdash; 이것은 다른 곳의 &ldquo;인지 부채(cognitive
          debt)&rdquo; 개념과 통합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border-t-2 border-emerald-500 p-6 rounded-b-xl">
            <p className="text-sm font-bold text-ds-on-surface mb-2">
              건너뛰어도 되는 곳
            </p>
            <ul className="space-y-2 text-sm text-ds-on-surface-variant leading-relaxed list-disc pl-5">
              <li>한 번 쓰고 버리는 일회성 스크립트</li>
              <li>MVP · 실험적 기능 &mdash; 살아남을지 모르는 코드</li>
              <li>드물게 쓰는 특수 도구 (매번 통달할 필요 없음)</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 border-t-2 border-red-400 p-6 rounded-b-xl">
            <p className="text-sm font-bold text-ds-on-surface mb-2">
              반드시 이해해야 하는 곳
            </p>
            <ul className="space-y-2 text-sm text-ds-on-surface-variant leading-relaxed list-disc pl-5">
              <li>오래 유지·관리될 프로덕션 코드</li>
              <li>매일 쓰는 핵심 기술 &mdash; 안 배우면 미래 생산성이 갇힘</li>
              <li>지식이 복리로 쌓여 학습 속도를 높이는 기반 영역</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-xl flex gap-3">
          <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">적용 팁:</strong> 핵심 기술을
            배우지 않으면 미래 생산성이 제약될 뿐 아니라, 새로운 것을 배우는
            속도까지 느려집니다. 이해는 복리로 쌓입니다 &mdash; 아는 것이 많을수록
            다음 것을 더 빨리 배웁니다. 그래서 <strong>어디에 인지 부채를 지고
            어디에 투자할지</strong>를 아는 것이 진짜 판단력입니다.
          </p>
        </div>
      </section>

      {/* 5. Output vs Outcome */}
      <section className="mb-16" id="output-outcome">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          아웃풋이 아니라 아웃컴
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          더 많이 만든다고 더 나아가는 것은 아닙니다. 산출량(output) 지표는{" "}
          <strong>조작하기 쉽고 오해를 부릅니다</strong>. 저자는 성과(outcome)에
          더 초점을 두라고 말합니다 &mdash; 장기 생산성과 이해는 성과 중심 지표에
          훨씬 더 잘 정렬됩니다.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left">
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low rounded-tl-xl">
                  산출량 지표 (Output)
                </th>
                <th className="p-3 font-bold text-ds-primary bg-ds-primary-container/20 rounded-tr-xl">
                  성과 지표 (Outcome)
                </th>
              </tr>
            </thead>
            <tbody className="text-ds-on-surface-variant align-top">
              {[
                ["작성한 코드 줄 수", "안정적으로 릴리스된 기능"],
                ["머지된 PR 개수", "단순해지고 삭제된 코드"],
                ["고친 버그 수", "애초에 예방된 버그"],
                ["바쁨의 증거 (조작 쉬움)", "진짜 가치의 증거 (조작 어려움)"],
              ].map((row, ri) => (
                <tr key={ri}>
                  <td className="p-3 bg-ds-surface-low/30">{row[0]}</td>
                  <td className="p-3 bg-ds-primary-container/10 font-medium text-ds-on-surface">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            LLM은 산출량을 폭발적으로 늘리기 쉽습니다 &mdash; 그래서 더욱, 무엇을
            성공으로 셀지가 중요해집니다. <strong className="text-ds-on-surface">
            더 많은 코드가 아니라, 문제가 실제로 해결되었는지</strong>를 물어야
            합니다. 성과에 초점을 두는 순간, 깊은 이해는 사치가 아니라 필수가
            됩니다.
          </p>
        </div>
      </section>

      {/* 6. Fundamentals */}
      <section className="mb-16" id="fundamentals">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          도구가 아니라 기초를 마스터하라
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          소프트웨어의 지형은 끝없이 커집니다 &mdash; 런타임, 네트워크, 보안,
          운영체제, 가상화, 컨테이너, 데이터베이스, 언어, 프레임워크, API, 그리고
          CI/CD · TDD · 마이크로서비스처럼 계속 번식하는 관행들. 이 모든 것을
          쫓는 것은 불가능합니다. 해법은 하나입니다 &mdash; 매번 바뀌는 도구가
          아니라 <strong>거의 바뀌지 않는 기초</strong>를 붙드는 것.
        </p>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl mb-8 flex gap-3">
          <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">기초(Fundamentals)란:</strong>{" "}
            소프트웨어를 개발하는 데 쓰이는 도구 · 라이브러리 · 프레임워크 · 프로토콜 ·
            컴포넌트의 밑바탕에 깔린 <strong>가장 기본적이고 거의 변하지 않는 규칙 ·
            제약 · 메커니즘</strong>, 그리고 컴퓨터와 계산을 지배하는 핵심 원리.
          </p>
        </div>

        <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-4">
          저자가 꼽는 기초 영역들은 다음과 같습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {[
            [Cpu, "컴퓨터 구조 · 하드웨어", "CPU · 메모리 · I/O가 실제로 어떻게 동작하는가"],
            [Binary, "기계어 · 어셈블리 · 고급 언어", "코드가 결국 무엇으로 번역되어 실행되는가"],
            [Server, "운영체제", "프로세스 · 스레드 · 메모리 · IPC"],
            [Boxes, "알고리즘 · 자료구조 · 복잡도", "무엇이 빠르고 무엇이 확장되지 않는가"],
            [Network, "네트워크 · 분산 시스템", "데이터가 기계들 사이를 어떻게 오가는가"],
            [Database, "데이터베이스 · 데이터 시스템", "데이터가 어떻게 저장 · 질의 · 일관성 유지되는가"],
            [Layers, "소프트웨어 설계 · 아키텍처", "상태 · 데이터 흐름 · 구조적 결정"],
            [Workflow, "동시성 · 병렬성", "여러 일이 동시에 벌어질 때의 규칙"],
            [ShieldCheck, "보안 · 신뢰성 · 성능 · 테스트", "그리고 운영 · 경제성 · 트레이드오프까지"],
          ].map(([Icon, t, d]) => {
            const IconComp = Icon as typeof Cpu;
            return (
              <div
                key={t as string}
                className="bg-ds-surface-low p-5 rounded-xl flex gap-4 items-start"
              >
                <IconComp className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-ds-on-surface mb-1">
                    {t as string}
                  </p>
                  <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                    {d as string}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            기초를 마스터하면 <strong className="text-ds-on-surface">보편적
            직관(universal intuition)</strong>이라는 강력한 메타 기술이 생깁니다.
            새 프레임워크 · 새 도구가 나와도, 그것이 밑바탕의 어떤 원리 위에
            서 있는지 이미 알기에 <strong>훨씬 빠르게 배웁니다</strong>. 도구는
            왔다 가지만 기초는 남습니다.
          </p>
        </div>
      </section>

      {/* 7. Conclusion */}
      <section className="mb-16" id="conclusion">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          결론: 기쁨과 힘을 동시에
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          이해의 기쁨을 누리는 것과 그 실용적 힘을 얻는 것은 하나입니다. 매번
          바뀌는 도구가 아니라 <strong>기초</strong>에 초점을 맞출 때, 우리는
          오래가는 역량과 영향력을 얻습니다. LLM이 즉답을 주는 시대에도 &mdash;
          아니, 오히려 그런 시대이기에 &mdash; 인지적 엄밀함을 유지하고 현재의
          한계 너머로 계속 자신을 밀어붙이는 것이 답입니다.
        </p>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <p className="text-base font-semibold text-ds-on-surface italic">
            &ldquo;그러니 올바른 초점을 갖고, 언제나 현재의 인지 능력 너머로 계속
            자신을 밀어붙이자 &mdash; 그 과정에서 규칙적으로 순수한 기쁨을 누리고,
            큰 영향력과 힘을 얻으면서.&rdquo;
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
            href="https://binaryigor.com/the-joy-and-power-of-understanding.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#4f46e5]/10 flex items-center justify-center rounded-lg shrink-0">
              <Globe className="w-5 h-5 text-[#4f46e5]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                The Joy and Power of Understanding
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Igor Roztropiński | binaryigor.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
