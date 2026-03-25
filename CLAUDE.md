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
