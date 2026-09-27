# SoviCare — brand-rules.md
Edition 01 · to be attached alongside `brand.css`

`brand.css` holds the values. This file holds the rules the values cannot express.
Every rule below is taken from the SoviCare Brand Book, not added.

---

## How to use this file

Attach this together with `brand.css` to any request to build a new page,
screen or asset. Build only from the tokens and classes in `brand.css`.

- No hex value that is not in `brand.css`
- No typeface other than DM Serif Display and Inter
- No spacing value outside `--space-1` … `--space-8`
- No border-radius other than `--radius-round`, `--radius-card`, `--radius-none`
- Where a decision is missing, ask. Do not improvise it.

---

## Typography

- DM Serif Display never below 26px. Inter never above 26px. This is absolute.
- Inter weights 300–700 only.
- The highlight word is DM Serif italic, once per document, always alone on the
  surface, one per spread.
- The highlight is never used for emphasis inside body copy. Emphasis inside
  body copy is carried by weight, then colour, then highlight, then scale —
  in that order.
- One emphasis per paragraph. One highlight per page.
- Type never sits on a shape.
- Body copy never goes below 24px in film and presentation contexts.
- Nothing smaller than 4px anywhere.

## Colour

- Four brand colours: Deep Teal, Blue, Green, Yellow. They carry meaning.
- Mist, Paper, Clay, Coral, Slate are neutrals. They carry form, not meaning.
- Mist replaces white as the page. Paper is for cards.
- Yellow appears at most once per surface, and marks the result moment.
- Clay is the one neutral outside the core palette and never appears in
  product UI — warm posters only.
- Coral means out of range. It is never decorative.
- Block order runs Mist → Paper → Deep Teal. Never two dark blocks adjacent.
- Backgrounds behind the logo are always Paper, Mist or Deep Teal — never a
  brand colour.
- Mist body carries the form; one or two brand colours mark the part that
  carries the meaning.

## Geometry — the Quadrant Kit

- Six pieces: Square, Quarter, Half, Circle, Arch, Arc. Nothing else.
- Never an oval. Never a soft-cornered rectangle. Never a freehand spline.
- A piece arrives to frame, not to distract — always oriented toward the
  content, never away from it.
- Never a random scatter. Two pieces at most on a surface; a page of circles
  becomes a mood board.
- Always on the half-grid. 48px grid, quarter-unit minimum.
- Never crop a piece 90% and leave a sliver. Never half-on.
- Never place a kit piece behind small text.

## Wording

- Never a benefit adjective, a price, or a symptom.
- Always in this order: the human sentence, then the precise one.
- Sentences take a full stop. A headline is never a question.
- A number never appears bare — it always carries its unit and its range.
- Never summarise a result without displaying it.
- The product is never organised by symptom alone.
- CTA copy stays identical through the whole flow.
- Established lines: "Answers you can feel." · "Start with answers" ·
  "Symptoms are a hint. Labs are an answer."

## Buttons

Three, and only three:

| Class | Use |
|---|---|
| `.btn` | normal — the primary action |
| `.btn-outline` | secondary |
| `.btn-result` | the result moment only, never a general CTA |

All are fully round, 46px high, Inter 500 at 14px.

## Product

- Each product gets exactly two things of its own: a body colour and one piece
  from the kit. Nothing else changes — same wordmark, same layout, same label
  architecture.
- SoviCare itself has no product colour. The master brand is never coloured.
- Labels sit flat; the art occupies a reserved band along the foot, cut by the
  left and right edges.

## Imagery

- Never cover the face.
- Nothing is looked at alone — people appear in relation, not in isolation.

## Logo

- Never put the wordmark in a favicon.
- Logo backgrounds are always Paper, Mist or Deep Teal.
- The symbol's mass sits low — when optically centring, nudge it up 2%.

## Compliance and tone

- Assessment language is always visible where a claim could be read as
  diagnosis: "Assessment only. Not a diagnosis."
- A licensed provider is named as the party responsible for what happens next.
- This holds always, even when it costs the faster conversion.

## Landing-page specific prohibitions

- No benefit adjectives, no price, no symptom in headline or subhead.
- Yellow once, on the result moment.
- One serif highlight word on the entire page.
- Never two dark blocks adjacent.
- The assessment disclaimer appears above the fold.

---

## Edition 01.1 — approved rulings

Six conflicts between this file, the Master UX Specification and the assessment
wireframe were escalated and ruled on. The rulings below amend the rules above
and take precedence over them.

### 1. A headline is never a question — scoped

The rule governs **section headlines**. It does not govern question prompts.

In the Personal Fit Assessment the question itself **is** the headline of its
state. Never add a second headline above it. Helper copy appears only where
context is genuinely needed.

### 2. Symptoms in the hero — upheld and tightened

No symptom list in the hero headline or subhead. The hero stays broad and
premium, relevant to men experiencing age-related change without asking them to
self-diagnose. It carries two lines only:

    Men's longevity, made simple.
    Start with answers, not assumptions.

Specific symptoms enter immediately afterward, through the Assessment and the
Care Areas — never before.

### 3. Rest / Daily / Drive — demoted

The three product names are supporting wellness groupings, not primary
navigation. They live inside Daily Support / Supplements, Longevity Lifestyle,
and personalised recommendations. They never compete with the care-area
architecture.

### 4. One foundational layer

The Styleguide **becomes** Foundations. There is no second foundational system.
Existing approved Styleguide content is preserved; layout and grid, spacing,
photography, iconography, motion, voice and tone, and digital application rules
are added to it.

### 5. Serif budget — by moment, not by count

The display serif belongs to editorial moments: hero, andropause and education,
longevity lifestyle, final CTA. Never across functional UI.

The hero mixes faces on one line: *answers* takes the serif italic emphasis in
"Start with answers, not assumptions."

### 6. Yellow and dark sections — page budget

Yellow is a restrained accent: Quadrant geometry, small labels, selected
editorial detail, visual punctuation. Never a large section background. Never
the active state in the assessment — primary functional state stays teal and
blue.

The page runs light. Two to three deliberate Deep Teal anchor sections,
footer excluded: the personalised outcome reveal, Why SoviCare and clinical
credibility, and at most one further editorial anchor if page rhythm needs it.
The assessment itself stays light.

---

## Demo status of clinical content

Both questionnaire experiences in this system are **prototypes**, built to
demonstrate structure, interaction, progression, branching, microcopy, motion,
result states and clinician handoff.

Realistic illustrative medical questions are permitted where finally approved
wording does not yet exist. Every screen carrying them shows:

> DEMO ONLY — final wording, clinical logic and eligibility criteria require
> clinical/legal approval before production use.

Still prohibited, in demo as in production: invented contraindication rules,
diagnosis logic, eligibility thresholds, clinical statistics, success rates,
endorsements, certifications, approval badges, and any named prescription
medication presented as a recommendation.

Where a real system would branch on clinical criteria, the demo branches on a
plainly non-clinical answer choice and says so on the screen.
