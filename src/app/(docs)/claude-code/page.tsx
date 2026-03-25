import { Breadcrumb } from "@/components/layout/breadcrumb";


export default function ClaudeCodePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Claude Code", href: "/claude-code" },
          { label: "Introduction" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        Claude Code
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        현대 소프트웨어 엔지니어링을 위한 지능형 CLI 에이전트. 터미널에서
        직접 Claude의 능력을 활용하여 분석, 리팩토링, 빌드할 수 있습니다.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          시작하기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant">
          Claude Code는 Anthropic이 개발한 공식 CLI 도구로, 터미널에서 Claude AI를
          직접 사용할 수 있게 해줍니다. 코드 분석, 버그 수정, 새로운 기능 구현,
          리팩토링 등 다양한 소프트웨어 엔지니어링 작업을 지원합니다.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          주요 기능
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "claude auth",
              description: "Anthropic 계정에 로그인하여 인증을 완료합니다.",
              badge: "Authentication",
            },
            {
              title: "claude chat",
              description:
                "터미널에서 대화형 세션을 시작합니다. 코드 편집, 명령 실행 등을 지원합니다.",
              badge: "Interactive",
            },
            {
              title: "claude config",
              description:
                "구성 설정을 관리합니다. 모델 선택, 권한, 프라이버시 등을 설정합니다.",
              badge: "Settings",
            },
          ].map((cmd) => (
            <div
              key={cmd.title}
              className="flex items-start gap-6 bg-ds-surface-lowest p-6 rounded-xl hover:bg-white hover:shadow-[0px_12px_32px_rgba(42,52,57,0.06)] transition-all"
            >
              <div className="w-12 h-12 bg-ds-surface flex items-center justify-center rounded-lg text-ds-primary shrink-0">
                <span className="font-mono text-sm font-bold">&gt;_</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <code className="text-ds-primary font-bold text-lg">
                    {cmd.title}
                  </code>
                  <span className="bg-ds-primary-container text-ds-primary px-2 py-0.5 rounded text-[10px] font-bold">
                    {cmd.badge}
                  </span>
                </div>
                <p className="text-sm text-ds-on-surface-variant">
                  {cmd.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Terminal preview */}
      <section className="mb-16">
        <div className="bg-[#0b0f10] rounded-2xl overflow-hidden ghost-border">
          <div className="bg-white/5 px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500/80" />
            <span className="ml-3 text-white/40 text-xs font-mono">
              terminal
            </span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            <p className="text-white/60">
              <span className="text-ds-primary">➜</span> npm install -g
              @anthropic-ai/claude-code
            </p>
            <p className="text-emerald-400 mt-2">✓ Claude Code installed</p>
            <p className="text-white/60 mt-4">
              <span className="text-ds-primary">➜</span> claude
            </p>
            <p className="text-white/80 mt-2">
              Welcome to Claude Code v1.0.0
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
