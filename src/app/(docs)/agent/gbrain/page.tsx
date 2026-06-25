import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  Search,
  Network,
  Sparkles,
  Moon,
  Database,
  Workflow,
  Boxes,
  GitBranch,
  Users,
  Lightbulb,
  Quote,
} from "lucide-react";

export default function GBrainPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Agent", href: "/agent" },
          { label: "GBrain" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        GBrain
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        <strong>검색은 원시 페이지를 주지만, GBrain은 답을 준다.</strong> AI
        에이전트에게 빠져 있던 <strong>브레인 레이어(brain layer)</strong>로,{" "}
        <strong>합성(synthesis)</strong> · <strong>그래프 순회</strong> ·{" "}
        <strong>갭 분석</strong>을 한 박스에서 수행합니다. 그 위에 완전 자율 에이전트를
        올리거나, Claude Code·Codex에 명령어 한 줄로 연결해 강화된 검색 레이어로 쓸 수
        있습니다 &mdash; 어느 쪽이든 코딩 에이전트가 코드 바깥의 모든 것에 대해 더 이상{" "}
        <em>기억상실(amnesiac)</em>이 아니게 됩니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          &ldquo;자는 동안 더 똑똑해진다.&rdquo;
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          Y Combinator의 대표이자 CEO인 <strong>Garry Tan</strong>이 자신의 AI
          에이전트를 운영하기 위해 만든 프로덕션 브레인. OpenClaw·Hermes 배포의 실제
          기반으로 <strong>146,646 페이지 · 24,585 명 · 5,339 개 회사</strong>,
          66개의 cron 작업이 자율적으로 돌아갑니다. 회의·이메일·트윗·음성 통화·아이디어를
          잠든 사이에 수집하고, 만나는 모든 사람과 회사를 보강하며, 인용을 스스로 고치고
          밤새 메모리를 통합합니다. MIT License · 자신의 하드웨어 · DB · 키 위에서 실행.
        </p>
      </div>

      {/* 1. Search vs Brain */}
      <section className="mb-16" id="search-vs-brain">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          검색 엔진과 브레인의 차이
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          대부분의 개인 지식 도구는 &ldquo;질의를 언급한 10개 청크&rdquo;를 돌려줍니다.
          GBrain은 사람·회사·딜·아이디어를 가로질러 <strong>인용이 붙은 합성된
          산문</strong>으로 실제 답을 만들고, <strong>브레인이 아직 모르는 것</strong>까지
          명시합니다. 검색은 페이지를 찾고, 브레인은 그 페이지를 대신 읽어 답을 씁니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-red-50 dark:bg-red-950/30 border-t-2 border-red-400 p-6 rounded-b-xl">
            <p className="text-sm font-bold text-ds-on-surface mb-2">
              일반 지식 도구 &mdash; 페이지 목록
            </p>
            <pre className="text-xs text-ds-on-surface-variant bg-ds-surface/60 rounded-lg p-3 overflow-x-auto leading-relaxed">
              <code>{`1. people/alice — Alice runs eng...
2. meetings/2026-03-15-alice-q1...
3. meetings/2026-01-08-kickoff...
4. customers/acme — series-B...
5. notes/2026-04-22 — pricing...`}</code>
            </pre>
            <p className="text-xs text-ds-on-surface-variant mt-3 leading-relaxed">
              직접 열어서 읽고 준비해야 합니다. 자료는 찾았지만 일은 안 했습니다.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/30 border-t-2 border-blue-500 p-6 rounded-b-xl">
            <p className="text-sm font-bold text-ds-on-surface mb-2">
              GBrain &mdash; 인용이 붙은 답
            </p>
            <p className="text-xs text-ds-on-surface-variant leading-relaxed">
              &ldquo;Alice는 Acme(시리즈 B 핀테크)의 엔지니어링을 이끕니다. 마지막
              대화는 4월 22일. 열려 있는 세 가지: ① 새 티어 보안 리뷰(5월 1일 마감, 무소식)
              ② 500석 티어 가격(4월 25일 발송, 무응답) ③ CISO 채용 &mdash; 네트워크
              소개 약속.&rdquo;
            </p>
            <p className="text-xs text-blue-700 dark:text-blue-400 mt-3 leading-relaxed">
              <strong>Heads up:</strong> 4월 22일 이후 6주간 새 정보 없음 &mdash;
              이메일/Slack DM처럼 브레인이 못 보는 채널일 수 있으니 확인 권장.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Two things nobody ships together */}
      <section className="mb-16" id="differentiators">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          아무도 함께 출시하지 못한 두 가지
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          키워드 매칭과 grep은 누구나 합니다. GBrain은 거기에 두 가지를 더합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Sparkles,
              t: "합성 레이어 (Synthesis)",
              d: "실제 답을 줍니다. 사람·회사·딜·아이디어를 가로지른, 인용이 잘 붙은 산문. 그리고 브레인이 아직 모르는 것을 명시하는 갭 분석 — 이것이 브레인을 쓰는 방식을 바꿉니다.",
            },
            {
              icon: Network,
              t: "자가 배선 지식 그래프 (Self-wiring Graph)",
              d: "모든 페이지 쓰기가 엔티티 참조를 추출해 타입드 엣지(attended·works_at·invested_in·founded·advises)를 LLM 호출 0회로 생성합니다. \"누가 Acme AI에서 일하나?\"처럼 벡터 검색만으로는 닿을 수 없는 답을 줍니다.",
            },
          ].map((s) => (
            <div
              key={s.t}
              className="bg-ds-surface-low p-6 rounded-2xl flex gap-4 items-start"
            >
              <s.icon className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  {s.t}
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { v: "P@5 49.1%", d: "240페이지 리치-프로즈 코퍼스 벤치마크 (R@5 97.9%)" },
            { v: "+31.4점", d: "그래프 비활성 변형 대비 P@5 향상폭" },
            { v: "146,646", d: "프로덕션 브레인이 다루는 페이지 수" },
          ].map((s) => (
            <div key={s.v} className="bg-ds-primary-container/20 p-6 rounded-2xl">
              <p className="text-2xl font-extrabold text-ds-primary mb-2">
                {s.v}
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Connect to Claude Code */}
      <section className="mb-16" id="quick-start">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          코딩 에이전트에 메모리 붙이기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          이미 Claude Code나 Codex를 쓰고 있다면, 로컬 브레인을 띄우고 두 명령어로
          연결합니다 &mdash; 서버도, 토큰도, 터널도 없이.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-4">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            로컬 브레인 (권장 시작점)
          </p>
          <pre className="text-sm text-ds-on-surface bg-ds-surface rounded-xl p-4 overflow-x-auto outline outline-1 outline-ds-outline-variant/15">
            <code>{`gbrain init --pglite                     # 2초 만의 로컬 브레인 (Docker 불필요)
claude mcp add gbrain -- gbrain serve    # 또는: codex mcp add gbrain -- gbrain serve`}</code>
          </pre>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-8">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            원격 호스트(OpenClaw·Hermes 등)에 연결
          </p>
          <pre className="text-sm text-ds-on-surface bg-ds-surface rounded-xl p-4 overflow-x-auto outline outline-1 outline-ds-outline-variant/15">
            <code>{`gbrain connect https://your-host/mcp --token gbrain_xxx --install               # Claude Code
gbrain connect https://your-host/mcp --token gbrain_xxx --agent codex --install # Codex`}</code>
          </pre>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            두 가지 질의 방식
          </p>
          <pre className="text-sm text-ds-on-surface bg-ds-surface rounded-xl p-4 overflow-x-auto outline outline-1 outline-ds-outline-variant/15">
            <code>{`# raw retrieval: 하이브리드 점수 상위 페이지, 빠르고 LLM 비용 없음
gbrain search "포트폴리오 회사 중 AI 에이전트 만드는 곳?"

# brain layer: 인용 + 갭 분석이 붙은 합성된 답
gbrain think  "포트폴리오 회사 중 AI 에이전트 만드는 곳?"`}</code>
          </pre>
          <p className="text-xs text-ds-on-surface-variant mt-4 italic">
            <code className="text-ds-primary">search</code>는 스킴할 원시 자료를,{" "}
            <code className="text-ds-primary">think</code>는 인용과 &ldquo;아직 모르는
            것&rdquo; 노트가 붙은 실제 답을 줍니다. ~30분이면 완전히 동작하는 브레인.
          </p>
        </div>
      </section>

      {/* 4. The Loop */}
      <section className="mb-16" id="loop">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          루프: 신호에서 동기화까지
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          채팅에서 에이전트를 계속 굴리는 것보다, 24/7 수집·보강·통합하는 데몬을
          띄우는 게 쉽습니다. GBrain은 그 데몬을 일반화한 것입니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row md:items-stretch gap-2">
            {[
              { t: "신호", d: "모든 메시지에서 감지" },
              { t: "검색", d: "브레인 우선 retrieval" },
              { t: "응답", d: "맥락 기반 답변" },
              { t: "쓰기", d: "페이지 + 타임라인" },
              { t: "자동 링크", d: "타입드 엣지 + 백링크" },
              { t: "동기화", d: "cron이 최신 유지" },
            ].map((step, i, arr) => (
              <div key={step.t} className="flex-1 flex items-center gap-2">
                <div className="flex-1 bg-ds-surface p-4 rounded-xl h-full">
                  <p className="text-sm font-semibold text-ds-on-surface">
                    {step.t}
                  </p>
                  <p className="text-xs text-ds-on-surface-variant mt-1 leading-relaxed">
                    {step.d}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <GitBranch className="w-4 h-4 text-ds-secondary shrink-0 rotate-90 md:rotate-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-ds-on-surface-variant mt-4 italic">
            자동 링크는 모든 페이지 쓰기에서 LLM 호출 없이 발화 &mdash;{" "}
            <code className="text-ds-primary">[[wiki/people/bob]]</code> 패턴 매칭으로
            새 엔티티 → 새 페이지 스텁 → 그래프 성장.
          </p>
        </div>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl flex gap-3">
          <Moon className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">드림 사이클(Dream Cycle):</strong>{" "}
            자는 동안 cron이 사람 페이지를 중복 제거하고, 인용을 고치고, 중요도를
            점수화하고, 모순을 찾고, 내일 할 일을 준비합니다. 100K 페이지 브레인을 짓는
            이유는 그것을 <strong>전략적 해자(moat)</strong>로 쓰기 위함이며, 브레인
            레이어가 그 해자를 사용 가능하게, 드림 사이클이 그것을 날카롭게 유지합니다.
          </p>
        </div>
      </section>

      {/* 5. Capabilities */}
      <section className="mb-16" id="capabilities">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          핵심 역량
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Search,
              t: "하이브리드 검색",
              d: "벡터(pgvector HNSW) + BM25 키워드 + RRF 융합 + 소스 티어 부스트 + 의도 인식 쿼리 재작성. conservative·balanced·tokenmax 3개 모드. ZeroEntropy 리랭커 기본 탑재.",
            },
            {
              icon: Network,
              t: "자가 배선 지식 그래프",
              d: "모든 put_page가 마크다운·위키링크에서 엣지를 LLM 0회로 추출. gbrain graph-query로 멀티홉 순회. 벡터 전용 RAG 대비 +31.4 P@5의 원천.",
            },
            {
              icon: Workflow,
              t: "잡 큐 (Minions)",
              d: "BullMQ 형태의 Postgres 네이티브 큐. 크래시를 견디는 durable 서브에이전트(2단계 영속), 셸 잡 감사, 캐스케이딩 타임아웃, 아웃바운드 rate lease.",
            },
            {
              icon: Boxes,
              t: "43개 큐레이션 스킬",
              d: "신호 캡처·인제스트·보강·질의·브레인 운영·인용 수정·일일 작업·cron 스케줄·리포트·음성·스킬 생성·eval까지. 도구 무관 마크다운 스킬팩.",
            },
            {
              icon: Database,
              t: "두 엔진, 하나의 계약",
              d: "PGLite(Postgres 17 WASM, 제로 설정, ~50K 페이지)와 Postgres+pgvector(공유·대규모). BrainEngine 인터페이스가 ~47개 연산을 양쪽 구현, CLI·MCP를 단일 소스에서 생성.",
            },
            {
              icon: GitBranch,
              t: "브레인 repo = 시스템 오브 레코드",
              d: "지식은 일반 git repo의 마크다운으로 존재. GBrain이 Postgres로 동기화하고, git 삭제는 DB 소프트 삭제로. 공개 서브셋 게시·팀 마운트·씬 클라이언트 가능.",
            },
          ].map((s) => (
            <div
              key={s.t}
              className="bg-ds-surface-low p-6 rounded-2xl flex gap-4 items-start"
            >
              <s.icon className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  {s.t}
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Company brain */}
      <section className="mb-16" id="company-brain">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          회사 브레인으로도 동작한다
        </h2>
        <div className="bg-ds-surface-low p-6 rounded-2xl flex gap-4 items-start mb-8">
          <Users className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            팀의 각 구성원이 로그인으로 스코프된 자신만의 브레인 슬라이스를 가집니다.
            질의할 때 <strong>허용된 것만</strong> 보이며, 다른 사람의 노트나 다른 팀의
            데이터는 절대 보이지 않습니다. 읽기 경로(검색·목록·조회·다중 소스 읽기)
            전반을 퍼즈 테스트해 <strong>유출 0건</strong>을 확인했습니다. YC가 Request
            for Startups에 올린 <em>company-brain</em> 형태의 공유 기관 메모리로 바로
            투입할 수 있습니다.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-xl flex gap-3">
          <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">스키마 팩(Schema Packs):</strong>{" "}
            고정 레이아웃이 없습니다. 번들 팩(<code className="text-ds-primary">gbrain-base-v2</code>,
            15타입 정규 분류)을 쓰거나, <code className="text-ds-primary">gbrain schema detect →
            suggest → review-candidates</code> 세 명령으로 실제 파일시스템 구조를
            클러스터링해 나만의 팩을 만들 수 있습니다. 팩을 바꾸면 브레인이 스스로를
            재해석하고, 되돌리면 아무것도 잃지 않습니다.
          </p>
        </div>
      </section>

      {/* 7. Philosophy */}
      <section className="mb-16" id="philosophy">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          철학: 얇은 하네스, 두꺼운 스킬
        </h2>
        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl flex gap-3">
          <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed italic">
            &ldquo;검색은 의미적으로 가까운 청크를 돌려준다. 그래프는 사실로 연결된
            청크를 돌려준다. 100K 페이지 브레인을 짓는 핵심은 그것을 전략적 해자로 쓰는
            것 &mdash; 컨텍스트를 절대 잃지 않고, 다시 읽지 않고도 내 머릿속을 질의하는
            것이다. 스킬은 마크다운 레시피이고, 에이전트가 일을 한다. 내 개인 에이전트가
            똑똑해질수록, 당신의 것도 똑똑해진다.&rdquo;
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
            href="https://github.com/garrytan/gbrain"
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
                GBrain — The brain layer your AI agent has been missing
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Garry Tan (Y Combinator) | github.com/garrytan/gbrain
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
