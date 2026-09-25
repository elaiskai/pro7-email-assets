import fs from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {chromium} from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import sharp from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs';
process.chdir(new URL('./',import.meta.url).pathname);
const html=fs.readFileSync('newsletter.html','utf8'),hash=createHash('sha256').update(html).digest('hex');fs.mkdirSync('previews',{recursive:true});
const browser=await chromium.launch();const results=[];
try {for(const [name,width,strip,dark] of [['desktop',600,false,false],['mobile320',320,false,false],['mobile390',390,false,false],['mobile430',430,false,false],['nohead320',320,true,false],['dark390',390,false,true]]){
 const page=await browser.newPage({viewport:{width,height:900},colorScheme:dark?'dark':'light'});
 await page.route('https://raw.githubusercontent.com/elaiskai/pro7-email-assets/main/2026-09-25-super-cleaner/*',r=>r.fulfill({path:process.cwd()+'/'+r.request().url().split('/').pop()}));
 await page.setContent(strip?html.replace(/<style>[\s\S]*?<\/style>/g,''):html,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 const r=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,email:document.querySelector('.email').getBoundingClientRect().width,broken:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),ratio:[...document.images].map(i=>Math.abs(i.getBoundingClientRect().width/i.getBoundingClientRect().height-i.naturalWidth/i.naturalHeight)),buttons:[...document.querySelectorAll('.cta')].map(i=>i.getBoundingClientRect().height),overflow:[...document.querySelectorAll('p,h1,h2,h3,a')].filter(i=>getComputedStyle(i).display!=='inline'&&i.scrollWidth>i.clientWidth+2).map(i=>i.textContent),text:document.body.innerText,alt:[...document.images].map(i=>i.alt).join(' ')}));
 assert.ok(r.scroll<=width);assert.ok(r.email<=600);assert.deepEqual(r.broken,[]);assert.deepEqual(r.overflow,[]);assert.ok(r.ratio.every(x=>x<.015));assert.ok(r.buttons.every(h=>h>=44));assert.ok(!/[-–—]/.test(r.text+r.alt));assert.ok(!/unsubscribe|KALKES|contact.first_name/.test(html));
 await page.screenshot({path:`previews/${name}.png`,fullPage:true});if(name==='desktop')await page.screenshot({path:'PRO7-perziura.jpg',fullPage:true,type:'jpeg',quality:90});
 const meta=await sharp(`previews/${name}.png`).metadata(),parts=Math.ceil(meta.height/1800),h=Math.ceil(meta.height/parts);const tiles=[];
 for(let i=0;i<parts;i++)tiles.push({input:await sharp(`previews/${name}.png`).extract({left:0,top:i*h,width,height:Math.min(h,meta.height-i*h)}).png().toBuffer(),left:i*width,top:0});
 await sharp({create:{width:width*parts,height:h,channels:3,background:'white'}}).composite(tiles).png().toFile(`previews/${name}-inspect.png`);
 results.push({name,width,...r,text:undefined,alt:undefined});await page.close();
}fs.writeFileSync('qa-results.json',JSON.stringify({htmlSHA256:hash,cases:results,actualInboxTest:false,visualReview:'pending'},null,2));console.log('PASS '+hash)}finally{await browser.close()}
