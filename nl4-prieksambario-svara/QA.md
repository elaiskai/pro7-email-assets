# Publication QA, 2026 09 17

Delivered omnisend.html SHA256:
3423cc070815e90c4a2be9cab6ddcfaf26fb70f28fce8068492dfd4f5991e26b

Delivered omnisend-styles.css SHA256:
8ab785cf7cea39f3f2d4e78e381bcfd0ab2cb9b14fe11578d6d62626a0c60acd

Automated results: qa-results.json. Fresh renders from the exact delivered HTML. Before publication only public image transport was intercepted to serve identical local assets. No HTML substitutions in the tested fragment.

## Visual review completed before publication

Inspected every part of desktop 600 px, mobile 320 px, 390 px, 430 px, 320 px with all head styles/font imports absent, and dark 390 px. Files: previews/*-inspection.png. Each sheet is the complete fresh render split into two adjacent vertical halves for inspection, not the actual email layout.

All six pass: readable paragraph widths, intact product names, complete headings, sensible line wraps, correct before/after order, natural uncropped photo proportions, consistent horizontal spacing, no empty layout columns. One-column product blocks retain their own photo, name, price and CTA in order. Full-width CTA anchors are 52 px high. The 320 px body text area is 272 px wide. No horizontal overflow or missing images. White logo panel stays visible in dark simulation. Arial fallback without head styles is readable.

Proof pair visually checked against the official SUPER CLEANER gallery. Monika quote belongs to standard FLOOR CLEANER, not CITRUS. Prices checked in live product HTML. No fabricated image experiments, generated photos, personalization placeholder or custom unsubscribe. Visible text and alt attributes contain no dash punctuation.

Browser QA complete for the hashes above. Real Omnisend sanitization, Gmail/Outlook rendering and coupon redemption remain unverified. Request a fresh platform test screenshot before actual sending, given historical client rendering issues. Nothing has been sent or edited in Omnisend.

Do not reuse this approval after editing HTML, CSS or assets. Regenerate and visually inspect fresh previews first.
