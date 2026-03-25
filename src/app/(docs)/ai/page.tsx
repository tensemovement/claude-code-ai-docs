import { Breadcrumb } from "@/components/layout/breadcrumb";


export default function AIPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "AI", href: "/ai" },
          { label: "Introduction" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        AI
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        인공지능의 기본 개념부터 실전 활용까지. AI 기술의 핵심 원리를 이해하고
        효과적으로 활용하는 방법을 알아봅니다.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          시작하기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant">
          AI는 인간의 학습, 추론, 문제 해결 능력을 모방하는 컴퓨터 시스템을
          연구하는 분야입니다. 최근 대규모 언어 모델(LLM)의 발전으로 AI는 코딩,
          글쓰기, 분석 등 다양한 영역에서 강력한 도구로 자리잡았습니다.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          주요 주제
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-ds-surface-low p-8 rounded-2xl hover:bg-ds-surface-high transition-colors group">
            <h3 className="text-lg font-bold text-ds-on-surface mb-2 group-hover:text-ds-primary transition-colors">
              Prompt Engineering
            </h3>
            <p className="text-sm text-ds-on-surface-variant">
              AI 모델에게 효과적으로 지시하는 기술을 배웁니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-8 rounded-2xl hover:bg-ds-surface-high transition-colors group">
            <h3 className="text-lg font-bold text-ds-on-surface mb-2 group-hover:text-ds-primary transition-colors">
              Models
            </h3>
            <p className="text-sm text-ds-on-surface-variant">
              다양한 AI 모델의 특징과 적합한 사용 사례를 알아봅니다.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
