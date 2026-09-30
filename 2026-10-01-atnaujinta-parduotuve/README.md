# PRO7, atnaujinta parduotuvė

Draft for 2026-10-01. NOT READY TO SEND. The 10% offer block is explicitly a draft: code, expiry, eligibility and continued validity are unconfirmed. Do not import/send until replaced and retested. Omnisend native unsubscribe footer must be enabled.

Subject proposal: PRO7 atsinaujino. Užsuksite?
Preheader: Lengviau rasti priemones namams ir naujieji automobilio kvapai.

Source: live pro7.lt homepage and three product pages, retrieved 2026-09-30, listed in sources.json. Homepage section is a genuine screenshot, not a fabricated UI or generated result. Product images are original official promotional images, unchanged. No price or scent-performance claims added. Current site supports selecting by problem. Aistė supplied the redesign context and 10% proposal. Previous campaign content was not supplied, so overlap still needs client review.

Brand DNA applied: Montserrat, #42BA7D, white background, practical Jūs copy, no personalization and no custom unsubscribe. Private brand profile is excluded from publishing.

## QA

HTML SHA256: 1d57163dc6b18b80acc3f8b3a4a08c8a31f9327057daf39bbaf1ab29713dd656

Fresh full-page previews visually inspected at 600, 320, 390, 430 px, plus 320 px without head styles/font imports and 390 px dark preference. Readable copy, intact names, proportional imagery, associated image/CTA rows, no overflow, all CTA buttons >=44 px. Website screenshot is a supporting thumbnail; all essential claims and the actual CTA remain readable live HTML. Dark preference browser simulation does not verify forced inversion in an email client. Automated details in qa-results.json. Actual Omnisend/Gmail test not performed and still required before sending.

Rebuild: node build.mjs
QA: node qa.mjs, then inspect all six fresh previews and update visual signoff. Prepare downloads current official media and captures the live homepage; do not run if preserving the current artwork.
