import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {chromium} from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import sharp from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs';
const root=new URL('./',import.meta.url),html=readFileSync(new URL('omnisend.html',root),'utf8'),css=readFileSync(new URL('omnisend-styles.css',root),'utf8');
const sha=s=>createHash('sha256').update(s).digest('hex');
mkdirSync(new URL('previews/',root),{recursive:true});
const browser=await chromium.launch({headless:true});const results=[];
try{for(const [name,width,nostyles,dark] of [['desktop',600,false,false],['mobile320',320,false,false],['mobile390',390,false,false],['mobile430',430,false,false],['no-head320',320,true,false],['dark390',390,false,true]]){
 const page=await browser.newPage({viewport:{width,height:900},colorScheme:dark?'dark':'light'});
 // Exact delivered HTML bytes, only image transport mapped to identical local assets before publication.
 await page.route('https://raw.githubusercontent.com/elaiskai/pro7-email-assets/main/nl4-prieksambario-svara/assets/*',async route=>{const file=route.request().url().split('/').pop();assert.ok(/^[a-z0-9-]+\.(png|jpg)$/.test(file));await route.fulfill({path:new URL('assets/'+file,root).pathname})});
 await page.setContent(`<!doctype html><html lang="lt"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${nostyles?'':`<style>${css}</style>`}</head><body style="margin:0;padding:0">${html}</body></html>`,{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 const result=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,email:document.querySelector('.pro7-nl4').getBoundingClientRect().width,broken:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),ratios:[...document.images].map(i=>Math.abs(i.getBoundingClientRect().width/i.getBoundingClientRect().height-i.naturalWidth/i.naturalHeight)),text:document.body.innerText,alts:[...document.images].map(i=>i.alt),buttons:[...document.querySelectorAll('.cta')].map(a=>({height:a.getBoundingClientRect().height,width:a.getBoundingClientRect().width,url:a.href})),products:[...document.querySelectorAll('[data-product]')].map(d=>{const photo=d.querySelector('.product-photo'),cta=d.querySelector('.cta'),name=d.querySelector('.product-name');return {key:d.dataset.product,photoUrl:photo.href,ctaUrl:cta.href,imageTop:photo.getBoundingClientRect().top,ctaTop:cta.getBoundingClientRect().top,nameWidth:name.getBoundingClientRect().width,nameText:name.textContent}}),textOverflow:[...document.querySelectorAll('h1,h2,h3,p,a')].filter(e=>e.scrollWidth>e.clientWidth+2&&getComputedStyle(e).display!=='inline').map(e=>e.textContent),textWidths:[...document.querySelectorAll('[data-product] > p')].map(e=>e.getBoundingClientRect().width)}));
 assert.equal(result.broken.length,0);assert.ok(result.scroll<=width);assert.equal(result.email,width);assert.ok(result.ratios.every(r=>r<.004));assert.ok(result.buttons.every(b=>b.height>=44&&b.width>=240));assert.deepEqual(result.textOverflow,[]);assert.ok(result.textWidths.every(w=>w>=270));assert.ok(result.products.every(p=>p.photoUrl===p.ctaUrl&&p.imageTop<p.ctaTop));assert.equal(result.products.length,3);assert.ok(!/[-–—]/.test(result.text+result.alts.join('')));assert.ok(!/unsubscribe|contact.first_name|\[\[/.test(html));assert.ok(result.text.includes('KALKES'));assert.ok(result.text.includes('rugsėjo 20 d. imtinai.'));
 const path=new URL(`previews/${name}.png`,root).pathname;await page.screenshot({path,fullPage:true});
 if(name==='desktop')await page.screenshot({path:new URL('PRO7-NL4-review.jpg',root).pathname,fullPage:true,type:'jpeg',quality:90});
 const meta=await sharp(path).metadata(),half=Math.ceil(meta.height/2);const pieces=[];
 for(let i=0;i<2;i++){const height=Math.min(half,meta.height-i*half);pieces.push({input:await sharp(path).extract({left:0,top:i*half,width,height}).png().toBuffer(),left:i*width,top:0})}
 await sharp({create:{width:width*2,height:half,channels:3,background:'white'}}).composite(pieces).png().toFile(new URL(`previews/${name}-inspection.png`,root).pathname);
 results.push({name,...result,text:undefined,alts:undefined});await page.close();
}
writeFileSync(new URL('qa-results.json',root),JSON.stringify({htmlSHA256:sha(html),cssSHA256:sha(css),assetTransport:'Public image requests mapped to identical local files before publishing',cases:results,actualInboxTest:false},null,2));console.log('PASS: six exact HTML browser renders. HTML SHA256 '+sha(html));
}finally{await browser.close()}
