# Fourier Website Agent Guide

이 저장소는 `fourier.co.kr` 개인사업자 홈페이지를 운영하기 위한 Vite + React 프로젝트다. Codex multi agent 작업에서는 사이트의 신뢰도, 문의 전환, 다국어 품질, 배포 안정성을 우선한다.

## Project Snapshot

- Domain: `fourier.co.kr`
- Stack: Vite, React 19, React Router, lucide-react, EmailJS
- Entry points: `src/main.jsx`, `src/App.jsx`
- Main pages: `src/pages/Home.jsx`, `src/pages/History.jsx`, `src/pages/Apps.jsx`, `src/pages/Links.jsx`, `src/pages/PrivacyPolicy.jsx`
- Content source: `src/LanguageContext.jsx` contains Korean and English copy dictionaries
- Styling: most global styles live in `src/index.css`; several pages still use inline styles
- Static/public assets: `public/`, including `CNAME`, `robots.txt`, `sitemap.xml`, rank screenshots, and app policy routes

## Runbook

- Install dependencies only when needed: `npm install`
- Local development: `npm run dev`
- Production build: `npm run build`
- Lint: `npm run lint`
- Preview build: `npm run preview`
- Deploy target: GitHub Pages via `npm run deploy`, publishing `dist` to `gh-pages`

Before finishing substantive UI work, run at least `npm run build`. Run `npm run lint` when touching React or CSS logic, and visually inspect desktop and mobile layouts when changing page structure.

## Site Direction

Fourier Softwares should read as a credible B2B software agency, not a generic personal portfolio. Favor concise, specific proof over broad claims.

Primary positioning:

- Agentic AI platform construction
- Large-scale data pipelines and legacy data conversion
- Full-stack web/app development
- Flutter mobile app development
- Game development and engine literacy as supporting credibility

Tone:

- Korean: professional, direct, business-friendly, technically credible
- English: native-sounding B2B copy, not literal Korean translation
- Avoid inflated claims that cannot be supported by the public page
- Preserve company/legal details exactly unless the owner provides an update

## Implementation Rules

- Keep React changes close to existing patterns unless a refactor is explicitly part of the task.
- When adding visible text, update both `ko` and `en` dictionaries in `src/LanguageContext.jsx`.
- Keep navigation routes, `public/sitemap.xml`, and any canonical URLs in sync.
- Be careful with EmailJS IDs and public keys in `src/pages/Home.jsx`; do not rotate or expose new secrets in chat.
- Use lucide-react icons already available in the project before adding new icon dependencies.
- Prefer shared CSS classes for repeated UI patterns, but do not do a broad inline-style cleanup during unrelated content edits.
- Static assets referenced from React should live in `public/` when they need root-relative URLs.

## Known Follow-up Checks

- `public/sitemap.xml` lists `/about`, while the app currently uses `/` for the about/home page. SEO work should reconcile this by adding a route or updating the sitemap.
- `README.md` is still the default Vite README. Documentation work should replace it with Fourier-specific setup and deployment notes.
- `src/App.css` contains leftover template styles. UI cleanup work can remove it after confirming no imports depend on it.

## Multi Agent Workflow

Use a lead agent to keep the task coherent. Delegate only independent slices:

- `fourier-content-strategist`: copywriting, bilingual messaging, service section structure, CTA wording
- `fourier-react-implementer`: React page/component/CSS implementation
- `fourier-visual-qa`: rendered UI review, responsive checks, accessibility and interaction smoke tests
- `fourier-seo-release`: sitemap, robots, metadata, build/deploy checks, release notes

Suggested sequence:

1. Lead clarifies the goal and maps affected files.
2. Content strategist drafts or edits Korean/English copy.
3. React implementer applies the UI/content changes.
4. Visual QA verifies the rendered site at desktop and mobile widths.
5. SEO/release checks build, metadata, route consistency, and deployment readiness.

Agents must not overwrite each other's files blindly. If parallel implementation is needed, assign disjoint files or responsibilities first.
