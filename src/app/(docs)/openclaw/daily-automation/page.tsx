import { Breadcrumb } from "@/components/layout/breadcrumb";
import {
  Workflow,
  Shield,
  Users,
  Briefcase,
  Home,
  Mic,
  Lightbulb,
  CheckCircle2,
  ExternalLink,
  Quote,
  Layers,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

export default function DailyAutomationPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "OpenClaw", href: "/openclaw" },
          { label: "9개 에이전트로 일상 자동화" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        오픈클로로 9개 에이전트를 돌리며 일상을
        99% 자동화하는 창업가
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-6">
        영업도, 육아도, 팟캐스트도 전부 에이전트가 합니다 — 회의론자에서
        전도사가 된 한 창업가의 OpenClaw 활용기를 통해, AI 에이전트로
        일상과 업무를 어떻게 자동화할 수 있는지 살펴봅니다.
      </p>

      {/* Source info */}
      <div className="flex flex-wrap gap-3 mb-16">
        <a
          href="https://maily.so/josh/posts/x1zg5ew9oqg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ds-primary hover:underline"
        >
          조쉬의 뉴스레터
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <span className="text-ds-on-surface-variant/40">|</span>
        <span className="text-sm text-ds-on-surface-variant">
          2026.04.01 | 조쉬의 뉴스레터 — 퀄리티 있는 AI, 비즈니스, 프로덕트 이야기
        </span>
      </div>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          &quot;에이전트 하나로는 부족하다. 역할별로 나눠야 진짜 자동화가 된다.&quot;
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          단순히 AI 챗봇을 쓰는 것이 아니라, 각 업무 영역에 특화된 에이전트를
          설계하고 운영하는 실전 노하우를 다룹니다.
        </p>
      </div>

      {/* Section 1: 회의론자에서 전도사로 */}
      <section className="mb-16" id="skeptic-to-evangelist">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Lightbulb className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            1. 회의론자에서 전도사로
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          처음 OpenClaw를 접했을 때는 반신반의였습니다. AI 에이전트가 실제로 업무를
          대체할 수 있을까? 하지만 직접 써보면서 생각이 완전히 바뀌었습니다.
        </p>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl mb-6">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. 처음 OpenClaw를 접했을 때 어땠나요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                솔직히 또 하나의 자동화 도구겠거니 했습니다. 그런데 에이전트가
                캘린더를 연동하고, 이메일을 읽고, 스스로 판단해서 일정을 조율하는
                걸 보면서 차원이 다르다는 걸 느꼈습니다. 단순 자동화가 아니라
                &quot;디지털 직원&quot;에 가까웠습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. 캘린더가 삭제됐는데도 계속 쓴 이유는?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                에이전트가 중복 일정을 정리하다가 중요한 미팅을 삭제한 적이
                있습니다. 처음엔 화가 났지만, 그 사고를 통해 권한 설정과 확인
                프로세스를 배웠습니다. 실수를 겪으면서 에이전트를 더 정교하게
                다듬게 됐고, 결국 그 과정이 진짜 자동화의 시작이었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 왜 아직도 OpenClaw인가 */}
      <section className="mb-16" id="why-openclaw">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Layers className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            2. 왜 아직도 OpenClaw인가
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          Claude, ChatGPT 등 강력한 AI가 넘쳐나는 시대에 왜 굳이 OpenClaw를
          고집하는지. 핵심은 &quot;에이전트 오케스트레이션&quot;에 있습니다.
        </p>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl mb-6">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. Claude도 비슷한 기능을 하지 않나요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                Claude는 뛰어난 대화형 AI입니다. 하지만 OpenClaw는 에이전트
                오케스트레이션 플랫폼이에요. 차이는 명확합니다 — Claude에게는
                매번 컨텍스트를 줘야 하지만, OpenClaw 에이전트는 자기 역할을
                기억하고, 도구를 스스로 사용하며, 자율적으로 판단합니다.
                24시간 돌아가는 디지털 직원이죠.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <p className="text-sm font-bold text-ds-on-surface mb-2">
            OpenClaw의 핵심 차별점:
          </p>
          {[
            "영속적 메모리 — 에이전트가 이전 작업과 맥락을 기억하고 학습",
            "도구 연결 — 캘린더, 이메일, CRM, 슬랙 등 실제 도구와 직접 연동",
            "자율적 의사결정 — 사람의 개입 없이 정해진 범위 내에서 스스로 판단",
            "멀티 에이전트 — 여러 에이전트가 협업하며 복잡한 워크플로우 처리",
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
                Q. 실제로 뭐가 필요하고, 어디서 시작하면 되나요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                OpenClaw 계정 하나면 됩니다. 처음에는 가장 반복적인 업무 하나를
                골라서 에이전트를 만들어보세요. 저는 이메일 분류부터 시작했는데,
                일주일 만에 하루 40분을 아꼈습니다. 작은 성공이 쌓이면 자연스럽게
                에이전트를 늘리게 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 보안은 어떻게 하나요 */}
      <section className="mb-16" id="security">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Shield className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            3. 보안은 어떻게 하나요
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          AI 에이전트에게 이메일, 캘린더, CRM 접근 권한을 주는 것은 당연히
          불안합니다. 보안은 OpenClaw 활용의 첫 번째 관문입니다.
        </p>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl mb-6">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. 많은 사람들이 보안이 무섭다고 하는데요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                당연한 걱정이고, 저도 처음엔 그랬습니다. 핵심은 &quot;최소 권한
                원칙&quot;입니다. 에이전트마다 접근할 수 있는 도구와 데이터를
                엄격하게 제한합니다. 영업 에이전트 Sam은 CRM과 이메일만,
                가족 에이전트 Finn은 캘린더와 장보기 앱만 접근할 수 있어요.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50/60 border-l-4 border-red-500/70 p-6 rounded-r-xl mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-1">보안 필수 체크리스트</p>
              <p className="text-sm text-ds-on-surface-variant">
                에이전트별 권한 범위를 반드시 설정하고, 민감한 작업(삭제, 결제,
                외부 발송)에는 사람의 승인 단계를 추가하세요. 감사 로그를
                정기적으로 확인하는 습관도 중요합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { title: "권한 스코핑", desc: "에이전트별로 접근 가능한 도구와 데이터를 최소한으로 제한" },
            { title: "승인 게이트", desc: "삭제, 발송, 결제 등 고위험 작업은 반드시 사람이 승인" },
            { title: "감사 로그", desc: "모든 에이전트 행동이 기록되어 추적 및 롤백 가능" },
            { title: "샌드박스 실행", desc: "에이전트가 격리된 환경에서 실행되어 시스템 전체에 영향 없음" },
          ].map((item) => (
            <div key={item.title} className="bg-ds-surface-low p-5 rounded-2xl">
              <h3 className="font-bold text-ds-on-surface mb-1">{item.title}</h3>
              <p className="text-sm text-ds-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: 에이전트는 하나만 만들면 되지 않나 */}
      <section className="mb-16" id="why-multiple-agents">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Users className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            4. 에이전트는 하나만 만들면 되지 않나
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          만능 에이전트 하나보다 역할별로 분리된 전문 에이전트 여러 개가
          훨씬 효과적입니다. 소프트웨어의 &quot;단일 책임 원칙&quot;과 같은
          이치입니다.
        </p>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl mb-6">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. 왜 여러 개를 만드는 게 나은가요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                하나의 에이전트에 모든 걸 시키면 컨텍스트가 비대해지고 정확도가
                떨어집니다. 영업 에이전트는 CRM 데이터와 영업 화법에 집중하고,
                가족 에이전트는 가정의 루틴과 선호도에 집중하는 게 훨씬
                정확합니다. 사람도 전문가가 더 잘하잖아요.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl mb-8">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. 에이전트 9개라고 하면 관리가 어렵지 않나요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                처음부터 9개를 만든 게 아닙니다. 3개월에 걸쳐 하나씩 추가했어요.
                각 에이전트가 독립적으로 돌아가기 때문에 오히려 관리가 쉽습니다.
                문제가 생기면 해당 에이전트만 수정하면 되니까요. OpenClaw
                대시보드에서 전체 상태를 한눈에 볼 수 있는 것도 큰 장점입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <p className="text-sm text-ds-on-surface-variant">
              에이전트 설계 팁: 하나의 에이전트가 하나의 역할만 담당하게
              하세요. 역할이 명확할수록 프롬프트가 간결해지고, 에이전트의
              판단 정확도가 올라갑니다. 범용 에이전트는 어떤 것도 잘 못합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: 영업 사원 Sam */}
      <section className="mb-16" id="agent-sam">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Briefcase className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            5. 영업 사원 Sam — &quot;실제로 돈을 벌어다 주는 에이전트&quot;
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          9개 에이전트 중 가장 먼저 ROI가 증명된 에이전트입니다. 리드 발굴부터
          후속 관리까지, 영업 파이프라인 전체를 자동화합니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-6">
          <h3 className="font-bold text-ds-on-surface mb-3">Sam이 하는 일</h3>
          <div className="space-y-3">
            {[
              { step: "1", title: "리드 모니터링", desc: "인바운드 문의, SNS 멘션, 웹사이트 방문자를 실시간 감지하고 CRM에 자동 등록" },
              { step: "2", title: "맞춤 후속 이메일", desc: "리드의 관심사와 행동 패턴을 분석해 개인화된 후속 이메일을 자동 작성 및 발송" },
              { step: "3", title: "파이프라인 관리", desc: "각 리드의 단계를 추적하고, 이틀 이상 응답 없는 리드에 자동 리마인더 발송" },
              { step: "4", title: "미팅 조율", desc: "관심 표현한 리드에게 자동으로 캘린더 링크 전송 및 일정 확정" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-ds-surface-lowest p-4 rounded-xl">
                <span className="w-7 h-7 bg-ds-primary/10 text-ds-primary flex items-center justify-center rounded-md text-sm font-bold shrink-0">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-ds-on-surface text-sm">{item.title}</p>
                  <p className="text-sm text-ds-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl mb-6">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. Sam이 구체적으로 뭘 하나요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                매일 아침 새 리드를 분류하고, 각 리드에 맞는 톤의 이메일을
                작성합니다. 제가 하루에 2시간씩 쓰던 영업 후속 작업을 Sam이
                15분 만에 처리해요. 특히 후속 이메일의 회신율이 제가 직접 쓸 때보다
                오히려 12% 높았습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. 실제로 경제적 가치가 있나요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                Sam을 도입한 후 3개월간 리드 전환율이 23% 올랐고, 월 평균
                신규 미팅이 8건에서 14건으로 늘었습니다. 영업 사원 한 명의
                인건비를 아끼면서 더 나은 성과를 내고 있어요. 초기 세팅에
                일주일 정도 투자하면 이후엔 거의 자동입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 가족 에이전트 Finn */}
      <section className="mb-16" id="agent-finn">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Home className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            6. 가족 에이전트 Finn — &quot;일상을 돌보는 에이전트&quot;
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          업무뿐 아니라 개인 생활까지 에이전트가 관리합니다. Finn은 가족의
          일상을 조율하는 데 특화된 에이전트입니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-6">
          <h3 className="font-bold text-ds-on-surface mb-3">Finn이 관리하는 영역</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { title: "가족 캘린더", desc: "아이 학원, 병원 예약, 가족 행사 일정을 통합 관리" },
              { title: "장보기 목록", desc: "냉장고 재고와 식단 계획에 기반한 자동 장보기 리스트" },
              { title: "등하원 알림", desc: "아이 등하원 시간에 맞춘 리마인더 및 동선 최적화" },
              { title: "가사 분배", desc: "주간 가사 일정 자동 생성 및 가족 구성원별 알림" },
            ].map((item) => (
              <div key={item.title} className="bg-ds-surface-lowest p-4 rounded-xl">
                <p className="font-semibold text-ds-on-surface text-sm mb-1">{item.title}</p>
                <p className="text-sm text-ds-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ds-surface-lowest border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-2">
                Q. 개인 생활에서는 어떻게 활용하나요?
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                아이가 둘이라 일정 관리가 정말 복잡했어요. Finn이 학원 스케줄,
                병원 예약, 생일 파티 준비까지 다 챙겨줍니다. 아내와 공유 캘린더를
                쓰는데, Finn이 충돌 일정을 미리 감지해서 알려주니까 부부 사이에
                &quot;왜 안 알려줬어&quot; 같은 갈등도 줄었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: 팟캐스트 에이전트 Howie */}
      <section className="mb-16" id="agent-howie">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Mic className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            7. 팟캐스트 에이전트 Howie
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-6">
          팟캐스트 운영에 필요한 반복 작업을 전담하는 에이전트입니다. 게스트
          리서치부터 쇼노트 작성, SNS 홍보까지 콘텐츠 제작의 전 과정을
          지원합니다.
        </p>

        <div className="space-y-3 mb-6">
          {[
            "게스트 후보 리서치 — 주제에 맞는 게스트를 자동 탐색하고 프로필 요약",
            "사전 질문지 작성 — 게스트의 최근 활동과 전문 분야 기반으로 맞춤 질문 생성",
            "쇼노트 자동 생성 — 녹음 후 트랜스크립트 기반 쇼노트 및 타임스탬프 작성",
            "SNS 홍보 콘텐츠 — 에피소드별 트위터/인스타그램/링크드인 홍보 문구 자동 생성",
            "청취자 피드백 분석 — 댓글과 리뷰를 수집하여 주간 인사이트 리포트 작성",
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

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <p className="text-sm text-ds-on-surface-variant">
              Howie 덕분에 팟캐스트 에피소드 하나를 준비하는 데 걸리는 시간이
              6시간에서 1시간 30분으로 줄었습니다. 특히 쇼노트 작성은
              이전에 매번 미루던 작업이었는데, 이제는 녹음 후 30분 이내에
              자동으로 완성됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* 9개 에이전트 전체 요약 */}
      <section className="mb-16" id="all-agents">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg">
            <Workflow className="w-5 h-5 text-ds-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface">
            9개 에이전트 전체 맵
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          영업부터 육아, 콘텐츠까지 — 각 에이전트의 역할과 담당 영역을
          한눈에 볼 수 있습니다.
        </p>

        <div className="bg-ds-surface-low rounded-2xl overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ds-surface-lowest/60">
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                  에이전트
                </th>
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface">
                  역할
                </th>
                <th className="text-left px-4 py-3 font-bold text-ds-on-surface hidden md:table-cell">
                  연동 도구
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ds-outline-variant/10">
              {[
                { name: "Sam", role: "영업 자동화", tools: "CRM, Gmail, 캘린더" },
                { name: "Finn", role: "가족 일상 관리", tools: "캘린더, 장보기 앱, 메신저" },
                { name: "Howie", role: "팟캐스트 운영", tools: "트랜스크립트, SNS, 노션" },
                { name: "Alex", role: "이메일 분류 및 응답", tools: "Gmail, 슬랙" },
                { name: "Dana", role: "미팅 요약 및 액션아이템", tools: "Zoom, 노션, 슬랙" },
                { name: "Riley", role: "콘텐츠 작성", tools: "노션, 블로그, SNS" },
                { name: "Jordan", role: "데이터 분석 리포트", tools: "스프레드시트, BI 도구" },
                { name: "Casey", role: "고객 지원 응대", tools: "헬프데스크, FAQ, 이메일" },
                { name: "Morgan", role: "SNS 관리", tools: "트위터, 인스타, 링크드인" },
              ].map((agent) => (
                <tr key={agent.name}>
                  <td className="px-4 py-3 font-semibold text-ds-primary">
                    {agent.name}
                  </td>
                  <td className="px-4 py-3 text-ds-on-surface-variant">
                    {agent.role}
                  </td>
                  <td className="px-4 py-3 text-ds-on-surface-variant hidden md:table-cell">
                    {agent.tools}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ds-on-surface mb-1">시작 가이드</p>
              <p className="text-sm text-ds-on-surface-variant">
                처음부터 9개를 만들 필요는 없습니다. 가장 반복적이고 시간을
                많이 쓰는 업무 하나를 골라 에이전트를 만들어보세요. 성공 경험이
                쌓이면 자연스럽게 확장됩니다. 추천 순서: 이메일 분류(Alex)
                <ArrowRight className="w-3 h-3 inline mx-1" />
                영업 자동화(Sam)
                <ArrowRight className="w-3 h-3 inline mx-1" />
                일정 관리(Finn) 순으로 시작하세요.
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
          <div className="space-y-3">
            <a
              href="https://maily.so/josh/posts/x1zg5ew9oqg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-ds-primary-container/40 flex items-center justify-center rounded-lg shrink-0">
                <ExternalLink className="w-5 h-5 text-ds-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                  오픈클로로 9개 에이전트를 돌리며 일상을 99% 자동화하는 창업가
                </p>
                <p className="text-xs text-ds-on-surface-variant">
                  조쉬의 뉴스레터 | maily.so
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-ds-on-surface-variant group-hover:text-ds-primary transition-colors shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
