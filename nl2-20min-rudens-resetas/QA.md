# NL2 patikros rezultatai

Patikrinta 2026-09-08. Importuoti `omnisend.html`, vietiniam redagavimui naudoti `index.html`.

## Eksportas

- Paveikslėlių commit: `5192498d5fea85a1396dcabc810df333ac065828`.
- 12 paveikslėlių nuorodų, visos HTTPS, visos HTTP 200 ir Content-Type image/jpeg arba image/png.
- Bendras paveikslėlių dydis 924 496 baitai.
- HTML dydis mažesnis nei 26 KB prieš Omnisend apdorojimą.
- 12 unikalių PRO7 nuorodų, visos HTTP 200. Patikrintos ir puslapių h1 antraštės.
- Produktų ID: 113, 1416, 1283, 1375. Galerijos AMERICOL Glass & Mirror užrašai veda į ID 114.
- Galerijoje po vieną nuorodą ant kiekvieno paveikslėlio, nėra nuorodomis apgaubtų lentelių.
- Produktų nuotraukos, pavadinimai, kainos ir mygtukai yra paspaudžiami.
- Eksporte nėra vietinių paveikslėlių adresų, DOCTYPE, head, body, script žymų ar mūsų unsubscribe nuorodos.
- 2026-09-09 personalizavimas pakeistas: vardas ir skyryba apdorojami vienoje filtrų grandinėje. Su vardu „Sveiki, Monika!“, be vardo „Sveiki!“. Žyma pateikta CAMPAIGN.md.
- Matomame tekste nėra ilgųjų brūkšnių.

## Maketas

Vietinėje Chromium peržiūroje patikrinta:

| Atvejis | Horizontalus tilpimas | Produktų CTA |
| --- | --- | --- |
| 700 px, Montserrat | gerai | abiejose eilėse sulygiuoti |
| 390 px, Montserrat | gerai | vienodi |
| 320 px, Montserrat | gerai | vienodi |
| 390 px, CSS dark mode | gerai | vienodi |
| 700 px, Arial pakaitalas | gerai | abiejose eilėse sulygiuoti |

CTA yra 44 px aukščio. Standartinėje Montserrat peržiūroje plotis 104,11 px, su Arial 99,97 px. Balto teksto kontrastas ant #21663f fono apie 6,91:1.

Papildomai patikrintas tikras eksportas su nuotoliniais paveikslėliais 390 px ekrane: visi vaizdai užsikrovė, keturios produktų kortelės, horizontalus plotis 390 px.

PNG/JPG peržiūros naudoja „Sveiki!“ kaip vietinį maketo pavyzdį. Tai nėra Liquid žymos vykdymas Omnisend.

2026-09-09 abiejų HTML failų tikroji pasisveikinimo žyma patikrinta vietiniu LiquidJS varikliu su Omnisend skirtukais: vardas, tuščias tekstas, null, neapibrėžtas vardas, vien tarpai, vardas su kraštiniais tarpais, specialus HTML simbolis ir neegzistuojantis kontaktas. Visi 8 atvejai abiejuose failuose atitiko laukiamą rezultatą. Tai patikrina Liquid filtrų logiką, bet ne Omnisend serverio vykdymą.

## Kas nepatvirtinta šioje aplinkoje

Omnisend importo apdorojimas, sisteminio footerio įterpimas konkrečioje kampanijoje, tikrų kontaktų personalizavimo vykdymas ir Gmail / Outlook spalvų inversija. Reikia patikrinti importuotame laiške. Jokie laiškai šio darbo metu nesiųsti.
