import fs from 'node:fs';
import {chromium} from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
process.chdir(new URL('./',import.meta.url).pathname);
const urls=[
'https://www.pro7.lt/svaros-prekes/1610-medinis-premium-automobilio-kvapas-i-groteles-narcisio-nyc',
'https://www.pro7.lt/svaros-prekes/1602-klasikinis-automobilio-kvapas-i-groteles-mystery-cuba',
'https://www.pro7.lt/svaros-prekes/1607-purskiamas-automobilio-kvapas-tropical-hawaii'];
const browser=await chromium.launch();
try{
const page=await browser.newPage({viewport:{width:1280,height:850},deviceScaleFactor:1});
await page.goto('https://www.pro7.lt/',{waitUntil:'networkidle'});
await page.getByText('Patvirtinti tik būtinus',{exact:true}).click();
await page.getByText('Profesionalus švaros rezultatas namuose',{exact:true}).locator('../..').screenshot({path:'website-original.png'});
const products=[];
for(let i=0;i<urls.length;i++){
 await page.goto(urls[i],{waitUntil:'domcontentloaded'});
 const src=await page.locator('meta[property="og:image"]').getAttribute('content');
 const response=await page.request.get(new URL(src,urls[i]).href);
 fs.writeFileSync(`fragrance-${i}.png`,await response.body());
 products.push({url:urls[i],image:src,title:await page.title()});
}
fs.writeFileSync('sources.json',JSON.stringify({date:'2026-09-30',website:'https://www.pro7.lt/',products},null,2));
fs.copyFileSync('../2026-09-25-super-cleaner/logo-safe.png','logo-safe.png');
}finally{await browser.close()}
