import Link from "next/link";
import { BookOpen, Terminal, ArrowRight } from "lucide-react";
import { Logo } from "@/components/layout/logo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ds-background">
      {/* Header */}
      <header className="glass border-b border-ds-outline-variant/10">
        <div className="max-w-6xl mx-auto flex items-center h-16 px-6">
          <Logo />
          <nav className="ml-8 hidden md:flex items-center gap-1">
            <Link
              href="/claude-code"
              className="px-4 py-2 text-sm font-medium text-ds-on-surface-variant hover:text-ds-on-surface hover:bg-ds-surface-high rounded-lg transition-colors"
            >
              Claude Code
            </Link>
            <Link
              href="/ai"
              className="px-4 py-2 text-sm font-medium text-ds-on-surface-variant hover:text-ds-on-surface hover:bg-ds-surface-high rounded-lg transition-colors"
            >
              AI
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
          Claude Code <span className="text-ds-primary">AI</span> Docs
        </h1>
        <p className="text-lg leading-relaxed text-ds-on-surface-variant max-w-2xl mx-auto">
          사용법을 넘어, Claude Code와 AI를 깊이 이해하기 위한 문서를 정리합니다.
        </p>
      </section>

      {/* Section cards */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Claude Code의 구조와 동작 원리를 이해하고, 효과적으로 활용하기
              위한 깊이 있는 가이드를 제공합니다.
            </p>
            <span className="flex items-center gap-2 text-sm font-bold text-ds-primary">
              자세히 보기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

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
              AI의 핵심 개념과 원리를 체계적으로 정리하여, AI를 도구가 아닌
              사고의 틀로 이해할 수 있도록 돕습니다.
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
          &copy; <a href="https://tensemovement.com" target="_blank" rel="noopener noreferrer" className="hover:text-ds-on-surface transition-colors">TENSE MOVEMENT</a> 2024. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
