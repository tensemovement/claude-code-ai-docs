import { Breadcrumb } from "@/components/layout/breadcrumb";
import {
  Lightbulb,
  CheckCircle2,
  Quote,
  AlertTriangle,
} from "lucide-react";

export default function OpenDesignPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Design", href: "/design" },
          { label: "Open Design" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        Open Design — Claude Design의 오픈소스 대안
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-6">
        로컬 우선(local-first) 환경에서 동작하며, 사용자가 이미 쓰고 있는
        코딩 에이전트 CLI에 위임해 작동하는 오픈소스 디자인 플랫폼입니다.
        벤더 락인을 피하기 위해 모든 계층을 BYOK(Bring-Your-Own-Key)
        구조로 설계했습니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          &quot;We don&apos;t ship an agent — yours is good enough.&quot;
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          자체 모델을 번들링하지 않고, 사용자가 이미 사용 중인 16개의 코딩
          에이전트 CLI(Claude Code, Codex, Cursor, Gemini 등)에 작업을
          위임합니다. 진짜 제품은 모델이 아니라 &quot;프롬프트 스택&quot;
          그 자체라는 철학입니다.
        </p>
      </div>

      {/* Section 1: 왜 Open Design인가 */}
      <section className="mb-16" id="why-open-design">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          1. 왜 Open Design인가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Claude Design이 매력적이지만 SaaS에 종속됩니다. Open Design은
          동일한 결과물 품질을 추구하면서, 데이터·모델·런타임을 모두 사용자
          쪽에 두는 것을 원칙으로 합니다.
        </p>

        <div className="space-y-3 mb-6">
          {[
            "로컬 우선(Local-first) — 노트북에서 직접 실행되며 모든 프로젝트는 .od/ 폴더 SQLite에 저장",
            "에이전트 위임 — Claude Code, Codex, Cursor 등 이미 설치된 16개 CLI를 자동 감지해 작업 위임",
            "모델 자유 — Anthropic, OpenAI, Azure, Google Gemini, 로컬 LLM(Ollama, vLLM) BYOK 지원",
            "데스크톱 + 웹 + Docker — Electron 데스크톱 앱, Docker Compose, 또는 소스 빌드 모두 지원",
            "Apache-2.0 라이선스 — 상업적 사용·수정·재배포 자유",
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

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. 왜 자체 에이전트를 만들지 않았나요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                사용자가 이미 더 좋은 에이전트를 갖고 있기 때문입니다.
                Claude Code, Cursor Agent, Codex 같은 CLI는 이미 충분히
                강력하고, 매주 개선됩니다. Open Design은 그 위에 디자인
                특화 프롬프트 스택과 산출물 미리보기 레이어를 얹어
                &quot;디자이너의 입&quot; 역할만 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 핵심 아키텍처 */}
      <section className="mb-16" id="architecture">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          2. 핵심 아키텍처 — 프롬프트 스택이 곧 제품이다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Open Design의 진짜 가치는 코드가 아니라 프롬프트 합성 방식에
          있습니다. 매 산출물 요청마다 다음 레이어가 결정론적으로 합쳐져
          에이전트에게 전달됩니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-6">
          <h3 className="font-bold text-ds-on-surface mb-3">
            시스템 프롬프트 합성 순서
          </h3>
          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "Discovery 디렉티브",
                desc: "Turn-1 폼 + Turn-2 분기 + TodoWrite + 5차원 자기 비평 규칙",
              },
              {
                step: "2",
                title: "Official Designer Prompt",
                desc: "디자이너 정체성 헌장과 AI-slop 방지 안티패턴",
              },
              {
                step: "3",
                title: "활성 DESIGN.md",
                desc: "72개 브랜드 디자인 시스템 중 선택된 1개 (Linear/Stripe/Vercel/Apple 등)",
              },
              {
                step: "4",
                title: "활성 SKILL.md",
                desc: "31개 디자인 스킬 중 선택된 1개 (saas-landing/dashboard/deck 등)",
              },
              {
                step: "5",
                title: "프로젝트 메타데이터",
                desc: "kind, fidelity, speaker notes, animations 옵션",
              },
              {
                step: "6",
                title: "스킬 사이드 파일",
                desc: "assets/template.html + references/*.md 자동 주입",
              },
            ].map((item) => (
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
                  <p className="text-sm text-ds-on-surface-variant">
                    {item.desc}
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
              16개 CLI 어댑터와 BYOK 프록시는 언제든 갈아끼울 수 있는
              부품입니다. 그러나 디스커버리·디자인 시스템·스킬·자기 비평이
              합쳐진 &quot;프롬프트 계약&quot;은 변하지 않습니다. 모델이
              바뀌어도 산출물 품질이 유지되는 이유입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Junior-Designer 워크플로우 */}
      <section className="mb-16" id="junior-designer-workflow">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          3. Junior-Designer 워크플로우 — AI-slop을 막는 5차원 비평
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Open Design은 자유로운 생성 대신 의사결정을 앞단에 잠가두는 방식을
          택합니다. 디자이너가 주니어를 가르칠 때 쓰는 구조화된 질문법을
          프롬프트 스택으로 옮긴 결과입니다.
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-1">
              Turn-1 Discovery Form
            </h3>
            <p className="text-sm text-ds-on-surface-variant">
              자유 입력 대신 인터랙티브 질문지를 먼저 띄워 표면 유형, 타깃,
              톤, 브랜드 컨텍스트, 스케일 제약을 확정. 후속 수정 비용을
              앞단에서 차단합니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-1">
              Turn-2 Visual Direction
            </h3>
            <p className="text-sm text-ds-on-surface-variant">
              브랜드 스펙이 없을 때 5가지 방향(Editorial · Modern Minimal ·
              Tech Utility · Brutalist · Soft Warm) 중 선택. 각 방향마다
              결정론적 OKLch 팔레트와 폰트 스택이 고정됩니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-1">
              5차원 자기 비평
            </h3>
            <p className="text-sm text-ds-on-surface-variant">
              생성 후 Philosophy(브랜드 정합성) · Hierarchy(정보 구조) ·
              Detail(완성도) · Function(사용성) · Innovation(개념적 신선함)
              5축으로 자체 평가. 주관적 인상 대신 구조화된 근거로 피드백을
              남깁니다.
            </p>
          </div>
        </div>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. 자유로운 생성을 막는 게 오히려 답답하지 않나요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                AI 디자인의 가장 큰 적은 &quot;그럴듯하지만 어디에도 못 쓰는
                결과물(AI-slop)&quot;입니다. 앞단에서 결정을 잠가두면 모델이
                개선될수록 산출물 품질도 같이 올라갑니다. 자유도는 디자인
                시스템 교체와 스킬 선택으로 확보합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 31개 스킬 + 72개 디자인 시스템 */}
      <section className="mb-16" id="skills-and-systems">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          4. 31개 스킬 × 72개 디자인 시스템
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          스킬은 산출물의 형식, 디자인 시스템은 산출물의 톤을 결정합니다. 둘은
          런타임에 자유롭게 조합할 수 있어, 같은 콘텐츠를 Linear 톤의 SaaS
          랜딩으로도, Stripe 톤의 가격 페이지로도 즉시 변환합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-2">
              Prototype Mode (27)
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              saas-landing(기본) · dashboard · pricing-page · docs-page ·
              blog-post · mobile-app · mobile-onboarding · gamified-app ·
              email-marketing · social-carousel · sprite-animation ·
              wireframe-sketch · pm-spec · team-okrs · meeting-notes ·
              kanban-board · eng-runbook · finance-report · invoice ·
              hr-onboarding 등
            </p>
          </div>
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-2">
              Deck Mode (4)
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              guizang-ppt(기본, 매거진 레이아웃) · simple-deck · replit-deck
              · weekly-update — 가로 스와이프 기반 프레젠테이션 형식
            </p>
          </div>
        </div>

        <div className="bg-ds-surface-low rounded-2xl overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ds-surface-lowest/60">
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                  카테고리
                </th>
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                  포함된 디자인 시스템 (총 72개)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ds-outline-variant/10">
              {[
                {
                  cat: "AI / LLM",
                  list: "Claude · Cohere · Mistral · Together AI · Ollama · X.AI",
                },
                {
                  cat: "개발자 도구",
                  list: "Cursor · Vercel · Linear · Figma · Supabase · MongoDB · PostHog · Sanity",
                },
                {
                  cat: "생산성",
                  list: "Notion · Miro · Airtable · Raycast · Cal",
                },
                {
                  cat: "핀테크",
                  list: "Stripe · Coinbase · Kraken · Wise",
                },
                {
                  cat: "이커머스 / 라이프스타일",
                  list: "Shopify · Airbnb · Uber · Nike · Starbucks · Pinterest",
                },
                {
                  cat: "미디어",
                  list: "Spotify · PlayStation · The Verge · Meta",
                },
                {
                  cat: "오토모티브",
                  list: "Tesla · BMW · Ferrari · Lamborghini",
                },
                {
                  cat: "스타터",
                  list: "Default (Neutral Modern) · Warm Editorial",
                },
              ].map((row) => (
                <tr key={row.cat}>
                  <td className="px-4 py-3 font-semibold text-ds-primary whitespace-nowrap">
                    {row.cat}
                  </td>
                  <td className="px-4 py-3 text-ds-on-surface-variant">
                    {row.list}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <p className="text-sm text-ds-on-surface-variant">
              각 디자인 시스템은 하나의 <code>DESIGN.md</code> 파일이며,
              color · typography · spacing · layout · components · motion ·
              voice · brand · anti-patterns 9섹션 스키마를 따릅니다. 활성
              시스템을 바꾸면 산출물이 새 토큰으로 즉시 재렌더됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: 16개 CLI + BYOK */}
      <section className="mb-16" id="cli-and-byok">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          5. 16개 코딩 에이전트 자동 감지 + BYOK 폴백
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          데몬은 시작 시 PATH를 스캔해 설치된 CLI를 자동 감지합니다. CLI가
          하나도 없으면 BYOK 모드로 전환되어 직접 API 키로 작동합니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-6">
          <h3 className="font-bold text-ds-on-surface mb-3">
            지원되는 CLI (16종)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "Claude Code",
              "Codex CLI",
              "Devin for Terminal",
              "Cursor Agent",
              "Gemini CLI",
              "OpenCode",
              "Qwen Code",
              "Qoder CLI",
              "GitHub Copilot CLI",
              "Hermes (ACP)",
              "Kimi (ACP)",
              "Pi (RPC)",
              "Kiro CLI (ACP)",
              "Kilo (ACP)",
              "Mistral Vibe (ACP)",
              "DeepSeek TUI",
            ].map((name) => (
              <div
                key={name}
                className="bg-ds-surface-lowest px-3 py-2 rounded-md text-xs text-ds-on-surface-variant"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-6">
          <h3 className="font-bold text-ds-on-surface mb-3">
            Spawn 모드 vs API 모드
          </h3>
          <div className="space-y-3">
            <div className="bg-ds-surface-lowest p-4 rounded-xl">
              <p className="text-sm font-semibold text-ds-on-surface mb-1">
                Spawn 모드 (CLI 감지됨)
              </p>
              <p className="text-sm text-ds-on-surface-variant">
                데몬이{" "}
                <code className="text-xs bg-ds-surface-low px-1 py-0.5 rounded">
                  cwd=.od/projects/&lt;id&gt;/
                </code>
                로 CLI를 spawn. 에이전트가 실제 파일시스템에서 Read · Write
                · Bash · WebFetch를 수행하며 결과물을 디스크에 남깁니다.
              </p>
            </div>
            <div className="bg-ds-surface-lowest p-4 rounded-xl">
              <p className="text-sm font-semibold text-ds-on-surface mb-1">
                API 모드 (BYOK 폴백)
              </p>
              <p className="text-sm text-ds-on-surface-variant">
                CLI가 없으면{" "}
                <code className="text-xs bg-ds-surface-low px-1 py-0.5 rounded">
                  POST /api/proxy/&#123;anthropic|openai|azure|google&#125;/stream
                </code>
                을 통해 SSE로 정규화된 응답을 스트리밍. 파일시스템 권한은
                없지만 채팅 루프는 동일합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50/60 border-l-4 border-red-500/70 p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-1">
                보안 게이트
              </p>
              <p className="text-sm text-ds-on-surface-variant">
                루프백(127.0.0.1, ::1)으로 향하는 로컬 LLM 호출은 허용하되,
                비루프백 사설망 · 링크-로컬 · CGNAT · 멀티캐스트 · 예약
                대역 · 리다이렉트 타깃은 데몬 엣지에서 차단해 SSRF를
                방지합니다. 업스트림 리다이렉트 추적도 비활성화됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 설치와 실행 */}
      <section className="mb-16" id="getting-started">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          6. 설치와 실행
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          데스크톱 앱이 가장 빠르고, Docker가 가장 재현 가능하며, 소스
          빌드는 가장 자유롭습니다. 첫 실행 시{" "}
          <code className="text-xs bg-ds-surface-low px-1 py-0.5 rounded">
            ./.od/
          </code>{" "}
          런타임 폴더가 자동 생성되며, 별도의{" "}
          <code className="text-xs bg-ds-surface-low px-1 py-0.5 rounded">
            od init
          </code>{" "}
          단계는 없습니다.
        </p>

        <div className="space-y-4">
          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-2">
              1) 데스크톱 앱
            </h3>
            <p className="text-sm text-ds-on-surface-variant mb-2">
              open-design.ai 또는 GitHub Releases에서 빌드된 앱을
              내려받습니다. Node·pnpm·빌드 단계가 필요 없습니다.
            </p>
          </div>

          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-2">2) Docker</h3>
            <pre className="bg-ds-surface-lowest p-3 rounded-lg text-xs overflow-x-auto text-ds-on-surface-variant">
{`git clone https://github.com/nexu-io/open-design.git
cd open-design/deploy
docker compose up -d
# http://localhost:7456 열기`}
            </pre>
          </div>

          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-2">
              3) 소스에서 빌드
            </h3>
            <p className="text-xs text-ds-on-surface-variant mb-2">
              요구사항: Node ~24, pnpm 10.33.x
            </p>
            <pre className="bg-ds-surface-lowest p-3 rounded-lg text-xs overflow-x-auto text-ds-on-surface-variant">
{`git clone https://github.com/nexu-io/open-design.git
cd open-design
corepack enable
corepack pnpm --version   # 10.33.2 확인
pnpm install
pnpm tools-dev run web`}
            </pre>
          </div>

          <div className="bg-ds-surface-low p-5 rounded-2xl">
            <h3 className="font-bold text-ds-on-surface mb-2">
              4) 백그라운드 운영
            </h3>
            <pre className="bg-ds-surface-lowest p-3 rounded-lg text-xs overflow-x-auto text-ds-on-surface-variant">
{`pnpm tools-dev start web --daemon-port 17456 --web-port 17573
pnpm tools-dev status
pnpm tools-dev logs
pnpm tools-dev stop`}
            </pre>
          </div>
        </div>
      </section>

      {/* Section 7: 정리 */}
      <section className="mb-16" id="takeaway">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          7. 정리 — 모델보다 프롬프트 계약이 오래 간다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Open Design이 보여주는 핵심 통찰은 명확합니다. 좋은 AI 디자인
          도구는 더 좋은 모델을 갖는 것이 아니라, 더 좋은 질문 ·디자인 시스템
          · 자기 비평 규칙을 갖는 것입니다.
        </p>

        <div className="space-y-3">
          {[
            "에이전트는 갈아끼울 수 있다 — Claude Code든 Cursor든 BYOK든 동일한 디자인 계약을 따른다",
            "디자인 시스템은 토큰이다 — 72개 DESIGN.md를 즉시 교체하면 같은 결과물이 새 톤으로 재렌더된다",
            "스킬은 형식이다 — 31개 SKILL.md가 같은 콘텐츠를 SaaS 랜딩, 대시보드, 덱으로 변환한다",
            "AI-slop을 막는 건 자유가 아니라 구조다 — 디스커버리·5차원 비평이 결정론적 품질을 만든다",
            "로컬 우선은 데이터 주권이다 — .od/ SQLite와 BYOK가 벤더 락인 없이 산출물을 사용자 손에 둔다",
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
            href="https://github.com/nexu-io/open-design"
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
                nexu-io/open-design — The open-source alternative to Claude
                Design
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                nexu-io | github.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
