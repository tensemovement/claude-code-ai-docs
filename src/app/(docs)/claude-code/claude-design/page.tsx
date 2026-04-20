import { Breadcrumb } from "@/components/layout/breadcrumb";

export default function ClaudeDesignPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Claude Code", href: "/claude-code" },
          { label: "Claude Design 소개 (한국어 번역)" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        Anthropic Labs의 Claude Design 소개
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-2">
        Product · Announcements
      </p>
      <p className="text-sm text-ds-on-surface-variant mb-6">
        원문 공개일: 2026년 4월 17일
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-10">
        <p className="text-base font-semibold text-ds-on-surface">
          오늘 우리는 Claude Design을 출시한다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          디자인·프로토타입·슬라이드·원페이저 등 완성도 높은 비주얼 작업을
          Claude와 함께 만들 수 있는 새로운 Anthropic Labs 제품이다.
        </p>
      </div>

      {/* 도입 */}
      <section className="mb-16" id="intro">
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-4">
          오늘 우리는 Claude Design을 출시한다 — 디자인·프로토타입·슬라이드·
          원페이저 등 완성도 높은 비주얼 작업을 Claude와 협업해 만들 수 있게
          해주는 새로운 Anthropic Labs 제품이다.
        </p>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-4">
          Claude Design은 우리의 가장 강력한 비전 모델인 Claude Opus 4.7로 구동
          되며, Claude Pro·Max·Team·Enterprise 구독자를 위한 리서치 프리뷰로
          제공된다. 오늘 하루 동안 단계적으로 사용자에게 롤아웃한다.
        </p>
      </section>

      {/* Design with Claude */}
      <section className="mb-16" id="design-with-claude">
        <h2 className="text-3xl font-bold tracking-tight text-ds-on-surface mb-6">
          Design with Claude
        </h2>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-4">
          경험 많은 디자이너조차 탐색을 아껴 써야 한다 — 수십 가지 방향으로
          프로토타입을 만들 시간은 거의 없기 때문에, 몇 가지로 스스로를
          제한하게 된다. 그리고 디자인 배경은 없지만 아이디어가 있는 창업자·
          프로덕트 매니저·마케터에게 그 아이디어를 만들고 공유하는 일은
          부담스러울 수 있다.
        </p>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-4">
          Claude Design은 디자이너에게는 광범위하게 탐색할 여지를, 그리고
          다른 모든 이에게는 비주얼 작업을 만들어낼 방법을 제공한다. 필요한
          것을 설명하면 Claude가 첫 번째 버전을 만든다. 그 다음부터는 대화·
          인라인 코멘트·직접 편집·(Claude가 만든) 커스텀 슬라이더를 통해
          원하는 모습이 될 때까지 정제한다. 접근 권한을 부여하면 Claude는
          팀의 디자인 시스템을 모든 프로젝트에 자동으로 적용할 수도 있어,
          결과물이 회사의 나머지 디자인과 일관성을 유지한다.
        </p>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-4">
          팀들은 Claude Design을 다음과 같은 용도로 사용해왔다:
        </p>

        <ul className="list-disc list-outside pl-6 space-y-3 text-base leading-relaxed text-ds-on-surface-variant mb-4">
          <li>
            <strong className="text-ds-on-surface">리얼리스틱 프로토타입:</strong>{" "}
            디자이너는 정적인 목업을 코드 리뷰나 PR 없이도 쉽게 공유 가능한
            인터랙티브 프로토타입으로 바꿔 피드백을 받고 사용자 테스트를 할 수
            있다.
          </li>
          <li>
            <strong className="text-ds-on-surface">프로덕트 와이어프레임·
            목업:</strong> 프로덕트 매니저는 기능 플로우를 스케치해 구현을
            위해 Claude Code로 넘기거나, 디자이너와 공유해 더 정교하게 다듬을
            수 있다.
          </li>
          <li>
            <strong className="text-ds-on-surface">디자인 탐색:</strong>{" "}
            디자이너는 탐색할 방향을 광범위하게 빠르게 만들어낼 수 있다.
          </li>
          <li>
            <strong className="text-ds-on-surface">피치 덱·프레젠테이션:</strong>{" "}
            창업자와 어카운트 이그제큐티브는 러프한 아웃라인에서 완결된 온-
            브랜드 덱까지 몇 분 만에 갈 수 있고, PPTX로 export하거나 Canva로
            보낼 수 있다.
          </li>
          <li>
            <strong className="text-ds-on-surface">마케팅 콜래터럴:</strong>{" "}
            마케터는 랜딩 페이지·소셜 미디어 에셋·캠페인 비주얼을 만든 뒤
            디자이너를 붙여 다듬을 수 있다.
          </li>
          <li>
            <strong className="text-ds-on-surface">프런티어 디자인:</strong>{" "}
            누구나 음성·비디오·셰이더·3D·내장 AI를 활용한 코드 기반 프로토
            타입을 만들 수 있다.
          </li>
        </ul>
      </section>

      {/* How it works */}
      <section className="mb-16" id="how-it-works">
        <h2 className="text-3xl font-bold tracking-tight text-ds-on-surface mb-6">
          How it works
        </h2>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Claude Design은 자연스러운 창작 흐름을 따른다.
        </p>

        <div className="space-y-6 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-ds-on-surface mb-3">
              당신의 브랜드를, 내장된 채로.
            </h3>
            <p className="text-base leading-relaxed text-ds-on-surface-variant">
              온보딩 동안 Claude는 당신의 코드베이스와 디자인 파일을 읽어 팀을
              위한 디자인 시스템을 구축한다. 그 이후의 모든 프로젝트는 당신의
              색상·타이포그래피·컴포넌트를 자동으로 사용한다. 시간이 지나며
              시스템을 정제할 수 있고, 팀은 하나 이상의 시스템을 유지할 수 있다.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ds-on-surface mb-3">
              어디에서든 가져오기.
            </h3>
            <p className="text-base leading-relaxed text-ds-on-surface-variant">
              텍스트 프롬프트에서 시작하거나, 이미지와 문서(DOCX·PPTX·XLSX)를
              업로드하거나, Claude를 당신의 코드베이스로 가리킬 수 있다. 웹
              캡처 도구를 사용해 당신의 웹사이트에서 엘리먼트를 직접 가져와
              프로토타입이 실제 제품처럼 보이게 만들 수도 있다.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ds-on-surface mb-3">
              세밀한 제어로 다듬기.
            </h3>
            <p className="text-base leading-relaxed text-ds-on-surface-variant">
              특정 엘리먼트에 인라인으로 코멘트를 달고, 텍스트를 직접 편집하고,
              조정 노브로 간격·색상·레이아웃을 실시간으로 조절하라. 그런 다음
              Claude에게 변경 사항을 디자인 전체에 적용하도록 요청할 수 있다.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ds-on-surface mb-3">
              협업하기.
            </h3>
            <p className="text-base leading-relaxed text-ds-on-surface-variant">
              디자인에는 조직 단위 공유가 적용된다. 문서를 비공개로 유지하거나,
              링크를 가진 조직 내 누구든 볼 수 있도록 공유하거나, 편집 권한을
              부여해 동료가 그룹 대화에서 Claude와 함께 디자인을 수정하고 대화
              할 수 있게 할 수 있다.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ds-on-surface mb-3">
              어디로든 내보내기.
            </h3>
            <p className="text-base leading-relaxed text-ds-on-surface-variant">
              디자인을 조직 내부 URL로 공유하거나, 폴더로 저장하거나, Canva·
              PDF·PPTX·단독 HTML 파일로 export 할 수 있다.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ds-on-surface mb-3">
              Claude Code로 핸드오프.
            </h3>
            <p className="text-base leading-relaxed text-ds-on-surface-variant">
              디자인이 빌드할 준비가 되면, Claude는 모든 것을 핸드오프 번들로
              패키징해 단일 명령으로 Claude Code에 넘겨줄 수 있다.
            </p>
          </div>
        </div>

        <p className="text-base leading-relaxed text-ds-on-surface-variant">
          앞으로 몇 주에 걸쳐 Claude Design과의 통합을 더 쉽게 만들어, 당신의
          팀이 이미 사용하고 있는 도구들과 더 많이 연결할 수 있도록 할 것이다.
        </p>
      </section>

      {/* Testimonials */}
      <section className="mb-16" id="testimonials">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-lg font-bold text-[#00c4cc] mb-4">Canva</p>
            <blockquote className="text-base leading-relaxed text-ds-on-surface-variant mb-4 border-l-4 border-ds-primary/30 pl-4">
              &quot;지난 몇 년 동안 Anthropic과 협업해온 것을 사랑해왔고, 복잡한
              것을 단순하게 만드는 일에 대한 깊은 집중을 공유한다. Canva의
              사명은 늘 세상이 디자인할 수 있도록 힘을 주는 것이었고, 그건
              Canva를 아이디어가 시작되는 곳 어디로든 가져간다는 뜻이다. 우리는
              Claude와의 협업을 확장해, Claude Design에서 Canva로 사람들이
              아이디어와 초안을 매끄럽게 가져올 수 있도록 — 거기서 즉시 완전히
              편집·협업 가능한 디자인이 되어 다듬고, 공유하고, 게시할 준비가
              되도록 — 만들 수 있게 되어 기쁘다.&quot;
            </blockquote>
            <div className="border-t border-ds-outline-variant/30 pt-3">
              <p className="text-sm font-semibold text-ds-on-surface">
                Melanie Perkins
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Co-Founder and CEO, Canva
              </p>
            </div>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-lg font-bold text-ds-on-surface mb-4">
              Brilliant
            </p>
            <blockquote className="text-base leading-relaxed text-ds-on-surface-variant mb-4 border-l-4 border-ds-primary/30 pl-4">
              &quot;Brilliant의 복잡한 인터랙티비티와 애니메이션은 역사적으로
              프로토타이핑이 고통스러웠지만, Claude Design이 정적 디자인을
              인터랙티브 프로토타입으로 바꾸는 능력은 우리에게 한 단계 도약이
              었다. 다른 도구에서 재현하는 데 프롬프트 20개 이상이 걸렸던 우리
              의 가장 복잡한 페이지들이, Claude Design에서는 단 2개의 프롬프트
              만 필요했다. Claude Code 핸드오프에 디자인 의도가 포함된다는 점이
              프로토타입에서 프로덕션으로 가는 도약을 매끄럽게 만들었다.&quot;
            </blockquote>
            <div className="border-t border-ds-outline-variant/30 pt-3">
              <p className="text-sm font-semibold text-ds-on-surface">
                Olivia Xu
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Senior Product Designer, Brilliant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get started */}
      <section className="mb-16" id="get-started">
        <h2 className="text-3xl font-bold tracking-tight text-ds-on-surface mb-6">
          Get started
        </h2>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-4">
          Claude Design은 Claude Pro·Max·Team·Enterprise 구독자에게 제공된다.
          액세스는 당신의 플랜에 포함되어 있으며 구독 한도를 사용한다. extra
          usage를 활성화하면 그 한도를 넘어 계속 사용할 수 있다.
        </p>

        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-4">
          Enterprise 조직의 경우, Claude Design은 기본적으로 꺼져 있다. 관리자
          는 Organization settings에서 이를 활성화할 수 있다.
        </p>

        <p className="text-base leading-relaxed text-ds-on-surface-variant">
          디자인은{" "}
          <a
            href="https://claude.ai/design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ds-primary hover:underline"
          >
            claude.ai/design
          </a>
          에서 시작하라.
        </p>
      </section>

      {/* Source */}
      <section className="mb-16" id="source">
        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            Source
          </p>
          <a
            href="https://www.anthropic.com/news/claude-design"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#d97757]/10 flex items-center justify-center rounded-lg shrink-0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#d97757"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Anthropic"
              >
                <path d="M13.827 3.52h3.308L24 20.48h-3.308l-1.42-3.664H12.35l-1.42 3.664H7.622l6.205-16.96zm-.453 9.75h4.214l-2.107-5.436-2.107 5.436zM0 20.48L6.205 3.52h3.308L3.308 20.48H0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                Introducing Claude Design by Anthropic Labs
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Anthropic (2026.04.17) | anthropic.com
              </p>
            </div>
          </a>
          <p className="text-xs text-ds-on-surface-variant mt-4 leading-relaxed">
            본 페이지는 Anthropic이 2026년 4월 17일 공개한 뉴스{" "}
            <em>Introducing Claude Design by Anthropic Labs</em>의 본문을
            한국어로 가감 없이 번역한 것이다. 디지털 큐레이터 디자인 시스템에
            맞게 시각적으로 재조판했으며, 원문의 섹션 구조와 요지를 그대로
            보존했다.
          </p>
        </div>
      </section>
    </>
  );
}
