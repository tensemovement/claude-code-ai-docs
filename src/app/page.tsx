import Link from "next/link";
import { BookOpen, Terminal, ArrowRight, Cog, Palette, Boxes, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { navCategories } from "@/lib/navigation";

const categoryIconMap: Record<string, LucideIcon> = {
  Terminal,
  Cog,
  BookOpen,
  Palette,
  Boxes,
  Database,
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ds-background">
      {/* Header */}
      <header className="glass border-b border-ds-outline-variant/10">
        <div className="max-w-6xl mx-auto flex items-center h-16 px-6">
          <Logo />
          <nav className="ml-8 hidden md:flex items-center gap-1">
            {navCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="px-4 py-2 text-sm font-medium text-ds-on-surface-variant hover:text-ds-on-surface hover:bg-ds-surface-high rounded-lg transition-colors"
              >
                {cat.label}
              </Link>
            ))}
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
          TENSE MOVEMENT <span className="text-ds-primary">AI</span> Docs
        </h1>
        <p className="text-lg leading-relaxed text-ds-on-surface-variant max-w-2xl mx-auto">
          AI 도구의 사용법을 넘어, 원리와 구조를 깊이 이해하기 위한 기술
          문서를 정리합니다.
        </p>
      </section>

      {/* Section cards */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {navCategories.map((cat) => {
            const Icon = categoryIconMap[cat.icon];
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className="group bg-ds-surface-low p-8 rounded-2xl hover:bg-ds-surface-high transition-colors"
              >
                {Icon && (
                  <div className="w-12 h-12 rounded-xl bg-ds-surface-lowest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-ds-primary" />
                  </div>
                )}
                <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-3 group-hover:text-ds-primary transition-colors">
                  {cat.label}
                </h2>
                <p className="text-sm leading-relaxed text-ds-on-surface-variant mb-6">
                  {cat.description}
                </p>
                <span className="flex items-center gap-2 text-sm font-bold text-ds-primary">
                  자세히 보기
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
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
