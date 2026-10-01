# SoviCare · Interaction & Motion Showcase

This folder is an additive gallery for the existing `aviinbar5/01.09-sovicare-brand-hub` repository. Its `index.html` links to the interactive and animated Brand Hub pages already in the repository and includes the local Codex prototypes under `demos/`. It does not replace the source pages.

## Source map

| Gallery item | Source | Repository path | What to inspect |
| --- | --- | --- | --- |
| Better Intimacy | Codex | `interactive-showcase/demos/better-intimacy.html` | Page states, CTA timing, sticky bar |
| Longevity | Codex | `interactive-showcase/demos/longevity.html` | Product tabs, comparison, steps, CTA timing |
| Motion Lab | Codex | `interactive-showcase/demos/motion-lab.html` | Motion examples and interaction timing |
| Homepage V3 | Codex | `interactive-showcase/demos/home-v3/index.html` | Category chapters, steps, testimonials |
| Homepage interaction states | Codex | `interactive-showcase/demos/home-v3/interaction-states.html` | Default, hover and selection |
| How It Works | Codex | `interactive-showcase/demos/how-it-works.html` | Standalone clickable page concept |
| Personal Fit Assessment | Existing Brand Hub / Claude | `assessment.html` | Branching six-question flow |
| Brand Film | Existing Brand Hub / Claude | `brand-film.html` | Timed animated slides |
| Homepage Desktop V1 | Existing Brand Hub / Claude | `homepage-desktop-v1.html` | Assembled homepage prototype |
| Components | Existing Brand Hub / Claude | `components.html` | UI states |
| Funnel, Portal, Admin, Support screens | Existing Brand Hub / Claude | `screens-funnel.html`, `screens-portal.html`, `screens-admin.html`, `screens-support.html` | Clickable screen states |
| Homepage section library, UX patterns | Existing Brand Hub / Claude | `homepage-section-library.html`, `ux-patterns.html` | Visual references, not live flows |
| Review center | Codex | `interactive-showcase/review/review-center.html` | Cross-page review catalogue |
| Homepage V1 and V2, Longevity source, Better Intimacy source | Codex | `interactive-showcase/demos/home-v1/`, `home-v2/`, `longevity-concept/`, `better-intimacy-source/` | Earlier directions, marked archive |

The Claude/Brand Hub entries link to the canonical files in the current repository. They are not duplicated in this addition. If there are other Claude artifacts outside this repository, their source files must be added separately before they can be included.

## Review and behavior notes

- Primary action buttons on the two category page prototypes are 46 px high with the current explicitly requested color treatment. The Brand Hub may still show an earlier rule.
- Their sticky bar appears after the Hero CTA leaves the viewport and hides when the final CTA enters the viewport. It also hides for the mobile menu or assessment dialog. Test desktop and mobile.
- Homepage V3 is the current concept among the three local homepage versions; V1 and V2 are retained for comparison.
- Motion respects `prefers-reduced-motion` where implemented in the new prototypes. Older repository pages remain their original versions.
- These are prototypes and visual references. Review copy, imagery, medical claims, legal text, and integration behavior before production.
- `Preview here` uses an iframe; `Open prototype` is the reliable full-page view when a prototype has its own viewport or navigation behavior.

## עברית

התיקייה מוסיפה ל־Brand Hub עמוד תצוגה מרכזי. תוצרי קלוד שכבר נמצאים במאגר מקושרים מהמיקום הקיים שלהם; תוצרי Codex מצורפים בתיקיות `demos` ו־`review`. גרסאות מוקדמות מסומנות כארכיון. התוצרים הם הדגמות לבחינה ולהעברת החלטות, ולא קבצי אתר מאושרים לפרסום.

יש לחלץ את חבילת ה־ZIP אל שורש המאגר הקיים, תוך שמירה על מבנה התיקיות. הקובץ `index.html` בשורש החבילה מחליף את עמוד הכניסה הנוכחי רק כדי להוסיף אליו כרטיס המקשר אל `interactive-showcase/index.html`. יתר קובצי ה־Brand Hub נשארים במקומם.
