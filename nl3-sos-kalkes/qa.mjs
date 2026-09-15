import {chromium} from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const root=new URL('./',import.meta.url),html=readFileSync(new URL('index.html',root),'utf8');
const browser=await chromium.launch({headless:true});
const results=[];
try{
for(const [name,viewport,host,dark,noCSS] of [
['desktop',800,600,false,false],['mobile',390,390,false,false],['narrow',320,320,false,false],
['dark',390,390,true,false],['editor-narrow',1200,320,false,false],['no-css',320,320,false,true],['wide-host',1200,800,false,false]]){
  const page=await browser.newPage({viewport:{width:viewport,height:900},colorScheme:dark?'dark':'light'});
  await page.goto(new URL('index.html',root).href,{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);
  await page.evaluate(({host,noCSS})=>{
    const w=document.createElement('div');w.style.cssText=`width:${host}px;max-width:100%;margin:0 auto`;
    [...document.body.children].forEach(e=>w.append(e));document.body.append(w);
    if(noCSS)document.querySelectorAll('style,link').forEach(e=>e.remove());
  },{host,noCSS});
  const result=await page.evaluate(()=>({
    width:innerWidth,scroll:document.documentElement.scrollWidth,
    shells:[...document.querySelectorAll('.pro7-email')].map(t=>{const r=t.getBoundingClientRect();return {w:r.width,x:r.x,parentW:t.parentElement.getBoundingClientRect().width,parentX:t.parentElement.getBoundingClientRect().x}}),
    imageCount:document.images.length,
    comparisonCount:document.querySelectorAll('img[src*="-before.jpg"]').length,
    broken:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),
    ratios:[...document.images].map(i=>{const r=i.getBoundingClientRect();return Math.abs(r.width/r.height-i.naturalWidth/i.naturalHeight)}),
    ctas:[...document.querySelectorAll('.cta')].map(a=>a.getBoundingClientRect().height),
    text:document.body.innerText,
    alts:[...document.images].map(i=>i.alt),
    links:[...document.querySelectorAll('a')].map(a=>a.href),
    font:document.fonts.check('400 15px Montserrat'),
  }));
  assert.ok(result.scroll<=viewport,name+' page overflow');
  assert.deepEqual(result.broken,[]);assert.ok(result.ratios.every(r=>r<.002));
  assert.equal(result.imageCount,11);assert.equal(result.comparisonCount,4);
  assert.ok(!result.text.includes('Kalkės mėgsta priminti apie save'));
  assert.ok(!result.text.includes('Vienas darbas mažiau'));
  assert.equal(await page.locator('del').textContent(),'32,21 €');
  assert.equal(await page.locator('.discount-price').textContent(),'28,99 €');
  assert.equal((32.21*.9).toFixed(2),'28.99');
  assert.ok(result.text.includes('Su 10 % nuolaidos kodu KALKES.'));
  assert.equal(await page.locator('.coupon-code').textContent(),'KALKES');
  assert.ok((await page.locator('.offer-dates').textContent()).includes('iki rugsėjo 20 d. imtinai.'));
  assert.ok(!/asmenin|PERŽIŪROS VIETA|COUPON_SLOT/.test(result.text));
  assert.equal(await page.title(),'SOS! Kalkės puola!');
  assert.equal(await page.locator('.review-img').count(),1);
  assert.ok(result.text.includes('Šį laišką gavote, nes prenumeruojate PRO7 naujienlaiškius arba esate mūsų klientas.'));
  assert.equal(await page.locator('a[href*="unsubscribe"]').count(),0);
  assert.equal(await page.locator('.campaign-footer').count(),1);
  assert.ok((await page.locator('.campaign-footer').textContent()).includes('PRO7.LT · Profesionalios švaros priemonės'));
  assert.ok(['center','-webkit-center'].includes(await page.locator('.campaign-footer').evaluate(e=>getComputedStyle(e).textAlign)));
  assert.ok(result.ctas.every(h=>h>=44));
  assert.ok(result.shells.every(s=>s.w<=600.5 && s.w<=host+.5 && Math.abs(s.x-s.parentX-(s.parentW-s.w)/2)<1));
  assert.ok(!/[-–—]/.test(result.text+result.alts.join('')),'No dash punctuation');
  assert.ok(result.text.includes('Sveiki,'));assert.ok(!result.text.includes('contact.first_name'));
  assert.ok(result.links.every(l=>l.startsWith('https://www.pro7.lt/')));
  await page.screenshot({path:new URL('preview-'+name+'.png',root).pathname,fullPage:true});
  if(name==='mobile'||name==='dark')await page.locator('.campaign-footer').screenshot({path:new URL('preview-footer-'+name+'.png',root).pathname});
  if(name==='mobile')await page.locator('.review-img').screenshot({path:new URL('preview-review-mobile.png',root).pathname});
  if(name==='desktop')await page.screenshot({path:new URL('PRO7-NL3-review.jpg',root).pathname,fullPage:true,type:'jpeg',quality:90});
  results.push({name,...result,text:undefined,alts:undefined,links:undefined});await page.close();
}
writeFileSync(new URL('qa-results.json',root),JSON.stringify(results,null,2));
console.log(JSON.stringify(results,null,2));
}finally{await browser.close()}
