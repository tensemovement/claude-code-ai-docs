import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  BookOpen,
  Database,
  FileText,
  Layers,
  ArrowUpRight,
  ExternalLink,
  RefreshCw,
  Search,
  Wrench,
  Lightbulb,
  GitBranch,
} from "lucide-react";

export default function LLMWikiPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "AI", href: "/ai" },
          { label: "LLM Wiki" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        LLM Wiki
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        LLM을 활용해 개인 지식 베이스를 점진적으로 구축하는 패턴. RAG를 넘어
        지식이 축적되고 복리로 성장하는 위키를 만드는 방법을 탐구합니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          위키는 영구적이고 복리로 성장하는 산출물이다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          교차 참조는 이미 완성되어 있고, 모순은 이미 표시되어 있으며, 종합
          분석은 지금까지 읽은 모든 자료를 반영한다.
        </p>
      </div>

      {/* Section 1: 핵심 아이디어 */}
      <section className="mb-16" id="core-idea">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          핵심 아이디어: RAG를 넘어서
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          대부분의 LLM 문서 활용은 RAG 방식입니다. 파일을 업로드하면 질의 시점에
          관련 청크를 검색하고 답변을 생성합니다. 하지만 이 방식에서 LLM은 매번
          처음부터 지식을 재발견해야 합니다. 축적이 없습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* RAG 방식 */}
          <div className="bg-ds-surface-lowest p-6 rounded-xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider mb-3">
              기존 RAG 방식
            </p>
            <ul className="space-y-2">
              {[
                "매 질의마다 원시 문서에서 지식을 재발견",
                "5개 문서를 종합해야 하는 질문에 매번 조각을 맞춤",
                "축적 없음 — 이전 분석이 사라짐",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-ds-on-surface-variant"
                >
                  <span className="text-ds-on-surface-variant/50 mt-0.5">
                    &bull;
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LLM Wiki 방식 */}
          <div className="bg-ds-primary-container/20 p-6 rounded-xl border-l-4 border-ds-primary">
            <p className="text-xs font-bold text-ds-primary uppercase tracking-wider mb-3">
              LLM Wiki 방식
            </p>
            <ul className="space-y-2">
              {[
                "LLM이 영구적인 위키를 점진적으로 구축·유지",
                "새 자료 추가 시 기존 위키를 업데이트하며 통합",
                "지식이 한번 컴파일되고 계속 축적됨",
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

        <div className="bg-ds-surface-low/50 border-l-4 border-ds-outline-variant/40 p-6 rounded-r-xl mt-8">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            Obsidian을 한쪽에, LLM 에이전트를 다른 쪽에 열어두세요. LLM이
            대화를 기반으로 편집하면, 당신은 실시간으로 결과를 탐색합니다.{" "}
            <span className="font-semibold text-ds-on-surface">
              Obsidian은 IDE, LLM은 프로그래머, 위키는 코드베이스
            </span>
            입니다.
          </p>
        </div>
      </section>

      {/* Section 2: 활용 분야 */}
      <section className="mb-16" id="use-cases">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          활용 분야
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          LLM Wiki 패턴은 시간이 지남에 따라 지식이 축적되는 모든 영역에 적용할
          수 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: BookOpen,
              title: "개인 성장",
              desc: "목표, 건강, 심리, 자기계발 — 일기, 기사, 팟캐스트 메모를 쌓아 시간에 따른 구조화된 자화상 구축",
            },
            {
              icon: Search,
              title: "리서치",
              desc: "수주 ~ 수개월간 논문, 기사, 보고서를 읽으며 진화하는 논지와 함께 종합 위키를 점진적으로 구축",
            },
            {
              icon: FileText,
              title: "독서 컴패니언",
              desc: "챕터별로 인물, 테마, 줄거리를 정리하며 읽기. 팬 위키처럼 풍부한 동반 위키를 LLM이 자동 생성",
            },
            {
              icon: Layers,
              title: "비즈니스/팀",
              desc: "Slack 스레드, 회의록, 고객 통화에서 내부 위키를 자동 유지. 아무도 안 하는 유지보수를 LLM이 담당",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-ds-surface-low p-6 rounded-2xl hover:bg-ds-surface-high transition-colors group"
            >
              <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg shrink-0">
                <item.icon className="w-5 h-5 text-ds-primary" />
              </div>
              <div>
                <h3 className="font-bold text-ds-on-surface mb-1 group-hover:text-ds-primary transition-colors">
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

      {/* Section 3: 아키텍처 */}
      <section className="mb-16" id="architecture">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          3계층 아키텍처
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          LLM Wiki는 세 개의 레이어로 구성됩니다. 각 레이어는 명확한 소유권과
          역할을 가집니다.
        </p>

        <div className="space-y-4">
          {[
            {
              icon: Database,
              title: "Raw Sources (원시 자료)",
              desc: "직접 큐레이션한 원본 문서 컬렉션. 기사, 논문, 이미지, 데이터 파일. 불변(immutable) — LLM은 읽기만 하고 수정하지 않음.",
              owner: "당신이 소유",
              highlight: false,
            },
            {
              icon: BookOpen,
              title: "The Wiki (위키)",
              desc: "LLM이 생성한 마크다운 파일 디렉토리. 요약, 엔티티 페이지, 개념 페이지, 비교, 종합 분석. LLM이 페이지를 만들고, 새 자료 도착 시 업데이트하며, 교차 참조를 유지.",
              owner: "LLM이 소유",
              highlight: true,
            },
            {
              icon: GitBranch,
              title: "The Schema (스키마)",
              desc: "위키의 구조, 컨벤션, 워크플로우를 LLM에게 알려주는 설정 문서(예: CLAUDE.md). 자료 수집, 질문 응답, 위키 유지보수 시 LLM이 따를 규칙을 정의.",
              owner: "함께 진화",
              highlight: false,
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 p-6 rounded-xl transition-colors ${
                item.highlight
                  ? "bg-ds-primary-container/20 border-l-4 border-ds-primary"
                  : "bg-ds-surface-lowest"
              }`}
            >
              <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg shrink-0">
                <item.icon className="w-5 h-5 text-ds-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3
                    className={`font-bold ${
                      item.highlight
                        ? "text-ds-primary"
                        : "text-ds-on-surface"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <span className="text-xs bg-ds-surface-low px-2 py-0.5 rounded-full text-ds-on-surface-variant">
                    {item.owner}
                  </span>
                </div>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: 운영 방법 */}
      <section className="mb-16" id="operations">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          세 가지 운영 방식
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          LLM Wiki는 세 가지 핵심 작업을 통해 유지되고 성장합니다.
        </p>

        <div className="space-y-6">
          {/* Ingest */}
          <div className="bg-ds-surface-low p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-ds-primary-container/40 flex items-center justify-center rounded-xl shrink-0">
                <Database className="w-6 h-6 text-ds-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ds-on-surface mb-2">
                  Ingest (수집)
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-4">
                  새 자료를 원시 컬렉션에 추가하고 LLM에게 처리를 지시합니다.
                </p>
                <ul className="space-y-2">
                  {[
                    "LLM이 자료를 읽고 핵심 요점을 논의",
                    "위키에 요약 페이지 작성, 인덱스 업데이트",
                    "관련 엔티티·개념 페이지를 위키 전체에서 업데이트",
                    "로그에 항목 추가 — 하나의 자료가 10~15개 위키 페이지에 영향",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-ds-on-surface-variant"
                    >
                      <ArrowUpRight className="w-4 h-4 text-ds-primary shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Query */}
          <div className="bg-ds-surface-low p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-ds-primary-container/40 flex items-center justify-center rounded-xl shrink-0">
                <Search className="w-6 h-6 text-ds-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ds-on-surface mb-2">
                  Query (질의)
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-4">
                  위키에 대해 질문합니다. LLM이 관련 페이지를 검색하고 출처와 함께
                  종합 답변을 생성합니다.
                </p>
                <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-4 rounded-r-lg">
                  <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                    <span className="font-semibold text-ds-on-surface">
                      핵심 통찰:
                    </span>{" "}
                    좋은 답변은 새 위키 페이지로 다시 저장할 수 있습니다. 비교
                    분석, 발견한 연결 고리 — 이런 것들이 채팅 히스토리에서
                    사라지지 않고 지식 베이스에 축적됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lint */}
          <div className="bg-ds-surface-low p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-ds-primary-container/40 flex items-center justify-center rounded-xl shrink-0">
                <RefreshCw className="w-6 h-6 text-ds-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ds-on-surface mb-2">
                  Lint (점검)
                </h3>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-4">
                  주기적으로 LLM에게 위키 건강 점검을 요청합니다.
                </p>
                <ul className="space-y-2">
                  {[
                    "페이지 간 모순 발견",
                    "새 자료로 대체된 오래된 주장 식별",
                    "인바운드 링크 없는 고아 페이지 탐지",
                    "자체 페이지가 필요한 중요 개념 제안",
                    "누락된 교차 참조와 데이터 갭 발견",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-ds-on-surface-variant"
                    >
                      <ArrowUpRight className="w-4 h-4 text-ds-primary shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 인덱스와 로그 */}
      <section className="mb-16" id="indexing">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          인덱싱과 로깅
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          위키가 성장하면서 LLM과 당신이 탐색할 수 있도록 두 개의 특별한 파일이
          필요합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-ds-surface-low p-8 rounded-2xl">
            <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg mb-4">
              <FileText className="w-5 h-5 text-ds-primary" />
            </div>
            <h3 className="text-lg font-bold text-ds-on-surface mb-2">
              index.md
            </h3>
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider mb-3">
              콘텐츠 지향
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              위키의 모든 페이지를 링크, 한 줄 요약, 메타데이터와 함께 카테고리별로
              정리한 카탈로그. LLM이 질의에 답할 때 먼저 인덱스를 읽고 관련
              페이지를 찾습니다.
            </p>
            <div className="mt-4 bg-ds-surface-lowest/60 rounded-lg p-4">
              <p className="text-xs text-ds-secondary font-bold uppercase tracking-wider mb-1">
                Tip
              </p>
              <p className="text-sm text-ds-on-surface-variant">
                약 100개 자료, 수백 개 페이지 규모에서 임베딩 기반 RAG 인프라
                없이도 잘 작동합니다.
              </p>
            </div>
          </div>

          <div className="bg-ds-surface-low p-8 rounded-2xl">
            <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg mb-4">
              <GitBranch className="w-5 h-5 text-ds-primary" />
            </div>
            <h3 className="text-lg font-bold text-ds-on-surface mb-2">
              log.md
            </h3>
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider mb-3">
              시간 순서
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              언제 무엇이 발생했는지 기록하는 추가 전용(append-only) 로그. 수집,
              질의, 점검 이력을 추적합니다.
            </p>
            <div className="mt-4 bg-ds-surface-lowest/60 rounded-lg p-4">
              <p className="text-xs text-ds-secondary font-bold uppercase tracking-wider mb-1">
                Tip
              </p>
              <p className="text-sm text-ds-on-surface-variant font-mono text-xs">
                ## [2026-04-02] ingest | Article Title
                <br />
                → grep으로 파싱 가능한 일관된 접두사 사용
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 팁과 도구 */}
      <section className="mb-16" id="tips">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          팁과 도구
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          LLM Wiki를 더 효과적으로 운영하기 위한 실전 팁입니다.
        </p>

        <div className="space-y-3">
          {[
            {
              icon: Wrench,
              title: "Obsidian Web Clipper",
              desc: "웹 기사를 마크다운으로 변환하는 브라우저 확장. 원시 자료 컬렉션에 빠르게 추가할 수 있습니다.",
            },
            {
              icon: Wrench,
              title: "이미지 로컬 다운로드",
              desc: "Obsidian 설정에서 첨부 파일 경로를 고정 디렉토리(예: raw/assets/)로 설정하면 LLM이 이미지를 직접 참조할 수 있습니다.",
            },
            {
              icon: Search,
              title: "qmd 검색 엔진",
              desc: "위키가 커지면 인덱스만으로는 부족합니다. qmd는 BM25/벡터 하이브리드 검색과 LLM 리랭킹을 제공하는 로컬 마크다운 검색 엔진입니다.",
            },
            {
              icon: Lightbulb,
              title: "Obsidian Graph View",
              desc: "위키의 형태를 시각화하는 최고의 방법. 어떤 페이지가 허브이고, 어떤 것이 고아 페이지인지 한눈에 파악합니다.",
            },
            {
              icon: GitBranch,
              title: "Git으로 버전 관리",
              desc: "위키는 마크다운 파일의 git 저장소일 뿐입니다. 버전 히스토리, 브랜치, 협업을 무료로 얻을 수 있습니다.",
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

      {/* Section 7: 왜 작동하는가 */}
      <section className="mb-16" id="why-it-works">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          왜 작동하는가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          지식 베이스 유지보수의 어려운 부분은 읽기나 사고가 아닙니다. 교차 참조
          업데이트, 요약 최신화, 모순 기록 — 바로 이 부기 작업(bookkeeping)입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-ds-surface-lowest p-6 rounded-xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-wider mb-3">
              인간의 역할
            </p>
            <ul className="space-y-2">
              {[
                "자료 큐레이션",
                "분석 방향 설정",
                "좋은 질문하기",
                "의미 해석",
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

          <div className="bg-ds-primary-container/20 p-6 rounded-xl border-l-4 border-ds-primary">
            <p className="text-xs font-bold text-ds-primary uppercase tracking-wider mb-3">
              LLM의 역할
            </p>
            <ul className="space-y-2">
              {[
                "요약 작성",
                "교차 참조 유지",
                "파일링과 분류",
                "일관성 유지보수",
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

        <div className="bg-ds-surface-low/50 border-l-4 border-ds-outline-variant/40 p-6 rounded-r-xl">
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            이 아이디어는 Vannevar Bush의{" "}
            <span className="font-semibold text-ds-on-surface">
              Memex(1945)
            </span>
            와 정신적으로 맞닿아 있습니다. 문서 간 연상 경로(associative trails)를
            가진 개인 큐레이션 지식 저장소. Bush의 비전에서 해결하지 못한 부분은
            누가 유지보수를 하느냐였습니다. LLM이 그 역할을 담당합니다.
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
            href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-ds-on-surface/5 flex items-center justify-center rounded-lg shrink-0">
              <svg
                className="w-5 h-5 text-ds-on-surface"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                LLM Wiki — Andrej Karpathy
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                gist.github.com
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-ds-on-surface-variant group-hover:text-ds-primary transition-colors shrink-0" />
          </a>
        </div>
      </section>
    </>
  );
}
