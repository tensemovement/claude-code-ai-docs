import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";

type Sprint = {
  step: string;
  title: string;
  desc: string;
};

type SkillGroup = {
  category: string;
  skills: { name: string; desc: string }[];
};

const sprint: Sprint[] = [
  {
    step: "1",
    title: "Think — 문제 재정의",
    desc: "/office-hours로 제품을 다시 묻고, 구현 전에 설계 문서를 만든다.",
  },
  {
    step: "2",
    title: "Plan — 계획 수립",
    desc: "CEO·엔지니어링·디자인·DX 관점의 플랜 리뷰로 범위와 아키텍처를 확정한다.",
  },
  {
    step: "3",
    title: "Build — 구현",
    desc: "확정된 스펙을 바탕으로 기능을 작성한다.",
  },
  {
    step: "4",
    title: "Review — 코드 감사",
    desc: "/review와 /codex로 CI를 통과한 프로덕션 버그까지 잡아낸다.",
  },
  {
    step: "5",
    title: "Test — 실제 QA",
    desc: "/qa가 실제 브라우저를 띄워 동작을 확인하고 회귀 테스트를 만든다.",
  },
  {
    step: "6",
    title: "Ship — 배포",
    desc: "/ship → /land-and-deploy → /canary로 PR·머지·배포·헬스체크를 자동화한다.",
  },
  {
    step: "7",
    title: "Reflect — 회고",
    desc: "/retro와 /learn으로 회고를 남기고 세션을 넘어 학습을 누적한다.",
  },
];

const skillGroups: SkillGroup[] = [
  {
    category: "기획 & 발견 (코드 작성 전)",
    skills: [
      { name: "/office-hours", desc: "여섯 가지 강제 질문으로 제품을 재정의하는 YC 오피스아워" },
      { name: "/plan-ceo-review", desc: "확장·축소 4개 모드로 범위를 검증하고 숨은 10점짜리 제품을 찾는다" },
      { name: "/plan-eng-review", desc: "아키텍처를 확정하고 ASCII 다이어그램·상태 머신을 그린다" },
      { name: "/plan-design-review", desc: "디자인 차원을 0~10점으로 평가하고 AI 슬롭을 잡아낸다" },
      { name: "/plan-devex-review", desc: "개발자 페르소나와 경쟁사 벤치마크로 DX 마찰을 추적한다" },
      { name: "/design-consultation", desc: "리서치 기반으로 디자인 시스템을 처음부터 설계한다" },
    ],
  },
  {
    category: "디자인 & 프로토타이핑",
    skills: [
      { name: "/design-shotgun", desc: "4~6개 AI 목업 변형을 만들고 비교 보드에서 취향을 학습시킨다" },
      { name: "/design-html", desc: "승인된 목업을 의존성 0의 프로덕션 HTML/CSS로 변환한다" },
      { name: "/design-review", desc: "배포 후 디자인을 감사하고 비포/애프터 스크린샷과 함께 수정한다" },
    ],
  },
  {
    category: "구현 & 리뷰",
    skills: [
      { name: "/review", desc: "CI를 통과하는 프로덕션 버그를 찾아 자명한 문제는 자동 수정한다" },
      { name: "/investigate", desc: "근본 원인 중심의 체계적 디버깅 (수정 시도는 3회로 제한)" },
      { name: "/codex", desc: "OpenAI Codex로 독립적인 2차 의견 — 리뷰·도전·상담 3모드" },
    ],
  },
  {
    category: "테스트 & 품질",
    skills: [
      { name: "/qa", desc: "실제 Chromium을 띄워 버그를 찾고 수정하며 회귀 테스트를 생성한다" },
      { name: "/browse", desc: "명령당 ~100ms의 헤드리스 브라우저, 도메인별 패턴 메모리 지원" },
      { name: "/cso", desc: "OWASP Top 10 + STRIDE 위협 모델링 (고신뢰도 게이트)" },
      { name: "/benchmark", desc: "Core Web Vitals를 베이스라인으로 잡고 성능 회귀를 추적한다" },
    ],
  },
  {
    category: "배포 & 릴리스",
    skills: [
      { name: "/ship", desc: "테스트·커버리지 감사 후 푸시하고 PR을 연다" },
      { name: "/land-and-deploy", desc: "PR 머지 → CI 대기 → 배포 → 프로덕션 헬스 검증" },
      { name: "/canary", desc: "배포 후 콘솔 에러·성능 회귀·페이지 실패를 모니터링한다" },
    ],
  },
  {
    category: "문서화 · 회고 · 자동화",
    skills: [
      { name: "/document-release", desc: "배포된 변경에 맞춰 모든 문서를 갱신하고 낡은 README를 찾는다" },
      { name: "/retro", desc: "팀 인지형 주간 회고 — 사람별 분석과 배포 스트릭 추적" },
      { name: "/learn", desc: "프로젝트 학습을 검토·검색·정리하여 세션을 넘어 누적한다" },
      { name: "/autoplan", desc: "CEO → 디자인 → 엔지니어링 리뷰를 자동 실행하고 취향 결정만 노출" },
    ],
  },
  {
    category: "안전 & 제어",
    skills: [
      { name: "/careful", desc: "rm -rf, DROP TABLE, force-push 등 파괴적 명령 전 경고" },
      { name: "/freeze", desc: "디버깅 중 편집 범위를 한 디렉터리로 제한한다" },
      { name: "/guard", desc: "/careful + /freeze를 결합한 최대 안전 모드" },
    ],
  },
];

export default function GstackPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Claude Code", href: "/claude-code" },
          { label: "gstack" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        gstack — Claude Code를 가상 엔지니어링 팀으로
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-6">
        gstack은 Y Combinator의 Garry Tan이 만든 오픈소스(MIT) CLI 툴킷입니다.
        CEO·디자이너·엔지니어링 매니저·QA 리드·릴리스 엔지니어 등 전문 역할을
        흉내 내는 23개 이상의 슬래시 커맨드를 제공해, Claude Code를 빈 캔버스가
        아닌 구조화된 &quot;엔지니어링 팀&quot;처럼 동작하게 만듭니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          &quot;누가 타이핑했는지가 아니라, 무엇이 배포됐는지가 핵심이다.&quot;
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          gstack의 설계 철학. 역할 기반 스킬로 기획부터 배포·회고까지 개발
          전 주기에 가드레일을 씌워, AI 코딩을 카오스가 아닌 규율 있는
          워크플로우로 바꾼다.
        </p>
      </div>

      {/* Section 1: gstack이란 */}
      <section className="mb-16" id="what-is-gstack">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          1. gstack이란 무엇인가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          일반적인 AI 코딩 어시스턴트는 빈 캔버스를 줍니다. gstack은 그 위에
          스프린트 방법론을 강제하여, 잘못된 가정·과도한 복잡성·일관성 없는
          기준 같은 흔한 AI 실패 모드를 막습니다. 마크다운 기반 컨텍스트와
          로컬 우선 상태 관리를 채택해 특정 포맷에 종속되지 않는 것도 특징입니다.
        </p>
        <div className="space-y-3">
          {[
            "역할 기반 스킬 구성 — 작업(task)이 아니라 역할(role)로 스킬을 나눈다",
            "마크다운 기반 컨텍스트 — 독점 포맷 없이 사람이 읽을 수 있는 상태로 관리",
            "세션을 넘는 취향 학습 — 디자인 선택과 학습을 누적해 점점 개인화된다",
            "10+ 플랫폼 지원 — Claude Code 네이티브 외 Codex CLI, Cursor 등에도 설치",
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

      {/* Section 2: 어떤 문제를 푸는가 */}
      <section className="mb-16" id="problem">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          2. 어떤 문제를 푸는가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          AI 코딩의 생산성은 높아졌지만, 구조 없이 맡기면 품질과 일관성이
          무너집니다. gstack은 스프린트 전 과정에 워크플로우를 강제해 이 간극을
          메웁니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { title: "AI 실패 모드 차단", desc: "잘못된 가정, 과도한 복잡성, 들쭉날쭉한 기준을 구조로 막는다" },
            { title: "병렬 개발", desc: "Conductor로 10~15개 스프린트를 동시에 격리 실행" },
            { title: "자동화된 품질", desc: "코드 리뷰·테스트·문서화·배포를 스킬로 자동화" },
            { title: "일관성 유지", desc: "팀 전체에 아키텍처와 디자인 품질을 일관되게 적용" },
          ].map((item) => (
            <div key={item.title} className="bg-ds-surface-low p-5 rounded-2xl">
              <h3 className="font-bold text-ds-on-surface mb-1">{item.title}</h3>
              <p className="text-sm text-ds-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: 스프린트 워크플로우 */}
      <section className="mb-16" id="sprint">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          3. 스프린트 구조: Think → Ship → Reflect
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          gstack의 모든 스킬은 7단계 스프린트로 연결됩니다. 각 단계의 산출물이
          다음 단계의 입력이 되어, 기획부터 배포 후 회고까지 끊김 없이 흐릅니다.
        </p>
        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <div className="space-y-3">
            {sprint.map((item) => (
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
      </section>

      {/* Section 4: 스킬 카탈로그 */}
      <section className="mb-16" id="skills">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          4. 23개+ 스킬 카탈로그
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          기획·디자인·구현·테스트·배포·문서화·안전까지, 역할별로 묶인 주요
          슬래시 커맨드입니다. 각 스킬은 키워드로 자동 트리거되며 서로의
          산출물을 이어받습니다.
        </p>
        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
                {group.category}
              </h3>
              <div className="bg-ds-surface-low rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-ds-outline-variant/10">
                    {group.skills.map((skill) => (
                      <tr key={skill.name}>
                        <td className="px-4 py-3 font-mono font-semibold text-ds-primary align-top whitespace-nowrap">
                          {skill.name}
                        </td>
                        <td className="px-4 py-3 text-ds-on-surface-variant">
                          {skill.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: 대표 워크플로우 */}
      <section className="mb-16" id="workflows">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          5. 대표 워크플로우
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          스킬을 엮으면 강력한 파이프라인이 됩니다. 대표적인 세 가지 흐름입니다.
        </p>

        <div className="space-y-3">
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="font-bold text-ds-on-surface mb-2">
              디자인 탐색 파이프라인
            </p>
            <p className="text-sm font-mono text-ds-on-surface-variant break-words">
              /design-consultation → /design-shotgun → /design-html →
              /design-review
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="font-bold text-ds-on-surface mb-2">
              엔드투엔드 기능 개발
            </p>
            <p className="text-sm font-mono text-ds-on-surface-variant break-words">
              /office-hours → /plan-ceo-review → /plan-eng-review → 구현 →
              /review → /qa → /ship
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="font-bold text-ds-on-surface mb-2">
              크로스 모델 2차 의견
            </p>
            <p className="text-sm font-mono text-ds-on-surface-variant break-words">
              /review (Claude) + /codex (OpenAI) = 모델 간 교차 검증
            </p>
          </div>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <p className="text-sm text-ds-on-surface-variant">
              Conductor와 결합하면 10~15개의 스프린트를 격리된 워크스페이스에서
              동시에 돌릴 수 있습니다. 스프린트 구조가 카오스를 막아주기 때문에,
              CEO는 의사결정 지점에서만 개입하면 됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: 설치 */}
      <section className="mb-16" id="install">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          6. 설치
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          저장소를{" "}
          <code className="px-1.5 py-0.5 bg-ds-surface-low rounded text-sm font-mono">
            ~/.claude/skills/gstack
          </code>{" "}
          로 클론하고 setup 스크립트를 실행하면 30초 만에 준비됩니다. (요구사항:
          Claude Code, Git, Bun v1.0+)
        </p>
        <div className="bg-ds-surface-lowest border border-ds-outline-variant/15 rounded-xl overflow-hidden">
          <div className="px-4 py-2 bg-ds-surface-low/50">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider">
              Quick Setup
            </p>
          </div>
          <pre className="px-4 py-4 text-sm text-ds-on-surface-variant font-mono leading-relaxed overflow-x-auto">
            {`git clone --single-branch --depth 1 \\
  https://github.com/garrytan/gstack.git \\
  ~/.claude/skills/gstack
cd ~/.claude/skills/gstack
./setup`}
          </pre>
        </div>
        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <p className="text-sm text-ds-on-surface-variant">
              팀 모드는{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">
                ./setup --team
              </code>
              으로 공유 저장소의{" "}
              <code className="px-1.5 py-0.5 bg-ds-surface-lowest rounded text-xs font-mono">
                .claude/
              </code>{" "}
              디렉터리를 통해 팀원에게 gstack을 자동 배포합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: 설계 철학 */}
      <section className="mb-16" id="philosophy">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          7. 설계 철학과 보안
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          gstack은 가드레일 있는 AI 개발을 지향합니다. 빠른 속도만큼이나
          안전과 검증을 중시하며, 브라우저 자동화에는 프롬프트 인젝션 방어를
          기본 탑재했습니다.
        </p>
        <div className="space-y-3">
          {[
            { title: "보안 우선 브라우저", desc: "로컬 ML 분류기 + Haiku 검증 + 카나리 토큰으로 프롬프트 인젝션을 방어" },
            { title: "지식 영속화 (GBrain)", desc: "코드베이스 지식을 영속 저장소에 색인해 세션 간 컨텍스트를 유지" },
            { title: "체크포인트 모드", desc: "WIP 커밋으로 작업을 자동 저장해 크래시·컨텍스트 전환에도 복구 가능" },
            { title: "옵트인 텔레메트리", desc: "코드·파일 경로·프롬프트는 전송하지 않으며 기본값은 비활성" },
          ].map((item) => (
            <div key={item.title} className="bg-ds-surface-low p-5 rounded-2xl">
              <h3 className="font-bold text-ds-on-surface mb-1">{item.title}</h3>
              <p className="text-sm text-ds-on-surface-variant">{item.desc}</p>
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
            href="https://github.com/garrytan/gstack"
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
                garrytan/gstack — Claude Code를 가상 엔지니어링 팀으로
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Garry Tan | github.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
