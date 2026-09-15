# Review QA

Publication check, 2026-09-15: approved hero v4, NL2-style footer, 10 visible images, four before/after pairs. Seven local cases rerun. Public asset commit aab87f39e6e31a00540e6d946c9a26675ca6fff0. All ten exported image URLs return HTTP 200 with image content types. Exported top/bottom fragments render in 320px and 600px hosts; no preview-code placeholder or unsubscribe in exports, styles do not affect outside content. See qa-public-results.json. Original product PNG retained; delivery PNG reduced proportionally from 4.2 MB to 481 KB. No sending or real coupon redemption performed. Earlier checks below are historical.

2026-09-15. Seven browser cases pass: desktop, 390px, 320px, dark, 320px host inside 1200px editor viewport, no stylesheet, 800px host. Results in qa-results.json.

Maximum rendered width 600px. Centered inside hosts. No horizontal page overflow, broken images, distorted image ratios, personalization fields or dash punctuation in visible copy and alt text. Primary buttons 52px high. Montserrat available in the normal render, Arial fallback retained. Full desktop and dark screenshots visually reviewed. Original product and before/after photos are not AI retouched.

All four navigation destinations returned HTTP 200. Product page returned HTTP 200 and offers 1 l at 32.21 EUR. No stock promise included in copy.

Hero generated using built-in imagegen from supplied layout reference, actual product, official logo. Lithuanian headline and checklist text visually inspected. Generated hero photography is not represented as a product experiment.

Not tested: real inbox rendering in Gmail, Apple Mail, Outlook; actual Omnisend sanitization; unique-code assignment and checkout redemption. Preview coupon is intentionally not functional. No campaign sent, no live Omnisend changes, no public asset upload. Final export and send remain pending offer configuration and approval.

Revision 2: all seven cases rerun successfully with the roomier hero v2 and rewritten introduction. Eleven images load, including four complete before/after pairs. Toilet, shower glass and bathroom tap added from the same product gallery. Updated mobile screenshot visually reviewed; comparison columns stay paired with equal widths. JPG and all preview screenshots regenerated. Edit used built-in imagegen, exact prompt in hero-prompt-v2.txt.
