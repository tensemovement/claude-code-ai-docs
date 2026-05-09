import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Lightbulb } from "lucide-react";

type AgentRole = {
  name: string;
  scope: string;
  responsibilities: string[];
  worktree: string;
};

const agentRoles: AgentRole[] = [
  {
    name: "Orchestrator",
    scope: "메인 브랜치 / 통합 담당",
    responsibilities: [
      "스펙을 작업 단위로 분해하고 워커에게 위임",
      "각 워커의 PR(또는 worktree diff)을 main에 머지",
      "전체 진행 상황과 토큰 비용을 추적",
    ],
    worktree: "main",
  },
  {
    name: "Game Designer",
    scope: "디자인 문서 전용",
    responsibilities: [
      "Block Blast 류 규칙 정의 (8x8 그리드, 3개 슬롯, 라인/컬럼 클리어)",
      "스코어링·콤보·게임오버 조건 명세",
      "난이도 곡선과 도형 풀(pool) 정의",
    ],
    worktree: "design/spec",
  },
  {
    name: "Core Gameplay",
    scope: "Assets/Scripts/Gameplay",
    responsibilities: [
      "Grid·BlockShape·Placement·LineClear 로직 (POCO C#)",
      "Unity Test Framework EditMode 단위 테스트",
      "MonoBehaviour 의존성 최소화로 테스트 가능성 확보",
    ],
    worktree: "feat/gameplay-core",
  },
  {
    name: "UI/Input",
    scope: "Assets/Scenes/Main, Assets/UI",
    responsibilities: [
      "드래그 앤 드롭, 그리드 하이라이트, HUD/스코어 표시",
      "uGUI 또는 UI Toolkit 중 단일 선택 후 일관 적용",
      "EventSystem과 Input System 설정",
    ],
    worktree: "feat/ui-input",
  },
  {
    name: "Juice (VFX/SFX)",
    scope: "Assets/Art, Assets/Audio",
    responsibilities: [
      "라인 클리어 파티클·셰이크·트윈",
      "AudioMixer와 SFX 트리거 훅",
      "프로파일링으로 모바일 타겟 60fps 유지",
    ],
    worktree: "feat/juice",
  },
  {
    name: "QA / Evaluator",
    scope: "Tests/, PlayMode 시나리오",
    responsibilities: [
      "PlayMode 시나리오 테스트 (배치-클리어-스코어 경로)",
      "각 워커의 머지 후 회귀 테스트 실행",
      "스펙 대비 합격/불합격 보고서 생성",
    ],
    worktree: "qa/playmode",
  },
  {
    name: "Build / CI",
    scope: ".github/workflows, ProjectSettings",
    responsibilities: [
      "Unity CLI 헤드리스 빌드(WebGL/Android) 자동화",
      "GameCI 액션, 캐시, 라이선스 활성화",
      "빌드 산출물 아티팩트 업로드",
    ],
    worktree: "infra/ci",
  },
];

export default function CmuxUnityBlockGamePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Claude Code", href: "/claude-code" },
          { label: "cmux로 Unity 블록 게임 팀 만들기" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        cmux로 Unity 블록 게임 팀 만들기
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-6">
        Block Blast 스타일의 심플한 그리드 퍼즐을 Unity로 만들 때, Claude Code
        하나로는 분해되지 않는 작업들이 생깁니다. cmux의 멀티 세션 ·
        worktree 격리를 활용해 7개의 전문 에이전트로 팀을 짜고, 오케스트레이터가
        스펙 → 병렬 스프린트 → 통합 → QA 루프를 순환시키는 운영 전략을 정리합니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          Unity 프로젝트는 병렬화를 강하게 보상하면서, 동시에 처벌도 합니다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          C# 스크립트는 worktree로 깔끔히 나뉘지만, Scene·Prefab·.meta는 머지가
          깨지기 쉽습니다. 팀 구성보다 &quot;무엇을 누구의 worktree에서 다루는가&quot;를
          먼저 정의해야 합니다.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-16" id="game-spec">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          1. 게임 스펙을 먼저 못 박는다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          모든 워커가 같은 페이지에서 시작하려면 스펙이 코드보다 먼저 main에
          들어가 있어야 합니다. Game Designer 에이전트가 단독으로
          <code className="text-xs bg-ds-surface-low px-1.5 py-0.5 rounded mx-1">
            docs/spec.md
          </code>
          를 작성하고, 오케스트레이터가 머지한 시점부터 다른 에이전트의 작업이
          시작됩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              핵심 규칙 (예시)
            </h3>
            <ul className="space-y-1.5 text-sm text-ds-on-surface-variant leading-relaxed list-disc pl-5">
              <li>8×8 그리드, 3슬롯에 랜덤 도형 제공</li>
              <li>슬롯이 비면 새 3개 생성, 배치 불가 시 게임오버</li>
              <li>가로/세로 라인이 가득 차면 동시 소거</li>
              <li>동시 다중 클리어는 콤보 배수 적용</li>
            </ul>
          </div>
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              비기능 요건
            </h3>
            <ul className="space-y-1.5 text-sm text-ds-on-surface-variant leading-relaxed list-disc pl-5">
              <li>타겟: WebGL + Android, 60fps</li>
              <li>입력: 드래그 1종으로 통일 (탭 배치 없음)</li>
              <li>저장: PlayerPrefs 최고 점수 1개</li>
              <li>로컬라이즈: 한국어/영어 (TextMeshPro)</li>
            </ul>
          </div>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <span className="font-semibold text-ds-on-surface">왜 스펙이 먼저인가:</span>{" "}
            병렬 에이전트들은 서로의 출력을 보지 못합니다. 스펙이 흔들리면 머지
            시점에 인터페이스 불일치가 폭발합니다. 스펙은 짧고 단정적이어야
            하며, 의문점은 워커 시작 전에 오케스트레이터가 모두 해소해야 합니다.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-16" id="team-composition">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          2. 7개 역할의 cmux 에이전트 팀
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          cmux는 각 에이전트를 독립 worktree에서 실행시켜 파일 충돌 없이 동시
          작업하도록 돕습니다. 역할은 7개로 정착했습니다 — 더 늘리면
          오케스트레이터의 컨텍스트가 먼저 무너지고, 줄이면 한 워커가 Scene과
          C# 양쪽을 만지며 머지 충돌을 일으킵니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-ds-surface-low">
                <th className="text-left p-3 font-semibold text-ds-on-surface rounded-tl-xl">
                  역할
                </th>
                <th className="text-left p-3 font-semibold text-ds-on-surface">
                  Worktree
                </th>
                <th className="text-left p-3 font-semibold text-ds-on-surface rounded-tr-xl">
                  주요 산출물
                </th>
              </tr>
            </thead>
            <tbody>
              {agentRoles.map((role) => (
                <tr
                  key={role.name}
                  className="border-t border-ds-outline-variant/15"
                >
                  <td className="p-3 font-semibold text-ds-on-surface align-top">
                    {role.name}
                  </td>
                  <td className="p-3 text-ds-on-surface-variant align-top">
                    <code className="text-xs bg-ds-surface-low px-1.5 py-0.5 rounded">
                      {role.worktree}
                    </code>
                  </td>
                  <td className="p-3 text-ds-on-surface-variant align-top">
                    {role.scope}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          {agentRoles.map((role) => (
            <div key={role.name} className="bg-ds-surface-low p-6 rounded-2xl">
              <h3 className="text-base font-semibold text-ds-on-surface mb-2">
                {role.name}
              </h3>
              <ul className="space-y-1.5 text-sm text-ds-on-surface-variant leading-relaxed list-disc pl-5">
                {role.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-16" id="worktree-strategy">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          3. Unity를 위한 Worktree 전략
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          cmux의 격리는 Git worktree 위에서 동작합니다. 일반 웹앱과 달리 Unity에는
          텍스트 머지가 위험한 자산이 많아, 영역을 미리 나누어 두지 않으면 병렬
          작업의 효익이 머지 비용으로 사라집니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              C# 스크립트
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              네임스페이스와 폴더로 사전 분할. Core Gameplay는
              <code className="text-xs bg-ds-surface-low px-1.5 py-0.5 rounded mx-1">
                Game.Core
              </code>
              , UI는
              <code className="text-xs bg-ds-surface-low px-1.5 py-0.5 rounded mx-1">
                Game.UI
              </code>
              로 잠그고, asmdef로 의존 방향을 강제합니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              Scene · Prefab
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              Scene은 단 하나의 워커(UI/Input)만 편집. 다른 워커는 Prefab 분리
              + 코드에서 인스턴스화. ProjectSettings에서{" "}
              <span className="font-semibold text-ds-on-surface">
                Asset Serialization: Force Text
              </span>
              와 SmartMerge를 활성화합니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              .meta 파일
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              .meta는 항상 커밋. GUID 충돌을 피하려면 새 에셋 생성은 단일
              워커에 위임하거나, 오케스트레이터가 통합 시 GUID 안정성을 검증합니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              Library / Temp
            </h3>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              gitignore 유지. 단, 각 worktree마다 Unity가 Library를 새로 굽기
              때문에 첫 실행이 느립니다 — 워커 부팅 시 캐시 서버나 공유 Library
              심볼릭 링크를 고려하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-16" id="orchestration-flow">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          4. 오케스트레이션 흐름
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          오케스트레이터는 직접 코드를 쓰지 않습니다. cmux 세션 사이를 오가며
          상태를 수집하고, 위임·머지·차단 해제만 수행합니다. 1회 사이클은 보통
          하루 분량으로 끊습니다.
        </p>

        <div className="space-y-4">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-ds-primary shrink-0">
                01
              </span>
              <div>
                <h3 className="text-base font-semibold text-ds-on-surface mb-1">
                  Kickoff — 스펙과 인터페이스 합의
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  Game Designer가 spec.md를, 오케스트레이터가{" "}
                  <code className="text-xs bg-ds-surface-low px-1.5 py-0.5 rounded">
                    Game.Core
                  </code>{" "}
                  공개 인터페이스(IGrid, IShapeProvider, IScoreService)의
                  스텁을 main에 먼저 머지합니다. 모든 워커는 이 스텁에 대해
                  코딩합니다.
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
                  Fan-out — 병렬 스프린트
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  Core Gameplay · UI/Input · Juice · Build/CI를 동시에 시작.
                  cmux 세션 4개가 각 worktree에서 독립적으로 돌고, 오케스트레이터는
                  요약 메시지를 받기만 합니다.
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
                  Fan-in — 순서 있는 통합
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  머지 순서는 Core → UI → Juice → CI로 고정. Core가 먼저 들어가야
                  나머지의 컴파일이 보장됩니다. 충돌은 오케스트레이터가 단독
                  해결하거나, 해당 영역의 워커에게 재할당합니다.
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
                  Evaluate — QA 루프
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  QA 에이전트가 PlayMode 시나리오를 돌리고 합/불 보고서를 작성.
                  불합격 항목은 구체 피드백과 함께 원래 워커의 worktree로
                  되돌려져, 다음 사이클의 첫 작업이 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-16" id="generator-evaluator">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          5. Generator-Evaluator 루프를 PlayMode 테스트로
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          웹 프로젝트가 Playwright로 평가하듯, Unity는 Unity Test Framework의
          PlayMode 테스트를 평가 채널로 씁니다. 시각/미학은 사람이 판단하더라도,
          &quot;배치 → 클리어 → 점수 증가&quot; 같은 핵심 인터랙션은 코드로
          채점 가능합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-white bg-ds-primary px-2 py-0.5 rounded">
                하드 게이트
              </span>
              <h4 className="text-sm font-semibold text-ds-on-surface">
                기능성 테스트
              </h4>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              도형을 그리드에 배치하면 셀이 점유되는가? 라인이 차면 사라지는가?
              게임오버 조건이 정확히 트리거되는가? 모두 PlayMode 시나리오로
              스크립트화합니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-white bg-ds-primary px-2 py-0.5 rounded">
                하드 게이트
              </span>
              <h4 className="text-sm font-semibold text-ds-on-surface">
                성능 테스트
              </h4>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              ProfilerMarker로 프레임당 GC alloc과 라인 클리어 처리 시간을 측정.
              임계값을 넘기면 자동 실패시켜 Generator에게 피드백합니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h4 className="text-sm font-semibold text-ds-on-surface mb-2">
              UX 점검
            </h4>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              드래그 시 그리드 하이라이트, 잘못된 배치 시 스냅백, 클리어 시
              피드백. 이 항목은 사람 리뷰가 최종 판단이지만, QA 에이전트가
              스크린샷 시퀀스를 모아 1차 검토합니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h4 className="text-sm font-semibold text-ds-on-surface mb-2">
              스펙 정합성
            </h4>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              QA가 spec.md의 각 조항을 PlayMode 어서션으로 1:1 매핑. 신규 규칙은
              spec.md 머지 시 동시에 테스트도 추가되어야 통과 처리됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-16" id="checklist">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          6. 실행 체크리스트
        </h2>

        <div className="space-y-4">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              프로젝트 셋업
            </h3>
            <ul className="space-y-1.5 text-sm text-ds-on-surface-variant leading-relaxed list-disc pl-5">
              <li>Asset Serialization: Force Text + SmartMerge 등록</li>
              <li>asmdef로 Game.Core / Game.UI / Game.Audio 분리</li>
              <li>CLAUDE.md에 폴더 소유권과 머지 순서 명시</li>
              <li>.gitignore에 Library, Temp, Logs, UserSettings</li>
            </ul>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              cmux 운영
            </h3>
            <ul className="space-y-1.5 text-sm text-ds-on-surface-variant leading-relaxed list-disc pl-5">
              <li>역할마다 별도 worktree + 별도 cmux 세션</li>
              <li>오케스트레이터 세션은 코드를 직접 쓰지 않음</li>
              <li>각 워커에게 spec.md와 인터페이스 스텁만 컨텍스트로 제공</li>
              <li>토큰/비용을 세션별로 추적해 폭주 시 조기 차단</li>
            </ul>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-ds-on-surface mb-2">
              머지 게이트
            </h3>
            <ul className="space-y-1.5 text-sm text-ds-on-surface-variant leading-relaxed list-disc pl-5">
              <li>EditMode + PlayMode 테스트 통과</li>
              <li>WebGL 헤드리스 빌드 통과</li>
              <li>Scene/Prefab을 만진 PR은 단일 워커만 허용</li>
              <li>QA 평가 보고서가 함께 첨부</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="mb-16" id="pitfalls">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          7. 자주 빠지는 함정
        </h2>

        <div className="space-y-4">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-ds-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  병렬화에 욕심을 부린다
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  Block Blast 규모에서 워커 7개도 많을 수 있습니다. 첫 사이클은
                  Core + UI + QA 3개로 시작하고, 통합이 매끄러워지면 Juice·Build를
                  추가하세요. 동시성은 머지 비용을 지불해야 얻는 자원입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-ds-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  Scene을 둘 이상의 워커가 만진다
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  Force Text + SmartMerge를 깔아도, 큰 Scene 충돌은 사람이
                  못 풉니다. Scene 편집 권한은 단 하나의 워커(보통 UI/Input)에
                  고정하고, 나머지는 Prefab과 코드 인스턴스화로 우회합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-ds-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  오케스트레이터가 코딩을 시작한다
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  컨텍스트가 가장 빨리 무너지는 시나리오. 오케스트레이터는
                  위임·머지·중재만 수행하고, 코딩 욕구가 생기면 새 worker
                  세션을 띄우세요.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-ds-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  QA를 마지막에만 부른다
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  Generator-Evaluator의 효과는 사이클 중간에서 나옵니다. 매
                  머지 직후 QA를 돌려야, 다음 사이클의 워커가 정확한 피드백으로
                  시작할 수 있습니다.
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
          <div className="space-y-3">
            <a
              href="https://github.com/coder/cmux"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-black/10 flex items-center justify-center rounded-lg shrink-0">
                <svg
                  className="w-5 h-5 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                  cmux — multi-agent terminal multiplexer
                </p>
                <p className="text-xs text-ds-on-surface-variant">
                  coder | github.com
                </p>
              </div>
            </a>
            <a
              href="https://docs.unity3d.com/Packages/com.unity.test-framework@latest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-black/10 flex items-center justify-center rounded-lg shrink-0">
                <svg
                  className="w-5 h-5 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.07 7.34l-6.43-3.71a1.49 1.49 0 0 0-1.49 0L6.72 7.34a1.49 1.49 0 0 0-.74 1.29v7.42a1.49 1.49 0 0 0 .74 1.29l6.43 3.71a1.49 1.49 0 0 0 1.49 0l6.43-3.71a1.49 1.49 0 0 0 .74-1.29V8.63a1.49 1.49 0 0 0-.74-1.29zm-7.18-1.96l5.39 3.11-5.39 3.11V5.38zm-3.78 0v6.22L4.72 8.49l5.39-3.11zM4.72 16.05l5.39-3.11v6.22l-5.39-3.11zm9.17 3.11v-6.22l5.39 3.11-5.39 3.11z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                  Unity Test Framework
                </p>
                <p className="text-xs text-ds-on-surface-variant">
                  Unity Documentation | unity3d.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
