# SoviCare / Reusable category page structure

Longevity is the first category instance. Keep the **page architecture and 1288 px desktop content grid** aligned with the new homepage. Future categories can reuse the same components and responsive layout while changing their own copy, imagery, product data, accent palette and geometric treatment.

| Order | Section role | Replace per category | Keep consistent |
| --- | --- | --- | --- |
| 01 | Hero and main proposition | Eyebrow, headline, lead, portrait, shape accent | Navigation, CTA geometry, content grid, image treatment |
| 02 | Visitor starting point | Three concern labels, short descriptions, click reveal copy | Three editorial choices; hover and click are distinct states |
| 03 | Why this care area matters | Main argument, proof / educational copy, visual cue | One strong statement followed by supporting explanation |
| 04 | Care options | Number of options, names, formats, details, visual placeholders | One focused option at a time, comparison on demand, provider-review framing |
| 05 | Care path | Category-specific steps and imagery | Clear sequence and human review in the journey |
| 06 | FAQ and assessment entry | Questions, approved answers, closing message | Accordion behavior, consistent CTA and legal status |

## Category tokens

The page uses inherited CSS variables on `body[data-category="longevity"]`. A duplicate can set these values for another category without changing the layout:

```css
body[data-category="another-category"] {
  --category-accent: /* theme/dominant */;
  --category-accent-deep: /* theme/dominant-deep */;
  --category-secondary: /* theme/secondary */;
  --category-support: /* theme/support */;
  --category-surface: /* theme/wash */;
  --category-accent-soft: /* theme/wash */;
  --category-art-1: /* first option art field */;
  --category-art-2: /* second option art field */;
  --category-art-3: /* third option art field */;
}
```

In Figma, set the page frame to the approved Category theme mode: Longevity (Green / Yellow / Blue), Better Intimacy (Blue / Pink / Coral), or Hair Loss (Deep Teal / Coral / Green). These mode values come from **Colour system v2 · 30.09.2026 · approved** in Foundations. Deep Teal, Mist, Paper, typography, radii and spacing remain shared brand foundations. Portraits and category art should follow the Brand Hub image treatment. Content lengths should be edited to suit the designed line breaks and responsive grid, rather than filling a fixed word count. Medical, eligibility and legal claims require approval for each category.

For Figma handoff, create a **Category / Base** page or component area, plus a **Category / Longevity** instance. Put each interaction board beside its corresponding section, following `INTERACTIONS.md`. The boards describe hover, click, animation duration and mobile behavior without appearing in the customer-facing frame.
