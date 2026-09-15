# PRO7 NL3: SOS! Kalkės puola!

Hero v5: Reikia nuvalyti ant lapelio, nuvalyti ir turėti tokios pačios žalios spalvos. Ankstesni variantai išsaugoti.

Subject: SOS! Kalkės puola!

Preheader: Kalkėms blogos naujienos. Jums 10 % nuolaida.

Sender: PRO7.LT

Nuolaida: 10 %, bendras kodas KALKES. Galioja nuo 2026 m. rugsėjo 15 d. iki rugsėjo 20 d. imtinai.

## Failai ir Omnisend

1. [omnisend.html](omnisend.html): visas laiškas vienam Custom HTML blokui, įskaitant kodą KALKES, datas ir Mildos atsiliepimą.
2. [omnisend-styles.css](omnisend-styles.css): į to bloko Styles lauką.
3. [hero-omnisend.html](hero-omnisend.html): tik naujo hero kodas.
4. [index.html](index.html): vietinė peržiūra, ne siuntimo failas.
5. [PRO7-NL3-review.jpg](PRO7-NL3-review.jpg): visa JPG peržiūra.
6. [assets](assets): vaizdai ir originalai.

Įkeliant visą naują laišką pašalinti ankstesnius laiško blokus ir atskirą asmeninio kodo elementą, kad nesidubliuotų. Palikti vieną Omnisend sistemos atsisakymo footerį. Mūsų informacinis footeris atsisakymo nuorodos neturi.

omnisend-top.html ir omnisend-bottom.html palikti alternatyviam surinkimui dviem blokais. Viršutinėje dalyje kodas jau yra, papildomo kodo bloko tarp jų nereikia.

Canvas 600 px, bloko horizontalus padding 0. Vaizdai susieti su konkrečiu paskelbtu Git commit. HTML įkėlimas nenustato kampanijos subject ir preheader, juos reikia įrašyti atskiruose Omnisend laukuose. Vien hero pakeitimas neatnaujina kodo, datų ar atsiliepimo likusiame laiške.

Omnisend paskyra nekeista, kampanija nesiųsta. Kodo KALKES pritaikymas parduotuvėje nebandytas. Prieš siuntimą patikrinti nuolaidą krepšelyje ir bandomą laišką realiame pašte.

## Grąžinimas

Žr. [HERO-REVERT.md](HERO-REVERT.md). Ankstesni hero failai išsaugoti.
