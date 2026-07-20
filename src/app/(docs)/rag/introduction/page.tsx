import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  Database,
  FileText,
  Sparkles,
  Search,
  Layers,
  Newspaper,
  ThumbsUp,
  Mail,
  Bot,
  Network,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";

export default function RagIntroductionPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "RAG", href: "/rag" }, { label: "RAG 입문" }]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        RAG 입문 &mdash; 검색 증강 생성
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        <strong>RAG(Retrieval-Augmented Generation, 검색 증강 생성)</strong>는 생성형
        LLM이 가진 일반 지식에, 외부 데이터 소스에서 <strong>지금 이 작업에 필요한
        데이터를 검색해 덧붙여 주는</strong> 프레임워크입니다. 모델의 가중치를 건드리지
        않고도 최신 정보 · 사내 데이터 · 전문 문서를 다루게 만들 수 있어, 환각을 줄이고
        답변을 근거에 묶는 가장 실용적인 방법으로 꼽힙니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          &ldquo;모델을 다시 학습시키지 말고, 답할 때 필요한 자료를 쥐여 주라.&rdquo;
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          LLM이 학습 중에 파라미터로 흡수한 지식을 <strong>파라메트릭
          지식(parametric knowledge)</strong>이라 부릅니다. RAG는 여기에 벡터
          데이터베이스 같은 외부 저장소의 <strong>비(非)파라메트릭 지식</strong>을
          결합합니다. 시험으로 비유하면, 외운 것만으로 푸는 시험이 아니라 자료 반입이
          허용된 오픈북 시험을 치르게 하는 셈입니다.
        </p>
      </div>

      {/* 1. Why RAG */}
      <section className="mb-16" id="why-rag">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          왜 RAG가 필요한가
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          생성형 모델은 학습 시점에 본 데이터의 범위를 벗어나지 못합니다. RAG는 그 경계
          바깥에서 생기는 네 가지 문제를 겨냥합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Search,
              t: "전문 지식의 공백",
              d: "학습 데이터에 충분히 담기지 않은 좁고 깊은 주제에 대해서는 피상적인 답변만 내놓습니다.",
            },
            {
              icon: Newspaper,
              t: "오래된 정보",
              d: "학습 컷오프 이후에 벌어진 일은 알지 못합니다. 어제 나온 뉴스, 오늘의 주가는 모델 안에 없습니다.",
            },
            {
              icon: Database,
              t: "사유 데이터 접근 불가",
              d: "사내 위키, 고객 DB, 개인 문서처럼 공개되지 않은 데이터는 애초에 학습에 포함될 수 없습니다.",
            },
            {
              icon: AlertTriangle,
              t: "환각(Hallucination)",
              d: "모르는 것을 모른다고 말하는 대신, 그럴듯한 문장으로 지어내 설득력 있게 제시합니다.",
            },
          ].map((s) => (
            <div
              key={s.t}
              className="bg-ds-surface-low p-6 rounded-2xl flex gap-4 items-start"
            >
              <s.icon className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  {s.t}
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Components */}
      <section className="mb-16" id="components">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          RAG를 이루는 세 가지 구성 요소
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          RAG 파이프라인은 결국 &ldquo;어디서 찾을 것인가 · 어떻게 끼워 넣을 것인가 ·
          누가 답을 쓸 것인가&rdquo;의 세 조각으로 나뉩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: Database,
              t: "1. 외부 지식 소스",
              d: "벡터 데이터베이스에 저장된 비파라메트릭 지식. 사내 DB, 법률 문서, 의학·과학 논문, 크롤링한 웹페이지, 이메일·메모 같은 개인 데이터가 대상이 됩니다.",
            },
            {
              icon: FileText,
              t: "2. 프롬프트 템플릿",
              d: "검색된 컨텍스트를 사용자 질문과 함께 배치하는 틀. \"주어진 컨텍스트만 사용하고 사전 지식은 쓰지 말고 답하라\"처럼 근거 사용 규칙을 명시합니다.",
            },
            {
              icon: Sparkles,
              t: "3. 생성형 LLM",
              d: "내부 지식과 새로 검색된 데이터를 결합해 최종 답변을 작성합니다. 검색 품질이 낮으면 이 단계에서 회복할 방법이 없습니다.",
            },
          ].map((s) => (
            <div key={s.t} className="bg-ds-surface-low p-6 rounded-2xl">
              <s.icon className="w-5 h-5 text-ds-primary mb-3" />
              <p className="text-sm font-semibold text-ds-on-surface mb-1">
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
            프롬프트 템플릿 예시
          </p>
          <pre className="text-sm text-ds-on-surface bg-ds-surface rounded-xl p-4 overflow-x-auto outline outline-1 outline-ds-outline-variant/15">
            <code>{`아래는 컨텍스트 정보입니다.
---------------------
{context}
---------------------
주어진 컨텍스트 정보만 사용하고 사전 지식은 사용하지 말고,
다음 질문에 답하세요.
질문: {query}
답변:`}</code>
          </pre>
        </div>
      </section>

      {/* 3. Workflow */}
      <section className="mb-16" id="workflow">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          동작 흐름: 인제스천과 추론
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          RAG는 시점이 다른 두 단계로 나뉩니다. <strong>인제스천(Ingestion)</strong>은
          질문이 오기 전에 미리 지식 베이스를 만들어 두는 준비 과정이고,{" "}
          <strong>추론(Inference)</strong>은 질문이 들어온 순간 실행되는 세 걸음입니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl mb-8">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            1단계 · 인제스천 (사전 준비)
          </p>
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            원본 데이터를 임베딩 모델에 통과시켜{" "}
            <strong>벡터화(vectorization)</strong>하고, 그 결과인{" "}
            <strong>임베딩(embedding)</strong>을 벡터 데이터베이스에 저장합니다.
            임베딩은 텍스트나 이미지를 다차원 벡터로 표현한 것으로, 의미가 가까운
            내용일수록 벡터 공간에서 가까이 놓입니다. 한 번 구축한 지식 베이스는 이후
            모든 질의에 재사용됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            {
              n: "Retrieval",
              t: "검색",
              d: "사용자 질문을 외부 데이터와 동일한 벡터 공간에 임베딩하고, 거리 계산 기반의 유사도 검색(similarity search)으로 가장 가까운 조각들을 찾아냅니다.",
            },
            {
              n: "Augmentation",
              t: "증강",
              d: "검색된 데이터를 프롬프트 템플릿에 끼워 넣어 컨텍스트를 풍부하게 만듭니다. 이 시점의 프롬프트가 모델이 실제로 보는 전부입니다.",
            },
            {
              n: "Generation",
              t: "생성",
              d: "증강된 컨텍스트와 모델의 내부 지식을 종합해 일관된 답변을 생성합니다. 근거 문서를 함께 인용하도록 설계하는 것이 일반적입니다.",
            },
          ].map((s, i) => (
            <div key={s.n} className="bg-ds-surface-low p-6 rounded-2xl">
              <p className="text-xs font-bold text-ds-primary mb-2">
                2단계 · 추론 {i + 1}
              </p>
              <p className="text-sm font-semibold text-ds-on-surface mb-1">
                {s.n} &middot; {s.t}
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            파이프라인 요약
          </p>
          <pre className="text-sm text-ds-on-surface bg-ds-surface rounded-xl p-4 overflow-x-auto outline outline-1 outline-ds-outline-variant/15">
            <code>{`[인제스천]  원본 문서 → 청킹 → 임베딩 → 벡터 DB 저장

[추론]      사용자 질문
              ↓ 임베딩
            유사도 검색  ──→  관련 청크 top-k
              ↓
            프롬프트 템플릿에 삽입 (Augmentation)
              ↓
            LLM 생성 (Generation) → 근거가 붙은 답변`}</code>
          </pre>
        </div>
      </section>

      {/* 4. RAG vs Fine-tuning */}
      <section className="mb-16" id="rag-vs-fine-tuning">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          RAG와 파인튜닝의 차이
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          둘은 경쟁 관계라기보다 목적이 다릅니다. 대략적인 기준은 &ldquo;<strong>무엇을
          아는가</strong>는 RAG, <strong>어떻게 말하는가</strong>는
          파인튜닝&rdquo;입니다.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left">
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low rounded-tl-xl">
                  기준
                </th>
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low">
                  RAG
                </th>
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low rounded-tr-xl">
                  파인튜닝 (Fine-tuning)
                </th>
              </tr>
            </thead>
            <tbody className="text-ds-on-surface-variant align-top">
              {[
                [
                  "모델 변경",
                  "가중치를 수정하지 않음",
                  "재학습으로 가중치를 갱신",
                ],
                [
                  "비용과 시간",
                  "상대적으로 낮고 즉시 적용 가능",
                  "높고 학습·검증에 시간이 필요",
                ],
                [
                  "실시간성",
                  "외부 소스를 동적으로 조회",
                  "학습 시점에 고정된 정적 지식",
                ],
                [
                  "적합한 목적",
                  "정확도 향상, 환각 감소, 최신·사유 데이터 반영",
                  "말투·문체·출력 형식 등 스타일 커스터마이징",
                ],
                [
                  "지식 갱신 방법",
                  "문서를 추가·삭제하고 다시 색인",
                  "데이터셋을 만들어 다시 학습",
                ],
              ].map((row, ri) => (
                <tr key={ri}>
                  <td className="p-3 font-medium text-ds-on-surface bg-ds-surface-low/40">
                    {row[0]}
                  </td>
                  <td className="p-3 bg-ds-surface-low/20">{row[1]}</td>
                  <td className="p-3 bg-ds-surface-low/20">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-xl flex gap-3">
          <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">먼저 손댈 곳:</strong> 모델 정확도를
            높이고 환각을 줄이며 특정 작업에 맞추는 방법 중, RAG는 가장 낮은 곳에 달린
            열매입니다. 파인튜닝은 검색으로 해결되지 않는 문제(일관된 톤, 특수한 출력
            포맷)가 남았을 때 그 위에 얹는 편이 경제적입니다.
          </p>
        </div>
      </section>

      {/* 5. Advanced techniques */}
      <section className="mb-16" id="techniques">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          고급 RAG 기법
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          기본 파이프라인이 잘 동작하지 않을 때는 검색의 <strong>앞 · 중간 · 뒤</strong>
          중 어디를 손볼지부터 정합니다. 개선 지점을 단계별로 나눠 보면 원인 추적이
          쉬워집니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              t: "검색 이전 (Pre-retrieval)",
              items: [
                [
                  "메타데이터 필터링",
                  "날짜·부서·문서 유형 등으로 검색 범위를 미리 좁혀 정확도와 속도를 함께 올립니다.",
                ],
                [
                  "청킹 (Chunking)",
                  "문서를 검색 단위로 쪼갭니다. 조각이 너무 크면 잡음이, 너무 작으면 맥락이 사라집니다.",
                ],
              ],
            },
            {
              t: "검색 (Retrieval)",
              items: [
                [
                  "하이브리드 검색",
                  "벡터 유사도 검색과 키워드 매칭을 결합해, 의미 기반 검색이 놓치는 고유명사·코드·약어를 잡아냅니다.",
                ],
              ],
            },
            {
              t: "검색 이후 (Post-retrieval)",
              items: [
                [
                  "리랭킹 (Re-ranking)",
                  "전용 리랭커 모델로 검색 결과의 순서를 다시 매겨, 진짜 관련 있는 조각을 프롬프트 앞쪽에 배치합니다.",
                ],
                [
                  "파인튜닝",
                  "임베딩 모델이나 생성 모델을 도메인 데이터로 추가 학습시켜 검색·생성 품질을 끌어올립니다.",
                ],
              ],
            },
          ].map((g) => (
            <div key={g.t} className="bg-ds-surface-low p-6 rounded-2xl">
              <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-4">
                {g.t}
              </p>
              <div className="space-y-4">
                {g.items.map(([name, desc]) => (
                  <div key={name}>
                    <p className="text-sm font-semibold text-ds-on-surface mb-1">
                      {name}
                    </p>
                    <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Agentic & Graph RAG */}
      <section className="mb-16" id="variants">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          한 걸음 더: Agentic RAG와 Graph RAG
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          단순 RAG는 &ldquo;한 번 검색하고 한 번 답한다&rdquo;는 직선 구조입니다. 질문이
          여러 문서를 넘나들거나, 첫 검색이 빗나갔을 때 스스로 회복해야 한다면 구조 자체를
          바꿔야 합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3 mb-3">
              <Bot className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-ds-on-surface">
                Agentic RAG
              </p>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-3">
              AI 에이전트가 검색 과정 자체를 판단합니다. 정보를 해석하고, 계획을 세우고,
              질의를 다시 쓰며 필요한 만큼 검색을 반복합니다.
            </p>
            <ul className="text-sm text-ds-on-surface-variant leading-relaxed space-y-1 list-disc pl-4">
              <li>첫 검색 결과가 부정확하면 질의를 바꿔 재검색</li>
              <li>여러 문서를 오가는 다단계 추론</li>
              <li>중간 결과에 따라 검색 전략을 반복 조정</li>
            </ul>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-start gap-3 mb-3">
              <Network className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-ds-on-surface">Graph RAG</p>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed mb-3">
              문서에서 개체(entity)와 그 관계를 추출해 지식 그래프를 만들고, 그래프를
              따라가며 답을 구성합니다.
            </p>
            <ul className="text-sm text-ds-on-surface-variant leading-relaxed space-y-1 list-disc pl-4">
              <li>여러 문서를 가로지르는 비교·대조 질문</li>
              <li>지식 베이스 전체를 조망하는 추론</li>
              <li>출처가 흩어진 정보를 하나로 종합</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Evaluation */}
      <section className="mb-16" id="evaluation">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          RAG 평가하기
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          RAG가 틀린 답을 냈을 때 원인은 둘 중 하나입니다 &mdash; 잘못된 문서를
          가져왔거나, 제대로 가져온 문서를 잘못 읽었거나. 그래서 평가도{" "}
          <strong>검색기(retriever)</strong>와 <strong>생성기(generator)</strong>를 나눠
          측정한 뒤, 마지막에 전체를 함께 봅니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-4">
              검색기 (Retriever)
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  정확도 (Accuracy)
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  관련 있는 정보를 골라내는 정밀도.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  적합성 (Relevance)
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  가져온 문서가 질문의 맥락에 부합하는 정도.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-4">
              생성기 (Generator)
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  충실성 (Faithfulness)
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  답변이 근거 문서의 내용에서 벗어나지 않는 정도.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-ds-on-surface mb-1">
                  정합성 (Correctness)
                </p>
                <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                  정답(ground truth) 대비 사실관계의 정확성.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl flex gap-3 mb-4">
          <Layers className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            <strong className="text-ds-on-surface">종단 평가:</strong>{" "}
            <strong>Answer Semantic Similarity</strong>는 생성된 답변을 정답 샘플과
            비교해, 검색기와 생성기가 <em>함께</em> 얼마나 잘 작동했는지를 측정합니다.
            부분 점수가 좋아도 합쳐 놓으면 무너지는 경우가 있어 반드시 함께 봅니다.
          </p>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-sm font-semibold text-ds-on-surface mb-1">RAGAS</p>
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            널리 쓰이는 RAG 평가 프레임워크입니다. 검색 적합성 · 생성 품질 · 충실성을
            측정하는 지표를 제공하며, <strong>사람이 라벨링한 데이터 없이도</strong>
            평가를 돌릴 수 있다는 점이 실무에서 특히 유용합니다.
          </p>
        </div>
      </section>

      {/* 8. Frameworks */}
      <section className="mb-16" id="frameworks">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          구현에 쓰이는 프레임워크
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          RAG 파이프라인은 직접 구현해도 되지만, 인제스천 · 검색 · 평가의 반복 작업을
          줄여 주는 오픈소스 파이썬 라이브러리들이 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              t: "LangChain",
              d: "RAG 구성 요소를 블록처럼 조립하고 서드파티 통합을 붙입니다. 에이전틱 RAG용 LangGraph, 평가용 LangSmith가 함께 제공됩니다.",
            },
            {
              t: "LlamaIndex",
              d: "외부 데이터를 LLM에 연결하는 데 특화된 도구 모음. 커넥터·데이터셋 저장소인 LlamaHub를 함께 제공합니다.",
            },
            {
              t: "DSPy",
              d: "LLM과 검색 모델(Retrieval Model)을 함께 최적화하는 모듈형 접근. 프롬프트를 손으로 다듬는 대신 프로그램적으로 개선합니다.",
            },
            {
              t: "Elysia",
              d: "프레임워크 설정 없이 곧바로 에이전틱 RAG를 시작해 볼 수 있는 도구. 프로토타이핑 단계에 적합합니다.",
            },
          ].map((s) => (
            <div key={s.t} className="bg-ds-surface-low p-6 rounded-2xl">
              <p className="text-sm font-semibold text-ds-on-surface mb-1">
                {s.t}
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Use cases */}
      <section className="mb-16" id="use-cases">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          활용 사례
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Newspaper,
              t: "실시간 정보 조회",
              d: "뉴스, 주가, 날씨처럼 시시각각 바뀌는 정보를 외부 소스에서 가져와 답변에 반영합니다.",
            },
            {
              icon: ThumbsUp,
              t: "콘텐츠 추천",
              d: "사용자의 선호와 행동 데이터를 검색해, 개인화된 추천 근거와 설명을 함께 생성합니다.",
            },
            {
              icon: Mail,
              t: "개인 AI 어시스턴트",
              d: "이메일 · 문서 · 메모를 지식 베이스로 삼아, 내 데이터에 대해 대화형으로 질문하고 답을 얻습니다.",
            },
          ].map((s) => (
            <div key={s.t} className="bg-ds-surface-low p-6 rounded-2xl">
              <s.icon className="w-5 h-5 text-ds-primary mb-3" />
              <p className="text-sm font-semibold text-ds-on-surface mb-1">
                {s.t}
              </p>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Glossary */}
      <section className="mb-16" id="glossary">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          핵심 용어 정리
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left">
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low rounded-tl-xl">
                  용어
                </th>
                <th className="p-3 font-bold text-ds-on-surface bg-ds-surface-low rounded-tr-xl">
                  뜻
                </th>
              </tr>
            </thead>
            <tbody className="text-ds-on-surface-variant align-top">
              {[
                [
                  "파라메트릭 지식 (Parametric knowledge)",
                  "모델이 학습 과정에서 가중치에 흡수한 지식.",
                ],
                [
                  "임베딩 (Embedding)",
                  "텍스트나 이미지를 의미가 담긴 다차원 벡터로 표현한 것.",
                ],
                [
                  "벡터화 (Vectorization)",
                  "원본 데이터를 임베딩으로 변환하는 과정.",
                ],
                [
                  "유사도 검색 (Similarity search)",
                  "벡터 간 거리를 계산해 질문과 가까운 데이터를 찾아내는 검색.",
                ],
                [
                  "청킹 (Chunking)",
                  "문서를 검색 가능한 단위로 나누는 작업.",
                ],
                [
                  "리랭킹 (Re-ranking)",
                  "검색된 결과를 전용 모델로 다시 정렬해 상위 결과의 품질을 높이는 단계.",
                ],
              ].map((row, ri) => (
                <tr key={ri}>
                  <td className="p-3 font-medium text-ds-on-surface bg-ds-surface-low/40 whitespace-nowrap">
                    {row[0]}
                  </td>
                  <td className="p-3 bg-ds-surface-low/20">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Source */}
      <section className="mb-16" id="source">
        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            Source
          </p>
          <a
            href="https://weaviate.io/blog/introduction-to-rag"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#61BD73]/10 flex items-center justify-center rounded-lg shrink-0">
              <Database className="w-5 h-5 text-[#61BD73]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                An Introduction to Retrieval Augmented Generation (RAG)
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
