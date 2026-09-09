# PRO7 NL2, rudens apsitvarkymas

## Kurį failą naudoti

- `omnisend.html` yra tik Omnisend Custom HTML bloko HTML laukui, su viešais HTTPS paveikslėlių adresais. Nėra DOCTYPE, head, body, div ar style žymų.
- `omnisend-styles.css` turinį būtina įklijuoti į to paties bloko Styles lauką, be `<style>` žymų. Failo URL nepakanka, reikia paties CSS teksto.
- `index.html` yra vietinės peržiūros ir redagavimo šaltinis. Jo assets adresai vietiniai, todėl jo nekopijuoti į Omnisend.
- `PRO7-NL2-final.jpg` yra vizualinė peržiūra, ne siuntimo failas.
- Failai ir vizualai laikomi tik elaiskai/pro7-email-assets repo. Eksportas naudoja konkrečiu commit SHA užfiksuotus viešus raw.githubusercontent.com adresus.

## Siuntimo laukai

- Sender: `PRO7.LT`
- Subject A: `20 minučių trumpam apsitvarkymui 🍂`
- Subject B: `Keturios priemonės, kurios pravers rudenį`
- Preheader: `Keturios priemonės greitam rudens apsitvarkymui per 20 minučių.`

20 minučių yra trumpo apsitvarkymo planas. Kiekvienam etapui siūloma apie 5 minutes. Nepateikiama visų namų išvalymo garantija.

## Omnisend importas

Ši versija skirta Custom HTML blokui Email Builder redaktoriuje, ne viso šablono importui.

1. Pasirinkti esamą HTML bloką ir pakeisti visą HTML lauko turinį failo `omnisend.html` turiniu.
2. To paties bloko Styles lauką pakeisti visu `omnisend-styles.css` turiniu, be `<style>` ir `</style>`.
3. Nustatyti laiško plotį 600 px. Išoriniam HTML blokui ir jį talpinančiai sekcijai nustatyti 0 px šoninį padding. Mūsų kodas savo išorinių tarpų neprideda.
4. Išsaugoti ir patikrinti Desktop bei Mobile peržiūras. Naujasis HTML nepakeičia anksčiau į Omnisend nukopijuoto kodo automatiškai.
5. Preheader tekstą įrašyti į Omnisend kampanijos Preheader lauką, jis nebedubliuojamas HTML bloke.

HTML bloke plotis lankstus, daugiausia 600 px. Kortelės natūraliai persirikiuoja pagal turimą bloko plotį, net jei media query nesuveikia. Outlook Windows skirti sąlyginiai lentelių stulpeliai. Papildomi mobilūs tarpai ir tamsaus režimo taisyklės yra atskirame Styles faile.

Palikti vieną Omnisend sisteminį footerį su atsisakymo nuoroda. Mūsų kode papildomo unsubscribe nėra, pagal kliento pageidavimą. Tai nereiškia, kad [[unsubscribe_link]] žyma nepalaikoma: ji oficiali. Ankstesnio dubliavimo priežastis konkrečioje kampanijoje nepatvirtinta.

Pasisveikinimas visiems gavėjams: `Sveiki,`. Vardo žymos ir personalizavimo filtrų nėra, pagal 2026-09-09 kliento pageidavimą.

## Produktai ir kainos

Patikrinta pro7.lt 2026-09-08:

- Americol Super Cleaner, 750 ml, 13,83 €.
- Americol Kitchen Degreaser, 750 ml, 18,00 €.
- PRO7 Glass & Mirror Cleaner, 500 ml, 8,96 €.
- Floor Cleaner Citrus, 1 l, 10,21 €.
- Nemokamas pristatymas Lietuvoje nuo 45 €.

Stiklo valiklio puslapis patvirtina apsaugą nuo rasojimo. Vadovautis produkto naudojimo instrukcija.

## Prieš ir po kilmė

Visos poros iš https://www.pro7.lt/galerija, susiejimai patikrinti tos pačios galerijos kortelės produkto nuorodoje:

| Pora | Prieš failas | Po failas | Galerijos susietas produktas |
| --- | --- | --- | --- |
| Siena | pries-pro7-valymo-priemones-0f2ed.png | po-pro7-valymo-priemones-48455.png | Americol Super Cleaner, ID 113 |
| Veidrodis | pries-pro7-valymo-priemones-43f9a.jpg | po-pro7-valymo-priemones-3bbdc.jpg | AMERICOL Glass & Mirror, 750 ml, ID 114 |
| Langas | pries-pro7-valymo-priemones-3d3e8.jpg | po-pro7-valymo-priemones-5f61f.jpg | AMERICOL Glass & Mirror, 750 ml, ID 114 |

Paskutinės dvi poros nėra tiesioginis atskiro PRO7 500 ml SKU (ID 1283) testas. Laiške įvardytas tikslus AMERICOL variantas, užrašas veda į ID 114. Nuotraukos veda į galeriją. Vaizdai nekeisti, išskyrus sienos poros dydžio ir failo formato optimizavimą.

Hero sudėtas iš keturių autentiškų produktų nuotraukų. Butelių kontūrai apkirpti CSS maskėmis hero šaltinyje, spalvos ir etiketės negeneruotos. Rastriniai AI vaizdai nenaudoti.

## Tipografija ir pašto klientai

Montserrat 400 / 500 / 600 / 700 yra pagrindinė šeima. Arial ir sans-serif yra sąmoningi atsarginiai šriftai. Montserrat išvaizdos visose pašto programose garantuoti negalima, ypač jei Omnisend ar gavėjo programa pašalina išorinio šrifto importą. Hero tekstas išlieka Montserrat kaip paveikslėlio dalis.

Logo turi nepermatomą baltą pagrindą pačiame PNG. Tamsiam režimui pridėtos prefers-color-scheme ir Outlook data-ogsc spalvos. Preview-mobile-dark.png tikrina mūsų CSS naršyklėje, ne Gmail ar Outlook automatinę spalvų inversiją. Tikras Omnisend importas ir gavėjo pašto programos šioje aplinkoje neprieinami, todėl jų veikimas nepatvirtintas.

## Patikra ir atnaujinimas

`node qa-render.mjs` tikrina 320, 390 ir 700 px pločius, tamsų režimą ir Arial pakaitinį šriftą. Tikrinamas horizontalus tilpimas, paveikslėliai, keturios kortelės, vienodi bent 44 px aukščio CTA, jų lygiavimas ir kad nuorodos neapgaubia lentelių.

`node qa-omnisend.mjs` papildomai tikrina tikrą HTML + CSS eksportą 600, 390 ir 320 px konteineriuose plačiame 1200 px redaktoriaus lange, 600 px iframe, telefoną, tamsų režimą, išdėstymą be Styles CSS ir 600 px maksimumą platesniame konteineryje. Testai vyksta Chromium, ne tikrame Omnisend redaktoriuje.

Po pakeistų vizualų commit ir push paleisti `node prepare-omnisend.mjs PILNAS_COMMIT_SHA`. Eksportą peržiūrėti ir įkelti atskiru commit. Jei keičiami vizualai, nenaudoti seno eksporto.

Prieš siuntimą Omnisend patikrinti vieną sisteminį atsisakymo bloką ir tikrus Gmail / Outlook light bei dark laiškus. Šio darbo metu laiškai niekam nesiųsti.

## Oficialios instrukcijos

- https://support.omnisend.com/en/articles/2964086-import-custom-html-email-templates
- https://support.omnisend.com/en/articles/1061866-add-configure-custom-html-item
- https://support.omnisend.com/en/articles/1061845-use-personalization-in-omnisend
- https://support.omnisend.com/en/articles/6099524-manage-your-brand-assets
- https://support.omnisend.com/en/articles/10118006-preview-optimize-emails-for-dark-mode
