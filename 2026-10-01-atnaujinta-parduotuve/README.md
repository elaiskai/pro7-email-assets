# PRO7, atnaujinta parduotuvė

Campaign for 2026-10-01, awaiting client approval and an actual Omnisend test. User confirmed NAUJA10 and 10% off ALL products on 2026-09-30. Layout rebuilt as a single storefront announcement: centered heading, genuine website view inside an HTML browser frame, short explanation, two benefits, one offer block and one primary CTA. Category and fragrance sections removed. No expiry was supplied, so none is invented or advertised. Omnisend native unsubscribe footer must be enabled. Nothing has been sent.

Subject proposal: PRO7 atsinaujino. Užsuksite?
Preheader: Atnaujintos parduotuvės proga su kodu NAUJA10 viskam taikome 10 % nuolaidą.

Source: live pro7.lt homepage and three product pages, retrieved 2026-09-30, listed in sources.json. Homepage section is a genuine screenshot, not a fabricated UI or generated result. Unused original product assets retained for recoverability but not referenced in delivered HTML. No price or scent-performance claims added. Current site supports selecting by problem. Aistė supplied the redesign context and 10% proposal. Previous campaign was inspected; the new email focuses exclusively on the storefront.

Brand DNA applied: Montserrat, #42BA7D, white background, practical Jūs copy, no personalization and no custom unsubscribe. Private brand profile is excluded from publishing.

Prior campaign: 2026-09-29-nauji-kvapai/newsletter.txt was inspected after fetching upstream. It already mentions the relaunch and NAUJA10 for all products. This follow-up is exclusively about the store relaunch and sitewide offer. Latest user confirmation supersedes earlier draft-offer uncertainty.

## QA

HTML SHA256: 8c1a36cb9b97e81a61a23d6be186be9746882b03c5062be3b00bfb105682d583

Fresh full-page previews visually inspected at 600, 320, 390, 430 px, plus 320 px without head styles/font imports and 390 px dark preference. Readable copy, intact names, proportional imagery, coherent reading order and one primary CTA, no overflow, all CTA buttons >=44 px. Website screenshot is a supporting thumbnail; all essential claims and the actual CTA remain readable live HTML. Dark preference browser simulation does not verify forced inversion in an email client. Automated details in qa-results.json. Actual Omnisend/Gmail test not performed and still required before sending.

Rebuild: node build.mjs
QA: node qa.mjs, then inspect all six fresh previews and update visual signoff. Prepare downloads current official media and captures the live homepage; do not run if preserving the current artwork.

## Fragrance offer addition

User supplied the 2 + 1 banner and requested inclusion. Added one secondary block below the main NAUJA10 offer, not a product catalogue. Original supplied image preserved without editing, including its original baked punctuation. New HTML copy and alt text contain no dashes. Conditions: buy two different fragrances of the same type, receive a third of the same type as a gift. Banner and secondary CTA link to the official fragrance category, checked 2026-09-30. Stacking with NAUJA10 was asked but remains unconfirmed: no combined saving or stacking claim is made. Clarify before sending. Earlier single-CTA QA description refers to prior layout; current layout has one primary green CTA and one secondary outlined CTA, both reviewed.
