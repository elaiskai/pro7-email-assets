# PRO7 NL2, rudens apsitvarkymas

## Kurį failą naudoti

- `omnisend.html` yra importui paruoštas failas su viešais HTTPS paveikslėlių adresais. Nėra DOCTYPE, head ar body žymų. CSS ir Outlook šrifto taisyklė išsaugoti.
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

Store settings → Saved templates → Import template → Paste in code, įklijuoti omnisend.html turinį arba pasirinkti HTML failo importą.

Palikti vieną Omnisend sisteminį footerį su atsisakymo nuoroda. Mūsų kode papildomo unsubscribe nėra, pagal kliento pageidavimą. Tai nereiškia, kad [[unsubscribe_link]] žyma nepalaikoma: ji oficiali. Ankstesnio dubliavimo priežastis konkrečioje kampanijoje nepatvirtinta.

Kontaktas: `Sveiki[[ contact.first_name | default: '' | strip | prepend: ', ' | append: '!' | replace: ', !', '!' | escape ]]`
Su vardu: „Sveiki, Monika!“. Be vardo arba su vien tarpais: „Sveiki!“. Kablelis ir šauktukas apdorojami kartu su vardu, nėra statinio kablelio už žymos. `escape` apsaugo HTML nuo specialių simbolių varde.
Naudojami tik Liquid filtrai, nes Omnisend kampanijose `if` žymos nepalaikomos. Šaltinis: https://support.omnisend.com/en/articles/11197418-use-liquid-templating-for-message-personalization . Vietinės PNG/JPG peržiūros rodo „Sveiki!“ kaip maketo pavyzdį, tai nėra Omnisend vykdymo testas. Omnisend Test & Preview pasirinkti vieną kontaktą su vardu ir kitą be vardo. Paprastas test email gali rodyti neapdorotas žymas.

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

Montserrat 400 / 500 / 600 / 700 yra pagrindinė šeima. Arial ir sans-serif yra sąmoningi atsarginiai šriftai; Outlook Windows turi atskirą Arial taisyklę. Montserrat išvaizdos visose pašto programose garantuoti negalima. Hero tekstas išlieka Montserrat kaip paveikslėlio dalis.

Logo turi nepermatomą baltą pagrindą pačiame PNG. Tamsiam režimui pridėtos prefers-color-scheme ir Outlook data-ogsc spalvos. Preview-mobile-dark.png tikrina mūsų CSS naršyklėje, ne Gmail ar Outlook automatinę spalvų inversiją. Tikras Omnisend importas ir gavėjo pašto programos šioje aplinkoje neprieinami, todėl jų veikimas nepatvirtintas.

## Patikra ir atnaujinimas

`node qa-render.mjs` tikrina 320, 390 ir 700 px pločius, tamsų režimą ir Arial pakaitinį šriftą. Tikrinamas horizontalus tilpimas, paveikslėliai, keturios kortelės, vienodi bent 44 px aukščio CTA, jų lygiavimas ir kad nuorodos neapgaubia lentelių.

Po pakeistų vizualų commit ir push paleisti `node prepare-omnisend.mjs PILNAS_COMMIT_SHA`. Eksportą peržiūrėti ir įkelti atskiru commit. Jei keičiami vizualai, nenaudoti seno eksporto.

Prieš siuntimą Omnisend patikrinti vieną sisteminį atsisakymo bloką, kontaktų personalizavimą ir tikrus Gmail / Outlook light bei dark laiškus. Šio darbo metu laiškai niekam nesiųsti.

## Oficialios instrukcijos

- https://support.omnisend.com/en/articles/2964086-import-custom-html-email-templates
- https://support.omnisend.com/en/articles/1061845-use-personalization-in-omnisend
- https://support.omnisend.com/en/articles/6099524-manage-your-brand-assets
- https://support.omnisend.com/en/articles/10118006-preview-optimize-emails-for-dark-mode
