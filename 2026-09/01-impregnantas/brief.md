# PRO7 NL1 - Grįžo tekstilės impregnantas

**Intent:** launch/seasonal (grįžo prekė, be nuolaidos)
**Segmentai:** S1 Aktyvūs (openers 90d) + S2 Pirkėjai (buyers 12m). nonSubscribed EXCLUDE.
**Statusas:** paruošta review'ui (mano versija palyginimui su Codex). Laukia Luko approval + Omnisend push.

## Subject / preheader
- SUBJECT_A: Grįžo lauktas tekstilės impregnantas (37 simb.)
- SUBJECT_B: Ar Jūsų tekstilė pasiruošusi rudeniui? (38 simb.)
- PREHEADER: Apsaugokite batus, drabužius, baldus ir automobilio saloną prieš drėgnąjį sezoną.

## Produktas (verified pro7.lt)
PRO7 Textile Nano Coating 200 ml - 23,00 EUR - InStock (grįžo).
URL: https://www.pro7.lt/svaros-prekes/1437-pro7-textile-nano-coating-200-ml-tekstiles-impregnantas

## Failai
- copy.txt - copy per lt_copy.py
- full-email.html - hand-craft mobile-first (bold-poppy struktūra, PRO7 žalia #3a9c1c + navy #0f1b2d)
- assets/ - hero + 3 use-case + product (gen_image img-to-img, realus buteliukas)

## Nuorodos
- Preview (Pages): https://elaiskai.github.io/email-client-assets/pro7/nl1-impregnantas.html
- jsDelivr assets: https://cdn.jsdelivr.net/gh/elaiskai/email-client-assets@main/pro7/2026-09/01-impregnantas/

## QA
- Diakritikai OK (UTF-8), be em-dash, be logo, be footer (Omnisend wrap'ina)
- Visi 5 img URL = 200
- Nuolaidos nėra (akcentas = grįžo)
