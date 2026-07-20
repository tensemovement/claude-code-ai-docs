import { Breadcrumb } from "@/components/layout/breadcrumb";

import { Database, Lightbulb, Scissors, Tags, Filter, Scale } from "lucide-react";

export default function AdvancedRagPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "RAG", href: "/rag" }, { label: "고급 RAG 기법" }]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        고급 RAG 기법 &mdash; 인덱싱 · 검색 · 생성
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        기본 RAG 파이프라인은 만들기 쉽지만, 실제 서비스 품질까지 끌어올리는 일은 다른
        문제입니다. 이 문서는 파이프라인을{" "}
        <strong>인덱싱(Indexing) · 검색(Retrieval) · 생성(Generation)</strong> 세 단계로
        나누고, 각 단계에서 쓸 수 있는 개선 기법을 <strong>투입 비용 대비 효과</strong>
        순으로 정리합니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          &ldquo;좋은 의사는 많이 알기만 하는 사람이 아니라, 지금 이 환자에게 필요한
          지식을 정확히 꺼내 오는 사람이다.&rdquo;
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          의료 챗봇을 예로 들면 RAG 시스템에는 세 가지 능력이 필요합니다 &mdash;{" "}
          <strong>검색 가능한 지식 베이스를 구축</strong>하고,{" "}
          <strong>검색된 데이터를 근거로 추론</strong>하며, 그 결과를{" "}
          <strong>실시간으로 전달</strong>하는 것. 아래 기법들은 모두 이 세 능력 중 하나를
          겨냥합니다.
        </p>
      </div>

      {/* 0. Overview */}
      <section className="mb-16" id="overview">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          어느 단계를 손볼 것인가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          RAG가 잘못된 답을 냈을 때, 원인은 대개 셋 중 하나입니다. 애초에{" "}
          <strong>지식 베이스에 답이 담기지 않았거나</strong>(인덱싱), 담겨 있는데{" "}
          <strong>찾아내지 못했거나</strong>(검색), 찾아왔는데{" "}
          <strong>잘못 읽었거나</strong>(생성). 그래서 개선도 이 순서로 진단합니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <pre className="text-sm text-ds-on-surface bg-ds-surface rounded-xl p-4 overflow-x-auto outline outline-1 outline-ds-outline-variant/15">
            <code>{`[인덱싱]   원본 문서 → 청킹 → 메타데이터 부여 → 임베딩 → 벡터 DB
             ↳ 청킹 전략 · 메타데이터 필터링 · GLiNER 자동 라벨링

[검색]     질문 → (재작성) → 하이브리드 검색 → 후보 청크
             ↳ 쿼리 재작성 · 벡터+키워드 결합 · 임베딩 모델 파인튜닝

[생성]     후보 청크 → Autocut → 리랭킹 → 프롬프트 → LLM 답변
             ↳ 관련도 컷오프 · 크로스 인코더 재정렬 · LLM 파인튜닝`}</code>
          </pre>
        </div>
      </section>

      {/* 1. Indexing */}
      <section className="mb-16" id="indexing">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          1. 인덱싱 &mdash; 검색될 수 있는 형태로 저장하기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          인덱싱은 데이터를 <strong>어떻게 쪼개고, 무엇을 덧붙여, 어디에 넣을지</strong>를
          결정하는 단계입니다. 여기서 잘못 쪼갠 조각은 이후 어떤 검색 기법으로도 복구되지
          않기 때문에, 파이프라인 전체의 상한선을 정하는 구간이기도 합니다.
        </p>

        <h3 className="text-lg font-semibold text-ds-on-surface mb-4">
          청킹 전략 세 가지
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            {
              t: "단순 청킹 (Simple)",
              lv: "비용 낮음",
              d: "고정 길이로 자르되 경계를 겹치게(overlap) 두어 맥락 손실을 줄입니다. 구현이 가장 쉽지만, 의미 단위 한가운데를 끊어 버려 앞뒤가 맞지 않는 조각이 생길 수 있습니다.",
            },
            {
              t: "의미 기반 청킹 (Semantic)",
              lv: "비용 중간",
              d: "길이가 아니라 뜻을 기준으로 나눕니다. 문장 임베딩 사이의 코사인 거리를 계산해, 의미가 이어지는 문장들을 한 덩어리로 묶습니다. 조각의 일관성은 좋아지지만 임베딩 계산 비용이 추가됩니다.",
            },
            {
              t: "LLM 기반 청킹",
              lv: "비용 높음",
              d: "LLM이 텍스트를 그 자체로 완결된 명제(proposition) 단위로 분해한 뒤, 균형 잡힌 크기의 청크로 다시 조립합니다. 품질은 가장 좋지만 문서량에 비례해 추론 비용이 커집니다.",
            },
          ].map((s) => (
            <div key={s.t} className="bg-ds-surface-low p-6 rounded-2xl">
              <Scissors className="w-5 h-5 text-ds-primary mb-3" />
              <p className="text-sm font-semibold text-ds-on-surface mb-1">
                {s.t}
              </p>
              <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-2">
                {s.lv}
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-ds-on-surface mb-4">
          메타데이터로 검색 범위 좁히기
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3 mb-3">
              <Filter className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-ds-on-surface">
                메타데이터 필터링
              </p>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              날짜, 환자 연령, 질환명 같은 속성을 청크에 함께 저장해 두면, 의미 검색을
              하기 <em>전에</em> 후보군 자체를 걸러낼 수 있습니다. 소아 환자에 대한
              질문이라면 <strong>18세 초과 환자 기록을 먼저 제외</strong>한 뒤 유사도
              검색을 돌리는 식입니다. 정확도와 속도가 동시에 올라갑니다.
            </p>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3 mb-3">
              <Tags className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-ds-on-surface">
                GLiNER &mdash; 메타데이터 자동 생성
              </p>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              메타데이터가 없는 문서도 많습니다. <strong>GLiNER</strong>는 BERT 기반의
              개체명 인식 모델로, 인제스천 단계에서 청크를 읽고 원하는 태그를 자동으로
              붙여 줍니다. 사용자가 추출할 라벨 목록을 지정하면 본문에서 해당하는 값을
              찾아내며, <strong>확신도가 낮으면 태그를 붙이지 않아</strong> 오탐을
              줄입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Retrieval */}
      <section className="mb-16" id="retrieval">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          2. 검색 &mdash; 관련 문서를 빠짐없이 건져 올리기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          검색 단계의 목표는 정밀도보다 <strong>재현율(recall)</strong>입니다. 순서를
          바로잡는 일은 뒤의 리랭킹이 맡으므로, 여기서는 &ldquo;답이 들어 있는 문서를
          후보에서 빠뜨리지 않는 것&rdquo;에 집중합니다.
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              t: "하이브리드 검색 (Hybrid Search)",
              d: "벡터 검색은 의미를, 키워드 검색은 정확한 표기를 잡습니다. 약물명 · 해부학 용어 · 질병명 · 진단 코드처럼 철자 하나가 의미를 바꾸는 고유명사는 벡터 검색이 자주 놓칩니다. 두 검색을 병렬로 실행한 뒤 결과를 병합·재정렬하며, Weaviate의 alpha 같은 가중치 파라미터로 어느 쪽에 무게를 둘지 조절합니다.",
            },
            {
              t: "쿼리 재작성 (Query Rewriting)",
              d: "사람이 던지는 질문은 데이터베이스나 모델이 다루기 좋은 형태가 아닙니다. \"왼쪽 어깨가 아프고 손가락이 저려요...\" 같은 서술을 \"좌측 어깨 통증. 저림.\"처럼 검색어 중심으로 다시 씁니다. LLM에게 재작성을 맡길 수도 있고, DSPy 같은 프레임워크로 프롬프트 최적화를 자동화할 수도 있습니다.",
            },
            {
              t: "임베딩 모델 파인튜닝",
              d: "범용 임베딩 모델은 시작점일 뿐입니다. 도메인 특화 모델을 쓰거나 직접 추가 학습하면 검색 품질이 크게 달라집니다. 예로 MedCPT는 PubMed 검색 로그에서 나온 2억 5,500만 건의 질의-논문 쌍으로 사전학습된 모델입니다. 여기에 자사 데이터의 긍정·부정 예시 쌍으로 파인튜닝을 더하면 도메인 이해도가 한층 올라갑니다.",
            },
          ].map((s) => (
            <div key={s.t} className="bg-ds-surface-low p-6 rounded-2xl">
              <p className="text-sm font-semibold text-ds-on-surface mb-2">
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
            쿼리 재작성 예시
          </p>
          <pre className="text-sm text-ds-on-surface bg-ds-surface rounded-xl p-4 overflow-x-auto outline outline-1 outline-ds-outline-variant/15">
            <code>{`[원본]   "요즘 왼쪽 어깨가 계속 아프고, 가끔 손가락 끝이
          저릿한 느낌이 드는데 왜 이런 걸까요?"

[재작성] "좌측 어깨 통증. 손가락 감각 이상. 저림."`}</code>
          </pre>
        </div>
      </section>

      {/* 3. Generation */}
      <section className="mb-16" id="generation">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          3. 생성 &mdash; 관련 있는 것만 모델에게 보여 주기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          검색 결과를 그대로 다 넣으면 오히려 품질이 떨어집니다. 관련 없는 문서가 컨텍스트에
          섞이면 모델이 그것을 근거 삼아 그럴듯한 오답을 만들어 내기 때문입니다. 생성
          단계의 기법은 대부분 <strong>넣지 않는 법</strong>에 관한 것입니다.
        </p>

        <div className="space-y-4">
          {[
            {
              t: "Autocut &mdash; 관련도 급락 지점에서 자르기",
              d: "검색 결과에는 유사도 점수가 함께 붙습니다. 점수를 순서대로 늘어놓고 그 변화율을 보면, 관련도가 뚝 떨어지는 지점이 드러납니다. Autocut은 그 지점 아래를 자동으로 잘라내 상위 k개를 고정하지 않고도 잡음을 제거합니다. 고정 top-k와 달리 질문마다 적절한 개수가 달라진다는 현실을 반영합니다.",
            },
            {
              t: "리랭킹 (Reranking)",
              d: "1차 검색은 속도를 위해 질문과 문서를 따로 임베딩합니다. 리랭킹은 후보를 넉넉히 가져온 뒤(over-fetch), 크로스 인코더 모델로 질문과 문서를 쌍으로 함께 읽어 관련도를 다시 매깁니다. 느리지만 훨씬 정확하며, 후보 수십 개에만 적용하므로 비용이 감당 가능합니다. 투입 대비 효과가 가장 좋은 기법으로 꼽힙니다.",
            },
            {
              t: "LLM 파인튜닝",
              d: "도메인 코퍼스로 비지도 사전학습을 이어 하고, 도메인 과제로 지도학습을 더하면 생성 품질이 올라갑니다. LLaMA 2 70B를 의료 데이터로 파인튜닝한 Meditron 70B가 대표적인 예입니다. 다만 이 목록에서 가장 비싼 선택지이므로, 앞의 기법들을 모두 적용한 뒤에 고려하는 편이 좋습니다.",
            },
          ].map((s) => (
            <div key={s.t} className="bg-ds-surface-low p-6 rounded-2xl">
              <p className="text-sm font-semibold text-ds-on-surface mb-2">
                {s.t}
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Cost vs benefit */}
      <section className="mb-16" id="cost-benefit">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          무엇부터 적용할 것인가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          모든 기법을 한꺼번에 도입할 필요는 없습니다. 적은 투자로 큰 효과를 내는{" "}
          <strong>쿼리 재작성 · 리랭킹</strong>에서 시작해, 그래도 부족할 때{" "}
          <strong>임베딩 · LLM 파인튜닝</strong>처럼 무거운 작업으로 넘어가는 순서를
          권합니다.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left">
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low rounded-tl-xl">
                  기법
                </th>
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low">
                  단계
                </th>
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low">
                  투입 비용
                </th>
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low rounded-tr-xl">
                  주된 효과
                </th>
              </tr>
            </thead>
            <tbody className="text-ds-on-surface-variant align-top">
              {[
                ["쿼리 재작성", "검색", "낮음", "질의-문서 표현 격차 해소"],
                ["리랭킹", "생성", "낮음", "상위 결과의 정확도 향상"],
                ["Autocut", "생성", "낮음", "무관한 컨텍스트 제거, 환각 감소"],
                ["메타데이터 필터링", "인덱싱", "낮음~중간", "검색 범위 축소, 속도 개선"],
                ["하이브리드 검색", "검색", "중간", "고유명사·전문용어 재현율 확보"],
                ["의미 기반 청킹", "인덱싱", "중간", "조각의 의미 일관성 확보"],
                ["GLiNER 자동 라벨링", "인덱싱", "중간", "메타데이터 없는 문서 보강"],
                ["LLM 기반 청킹", "인덱싱", "높음", "최고 품질의 청크 경계"],
                ["임베딩 모델 파인튜닝", "검색", "높음", "도메인 의미 공간 정렬"],
                ["LLM 파인튜닝", "생성", "매우 높음", "도메인 답변 품질·문체 개선"],
              ].map((row, ri) => (
                <tr key={ri}>
                  <td className="p-3 font-medium text-ds-on-surface bg-ds-surface-low/40 whitespace-nowrap">
                    {row[0]}
                  </td>
                  <td className="p-3 bg-ds-surface-low/20 whitespace-nowrap">
                    {row[1]}
                  </td>
                  <td className="p-3 bg-ds-surface-low/20 whitespace-nowrap">
                    {row[2]}
                  </td>
                  <td className="p-3 bg-ds-surface-low/20">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-xl flex gap-3 mb-4">
          <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">순서의 원칙:</strong> 파인튜닝은 데이터
            수집 · 학습 · 검증에 시간이 들고, 모델을 바꾸면 앞 단계의 튜닝 결과도 다시
            검증해야 합니다. 반대로 리랭킹이나 Autocut은 파이프라인 뒷단에만 손을 대므로
            언제든 되돌릴 수 있습니다. <strong>되돌리기 쉬운 것부터</strong> 적용하는 편이
            안전합니다.
          </p>
        </div>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl flex gap-3">
          <Scale className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">측정 없이 튜닝하지 않기:</strong> 어떤
            기법을 넣을지 고르기 전에, 검색기와 생성기를 나눠 측정하는 평가 체계를 먼저
            갖추는 편이 좋습니다. 어느 단계가 병목인지 모르면 비싼 기법을 엉뚱한 곳에
            투입하게 됩니다.
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
            href="https://weaviate.io/blog/advanced-rag"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#61BD73]/10 flex items-center justify-center rounded-lg shrink-0">
              <Database className="w-5 h-5 text-[#61BD73]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                Advanced Retrieval Augmented Generation
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Weaviate | weaviate.io/blog
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
