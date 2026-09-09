# NL2 patikros rezultatai

Maketas ir eksportas pakartotinai patikrinti 2026-09-09. Omnisend Custom HTML bloke naudoti `omnisend.html` ir `omnisend-styles.css` atskiruose HTML ir Styles laukuose. Vietiniam redagavimui naudoti `index.html`.

## Eksportas

- Paveikslėlių commit: `fd5c6966be6053d51777ea0aad8c20beee034da1`.
- 10 paveikslėlių nuorodų, visos HTTPS; tikrinamas jų užsikrovimas iš viešų GitHub adresų.
- Bendras laiške naudojamų paveikslėlių dydis 761 308 baitai.
- HTML ir CSS pateikiami atskirai. Eksporto HTML neturi style žymų, kritinis pločio valdymas yra inline.
- 11 unikalių PRO7 nuorodų. Jos buvo ankstesnėje patikrintoje nuorodų aibėje; ID 114 puslapis papildomai patikrintas 2026-09-09.
- Produktų ID: 113, 1416, 114, 1375. Glass & Mirror pakeistas į Americol 750 ml, 11,23 €. Nuotrauka, pavadinimas, kaina ir CTA veda į ID 114.
- Dvi prieš / po poros dviem skirtingiems produktams. Nebėra antro pasikartojančio stiklo valymo pavyzdžio. Tikras rasojimo eksperimentas dar negautas ir nepateikiamas kaip įvykęs.
- Galerijoje po vieną nuorodą ant kiekvieno paveikslėlio, nėra nuorodomis apgaubtų lentelių.
- Produktų nuotraukos, pavadinimai, kainos ir mygtukai yra paspaudžiami.
- Eksporte nėra vietinių paveikslėlių adresų, DOCTYPE, head, body, script žymų ar mūsų unsubscribe nuorodos.
- 2026-09-09 vardo personalizavimas pašalintas. Visiems gavėjams palikta `Sveiki,`.
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

## Omnisend bloko regresijos patikra

`qa-omnisend.mjs` tikrina eksportuotus HTML ir CSS bei viešus paveikslėlius. Ankstesnio eksporto 600 + 8 + 8 = 616 px klaida pašalinta. Nebėra išorinių šoninių tarpų, CSS taisyklės atskirtos nuo HTML ir apribotos tik PRO7 bloku.

| Konteineris / naršyklės langas | Tikras laiško plotis | Stulpeliai | Išlindimas |
| --- | --- | --- | --- |
| 600 / 1200 px redaktorius | 600 px | 2 | nėra |
| 390 / 1200 px redaktorius | 390 px | 1 | nėra |
| 320 / 1200 px redaktorius | 320 px | 1 | nėra |
| 600 / 600 px iframe | 600 px | 2 | nėra |
| 390 / 390 px telefonas | 390 px | 1 | nėra |
| 320 / 320 px telefonas | 320 px | 1 | nėra |
| 390 / 390 px CSS dark mode | 390 px | 1 | nėra |
| 600 / 1200 px be Styles | 600 px | 2 | nėra |
| 320 / 320 px be Styles | 320 px | 1 | nėra |
| 800 / 1200 px platus konteineris | 600 px, centruotas | 2 | nėra |

Visais 10 atvejų paveikslėliai užsikrovė, keturios kortelės, CTA bent 44 px aukščio. Darbalaukio CTA poros sulygiuotos. Tikrinamos ir vidinių elementų ribos, ne vien dokumento plotis. Išorinio bandomojo footerio spalva liko nepakeista.

Tai konteinerio elgsenos simuliacija Chromium naršyklėje. Omnisend HTML/CSS filtravimas, jo tikras redaktorius ir gavėjų pašto programos nėra šio testo dalis.

PNG/JPG peržiūros rodo tikrą statinį tekstą „Sveiki,“. Maketo testas tikrina šį tekstą jo nekeisdamas.

## Kas nepatvirtinta šioje aplinkoje

Omnisend importo apdorojimas, sisteminio footerio įterpimas konkrečioje kampanijoje ir Gmail / Outlook spalvų inversija. Reikia patikrinti importuotame laiške. Jokie laiškai šio darbo metu nesiųsti.
