import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Brain, Zap, Code2, Lightbulb } from "lucide-react";

export default function HarnessDesignPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Claude Code", href: "/claude-code" },
          { label: "장기 실행 앱을 위한 하네스 설계" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        장기 실행 앱을 위한 하네스 설계
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-6">
        Anthropic Labs의 Prithvi Rajasekaran이 공유하는 프론티어 에이전트 코딩의
        핵심 — GAN에서 영감을 받은 멀티 에이전트 구조로 프론트엔드 디자인과 장기
        자율 소프트웨어 엔지니어링의 한계를 돌파한 실전 하네스 설계 전략.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          하네스 설계는 에이전트 코딩 성능의 핵심이다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          모델이 좋아져도 흥미로운 하네스 조합의 공간은 줄어들지 않습니다 — 그것은
          이동할 뿐이며, AI 엔지니어의 일은 다음 새로운 조합을 찾는 것입니다.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-16" id="naive-implementations">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
            1. 단순 구현이 실패하는 이유
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          이전 실험에서 initializer 에이전트로 작업을 분해하고 coding 에이전트가
          기능 단위로 구현하는 방식이 효과적이었지만, 복잡한 작업에서는 여전히 두
          가지 핵심 실패 모드가 관찰되었습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              컨텍스트 일관성 상실
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              컨텍스트 윈도우가 채워지면 모델의 일관성이 떨어집니다. 일부 모델은{" "}
              <span className="font-semibold text-ds-on-surface">
                &quot;컨텍스트 불안(context anxiety)&quot;
              </span>
              을 보이며, 한계에 가까워졌다고 판단하면 작업을 조기에 마무리하려
              합니다. Compaction(요약)만으로는 불충분하며,{" "}
              <span className="font-semibold text-ds-on-surface">
                컨텍스트 리셋
              </span>
              (완전히 새로운 에이전트 + 구조화된 핸드오프)이 필수적입니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              자기 평가의 관대함 편향
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              에이전트에게 자신의 작업을 평가하라고 하면, 품질이 뻔히 낮아도
              자신감 있게 칭찬합니다. 특히 디자인 같은 주관적 작업에서 심각합니다.{" "}
              <span className="font-semibold text-ds-on-surface">
                생성과 평가를 분리
              </span>
              하면, 독립적인 평가자를 회의적으로 튜닝하는 것이 생성자를 자기
              비판적으로 만드는 것보다 훨씬 다루기 쉬워집니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-16" id="frontend-design">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
            2. 프론트엔드 디자인: 주관적 품질을 채점 가능하게
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          GAN(적대적 생성 신경망)에서 영감을 받아, generator와 evaluator 에이전트를
          분리한 피드백 루프를 설계했습니다. 핵심 통찰: &quot;이 디자인이
          아름다운가?&quot;는 일관되게 답하기 어렵지만, &quot;우리의 디자인 원칙을
          따르는가?&quot;는 구체적으로 채점할 수 있습니다.
        </p>

        <h3 className="text-lg font-semibold text-ds-on-surface mb-4">
          4가지 채점 기준
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-white bg-ds-primary px-2 py-0.5 rounded">
                높은 가중치
              </span>
              <h4 className="text-sm font-semibold text-ds-on-surface">
                디자인 품질
              </h4>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              부분들의 조합이 아닌 하나의 일관된 전체로 느껴지는가? 색상,
              타이포그래피, 레이아웃, 이미지가 결합되어 고유한 분위기와 아이덴티티를
              만드는지 평가합니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-white bg-ds-primary px-2 py-0.5 rounded">
                높은 가중치
              </span>
              <h4 className="text-sm font-semibold text-ds-on-surface">
                독창성
              </h4>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              의도적인 창작 결정이 보이는가? 템플릿 레이아웃, 라이브러리 기본값,
              &quot;보라색 그래디언트 위 흰색 카드&quot; 같은 AI 생성 패턴은
              감점됩니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h4 className="text-sm font-semibold text-ds-on-surface mb-2">
              완성도 (Craft)
            </h4>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              기술적 실행력 — 타이포그래피 위계, 간격 일관성, 색상 조화, 대비비.
              창의성이 아닌 역량 점검입니다. 대부분 기본적으로 잘 하지만, 실패하면
              기본기가 부족한 것입니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h4 className="text-sm font-semibold text-ds-on-surface mb-2">
              기능성
            </h4>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              미학과 독립적인 사용성. 사용자가 인터페이스의 기능을 이해하고, 주요
              액션을 찾고, 추측 없이 작업을 완료할 수 있는지 평가합니다.
            </p>
          </div>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-6">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <span className="font-semibold text-ds-on-surface">
              피드백 루프 구조:
            </span>{" "}
            Claude Agent SDK 위에 구축. Generator가 HTML/CSS/JS 프론트엔드를
            생성하면, Evaluator가{" "}
            <span className="font-semibold text-ds-on-surface">
              Playwright MCP
            </span>
            로 실제 페이지를 직접 탐색하며 스크린샷을 찍고 채점합니다. 이 피드백이
            다시 Generator에 입력되어 5~15회 반복합니다. 전체 실행은 최대 4시간.
          </p>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-ds-on-surface mb-1">
                창발적 도약 사례: 네덜란드 미술관 웹사이트
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                9번째 반복까지 깔끔한 다크 테마 랜딩 페이지를 만들었지만, 10번째
                사이클에서 접근 방식을 완전히 폐기하고 사이트를{" "}
                <span className="font-semibold text-ds-on-surface">
                  공간적 경험
                </span>
                으로 재구상했습니다 — CSS perspective로 렌더링된 체크무늬 바닥의 3D
                방, 벽에 자유롭게 배치된 작품, 스크롤 대신 문(doorway) 기반
                네비게이션. 단일 패스 생성에서는 본 적 없는 종류의 창의적 도약이었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-16" id="fullstack-architecture">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
            3. 풀스택 코딩으로 확장: 3-에이전트 아키텍처
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          프론트엔드 디자인 실험의 GAN 패턴을 풀스택 개발에 적용했습니다.
          Generator-Evaluator 루프는 소프트웨어 개발 라이프사이클의 코드 리뷰와 QA
          역할에 자연스럽게 매핑됩니다.
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-ds-primary/10 flex items-center justify-center rounded-lg">
                <Brain className="w-4 h-4 text-ds-primary" />
              </div>
              <h3 className="text-base font-semibold text-ds-on-surface">
                Planner (계획 에이전트)
              </h3>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              1~4문장의 간단한 프롬프트를 받아{" "}
              <span className="font-semibold text-ds-on-surface">
                완전한 제품 스펙
              </span>
              으로 확장합니다. 세부 기술 구현보다 제품 컨텍스트와 상위 기술 설계에
              집중하도록 유도합니다. 세부 사항을 미리 지정하면 오류가 하위
              구현으로 전파될 수 있기 때문입니다. AI 기능을 스펙에 녹여 넣도록
              지시합니다.
            </p>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-ds-primary/10 flex items-center justify-center rounded-lg">
                <Code2 className="w-4 h-4 text-ds-primary" />
              </div>
              <h3 className="text-base font-semibold text-ds-on-surface">
                Generator (생성 에이전트)
              </h3>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              스프린트 단위로 기능을 하나씩 구현합니다. React + Vite + FastAPI +
              SQLite(후에 PostgreSQL) 스택. 각 스프린트 시작 전에 Evaluator와{" "}
              <span className="font-semibold text-ds-on-surface">
                스프린트 계약
              </span>
              을 협상하여 &quot;완료&quot;의 정의를 합의합니다. 코드 작성 전에
              무엇을 만들고 어떻게 검증할지 먼저 정합니다.
            </p>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-ds-primary/10 flex items-center justify-center rounded-lg">
                <Zap className="w-4 h-4 text-ds-primary" />
              </div>
              <h3 className="text-base font-semibold text-ds-on-surface">
                Evaluator (평가 에이전트)
              </h3>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              <span className="font-semibold text-ds-on-surface">
                Playwright MCP
              </span>
              로 실행 중인 앱을 사용자처럼 클릭하며 테스트합니다. UI 기능, API
              엔드포인트, DB 상태를 검사하고, 제품 깊이/기능성/시각적 디자인/코드
              품질 기준으로 채점합니다. 각 기준에 하드 임계값이 있으며, 하나라도
              미달하면 스프린트가 실패하고 구체적인 피드백이 Generator에게
              전달됩니다.
            </p>
          </div>
        </div>

        {/* Evaluator findings table */}
        <h3 className="text-lg font-semibold text-ds-on-surface mb-4">
          Evaluator가 잡아낸 실제 버그 예시
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-ds-surface-low">
                <th className="text-left p-3 font-semibold text-ds-on-surface rounded-tl-xl">
                  스프린트 계약 기준
                </th>
                <th className="text-left p-3 font-semibold text-ds-on-surface rounded-tr-xl">
                  Evaluator 발견 사항
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 text-ds-on-surface-variant align-top">
                  사각형 채우기 도구로 클릭-드래그하여 영역 채우기
                </td>
                <td className="p-3 text-ds-on-surface-variant">
                  <span className="text-red-500 font-semibold">FAIL</span> —
                  도구가 영역을 채우는 대신 드래그 시작/끝 지점에만 타일 배치.{" "}
                  <code className="text-xs bg-ds-surface-low px-1.5 py-0.5 rounded">
                    fillRectangle
                  </code>{" "}
                  함수가 존재하지만 mouseUp에서 제대로 트리거되지 않음.
                </td>
              </tr>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 text-ds-on-surface-variant align-top">
                  배치된 엔티티 스폰 포인트 선택 및 삭제
                </td>
                <td className="p-3 text-ds-on-surface-variant">
                  <span className="text-red-500 font-semibold">FAIL</span> —
                  Delete 키 핸들러가{" "}
                  <code className="text-xs bg-ds-surface-low px-1.5 py-0.5 rounded">
                    selection
                  </code>
                  과{" "}
                  <code className="text-xs bg-ds-surface-low px-1.5 py-0.5 rounded">
                    selectedEntityId
                  </code>{" "}
                  둘 다 설정되어야 하지만, 엔티티 클릭 시{" "}
                  <code className="text-xs bg-ds-surface-low px-1.5 py-0.5 rounded">
                    selectedEntityId
                  </code>
                  만 설정됨.
                </td>
              </tr>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 text-ds-on-surface-variant align-top">
                  API로 애니메이션 프레임 순서 변경
                </td>
                <td className="p-3 text-ds-on-surface-variant">
                  <span className="text-red-500 font-semibold">FAIL</span> —{" "}
                  <code className="text-xs bg-ds-surface-low px-1.5 py-0.5 rounded">
                    PUT /frames/reorder
                  </code>{" "}
                  라우트가{" "}
                  <code className="text-xs bg-ds-surface-low px-1.5 py-0.5 rounded">
                    /&#123;frame_id&#125;
                  </code>{" "}
                  뒤에 정의되어 FastAPI가 &quot;reorder&quot;를 정수로 파싱하려다
                  422 에러 반환.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-16" id="solo-vs-harness">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
            4. Solo vs. 하네스 비교: 레트로 게임 메이커
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          &quot;레벨 에디터, 스프라이트 에디터, 엔티티 행동, 플레이 가능한 테스트
          모드를 포함하는 2D 레트로 게임 메이커를 만들어줘&quot;라는 동일한 한 줄
          프롬프트로 Solo 에이전트와 풀 하네스를 비교했습니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-ds-surface-low">
                <th className="text-left p-3 font-semibold text-ds-on-surface rounded-tl-xl">
                  하네스
                </th>
                <th className="text-left p-3 font-semibold text-ds-on-surface">
                  소요 시간
                </th>
                <th className="text-left p-3 font-semibold text-ds-on-surface rounded-tr-xl">
                  비용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 text-ds-on-surface-variant">Solo</td>
                <td className="p-3 text-ds-on-surface-variant">20분</td>
                <td className="p-3 text-ds-on-surface-variant">$9</td>
              </tr>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 font-semibold text-ds-on-surface">
                  풀 하네스
                </td>
                <td className="p-3 text-ds-on-surface-variant">6시간</td>
                <td className="p-3 text-ds-on-surface-variant">$200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-3">
              Solo 에이전트 결과
            </h3>
            <ul className="space-y-2 text-sm text-ds-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5 shrink-0">x</span>
                레이아웃이 공간을 낭비 (고정 높이 패널)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5 shrink-0">x</span>
                워크플로우가 경직되고 UI 가이드 부재
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5 shrink-0">x</span>
                핵심 기능인 게임 플레이가 완전히 고장
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5 shrink-0">x</span>
                엔티티와 게임 런타임 간 연결 끊김
              </li>
            </ul>
          </div>
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-3">
              풀 하네스 결과
            </h3>
            <ul className="space-y-2 text-sm text-ds-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-ds-primary mt-0.5 shrink-0">+</span>
                16개 기능 스펙, 10개 스프린트로 체계적 구현
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ds-primary mt-0.5 shrink-0">+</span>
                풀 뷰포트 캔버스, 일관된 비주얼 아이덴티티
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ds-primary mt-0.5 shrink-0">+</span>
                게임 플레이 실제 작동 (물리엔진 약간 거칠지만)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ds-primary mt-0.5 shrink-0">+</span>
                Claude 통합 AI 기능으로 프롬프트 기반 게임 생성
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-16" id="harness-iteration">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
            5. 하네스 반복: Opus 4.6과 단순화
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          하네스의 모든 구성 요소는 &quot;모델이 혼자 할 수 없는 것&quot;에 대한
          가정을 인코딩합니다. 이 가정들은 모델이 개선될 때마다 재검토할 가치가
          있습니다.
        </p>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-6">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <span className="font-semibold text-ds-on-surface">
              핵심 원칙:
            </span>{" "}
            &quot;가능한 가장 단순한 솔루션을 찾고, 필요할 때만 복잡성을
            증가시킨다.&quot; — Anthropic{" "}
            <span className="italic">Building Effective Agents</span>
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              스프린트 구조 제거
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              Opus 4.6은 스프린트 분해 없이도 2시간 이상 연속으로 일관된 코딩을
              수행했습니다. 더 신중하게 계획하고, 장기 에이전트 작업을 더 오래
              유지하며, 더 큰 코드베이스에서 안정적으로 동작합니다. 컨텍스트
              리셋도 불필요해져 자동 compaction으로 충분합니다.
            </p>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              Evaluator의 역할 변화
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              Evaluator를 스프린트마다가 아닌{" "}
              <span className="font-semibold text-ds-on-surface">
                실행 끝에 한 번만
              </span>{" "}
              배치. 모델 역량이 올라가면 Evaluator가 불필요해지는 구간이 늘어나지만,
              여전히 모델 역량의 경계에 있는 작업에서는 실질적 가치를 제공합니다.
              Evaluator는 고정된 예/아니오 결정이 아니라, 작업 복잡도에 따른 가변
              결정입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-16" id="daw-results">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
            6. 업데이트된 하네스 결과: 브라우저 DAW
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          &quot;Web Audio API를 사용하여 브라우저에서 완전한 기능의 DAW를
          만들어줘&quot;라는 프롬프트로 테스트했습니다. 총 3시간 50분, $124.70.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-ds-surface-low">
                <th className="text-left p-3 font-semibold text-ds-on-surface rounded-tl-xl">
                  에이전트 & 단계
                </th>
                <th className="text-left p-3 font-semibold text-ds-on-surface">
                  소요 시간
                </th>
                <th className="text-left p-3 font-semibold text-ds-on-surface rounded-tr-xl">
                  비용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 text-ds-on-surface-variant">Planner</td>
                <td className="p-3 text-ds-on-surface-variant">4.7분</td>
                <td className="p-3 text-ds-on-surface-variant">$0.46</td>
              </tr>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 text-ds-on-surface-variant">
                  Build (라운드 1)
                </td>
                <td className="p-3 text-ds-on-surface-variant">2시간 7분</td>
                <td className="p-3 text-ds-on-surface-variant">$71.08</td>
              </tr>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 text-ds-on-surface-variant">
                  QA (라운드 1)
                </td>
                <td className="p-3 text-ds-on-surface-variant">8.8분</td>
                <td className="p-3 text-ds-on-surface-variant">$3.24</td>
              </tr>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 text-ds-on-surface-variant">
                  Build (라운드 2)
                </td>
                <td className="p-3 text-ds-on-surface-variant">1시간 2분</td>
                <td className="p-3 text-ds-on-surface-variant">$36.89</td>
              </tr>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 text-ds-on-surface-variant">
                  QA (라운드 2)
                </td>
                <td className="p-3 text-ds-on-surface-variant">6.8분</td>
                <td className="p-3 text-ds-on-surface-variant">$3.09</td>
              </tr>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 text-ds-on-surface-variant">
                  Build (라운드 3)
                </td>
                <td className="p-3 text-ds-on-surface-variant">10.9분</td>
                <td className="p-3 text-ds-on-surface-variant">$5.88</td>
              </tr>
              <tr className="border-t border-ds-outline-variant/15">
                <td className="p-3 font-semibold text-ds-on-surface">
                  QA (라운드 3)
                </td>
                <td className="p-3 text-ds-on-surface-variant">9.6분</td>
                <td className="p-3 text-ds-on-surface-variant">$4.06</td>
              </tr>
              <tr className="border-t-2 border-ds-outline-variant/30">
                <td className="p-3 font-bold text-ds-on-surface">합계</td>
                <td className="p-3 font-bold text-ds-on-surface">3시간 50분</td>
                <td className="p-3 font-bold text-ds-on-surface">$124.70</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-6">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            최종 앱은 전문 음악 프로덕션 프로그램에는 미치지 못하지만, 작동하는
            arrangement view, mixer, transport를 브라우저에서 구현했습니다.
            에이전트가 템포와 키를 설정하고, 멜로디와 드럼 트랙을 만들고, 믹서
            레벨을 조정하고, 리버브를 추가하는 — 프롬프트만으로 짧은 곡을 만들 수
            있었습니다.
          </p>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <span className="font-semibold text-ds-on-surface">
              QA의 실질적 가치:
            </span>{" "}
            &quot;앱은 인상적이고 AI 통합도 잘 되지만, 여러 핵심 DAW 기능이
            인터랙션 없는 디스플레이 전용이다 — 클립 드래그/이동 불가, 악기 UI
            패널(신스 노브, 드럼 패드) 없음, 시각적 이펙트 에디터(EQ 커브,
            컴프레서 미터) 없음. 이것은 엣지 케이스가 아니라 DAW를 사용 가능하게
            만드는 핵심 인터랙션이다.&quot;
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section className="mb-16" id="takeaways">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
            7. 핵심 교훈
        </h2>

        <div className="space-y-4">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-ds-primary shrink-0">
                01
              </span>
              <div>
                <h3 className="text-base font-semibold text-ds-on-surface mb-1">
                  모델 트레이스를 읽고 튜닝하라
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  대상 모델로 실험하고, 현실적인 문제에서의 트레이스를 읽고, 원하는
                  결과를 달성하도록 성능을 튜닝하는 것이 항상 좋은 실천입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-ds-primary shrink-0">
                02
              </span>
              <div>
                <h3 className="text-base font-semibold text-ds-on-surface mb-1">
                  작업을 분해하고 전문 에이전트를 배치하라
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  복잡한 작업에서는 작업을 분해하고 문제의 각 측면에 특화된
                  에이전트를 적용하여 개선 여지를 확보할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-ds-primary shrink-0">
                03
              </span>
              <div>
                <h3 className="text-base font-semibold text-ds-on-surface mb-1">
                  새 모델이 나오면 하네스를 재검토하라
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  새 모델이 나올 때마다 하네스를 재검토하여 더 이상 성능에 기여하지
                  않는 부분을 제거하고, 이전에는 불가능했던 더 큰 역량을 달성하기
                  위한 새로운 부분을 추가합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-ds-primary shrink-0">
                04
              </span>
              <div>
                <h3 className="text-base font-semibold text-ds-on-surface mb-1">
                  흥미로운 하네스 조합의 공간은 줄어들지 않는다
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  모델이 개선됨에 따라 하네스 조합의 공간은 축소되지 않고{" "}
                  <span className="font-semibold text-ds-on-surface">
                    이동
                  </span>
                  합니다. AI 엔지니어의 일은 다음 새로운 조합을 계속 찾는 것입니다.
                </p>
              </div>
            </div>
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
            href="https://www.anthropic.com/engineering/harness-design-long-running-apps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#cc785c]/10 flex items-center justify-center rounded-lg shrink-0">
              <svg
                className="w-5 h-5 text-[#cc785c]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.308 6.068a2.573 2.573 0 0 0-2.003-.96 2.65 2.65 0 0 0-1.904.806L6.072 13.24a1.752 1.752 0 0 0-.506 1.247c.003.47.193.92.527 1.252a1.764 1.764 0 0 0 2.507-.012l5.278-5.376a.59.59 0 0 0-.842-.826L7.757 14.9a.583.583 0 0 1-.826-.008.583.583 0 0 1 .008-.826l7.33-7.326a1.47 1.47 0 0 1 1.054-.447c.39.004.76.165 1.035.447.274.283.424.66.42 1.053a1.47 1.47 0 0 1-.444 1.04l-7.33 7.327a2.94 2.94 0 0 1-2.09.858 2.94 2.94 0 0 1-2.082-.872 2.94 2.94 0 0 1-.858-2.09 2.94 2.94 0 0 1 .872-2.082l5.278-5.376a.59.59 0 0 0-.842-.826L4.904 11.15a4.12 4.12 0 0 0-1.22 2.917 4.12 4.12 0 0 0 1.2 2.927 4.12 4.12 0 0 0 2.918 1.22 4.12 4.12 0 0 0 2.926-1.2l7.33-7.327a2.65 2.65 0 0 0 .806-1.904 2.573 2.573 0 0 0-.96-2.003l-.596.288.596-.288z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                Harness Design for Long-Running Apps
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Prithvi Rajasekaran | anthropic.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
