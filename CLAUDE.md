# claude-code-ai-docs

@AGENTS.md

## 기술 스택

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Icons**: lucide-react, react-icons
- **Validation**: Zod
- **State**: Zustand
- **Date**: date-fns
- **Test**: Vitest + Testing Library
- **Deploy**: Vercel
- **CI/CD**: GitHub Actions
- **Env**: .env.local

## 프로젝트 구조

```
src/
├── app/              # App Router (페이지, API 라우트)
├── components/       # 공유 컴포넌트
│   ├── layout/       # 레이아웃 컴포넌트 (Header, Sidebar 등)
│   └── ui/           # shadcn/ui 컴포넌트
├── hooks/            # 커스텀 훅
├── lib/              # 유틸리티
│   └── validations/  # Zod 스키마
├── services/         # 비즈니스 로직 계층
├── stores/           # Zustand 스토어
└── types/            # TypeScript 타입 정의
```

## 핵심 규칙

### 테스트 규칙

- 테스트 파일은 루트의 `tests/` 폴더에 작성한다 (src 내부에 두지 않는다)
- 테스트 실행: `npm run test` (단일 실행) / `npm run test:watch` (감시 모드)
- 파일명 패턴: `*.test.ts` 또는 `*.test.tsx`

### 유효성 검사

- API 입력값 검증은 **Zod** 스키마를 사용한다
- 스키마는 `src/lib/validations/`에 정의한다

### 타입 규칙

- `any` 타입을 사용하지 않는다. `unknown`, 구체적인 타입, 또는 제네릭을 사용한다.
- `catch (e)` → `catch (e: unknown)`, 콜백 파라미터에도 명시적 타입을 부여한다.

### 날짜 처리

- 날짜 관련 작업은 **date-fns**를 사용한다
- `moment.js`, `dayjs` 등 다른 날짜 라이브러리를 사용하지 않는다

### 환경변수

- 환경변수는 `.env.local` 파일에 저장한다 (`.env` 파일이 아님)
- `.env.example`은 팀원 공유용 템플릿으로 git에 커밋한다
- `.env.local`은 절대 git에 커밋하지 않는다

### 디자인 시스템 ("Digital Curator")

- 디자인 참고 문서: `references/design/lumina_docs/DESIGN.md`
- **"No-Line" 규칙**: 섹션 구분에 1px 보더 사용 금지, 배경색 전환으로 경계 표현
- **표면 계층**: background (#f7f9fb) → sidebar (#f0f4f7) → content (#ffffff) → hover (#e1e9ee)
- **Primary**: #005ac2 (gradient: 135deg #005ac2 → #004fab)
- **타이포그래피**: Inter 폰트, 순수 검정(#000) 사용 금지, on-surface (#2a3439) / on-surface-variant (#566166) 사용
- **Glassmorphism**: 플로팅 요소에 bg-white/80 + backdrop-blur-md 적용
- **Ghost Border**: 코드 블록 등 고밀도 컴포넌트에 outline-variant (#a9b4b9) 15% opacity
- **사이드바 활성 상태**: 좌측 2px primary 보더 + 텍스트 primary 색상
- **콜아웃**: 4px 좌측 보더 + container 색상 30% opacity 배경
- **간격**: 주요 섹션 간 py-16 ~ py-20
- **하단 네비게이션 금지**: 페이지 하단의 이전/다음 FooterNav를 사용하지 않는다

### 출처(Source) 표기 규칙

- **상단 출처 금지**: 페이지 상단(제목/설명 아래)에 출처 링크를 배치하지 않는다
- **하단 출처 필수**: 모든 문서 페이지의 마지막 섹션으로 `{/* Source */}` 블록을 배치한다
- **하단 출처 UI 패턴**:
  ```tsx
  {/* Source */}
  <section className="mb-16" id="source">
    <div className="bg-ds-surface-low p-6 rounded-2xl">
      <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
        Source
      </p>
      <a href="..." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
        <div className="w-10 h-10 bg-[icon-color]/10 flex items-center justify-center rounded-lg shrink-0">
          {/* 플랫폼별 아이콘 (YouTube: 빨간색, GitHub: 검정, 블로그: 브랜드색) */}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">제목</p>
          <p className="text-xs text-ds-on-surface-variant">저자 | 도메인</p>
        </div>
      </a>
    </div>
  </section>
  ```
- 출처가 여러 개일 경우 `<div className="space-y-3">` 안에 `<a>` 태그를 나열한다

### 아이콘 사용 규칙

- **아이콘 남발 금지**: 아이콘은 의미 전달에 꼭 필요한 곳에만 사용한다
- **사이드바 네비게이션**: 아이콘 없이 텍스트만 표시한다
- **섹션 타이틀**: `<h2>` 앞에 아이콘을 붙이지 않는다 (아이콘 박스 + h2 조합 금지)
- **출처 영역**: 좌측 플랫폼 아이콘만 사용하고, 우측 ExternalLink 아이콘은 붙이지 않는다
- **허용되는 아이콘 사용처**: 출처 플랫폼 로고, 콜아웃 내부 강조, 카드/리스트 아이템의 시각적 구분
- 아이콘 라이브러리는 lucide-react를 사용한다 (Material Symbols 사용 금지)

### 컴포넌트 규칙

- 레이아웃 컴포넌트는 `src/components/layout/`에 작성한다
- 네비게이션 데이터는 `src/lib/navigation.ts`에서 중앙 관리한다

### 배포

- Vercel에 배포한다. `vercel.json`은 기본적으로 필요 없다 (Next.js 자동 감지).
- 환경변수는 Vercel 대시보드에서 설정한다.
- push → GitHub Actions CI 자동 실행 → Vercel 자동 배포

## 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 시작 |
| `npm run build` | 프로덕션 빌드 |
| `npm run lint` | ESLint 실행 |
| `npm run test` | 테스트 실행 |
| `npm run test:watch` | 테스트 감시 모드 |
