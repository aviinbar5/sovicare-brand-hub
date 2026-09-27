# SoviCare Brand Hub — Design & UX Review, Homepage V1

**Current version: Meeting Review V1 — updated 27.09.2026.** Live at https://aviinbar5.github.io/sovicare-brand-hub/ — this is the only live copy; older versions exist only in Git history.

**PROTOTYPE — NOT FOR PRODUCTION.** Meeting / review snapshot of the frozen project state.

Static site. No build step, no dependencies, no server. Every file is plain HTML that opens in a browser.

## Deploy to GitHub Pages

1. Upload the **contents of this folder** (not the folder itself) to the root of `sovicare-brand-hub`.
2. Settings → Pages → Source: **Deploy from a branch**, Branch: `main`, Folder: `/ (root)`.
3. The site goes live at `https://<user>.github.io/sovicare-brand-hub/` and opens the Site Index.

All paths are relative, so the site works unchanged from any repository subpath.
`.nojekyll` is present so GitHub Pages serves every file as-is.

## Pages

| File | Page | Status |
|---|---|---|
| `index.html` | Site Index — the front door | Front door |
| `homepage-desktop-v1.html` | Full Homepage — Desktop V1 | **Ready for review** |
| `homepage-v2.html` | Homepage V2 — desktop + mobile | For review |
| `better-intimacy.html` | Site page — Better Intimacy | For review |
| `better-intimacy-b.html` | Better Intimacy — alternate | For review |
| `longevity.html` | Site page — Longevity | For review |
| `how-it-works.html` | Site page — How It Works | For review |
| `faq.html` | Site page — FAQ | For review |
| `contact.html` | Site page — Contact | For review |
| `telehealth-notice.html` | Site page — Telehealth Notice | For review · legal copy pending |
| `terms.html` | Site page — Terms of Service | For review · legal copy pending |
| `homepage-ux-blueprint.html` | Homepage UX Blueprint | Approved |
| `homepage-section-library.html` | Homepage Section Library — 16 sections, 46 variants | Approved |
| `assessment.html` | Personal Fit Assessment (standalone) | Working prototype |
| `foundations.html` | Foundations — colour, type, grid, motion, voice | Approved |
| `components.html` | Components — every part in every state | Approved |
| `ux-patterns.html` | UX Patterns — questionnaire behaviour | Approved |
| `brand-book.html` | Brand Book — the reference spine | Edition 01 |
| `logo.html` | Logo construction and lockups | Edition 01 |
| `brand-film.html` | Brand Film — animated mood slides | Edition 01 |
| `social-channels.html` | Social Channels | Edition 01 |
| `screens-funnel.html` | Product screens — funnel | Reference |
| `screens-portal.html` | Product screens — member portal | Reference |
| `screens-admin.html` | Product screens — clinical admin | Reference |
| `screens-support.html` | Product screens — support | Reference |

## Other files

- `assets/people/01–09.png` — portrait photography (placeholders pending a licensed set)
- `support.js` — page runtime, required by every page
- `download-chips.js` — per-section PNG export buttons
- `image-slot.js` — drag-and-drop image placeholders
- `brand.css`, `brand-rules.md` — source of truth for the design system, unchanged

## Known limitations in this snapshot

- Desktop only. The 390px mobile pass is the next phase.
- "Continue to eligibility" on the homepage outcome is intentionally inert — the Clinical Eligibility Questionnaire is not built yet.
- All medical and legal content is DEMO ONLY and requires clinical/legal approval before production use.
- Clinician names, credentials and photography are placeholders.
