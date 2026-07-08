import { Breadcrumb } from "@/components/layout/breadcrumb";

import { ExternalLink, Download, FileText, BookA } from "lucide-react";

const PDF_URL = "https://cdn.tensemovement.com/data/ai/ai-key-terms.pdf";

export default function AIKeyTermsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "AI", href: "/ai" },
          { label: "AI 시대 핵심용어집" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        AI 시대 핵심용어집
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-10">
        AI 시대를 이해하기 위해 반드시 알아야 할 핵심 개념과 용어를 한 권으로
        정리한 문서입니다. 아래에서 문서를 바로 열람하거나, 새 탭에서 열고
        내려받아 볼 수 있습니다.
      </p>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <a
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ds-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <ExternalLink className="w-4 h-4" />
          새 탭에서 열기
        </a>
        <a
          href={PDF_URL}
          download
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ds-surface-low text-ds-on-surface text-sm font-semibold hover:bg-ds-surface-high transition-colors"
        >
          <Download className="w-4 h-4" />
          PDF 다운로드
        </a>
      </div>

      {/* PDF Viewer */}
      <section className="mb-16" id="viewer">
        <div className="rounded-2xl overflow-hidden bg-ds-surface-low outline outline-1 outline-ds-outline-variant/15">
          <iframe
            src={`${PDF_URL}#view=FitH`}
            title="AI 시대 핵심용어집"
            className="w-full h-[80vh] min-h-[560px] border-0"
          />
        </div>
        <p className="text-xs text-ds-on-surface-variant mt-3 flex items-center gap-2">
          <FileText className="w-3.5 h-3.5 shrink-0" />
          문서가 보이지 않는다면 브라우저의 PDF 미리보기가 제한된 것일 수
          있습니다. 위의{" "}
          <span className="font-semibold text-ds-on-surface">새 탭에서 열기</span>
          {" "}버튼을 이용해 주세요.
        </p>
      </section>

      {/* Source */}
      <section className="mb-16" id="source">
        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            Source
          </p>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#e2483d]/10 flex items-center justify-center rounded-lg shrink-0">
              <BookA className="w-5 h-5 text-[#e2483d]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                AI 시대 핵심용어집
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                PDF 문서 | cdn.tensemovement.com
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
