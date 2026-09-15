import {readFileSync,writeFileSync} from 'node:fs';
import sharp from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs';
const dir=new URL('./',import.meta.url);
// Change to v3 and rebuild to restore the previous hero without reverting later copy edits.
const heroVersion='v4';
const product='https://www.pro7.lt/svaros-prekes/239-kalkiu-ir-rudziu-valiklis-americol-amecid-1-l-koncentratas';
const bath='https://www.pro7.lt/svaros-prekes-valikliai/valymo-priemones/vonios-tualeto-valikliai';
await sharp(new URL('assets/amecid-1l.png',dir).pathname).resize({width:360,withoutEnlargement:true}).png().toFile(new URL('assets/amecid-1l-email.png',dir).pathname);
// Delivery optimization only. Originals remain unmodified, with no retouching.
for(const [src,dest,width] of [[`hero-sos-kalkes-${heroVersion}.png`,`hero-sos-kalkes-${heroVersion}.jpg`,1200],['amecid-sink-before.png','amecid-sink-before.jpg',650],['amecid-sink-after.png','amecid-sink-after.jpg',650],...['toilet','shower','tap'].flatMap(item=>['before','after'].map(state=>[`amecid-${item}-${state}-source.jpg`,`amecid-${item}-${state}.jpg`,650]))]){
  await sharp(new URL('assets/'+src,dir).pathname).resize({width,withoutEnlargement:true}).jpeg({quality:88,mozjpeg:true}).toFile(new URL('assets/'+dest,dir).pathname);
}
const styles=`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
body{margin:0;padding:0;background:#edf1ed}
.pro7-email{font-family:Montserrat,Arial,sans-serif;color:#182b22;width:100%;max-width:600px;margin:0 auto;table-layout:fixed}
.pro7-email table{border-spacing:0;mso-table-lspace:0;mso-table-rspace:0}
.pro7-email td{font-family:Montserrat,Arial,sans-serif}
.pro7-email img{border:0;display:block;max-width:100%;height:auto}
.pro7-email a{color:#21663f}
.pro7-email p{margin:0}
@media(max-width:480px){.pro7-email .pad{padding-left:22px!important;padding-right:22px!important}.pro7-email .heading{font-size:26px!important;line-height:32px!important}.pro7-email .nav a{font-size:10px!important}}
@media(prefers-color-scheme:dark){body{background:#101a14!important}.pro7-email .surface{background:#18261e!important;color:#f3f5f0!important}.pro7-email .tint{background:#233c2d!important;color:#f3f5f0!important}.pro7-email .muted{color:#c6d4cb!important}.pro7-email a:not(.cta){color:#9fe5bb!important}.pro7-email .solid a{color:white!important}}
[data-ogsc] .pro7-email .surface{background:#18261e!important;color:#f3f5f0!important}
[data-ogsc] .pro7-email .tint{background:#233c2d!important;color:#f3f5f0!important}
[data-ogsc] .pro7-email .muted{color:#c6d4cb!important}
[data-ogsc] .pro7-email a:not(.cta){color:#9fe5bb!important}
`;
const wrap=content=>`<table role="presentation" class="pro7-email" width="100%" cellpadding="0" cellspacing="0" align="center" style="width:100%;max-width:600px;margin:0 auto;table-layout:fixed;font-family:Montserrat,Arial,sans-serif;color:#182b22"><tr><td class="surface" bgcolor="#ffffff" style="background:#ffffff">${content}</td></tr></table>`;
const row=(content,padding='0 32px',extra='')=>`<tr><td class="pad${extra.includes('bgcolor')?' tint':''}" style="padding:${padding}" ${extra}>${content}</td></tr>`;
const table=content=>`<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;table-layout:fixed">${content}</table>`;
const p=(text,style='')=>`<p style="margin:0;font-size:15px;line-height:25px;${style}">${text}</p>`;
const button=(text,href=product)=>`<table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td class="solid" bgcolor="#21663f" align="center" style="background:#21663f;border-radius:8px"><a class="cta" href="${href}" style="display:block;padding:16px 12px;font-family:Montserrat,Arial,sans-serif;font-size:14px;line-height:20px;font-weight:700;color:#ffffff;text-decoration:none;text-align:center">${text}</a></td></tr></table>`;
const comparison=(name,key)=>row(`<h3 style="margin:0 0 12px;font-size:17px;line-height:24px;font-weight:600">${name}</h3>`+table(`<tr>${['before','after'].map((state,i)=>`<td width="50%" style="padding-${i?'left':'right'}:5px"><a href="${product}"><img src="assets/amecid-${key}-${state}.jpg" width="263" alt="${name}, ${i?'po valymo':'prieš valymą'}, nuotrauka iš PRO7 AMECID galerijos" style="display:block;width:100%;height:auto;border-radius:8px"></a></td>`).join('')}</tr><tr><td style="padding-top:9px;font-size:11px;line-height:18px;font-weight:700">PRIEŠ</td><td style="padding:9px 0 0 5px;font-size:11px;line-height:18px;font-weight:700">PO</td></tr>`),'0 32px 28px');
const nav=[['VALIKLIAI','https://www.pro7.lt/svaros-prekes-valikliai'],['VONIAI',bath],['ĮRANKIAI','https://www.pro7.lt/valymo-irankiai-ir-reikmenys'],['AKCIJOS','https://www.pro7.lt/akcijos-pasiulymai']];
const upper=wrap(table(
`<tr><td class="tint" bgcolor="#f3f5ef" style="background:#f3f5ef">${table('<tr>'+nav.map(([label,url])=>`<td class="nav" width="25%" align="center"><a href="${url}" style="display:block;padding:17px 3px;color:#21663f;font-size:11px;line-height:16px;font-weight:700;text-decoration:none">${label}</a></td>`).join('')+'</tr>')}</td></tr>`+
`<tr><td><a href="${product}"><img src="assets/hero-sos-kalkes-${heroVersion}.jpg" width="600" alt="SOS. Kalkės puola? AMECID čiaupams, dušo stiklui ir kalkių apnašoms. 10 % nuolaida prenumeratoriams." style="display:block;width:100%;max-width:600px;height:auto;border:0"></a></td></tr>`+
row(p('Sveiki,','font-weight:600'), '30px 32px 14px')+
row(p('Dušo stiklas, čiaupas, unitazas. Kai susikaupia kalkių, vien šluostės neužtenka.'),'0 32px 14px')+
row(p('Pažiūrėkite, kaip šiuos paviršius pavyko išvalyti su <strong>AMECID</strong>. O apsipirkti šįkart galite su asmenine <strong>10 % nuolaida</strong>.'),'0 32px 24px')+
row(`<h1 class="heading" style="margin:0;font-size:28px;line-height:34px;font-weight:700">Jūsų asmeninė nuolaida</h1>`,'24px 32px 10px','bgcolor="#e8f6f0"')+
row(p('Pirkdami įveskite savo kodą:'),'0 32px 18px','bgcolor="#e8f6f0"')
));
const couponPreview=wrap(table(row(`<p class="muted" style="margin:0;padding:17px 12px;border:1px dashed #56826a;text-align:center;font-size:12px;line-height:20px;font-weight:600;color:#21663f">PERŽIŪROS VIETA<br>Čia bus Jūsų asmeninis Omnisend kodas</p>`,'0 32px 24px','bgcolor="#e8f6f0"')));
const lower=wrap(table(
row(button('Rinktis valymo priemones','https://www.pro7.lt/svaros-prekes-valikliai'),'0 32px 28px','bgcolor="#e8f6f0"')+
row(`<p class="muted" style="margin:0 0 9px;font-size:11px;line-height:16px;letter-spacing:1.4px;font-weight:700;color:#52725e">IŠ PRO7 AMECID GALERIJOS</p><h2 class="heading" style="margin:0;font-size:28px;line-height:34px;font-weight:700">Kai kalkių nebelieka.</h2>`,'34px 32px 20px')+
comparison('Unitazas','toilet')+
comparison('Dušo stiklas','shower')+
comparison('Vonios čiaupas','tap')+
comparison('Plautuvė','sink')+
row(`<h2 class="heading" style="margin:0;font-size:28px;line-height:34px;font-weight:700">AMECID kalkėms ir rūdims</h2>`,'28px 32px 8px','bgcolor="#f3f5ef"')+
row(p('Koncentruotas valiklis, 1 l.'),'0 32px 20px','bgcolor="#f3f5ef"')+
row(`<a href="${product}" style="display:block;background:#ffffff;border-radius:12px;padding:24px"><img src="assets/amecid-1l-email.png" width="118" alt="AMECID kalkių ir rūdžių valiklis, 1 l" style="display:block;width:118px;max-width:100%;height:auto;margin:0 auto;border:0"></a>`,'0 32px 20px','bgcolor="#f3f5ef"')+
row(p('Koncentratas kalkėms, rūdims ir mineralinėms apnašoms šalinti nuo rūgštims atsparių paviršių.'),'0 32px 14px','bgcolor="#f3f5ef"')+
row(`<p style="margin:0;font-size:28px;line-height:38px;font-weight:700"><del class="muted" style="font-size:18px;font-weight:400;color:#65776c;text-decoration:line-through;white-space:nowrap">32,21 €</del>&nbsp; <span class="discount-price" style="white-space:nowrap">28,99 €</span></p>${p('Su Jūsų asmeniniu 10 % nuolaidos kodu.','font-size:12px;line-height:20px;margin-top:4px')}`,'0 32px 16px','bgcolor="#f3f5ef"')+
row(button('Peržiūrėti AMECID'),'0 32px 28px','bgcolor="#f3f5ef"')+
row(`<h2 style="margin:0 0 14px;font-size:20px;line-height:28px;font-weight:700">Prieš imantis darbo</h2>${p('Patikrinkite, ar priemonė tinka Jūsų paviršiui. Naudokite pagal etiketę, pirmiausia išbandykite mažai matomoje vietoje ir po valymo kruopščiai nuskalaukite.')}${p('Netinka marmurui, natūraliam akmeniui ir kitiems rūgštims jautriems paviršiams. Mūvėkite apsaugines pirštines. Nemaišykite su kitais valikliais.','font-size:12px;line-height:20px;margin-top:12px')}`,'28px 32px')+
row(p('Su meile švarai,<br><strong>PRO7 komanda</strong>'),'0 32px 26px')+
`<tr><td class="campaign-footer tint muted" align="center" bgcolor="#f3f5f4" style="padding:22px 28px;font-family:Montserrat,Arial,sans-serif;color:#6e7772;font-size:10px;line-height:17px"><a href="https://www.pro7.lt/" style="text-decoration:none;color:#232832;font-weight:700">PRO7.LT</a> · Profesionalios švaros priemonės<br>Šį laišką gavote, nes prenumeruojate PRO7 naujienlaiškius arba esate mūsų klientas.</td></tr>`
));
const body=upper+'\n<!-- COUPON_SLOT: replace review block with configured native Omnisend item. -->\n'+couponPreview+'\n'+lower;
const document=`<!doctype html><html lang="lt"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light dark"><meta name="supported-color-schemes" content="light dark"><meta name="x-apple-disable-message-reformatting"><title>SOS! Kalkės puola!</title><style>${styles}</style></head><body><p style="display:none;max-height:0;overflow:hidden;mso-hide:all">Kalkėms blogos naujienos. Jums 10 % nuolaida.</p>${body}</body></html>`;
writeFileSync(new URL('index.html',dir),document);
writeFileSync(new URL('omnisend-styles.css',dir),styles.replace(/body\{[^}]*\}/g,''));
// Exports are deliberately split around the platform-owned unique coupon item.
// A production export requires a published, immutable asset commit.
const commit=process.argv[2];
if(commit){
  if(!/^[a-f0-9]{40}$/.test(commit))throw new Error('Use the full published asset commit SHA.');
  for(const [name,content] of [['omnisend-top.html',upper],['omnisend-bottom.html',lower]]){
    writeFileSync(new URL(name,dir),content.replaceAll('src="assets/','src="https://raw.githubusercontent.com/elaiskai/pro7-email-assets/'+commit+'/nl3-sos-kalkes/assets/'));
  }
}
console.log('Built review index.html. Unique code is a clearly marked preview slot, not a functional code.');
