import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  ShieldCheck,
  Terminal,
  ListChecks,
  Wrench,
  Code2,
  Server,
  Bot,
  Cpu,
  Rocket,
  Network,
  Boxes,
  Layers,
  FileText,
  Lightbulb,
} from "lucide-react";

export default function KeseKitPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Skills", href: "/skills" },
          { label: "KESE-KIT" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        KESE-KIT
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        <strong>KESE(KISA Enhanced Security Evaluation Kit)</strong>는 KISA(한국인터넷진흥원)
        가이드라인에 기반해 보안 취약점 분석·평가를 수행하는 Claude Code{" "}
        <strong>스킬 플러그인</strong>입니다. 주요정보통신기반시설(CII), AI 보안,
        로봇 보안, 우주 보안, 시큐어코딩, 제로트러스트, SW 공급망 보안(SBOM)을 하나의{" "}
        <code className="text-ds-primary">kesekit</code> 네임스페이스로 통합해, 슬래시
        명령어 한 줄로 점검·체크리스트·하드닝·시큐어코딩 가이드를 실행합니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          공식 보안 가이드라인 17건을 스킬로 재구성한 오픈소스 플러그인.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          873페이지 CII 상세가이드부터 AI·로봇·우주·제로트러스트·SBOM까지 &mdash;
          KISA·과기정통부·국정원이 펴낸 원본 문서를 Markdown으로 변환하고{" "}
          <strong>점진적 공개(Progressive Disclosure)</strong> 패턴으로 패키징해, 필요한
          분야의 점검 항목만 토큰 비용을 내고 불러옵니다. MIT License · CDPP Corp.
        </p>
      </div>

      {/* 1. Quick Start */}
      <section className="mb-16" id="quick-start">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          빠른 시작
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          Claude Code 안에서 마켓플레이스를 등록하고 플러그인을 설치한 뒤, 슬래시
          명령어로 바로 사용합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
              1단계 · 설치
            </p>
            <pre className="text-sm text-ds-on-surface bg-ds-surface rounded-xl p-4 overflow-x-auto outline outline-1 outline-ds-outline-variant/15">
              <code>{`/plugin marketplace add cdppcorp/KESE-KIT
/plugin install kesekit@cdppcorp-KESE-KIT`}</code>
            </pre>
          </div>
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
              업데이트
            </p>
            <pre className="text-sm text-ds-on-surface bg-ds-surface rounded-xl p-4 overflow-x-auto outline outline-1 outline-ds-outline-variant/15">
              <code>{`/plugin marketplace update cdppcorp-KESE-KIT
/plugin update kesekit@cdppcorp-KESE-KIT
/reload-plugins`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            2단계 · 사용 (프로젝트 폴더에서 Claude Code 실행 후)
          </p>
          <pre className="text-sm text-ds-on-surface bg-ds-surface rounded-xl p-4 overflow-x-auto outline outline-1 outline-ds-outline-variant/15">
            <code>{`> /kesekit-start-ko     # 보안 취약점 분석평가 실행
> /kesekit-check-ko     # 배포 전 보안 체크리스트
> /kesekit-fix-ko       # 취약점 자동 수정 / 하드닝 스크립트 생성
> /kesekit-guide-ko     # 시큐어코딩 가이드 프롬프트 생성

# 영문 버전: /kesekit-start, /kesekit-check, /kesekit-fix, /kesekit-guide`}</code>
          </pre>
          <p className="text-xs text-ds-on-surface-variant mt-4 italic">
            예) <code className="text-ds-primary">/kesekit-start-ko</code> 실행 →
            &ldquo;어떤 시스템을 점검하시겠습니까?&rdquo; 질문에 &ldquo;Ubuntu 22.04 웹
            서버&rdquo;, &ldquo;AI 모델 배포 환경&rdquo; 등으로 답하면 해당 분야를 자동
            판별해 평가를 시작합니다.
          </p>
        </div>
      </section>

      {/* 2. The Four Skills */}
      <section className="mb-16" id="skills">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          네 가지 스킬
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          각 스킬의 <code className="text-ds-primary">SKILL.md</code>는 7개 분야를 자동
          감지하는 <strong>라우터</strong>로 동작합니다. 입력 맥락(서버 · AI 모델 ·
          로봇 · 위성 · 코드 · 제로트러스트 · SBOM)에 따라 알맞은 reference·template을
          골라 로드합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: ShieldCheck,
              cmd: "/kesekit-start",
              t: "분석평가 (start)",
              d: "전체 보안 취약점 분석평가 실행. 7개 분야의 점검 항목을 로드해 양호/부분이행/취약/해당없음으로 판정하고 보고서를 생성합니다.",
            },
            {
              icon: ListChecks,
              cmd: "/kesekit-check",
              t: "체크리스트 (check)",
              d: "배포 전 보안 컴플라이언스 체크리스트. CI/AI/로봇/우주/시큐어코딩/제로트러스트/SW 공급망 항목을 빠르게 점검합니다.",
            },
            {
              icon: Wrench,
              cmd: "/kesekit-fix",
              t: "하드닝 (fix)",
              d: "취약점 분석 결과를 기반으로 하드닝 스크립트와 보안 수정을 자동 생성합니다 (bash · PowerShell · SQL 등).",
            },
            {
              icon: Code2,
              cmd: "/kesekit-guide",
              t: "시큐어코딩 가이드 (guide)",
              d: "AI 코딩 도구(Claude·Cursor·Copilot)용 시큐어코딩 프롬프트를 생성합니다. JS·Python·범용 의사코드 패턴을 제공합니다.",
            },
          ].map((s) => (
            <div
              key={s.cmd}
              className="bg-ds-surface-low p-6 rounded-2xl flex gap-4 items-start"
            >
              <s.icon className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  {s.t}
                </p>
                <p className="text-xs text-ds-primary font-mono mb-2">
                  {s.cmd}
                  <span className="text-ds-on-surface-variant">
                    {" "}
                    / {s.cmd}-ko
                  </span>
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Seven Security Domains */}
      <section className="mb-16" id="domains">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          지원하는 7개 보안 분야
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          하나의 스킬 세트가 7개 분야, 누적 1,200개 이상의 점검 항목을 다룹니다.
          분야는 라우터가 입력 맥락으로 자동 판별하며, 모호하면 목록을 보여주고
          선택하게 합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: Server,
              t: "1. 주요정보통신기반시설 (CII)",
              count: "560+ 항목",
              d: "기술적(424) + 관리적(127) + 물리적(18). Unix·Windows·웹·DBMS·네트워크·클라우드·가상화·제어시스템 등 14개 대상.",
            },
            {
              icon: Cpu,
              t: "2. AI 보안",
              count: "54+ 항목",
              d: "AI 개발자(54) / 서비스 제공자 / 이용자. 계획→데이터→모델개발→배포→모니터링→파기 6단계 생명주기.",
            },
            {
              icon: Bot,
              t: "3. 로봇 보안",
              count: "~103 항목",
              d: "산업용·서비스용·의료용 로봇. SSDF, 공급망, IEC 62443, 사이버 복원력(EU CRA), 무선 보안(EU RED) 11개 카테고리.",
            },
            {
              icon: Rocket,
              t: "4. 우주 보안",
              count: "53 항목",
              d: "위성·GSaaS·지상국·우주 공급망. 12개 분야, CMMC·K-RMF·NIS2·NIST IR 8401 참조.",
            },
            {
              icon: Code2,
              t: "5. 시큐어코딩",
              count: "46 항목 / 49 CWE",
              d: "7개 카테고리. JavaScript(Express·Sequelize) / Python(Django·Flask) / 범용 의사코드. OWASP Top 10·CWE/SANS Top 25.",
            },
            {
              icon: Network,
              t: "6. 제로트러스트",
              count: "~421 항목",
              d: "8개 핵심요소(ID·기기·네트워크·시스템·앱·데이터·가시성·자동화) + OT/ICS. 4단계 성숙도. NIST SP 800-207·CISA ZT.",
            },
            {
              icon: Boxes,
              t: "7. SW 공급망 (SBOM)",
              count: "29 항목",
              d: "설계→개발→공급→운영→유지보수 5단계. SPDX·CycloneDX·NIS-SBOM. Syft·Grype·pip-audit. EO 14028·EU CRA.",
            },
          ].map((s) => (
            <div key={s.t} className="bg-ds-surface-low p-6 rounded-2xl">
              <div className="flex items-start gap-3 mb-2">
                <s.icon className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ds-on-surface">
                    {s.t}
                  </p>
                  <p className="text-xs font-bold text-ds-primary mt-0.5">
                    {s.count}
                  </p>
                </div>
              </div>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-xl flex gap-3">
          <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">판정 기준:</strong> 모든 평가는{" "}
            <strong>양호</strong>(적절히 적용) · <strong>부분이행</strong>(개선 필요) ·{" "}
            <strong>취약</strong>(취약점 존재) · <strong>해당없음</strong>(적용 불가)의
            네 등급으로 기록되고, 우선순위는 긴급(계정·미패치·인젝션·미암호화) →
            높음(설정·헤더·로깅) → 보통(하드닝 권고)으로 분류됩니다. 평가 중에는 파일을
            수정하지 않는 <strong>읽기 전용</strong> 원칙을 따릅니다.
          </p>
        </div>
      </section>

      {/* 4. Architecture */}
      <section className="mb-16" id="architecture">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          구조: Progressive Disclosure
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          v2.0부터 <code className="text-ds-primary">SKILL.md</code>는 모든 지식을
          인라인으로 담지 않고 <strong>~50~80줄의 라우터</strong>로만 동작합니다. 실제
          점검 지식은 세 종류의 리소스로 분리되어, 작업이 요구할 때만 로드됩니다.
          새 가이드라인을 추가해도 스킬은 4개로 고정되고 리소스만 늘어납니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: FileText,
              t: "references/",
              d: "순수 설명·기준 문서. 개요, CWE 매핑, 위협 시나리오, 성숙도 모델 등 '무엇을 왜'에 해당하는 지식.",
            },
            {
              icon: ListChecks,
              t: "templates/",
              d: "별지 서식·체크리스트 테이블. CII 14개 점검표, ZT 8요소 성숙도, SBOM 29개 자가점검 등 평가 시 채워 넣는 양식.",
            },
            {
              icon: Terminal,
              t: "scripts/",
              d: "실행 가능한 점검·수정 스크립트. bash·PowerShell·SQL로 7,000줄 이상. SBOM 생성·취약점 스캔·하드닝 자동화.",
            },
          ].map((s) => (
            <div key={s.t} className="bg-ds-surface-low p-6 rounded-2xl">
              <s.icon className="w-5 h-5 text-ds-primary mb-3" />
              <p className="text-sm font-mono font-semibold text-ds-on-surface mb-1">
                {s.t}
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            플러그인 디렉터리 구조
          </p>
          <pre className="text-sm text-ds-on-surface bg-ds-surface rounded-xl p-4 overflow-x-auto outline outline-1 outline-ds-outline-variant/15">
            <code>{`KESE-KIT/
├── .claude-plugin/marketplace.json   # 플러그인 메타데이터
├── skills/         kesekit-start/check/fix/guide   (영문)
│   └── kesekit-*/
│       ├── SKILL.md       # 라우터 (7개 분야 자동 감지)
│       ├── references/    # 설명/기준 문서
│       ├── templates/     # 체크리스트 테이블
│       └── scripts/       # 실행 가능한 점검/수정 스크립트
├── skills-ko/      kesekit-*-ko       (한글, 동일 구조)
├── 문서/           원본 PDF + MD 참고자료 (17건)
└── docs/           18개 국어 README`}</code>
          </pre>
        </div>
      </section>

      {/* 5. Source Documents */}
      <section className="mb-16" id="source-documents">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          기반이 된 공식 문서
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          KESE-KIT는 다음 공식 보안 가이드라인을 Markdown으로 변환·재구성해
          만들어졌습니다 (총 17건, 누적 3,000페이지 이상).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left">
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low rounded-tl-xl">
                  문서
                </th>
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low">
                  발행기관
                </th>
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low text-center">
                  연도
                </th>
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low rounded-tr-xl text-center">
                  페이지
                </th>
              </tr>
            </thead>
            <tbody className="text-ds-on-surface-variant align-top">
              {[
                ["CII 기술적 취약점 분석·평가 상세가이드", "KISA", "2026", "873"],
                ["CII 관리·물리적 취약점 분석·평가 안내서", "KISA", "2026", "332"],
                ["인공지능(AI) 보안 안내서", "과기정통부 / KISA", "2026", "239"],
                ["로봇 보안모델(고도화)", "KISA", "2026", "156"],
                ["로봇 보안취약점 점검 체크리스트 해설서", "KISA", "2026", "225"],
                ["우주 보안모델 Part1 (위성활용 서비스)", "과기정통부 / KISA", "2024", "134"],
                ["우주 보안모델 Part2 (GSaaS/공급망)", "과기정통부 / KISA", "2025", "223"],
                ["우주 보안모델 해설서 및 사례집", "과기정통부 / KISA", "2025", "218"],
                ["JavaScript 시큐어코딩 가이드 (개정본)", "KISA", "2023", "159"],
                ["Python 시큐어코딩 가이드 (개정본)", "KISA", "2023", "176"],
                ["제로트러스트 가이드라인 2.0", "제로트러스트포럼 / KISA", "2024", "245"],
                ["제로트러스트 성숙도 모델 해설서", "제로트러스트포럼 / KISA", "2024", "182"],
                ["OT 환경의 제로트러스트 적용 안내서", "과기정통부 / KISA", "2025", "67"],
                ["SW 공급망 보안 가이드라인 (전체본)", "국정원 / 과기정통부 / KISA", "2024", "100"],
                ["인공지능기본법 교안 (11장 60개 절)", "과기정통부 외 / KESE-KIT 편집", "2026", "—"],
              ].map((row, ri) => (
                <tr key={ri}>
                  <td className="p-3 font-medium text-ds-on-surface bg-ds-surface-low/40">
                    {row[0]}
                  </td>
                  <td className="p-3 bg-ds-surface-low/20">{row[1]}</td>
                  <td className="p-3 bg-ds-surface-low/20 text-center">{row[2]}</td>
                  <td className="p-3 bg-ds-surface-low/20 text-center">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-ds-on-surface-variant mt-4 italic">
          법적 근거: 정보통신기반 보호법 · 전자정부법 · 개인정보 보호법 · 인공지능
          기본법(2026.1.22 시행).
        </p>
      </section>

      {/* 6. Why it matters */}
      <section className="mb-16" id="why">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          왜 스킬 플러그인인가
        </h2>
        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl flex gap-3">
          <Layers className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            수천 페이지의 보안 가이드라인을 사람이 매번 읽고 대조하는 대신,{" "}
            <strong className="text-ds-on-surface">절차적 지식을 패키지로 묶어</strong>{" "}
            코딩 에이전트가 필요한 순간에 불러 쓰게 만든 사례입니다. 점진적 공개 덕분에
            에이전트는 가벼운 제너럴리스트로 남으면서도 7개 보안 분야의 전문 능력을
            짊어지고, 실제로 호출하는 분야의 토큰 비용만 지불합니다 &mdash; 바이브
            코딩으로 만든 코드의 보안 교정을 <strong>설계·배포 단계로 앞당기는</strong>{" "}
            실전 도구입니다.
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
            href="https://github.com/cdppcorp/KESE-KIT"
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
                KESE - KISA Enhanced Security Evaluation Kit
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                CDPP Corp | github.com/cdppcorp/KESE-KIT
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
