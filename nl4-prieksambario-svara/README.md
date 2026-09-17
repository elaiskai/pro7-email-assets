# PRO7 NL4, rugsėjo 17 d.

Subject: Nusiavėte batus. Purvas liko?

Preheader: Lietingomis dienomis pasirūpinkite batais ir prieškambario grindimis.

Auditorija: visi siuntimui tinkami el. pašto prenumeratoriai, neįtraukiant atsisakiusių ir užblokuotų kontaktų. Atranka ar siuntimas paskyroje neatlikti.

## Omnisend

1. omnisend.html į vieną Custom HTML bloką.
2. omnisend-styles.css į to bloko Styles lauką.
3. Canvas 600 px, bloko horizontalūs tarpai 0.
4. Subject ir preheader įrašyti atskiruose kampanijos laukuose.
5. Palikti tik Omnisend sistemos atsisakymo footerį. Atskiras nuolaidos kodo blokas nereikalingas, KALKES jau įrašytas.

index.html yra vietinė peržiūra. preview-online.html naudoja viešus assets. PRO7-NL4-review.jpg yra šviežia desktop peržiūra. previews aplanke visų patikrų PNG. Inspection failuose visas ilgas laiškas padalytas į dvi gretimas dalis tik patikros patogumui, pats laiškas vieno stulpelio.

Antroje versijoje vartotojo prašymu naudotas generuotas reklaminis hero su autentiškų produktų nuorodomis. Tai nėra eksperimento nuotrauka. Produkto kortelių ir prieš bei po vaizdai tikri, neretušuoti. Visi blokų fonai balti. SUPER CLEANER pora ir Dariaus atsiliepimas pateikti po produktu. Hero sukurtas integruotu imagegen, prompt saugomas hero-v2-prompt.txt, originalas assets/hero-v2.png.

Svarbu: abiejų grindų valiklių prieš ir po bei CITRUS atsiliepimas nepatvirtinti. Versija skirta peržiūrai, kol gausime trūkstamą autentišką medžiagą arba sprendimą dėl jos atsisakymo. Šis reikalavimas dar neįvykdytas.

Trečioje versijoje produktų nuotraukos, pavadinimai, kainos ir mygtukai sugrupuoti į kompaktiškas baltas korteles. Rezultato nuotraukos ir atsiliepimai vizualiai atskirti, tekstai sutrumpinti, tarpai suvienodinti. Produktai ir hero nepakeisti.

Ketvirtoje versijoje hero tekstas pakeistas į „Nusiavėte batus.“ ir pridėta lietingų dienų tema. Įžanga bei preheader aiškiai susieti su lietingomis dienomis. Hero redaguotas integruotu imagegen, išsaugotas kaip assets/hero-v3.png ir JPG; prompt yra hero-v3-prompt.txt. Tai sezoninė tema, ne konkrečios dienos orų prognozė.

## Pasiūlymas

KALKES, 10 %, iki rugsėjo 20 d. imtinai, pagal Aistės ankstesnį patvirtinimą prenumeratoriams visoms prekėms. Kodo pritaikymas krepšelyje šio darbo metu netikrintas, naujas kodas nesukurtas. Kortelėse rodomos dabartinės pilnos kainos, ne kainos po kodo.

## Prieš siuntimą

Omnisend nekeistas ir nieko nesiųsta. Atlikti tikrą platformos bandomą siuntimą ir patikrinti KALKES. Atsižvelgiant į ankstesnius platformos rodymo nesklandumus, prašome pateikti naujo Omnisend testo telefono ekrano nuotrauką. Naršyklės patikra nėra Gmail, Outlook ar Omnisend pristatymo patvirtinimas.

## Pakartotinis kūrimas

build.mjs kuria HTML ir proporcingai optimizuoja vaizdus. qa.mjs tikrina tikslius omnisend.html baitus, prieš publikavimą viešus vaizdų adresus nukreipdamas į identiškus vietinius failus. Po bet kokio HTML ar CSS pakeitimo iš naujo generuoti visas peržiūras, vizualiai patikrinti ir atnaujinti QA įrašą. check-links.mjs --public tikrina ir paskelbtų failų kontrolines sumas.
