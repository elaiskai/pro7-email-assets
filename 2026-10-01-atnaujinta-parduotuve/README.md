# PRO7, atnaujinta parduotuvė

Campaign for 2026-10-01, awaiting client approval and an actual Omnisend test. User confirmed NAUJA10 and 10% off ALL products on 2026-09-30. Hero now focuses on the updated PRO7.lt store and its launch offer; fragrances remain a secondary reminder. No expiry was supplied, so none is invented or advertised. Omnisend native unsubscribe footer must be enabled. Nothing has been sent.

Subject proposal: PRO7 atsinaujino. Užsuksite?
Preheader: Atnaujintos parduotuvės proga su kodu NAUJA10 viskam taikome 10 % nuolaidą.

Source: live pro7.lt homepage and three product pages, retrieved 2026-09-30, listed in sources.json. Homepage section is a genuine screenshot, not a fabricated UI or generated result. Product images are original official promotional images, unchanged. No price or scent-performance claims added. Current site supports selecting by problem. Aistė supplied the redesign context and 10% proposal. Previous campaign content was not supplied, so overlap still needs client review.

Brand DNA applied: Montserrat, #42BA7D, white background, practical Jūs copy, no personalization and no custom unsubscribe. Private brand profile is excluded from publishing.

Prior campaign: 2026-09-29-nauji-kvapai/newsletter.txt was inspected after fetching upstream. It already mentions the relaunch and NAUJA10 for all products. This follow-up prioritizes the store relaunch rather than repeating all nine fragrances. Latest user confirmation supersedes earlier draft-offer uncertainty.

## QA

HTML SHA256: d943eec76f938727bdf24192e8757edcac138839d7b907088528031e014b4f5a

Fresh full-page previews visually inspected at 600, 320, 390, 430 px, plus 320 px without head styles/font imports and 390 px dark preference. Readable copy, intact names, proportional imagery, associated image/CTA rows, no overflow, all CTA buttons >=44 px. Website screenshot is a supporting thumbnail; all essential claims and the actual CTA remain readable live HTML. Dark preference browser simulation does not verify forced inversion in an email client. Automated details in qa-results.json. Actual Omnisend/Gmail test not performed and still required before sending.

Rebuild: node build.mjs
QA: node qa.mjs, then inspect all six fresh previews and update visual signoff. Prepare downloads current official media and captures the live homepage; do not run if preserving the current artwork.
