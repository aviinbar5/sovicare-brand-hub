# SoviCare / Category page interaction handoff

This file accompanies the Longevity concept. In Figma, place a compact state board beside each corresponding section: **Default → Hover → Click / selected**, with a short timing note and a prototype connection. Keep these boards outside the customer-facing page frames. Use the same handoff convention on every category page.

## Global rules

- Brand motion vocabulary: **Pivot, Wipe, Rise, Shift**. One intentional entrance per section; no continuous decorative loops.
- Common easing: `cubic-bezier(.22,1,.36,1)`. Hover transitions: 180–250 ms. Selection/content transitions: 320–420 ms. Geometry entrance: up to 580 ms.
- Primary CTA height: **46 px** on desktop and mobile. Preserve internal spacing and vertical text alignment within each viewport. Default deep teal on light surfaces and white on dark surfaces; hover yellow with deep-teal text.
- Keyboard focus is visible. Mobile taps use the click state; hover styling must not persist on touch. With reduced motion, show final states immediately.

| Section and element | Default | Hover | Click / interaction | Motion and Figma states |
| --- | --- | --- | --- | --- |
| Header navigation | Text on white, no active underline | Link color shifts to category accent | Scroll to section; mobile menu closes | 180 ms color. Show desktop link default/hover and mobile menu closed/open. |
| Hero entrance | Text and portrait visible; quarter and disc unbuilt | CTA turns yellow; secondary link opens spacing slightly | Primary CTA scrolls to starting point | Copy rises 18 px and fades in over 480 ms. Quarter builds once over 580 ms; disc follows after 120 ms. Show initial and settled states. |
| **Energy / Recovery / Focus cards** | Light surface, dark copy, category-accent shape | **Entire card becomes deep teal** with white copy; shape turns yellow; arrow shifts 3 px diagonally | **Card returns to light on mouse leave.** Click reveals an extra `LOOK CLOSER` line inside the selected card and updates the editorial response below. Only one is expanded. Selection remains legible by a 3 px accent rule at the card bottom. The matching product panel is prepared further down the page. Clicking again collapses it. | Background/text/arrow: 180–250 ms. Extra copy rises 8 px and expands over 380 ms. Energy and Focus quarters pivot 90° on hover over 500 ms. **Recovery uses a brand arch**, rising 10 px and stretching vertically to 108% over 420 ms, then settling on leave. Show Default, Hover, Selected after mouse leave, and Selected+Hover as separate states. |
| Product option switcher | NAD+ shown first; one vertical tab active | Inactive tab gets a light mist fill | Click a tab to swap product name, format, details, vessel label, color field and active tab. Arrow keys also switch tabs. | Active tab shifts to deep teal immediately; art color and geometry shift over 380–500 ms. Show all three selected states and one tab hover. |
| Compare all three | Comparison closed | Underline and plus remain visible | Expands a comparison table; second click closes it | Panel rises 10 px while fading in over 320 ms. Show Closed and Open. On mobile, the table scrolls horizontally inside its container. |
| Four-step path / number waypoints | Four outlined 44 px circles, connected by a quiet line; no step appears preselected | **Only the hovered number** rises 3 px and changes to Deep Teal with a yellow number. A 28 px brand quarter builds beside it in green | Clicking a number turns it yellow with Deep Teal text and reveals one short explanatory paragraph under that step. Only one paragraph remains open. Clicking it again closes it. Touch uses click without sticky hover | Circle color: 240 ms. Quarter scales and pivots from the number over 460 ms; it reverses on leave. Detail rises 8 px and fades in over 360 ms. Show four numbered states: Default, Hover, Selected after leave, Selected+Hover. Show entrance of portrait/quarter separately. |
| FAQ accordion | First answer open initially | Pointer/focus state on question row | Click opens selected answer and closes the previous one | Answer rises 10 px while fading over 240 ms. Show closed and open states, including plus-to-minus icon. |
| Assessment entry dialog | Closed | CTA turns yellow | Opens a pre-assessment information panel; close button, Escape or backdrop closes it | Panel rises 10 px and fades over 260 ms. This concept does not submit personal information. Show closed/open and keyboard focus. |

## Recovery card detail

The arch is an intentional shape choice. Its upward motion refers to recovery without adding an unrelated motif. It stays clear of the text, has the same visual weight as the neighboring quarters, and resets when the pointer leaves. The **dark card is a hover treatment**, while **the extra text is the persistent click treatment**. These must remain separate in implementation and in the Figma state board.

## Colour system v2

Use the approved **Colour system v2 · 30.09.2026** in 02.00 — Foundations. Set the containing category page frame to the **Longevity** mode of the **Category theme** collection. Bind category shapes and bands to theme/dominant, secondary accents to theme/secondary, support details to theme/support, washes to theme/wash, and text-safe accent copy to the appropriate deep token. Small body text remains Deep Teal or Slate on Paper/Mist; avoid small green or yellow text on white. The same frame and state boards can be switched to Better Intimacy or Hair Loss by changing the mode and the category content/leading shape.


## Sticky action bar · updated 30 Sep 2026
- Hidden while the Hero assessment CTA remains on screen. Once its bottom has fully left the top of the viewport, the bar rises over 220 ms. This is evaluated again when scrolling upward.
- Hidden as soon as the final section CTA enters the viewport. It returns only if that CTA leaves view while the Hero CTA is still above the viewport.
- Hidden while the mobile menu or assessment dialog is open. Bottom padding includes the device safe area.
- The bar button uses the approved category CTA color and exactly the same 46 px height, padding and vertically centered label as the other page CTAs. Apply this separately at desktop and mobile breakpoints.
- Respect reduced motion: update visibility without animation.
