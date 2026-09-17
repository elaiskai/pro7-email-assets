# PRO7 NL4, rugsėjo 17 d.

Subject: Batus nusiavėte. Purvas liko?

Preheader: Kuo nuvalyti batus ir išplauti prieškambario grindis.

Auditorija: visi siuntimui tinkami el. pašto prenumeratoriai, neįtraukiant atsisakiusių ir užblokuotų kontaktų. Atranka ar siuntimas paskyroje neatlikti.

## Omnisend

1. omnisend.html į vieną Custom HTML bloką.
2. omnisend-styles.css į to bloko Styles lauką.
3. Canvas 600 px, bloko horizontalūs tarpai 0.
4. Subject ir preheader įrašyti atskiruose kampanijos laukuose.
5. Palikti tik Omnisend sistemos atsisakymo footerį. Atskiras nuolaidos kodo blokas nereikalingas, KALKES jau įrašytas.

index.html yra vietinė peržiūra. preview-online.html naudoja viešus assets. PRO7-NL4-review.jpg yra šviežia desktop peržiūra. previews aplanke visų patikrų PNG. Inspection failuose visas ilgas laiškas padalytas į dvi gretimas dalis tik patikros patogumui, pats laiškas vieno stulpelio.

Naudoti tik originalūs produkto ir oficialios galerijos vaizdai, jokio generuoto hero ar netikro eksperimento. Prieš ir po neretušuoti. Brand DNA pritaikytas tonui, Montserrat, PRO7 žaliai, statiniam Sveiki ir footerio struktūrai. Frontend design pritaikytas tipografiniam hero ir aiškiai vieno stulpelio hierarchijai.

## Pasiūlymas

KALKES, 10 %, iki rugsėjo 20 d. imtinai, pagal Aistės ankstesnį patvirtinimą prenumeratoriams visoms prekėms. Kodo pritaikymas krepšelyje šio darbo metu netikrintas, naujas kodas nesukurtas. Kortelėse rodomos dabartinės pilnos kainos, ne kainos po kodo.

## Prieš siuntimą

Omnisend nekeistas ir nieko nesiųsta. Atlikti tikrą platformos bandomą siuntimą ir patikrinti KALKES. Atsižvelgiant į ankstesnius platformos rodymo nesklandumus, prašome pateikti naujo Omnisend testo telefono ekrano nuotrauką. Naršyklės patikra nėra Gmail, Outlook ar Omnisend pristatymo patvirtinimas.

## Pakartotinis kūrimas

build.mjs kuria HTML ir proporcingai optimizuoja vaizdus. qa.mjs tikrina tikslius omnisend.html baitus, prieš publikavimą viešus vaizdų adresus nukreipdamas į identiškus vietinius failus. Po bet kokio HTML ar CSS pakeitimo iš naujo generuoti visas peržiūras, vizualiai patikrinti ir atnaujinti QA įrašą. check-links.mjs --public tikrina ir paskelbtų failų kontrolines sumas.
