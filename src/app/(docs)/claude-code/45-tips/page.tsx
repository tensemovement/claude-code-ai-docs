import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Lightbulb, Quote } from "lucide-react";

type Tip = {
  num: string;
  title: string;
  desc: string;
};

const sections: { id: string; title: string; intro: string; tips: Tip[] }[] = [
  {
    id: "setup",
    title: "1. 환경 설정 — 시작 전 정비",
    intro:
      "도구를 매일 쓴다면 처음 5분의 세팅이 매주 몇 시간을 돌려줍니다. 상태 줄, 별칭, 입력 단축키부터 손에 익혀두세요.",
    tips: [
      {
        num: "0",
        title: "상태 줄을 커스터마이즈하라",
        desc: "모델, 디렉터리, git 브랜치, 미커밋 수, 토큰 사용률을 한 줄에 표시. 컨텍스트 잔량을 시각적으로 추적할 수 있다.",
      },
      {
        num: "1",
        title: "필수 슬래시 커맨드를 익혀라",
        desc: "/usage(레이트 리밋), /chrome(브라우저 통합), /mcp(MCP 서버), /stats(활동 그래프), /clear(대화 초기화) — / 만 눌러도 전체 목록을 볼 수 있다.",
      },
      {
        num: "7",
        title: "터미널 별칭을 등록하라",
        desc: "c=claude, ch=claude --chrome, co=code 같은 짧은 별칭으로 호출 비용을 줄인다. -c, -r 플래그와도 결합된다.",
      },
      {
        num: "24",
        title: "realpath로 절대 경로를 얻어라",
        desc: "다른 폴더의 파일을 가리킬 때 상대 경로 대신 realpath의 출력을 그대로 전달하면 모호함이 사라진다.",
      },
      {
        num: "38",
        title: "입력창 키보드 단축키를 활용하라",
        desc: "Ctrl+A/E(줄 끝/처음), Ctrl+W(단어 삭제), Ctrl+U/K(줄 잘라내기), Ctrl+G(외부 에디터로 열기). bash readline을 그대로 따른다.",
      },
    ],
  },
  {
    id: "context",
    title: "2. 컨텍스트 관리 — 우유처럼 신선하고 농축되게",
    intro:
      "AI 컨텍스트는 우유와 같다. 신선하고 농축되어 있을 때 가장 좋다. 길어질수록 성능이 떨어지므로 능동적으로 잘라내고 다시 시작하라.",
    tips: [
      {
        num: "5",
        title: "주제가 바뀌면 새 대화를 시작하라",
        desc: "긴 컨텍스트는 모델 성능을 떨어뜨린다. 새 주제·새 작업이면 망설이지 말고 새 세션으로 옮긴다.",
      },
      {
        num: "8",
        title: "능동적으로 컨텍스트를 압축하라",
        desc: "auto-compact를 끄고 HANDOFF.md를 직접 작성시키거나 plan mode로 컨텍스트를 정리한 뒤 새 에이전트에 인수인계.",
      },
      {
        num: "13",
        title: "대화 기록을 검색하라",
        desc: "~/.claude/projects/ 안의 .jsonl 파일을 grep/jq로 뒤지거나, Claude Code에게 직접 \"오늘 X에 대해 뭐라고 얘기했지?\"라고 묻는다.",
      },
      {
        num: "15",
        title: "시스템 프롬프트를 슬림화하라",
        desc: "시스템 프롬프트와 도구 정의가 약 19k 토큰(컨텍스트의 10%)을 잡아먹는다. 패치로 이를 9k 수준까지 줄일 수 있다. MCP는 ENABLE_TOOL_SEARCH로 lazy-load.",
      },
      {
        num: "23",
        title: "대화를 fork/clone 하라",
        desc: "특정 시점에서 다른 접근을 시도할 때 /fork로 분기. half-clone은 후반부만 남겨 토큰 사용량을 줄여준다.",
      },
    ],
  },
  {
    id: "problem-solving",
    title: "3. 문제 해결 패턴 — 큰 문제를 작게",
    intro:
      "에이전트 코딩에서도 전통 소프트웨어 엔지니어링 능력은 그대로 가치가 있다. 분해 → 검증 루프 → 반복.",
    tips: [
      {
        num: "3",
        title: "큰 문제를 작은 문제로 쪼개라",
        desc: "한 번에 풀리지 않으면 A→B 대신 A→A1→A2→A3→B로 분해. 가장 작은 부분 문제까지 내려가라.",
      },
      {
        num: "9",
        title: "쓰기-검증 사이클을 완성하라",
        desc: "자율 실행을 맡기려면 결과를 검증할 수단이 있어야 한다. tmux로 인터랙티브 출력을 캡처하거나, 테스트 코드를 함께 작성시킨다.",
      },
      {
        num: "17",
        title: "긴 작업엔 수동 지수 백오프",
        desc: "Docker 빌드, GitHub CI 같은 장기 작업은 1분 → 2분 → 4분으로 간격을 늘려가며 폴링. gh run watch보다 토큰 효율이 좋다.",
      },
      {
        num: "35",
        title: "미지의 영역에서도 용감해져라",
        desc: "낯선 언어/프레임워크여도 일단 들어가 본다. Claude Code와 함께 추측-실험-막다른 길-방향 전환을 빠르게 반복하면 결국 풀린다.",
      },
      {
        num: "39",
        title: "계획하되 빠르게 프로토타이핑하라",
        desc: "어떤 기술/구조/파일 배치를 쓸지는 처음에 결정해야 한다. plan mode 또는 \"코드 작성 전에 계획 먼저\" 지시로 시작.",
      },
      {
        num: "40",
        title: "과도한 코드는 단순화시켜라",
        desc: "Claude는 코드와 산문 모두에서 부풀리는 경향이 있다. \"왜 이 줄을 추가했지?\"를 물으며 단순화시킨다.",
      },
    ],
  },
  {
    id: "workflow",
    title: "4. 워크플로우 가속 — 손이 모자랄 때",
    intro:
      "음성 입력, 멀티탭, 워크트리, 백그라운드 실행, 입출력 트릭 — 동시에 많은 일을 굴리기 위한 도구들.",
    tips: [
      {
        num: "2",
        title: "타이핑 대신 음성으로 말해라",
        desc: "superwhisper/MacWhisper 같은 로컬 음성 전사 도구로 대화 속도를 끌어올린다. 약간의 오타는 모델이 알아서 해석한다.",
      },
      {
        num: "4",
        title: "Git/GitHub CLI를 위임하라",
        desc: "커밋 메시지, 브랜치, PR 생성을 모두 맡긴다. push는 위험하니 보통 자동 허용하지 않는다. draft PR은 안전한 시작점.",
      },
      {
        num: "14",
        title: "터미널 탭으로 멀티태스킹하라",
        desc: "최대 3-4개 작업을 캐스케이드(왼→오른쪽 sweep) 방식으로 운영. 가장 왼쪽 탭은 음성 전사 시스템 같은 영구 작업.",
      },
      {
        num: "16",
        title: "Git worktree로 병렬 브랜치 작업",
        desc: "같은 프로젝트의 여러 브랜치를 충돌 없이 동시에 진행. \"워크트리 만들고 거기서 작업해\"라고만 말하면 된다.",
      },
      {
        num: "36",
        title: "백그라운드 bash와 서브에이전트",
        desc: "Ctrl+B로 장기 작업을 백그라운드로 보내고 BashOutput으로 추후 확인. 큰 코드베이스는 서브에이전트 여러 개로 병렬 분석.",
      },
    ],
  },
  {
    id: "io-tricks",
    title: "5. 입출력 트릭 — 데이터를 안팎으로 옮기는 법",
    intro:
      "터미널과 외부 도구 사이에서 텍스트가 깨끗하게 흘러가도록 하는 작은 기교들.",
    tips: [
      {
        num: "6",
        title: "터미널에서 출력 빼내기",
        desc: "/copy 슬래시 커맨드, pbcopy로 클립보드 직행, 파일로 저장 후 VS Code 열기 — 깔끔한 복사를 위한 여러 경로.",
      },
      {
        num: "10",
        title: "Cmd+A · Ctrl+A는 친구다",
        desc: "AI가 못 가져오는 페이지(사설 페이지, Reddit 글, Gmail 스레드 등)는 전체 선택-복사로 직접 붙여넣어라. YouTube 자막도 동일.",
      },
      {
        num: "19",
        title: "마크다운이 답이다",
        desc: "Google Docs/Notion 대신 마크다운으로 작성. Claude Code와의 시너지가 가장 좋다.",
      },
      {
        num: "20",
        title: "링크 보존엔 Notion 경유",
        desc: "Slack 등에서 복사한 링크 텍스트는 Notion에 한 번 붙이고 다시 복사하면 마크다운 링크로 변환된다.",
      },
    ],
  },
  {
    id: "extending",
    title: "6. 확장하기 — 스킬, 플러그인, 컨테이너",
    intro:
      "CLAUDE.md, Skills, Slash Commands, Plugins, MCP — 각각의 쓰임이 다르다. 적재적소를 알면 토큰을 아끼고 통제력을 얻는다.",
    tips: [
      {
        num: "11",
        title: "막힌 사이트는 Gemini CLI로 우회",
        desc: "WebFetch가 못 여는 사이트(Reddit 등)는 Gemini CLI를 fallback으로 쓰는 스킬을 만든다. tmux 패턴으로 호출.",
      },
      {
        num: "21",
        title: "위험한 장기 작업은 컨테이너에서",
        desc: "--dangerously-skip-permissions 세션은 컨테이너에서. SafeClaw로 격리된 worker Claude를 띄워 외부에서 tmux로 조종할 수 있다.",
      },
      {
        num: "25",
        title: "CLAUDE.md vs Skills vs Slash Commands vs Plugins",
        desc: "CLAUDE.md는 항상 로드되는 기본 프롬프트. Skills/Commands는 필요할 때만 로드(2.13에서 통합). Plugins는 이들을 묶어 배포.",
      },
      {
        num: "30",
        title: "CLAUDE.md는 단순하게, 주기적으로 점검",
        desc: "처음엔 비워두고 반복 지시가 생기면 그때 추가. 오래된 지시는 정기적으로 정리한다.",
      },
      {
        num: "33",
        title: "승인된 명령을 감사하라",
        desc: "settings.json의 allow 목록은 시간이 갈수록 위험해진다. cc-safe로 sudo, rm -rf, chmod 777, curl|sh 같은 패턴을 스캔.",
      },
      {
        num: "34",
        title: "테스트를 많이 써라 (TDD 활용)",
        desc: "실패하는 테스트를 먼저 작성·커밋한 뒤 구현을 맡기면 명확한 계약이 생긴다. AI도 자기 코드를 검증할 수 있다.",
      },
      {
        num: "44",
        title: "dx 플러그인을 설치하라",
        desc: "/dx:gha, /dx:handoff, /dx:clone, /dx:half-clone, /dx:reddit-fetch, /dx:review-claudemd를 한 번에 묶은 패키지.",
      },
      {
        num: "45",
        title: "퀵 셋업 스크립트로 일괄 적용",
        desc: "DX 플러그인, cc-safe, 상태 줄, 별칭, 권한 등 추천 설정을 한 줄로 적용하는 setup.sh 제공.",
      },
    ],
  },
  {
    id: "use-cases",
    title: "7. Claude Code의 진짜 가능성 — 코딩 그 너머",
    intro:
      "Claude Code는 IDE가 아니라 디지털 세계 전체의 보편적 인터페이스다. 글쓰기, 리뷰, 리서치, DevOps까지 흡수한다.",
    tips: [
      {
        num: "18",
        title: "글쓰기 어시스턴트",
        desc: "맥락을 풍부히 주고 음성으로 지시 → 초안 → 줄 단위 피드백. 터미널/에디터를 양쪽에 띄우고 핑퐁한다.",
      },
      {
        num: "26",
        title: "인터랙티브 PR 리뷰",
        desc: "gh로 PR을 가져와 파일 단위로, 또는 전체 구조 단위로 페이스를 조절하며 리뷰. 원샷 도구와 다른 강점이다.",
      },
      {
        num: "27",
        title: "리서치 도구로서의 Claude Code",
        desc: "GitHub Actions 실패 분석, Reddit 시장 조사, 코드베이스 탐색 — 적절한 도구(gh, MCP, Cmd+A)와 연결만 해주면 다 한다.",
      },
      {
        num: "28",
        title: "출력을 검증하는 여러 방법을 익혀라",
        desc: "테스트, 비주얼 git 클라이언트, 드래프트 PR, 자기 검증(\"모든 주장 더블체크하고 표로 만들어\") — 다층 검증.",
      },
      {
        num: "29",
        title: "DevOps 엔지니어로 활용",
        desc: "CI 실패는 \"근본 원인을 파헤쳐\"라고 던진다. /gha 슬래시 커맨드는 flaky 여부, 깨뜨린 커밋, 수정안까지 자동 조사.",
      },
      {
        num: "31",
        title: "범용 인터페이스로서의 Claude Code",
        desc: "ffmpeg 영상 편집, Whisper 전사, CSV 분석, 디스크 정리 — 컴퓨터에서 하고 싶은 모든 일의 첫 진입점.",
      },
      {
        num: "32",
        title: "올바른 추상화 수준을 선택하라",
        desc: "vibe coding과 라인 단위 검토는 이분법이 아니다. 빙산을 멀리서 보거나, 가까이 다가가거나, 다이빙해 들어갈 수 있다.",
      },
    ],
  },
  {
    id: "mindset",
    title: "8. 마인드셋 — 장기적으로 어떻게 잘 쓸 것인가",
    intro:
      "도구를 익히는 것보다 더 중요한 것은 자세다. 1만 시간이 아니라 10억 토큰의 시대 — 자동화의 자동화로 자유를 늘려라.",
    tips: [
      {
        num: "12",
        title: "자신의 워크플로우에 투자하라",
        desc: "음성 전사기를 직접 만들 필요까진 없지만, CLAUDE.md를 정돈하고 팁을 익히는 시간이 곧 도구에 대한 투자다.",
      },
      {
        num: "22",
        title: "실력을 키우는 가장 좋은 방법은 그냥 쓰는 것",
        desc: "10000시간 룰의 AI 버전: 10억 토큰 룰. 동시에 여러 세션을 돌리며 토큰을 많이 소비하는 것이 곧 직관의 형성.",
      },
      {
        num: "37",
        title: "개인화된 소프트웨어의 시대",
        desc: "전용 음성 전사기, 슬랙 CLI, 슬라이드 템플릿 — 한두 시간이면 \"나만 쓰는\" 도구를 만들 수 있다.",
      },
      {
        num: "41",
        title: "자동화의 자동화",
        desc: "ChatGPT 시절 명령 복붙을 자동화한 것에서 시작해, 타이핑(음성)을 자동화하고, 반복 지시는 CLAUDE.md/스킬로 옮긴다.",
      },
      {
        num: "42",
        title: "지식을 공유하고 기여하라",
        desc: "포스트, 사내 세션, 이슈 제출 — 공유는 일방향이 아니다. 댓글에서 새로운 트릭을 배우는 경우가 많다.",
      },
      {
        num: "43",
        title: "계속 배워라",
        desc: "Claude Code에 직접 묻기, /release-notes 확인, r/ClaudeAI, Anthropic DevRel(@adocomplete)의 \"Advent of Claude\".",
      },
    ],
  },
];

export default function FortyFiveTipsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Claude Code", href: "/claude-code" },
          { label: "45가지 Claude Code 팁" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        45가지 Claude Code 팁: 기초부터 고급까지
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-6">
        ykdojo가 정리한 8천 스타짜리 가이드의 핵심을 8개 주제로 큐레이션했습니다.
        커스텀 상태 줄, 시스템 프롬프트 절반 줄이기, Gemini CLI를 minion으로 쓰기,
        컨테이너 안에서 Claude Code를 또 돌리기 — 실전에서 검증된 패턴들입니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          단순한 단축키 모음이 아니다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          컨텍스트가 떨어지는 순간을 다스리고, 자율 작업의 검증 루프를 닫고,
          반복되는 지시를 스킬·플러그인·컨테이너로 끌어올리는 — 에이전트 코딩의
          실무 운영 매뉴얼입니다.
        </p>
      </div>

      {/* Quote */}
      <section className="mb-16" id="opening-quote">
        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-1" />
            <p className="text-base font-semibold text-ds-on-surface italic leading-relaxed">
              &quot;AI 컨텍스트는 우유와 같다 — 신선하고 농축되어 있을 때 가장 좋다.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section) => (
        <section key={section.id} className="mb-16" id={section.id}>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
            {section.title}
          </h2>
          <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
            {section.intro}
          </p>

          <div className="space-y-3">
            {section.tips.map((tip) => (
              <div
                key={tip.num}
                className="bg-ds-surface-low p-5 rounded-2xl flex items-start gap-4"
              >
                <span className="w-10 h-10 bg-ds-primary text-white flex items-center justify-center rounded-lg text-sm font-bold shrink-0">
                  {tip.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-ds-on-surface mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Closing Insight */}
      <section className="mb-16" id="closing">
        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-1">정리</p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                팁을 외우는 것보다 중요한 건 매 작업에서 토큰을 의식하고, 검증
                루프를 닫고, 반복되는 패턴을 즉시 스킬·플러그인으로 옮기는
                습관입니다. 그 결과로 만들어지는 것은 더 좋은 코드가 아니라{" "}
                <span className="font-semibold text-ds-on-surface">
                  더 좋은 생성 장치
                </span>
                입니다.
              </p>
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
            href="https://github.com/ykdojo/claude-code-tips"
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
                45 Claude Code Tips: From Basics to Advanced
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                ykdojo (YK) | github.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
