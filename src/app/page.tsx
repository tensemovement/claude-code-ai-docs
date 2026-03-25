import Link from "next/link";
import { BookOpen, Terminal, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ds-background">
      {/* Header */}
      <header className="glass border-b border-ds-outline-variant/10">
        <div className="max-w-6xl mx-auto flex items-center h-16 px-6">
          <Link
            href="/"
            className="text-lg font-bold tracking-tighter text-ds-on-surface"
          >
            Claude Code Docs
          </Link>
          <nav className="ml-8 hidden md:flex items-center gap-1">
            <Link
              href="/ai"
              className="px-4 py-2 text-sm font-medium text-ds-on-surface-variant hover:text-ds-on-surface hover:bg-ds-surface-high rounded-lg transition-colors"
            >
              AI
            </Link>
            <Link
              href="/claude-code"
              className="px-4 py-2 text-sm font-medium text-ds-on-surface-variant hover:text-ds-on-surface hover:bg-ds-surface-high rounded-lg transition-colors"
            >
              Claude Code
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-ds-primary-container rounded-2xl shadow-lg flex items-center justify-center">
            <Terminal className="w-10 h-10 text-ds-primary" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-ds-on-surface mb-6">
          Claude <span className="text-ds-primary">Code</span>
        </h1>
        <p className="text-lg leading-relaxed text-ds-on-surface-variant max-w-2xl mx-auto mb-10">
          현대 소프트웨어 엔지니어링을 위한 지능형 CLI 에이전트. 터미널에서 직접
          Claude의 능력을 활용하여 분석, 리팩토링, 빌드할 수 있습니다.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/claude-code"
            className="primary-gradient text-white px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            시작하기
          </Link>
          <Link
            href="/ai"
            className="px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide text-ds-on-surface-variant hover:text-ds-on-surface hover:bg-ds-surface-high transition-colors"
          >
            AI 알아보기
          </Link>
        </div>
      </section>

      {/* Section cards */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI Card */}
          <Link
            href="/ai"
            className="group bg-ds-surface-low p-8 rounded-2xl hover:bg-ds-surface-high transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-ds-surface-lowest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-ds-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-3 group-hover:text-ds-primary transition-colors">
              AI
            </h2>
            <p className="text-sm leading-relaxed text-ds-on-surface-variant mb-6">
              인공지능의 기본 개념, 프롬프트 엔지니어링, 모델 이해 등 AI 활용에
              필요한 핵심 지식을 정리합니다.
            </p>
            <span className="flex items-center gap-2 text-sm font-bold text-ds-primary">
              자세히 보기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Claude Code Card */}
          <Link
            href="/claude-code"
            className="group bg-ds-surface-low p-8 rounded-2xl hover:bg-ds-surface-high transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-ds-surface-lowest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6 text-ds-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-3 group-hover:text-ds-primary transition-colors">
              Claude Code
            </h2>
            <p className="text-sm leading-relaxed text-ds-on-surface-variant mb-6">
              설치부터 CLI 명령어, 인증, 베스트 프랙티스까지 Claude Code 활용의
              모든 것을 다룹니다.
            </p>
            <span className="flex items-center gap-2 text-sm font-bold text-ds-primary">
              자세히 보기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ds-outline-variant/10 bg-ds-surface-low">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-ds-on-surface-variant">
          Claude Code Docs
        </div>
      </footer>
    </div>
  );
}
