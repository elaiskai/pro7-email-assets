// Regression test for an HTML block inside a narrower editor container.
// This simulates browser layout, not Omnisend's sanitizer or real email clients.
import {chromium} from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const html=readFileSync(new URL('./omnisend.html',import.meta.url),'utf8');
const css=readFileSync(new URL('./omnisend-styles.css',import.meta.url),'utf8');
assert.ok(!/<(?:style|head|body|div|script)\b|<!doctype|contact\.first_name|unsubscribe_link/i.test(html));
assert.ok(!/<\/?style\b/i.test(css));
const urls=[...html.matchAll(/src="([^"]+)"/g)].map(m=>m[1]);
assert.equal(urls.length,12);
assert.ok(!/1283-pro7|500 ml|8,96/.test(html),'Old Glass 500 ml variant must not remain');
assert.ok(html.includes('Americol Glass &amp; Mirror, 750 ml'));
assert.ok(html.includes('11,23 €'));
assert.equal((html.match(/class="proof"/g)||[]).length,3,'One proof pair per product');
assert.ok(!/before-super-cleaner-email|after-super-cleaner-email|Siena prieš|Siena po/.test(html),'Old wall proof removed');
assert.ok(html.includes('super-cleaner-chairs-before-email.jpg')&&html.includes('super-cleaner-chairs-after-email.jpg'));
assert.ok(html.indexOf('super-cleaner-chairs-before-email.jpg')<html.indexOf('super-cleaner-chairs-after-email.jpg'),'Chair proof order: before, after');
assert.ok(html.indexOf('kitchen-degreaser-before-email.jpg')<html.indexOf('kitchen-degreaser-after-email.jpg'),'Kitchen proof order: before, after');
assert.ok(urls.every(u=>u.startsWith('https://raw.githubusercontent.com/elaiskai/pro7-email-assets/')));
const browser=await chromium.launch();
const cases=[
  ['editor-600',1200,600,true,'light'],
  ['editor-390',1200,390,true,'light'],
  ['editor-320',1200,320,true,'light'],
  ['iframe-600',600,600,true,'light'],
  ['phone-390',390,390,true,'light'],
  ['phone-320',320,320,true,'light'],
  ['phone-dark',390,390,true,'dark'],
  ['no-css-600',1200,600,false,'light'],
  ['no-css-320',320,320,false,'light'],
  ['wide-host',1200,800,true,'light'],
];
try {
  for(const [name,viewport,width,styles,colorScheme] of cases) {
    const page=await browser.newPage({viewport:{width:viewport,height:1000},colorScheme});
    await page.setContent('<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1">'+
      (styles?'<style>'+css+'</style>':'')+'</head><body style="margin:0;background:#ddd">'+
      '<div id="host" style="width:'+width+'px">'+html+'</div><p id="outside" style="color:rgb(123,45,67);font-family:serif">System footer probe</p></body></html>',{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    const result=await page.evaluate(()=>{
      const box=e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,right:r.right}};
      const root=document.querySelector('.pro7-email');
      const bounds=box(root);
      return {
        host:box(document.querySelector('#host')),canvas:bounds,shell:box(document.querySelector('.shell')),
        hostScroll:document.querySelector('#host').scrollWidth,
        outsideColor:getComputedStyle(document.querySelector('#outside')).color,
        brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).length,
        greeting:document.querySelector('.greeting').textContent,
        cards:[...document.querySelectorAll('.product-card')].map(box),
        buttons:[...document.querySelectorAll('.product-card .button a')].map(box),
        overflow:[...root.querySelectorAll('table,img,p,h2,h3,a')].filter(e=>{
          const r=e.getBoundingClientRect();return r.width>0&&(r.right>bounds.right+1||r.x<bounds.x-1);
        }).map(e=>e.tagName+'.'+e.className)
      };
    });
    assert.equal(result.canvas.width,Math.min(width,600),name+': canvas width');
    assert.equal(result.shell.width,Math.min(width,600),name+': shell width');
    assert.equal(result.canvas.x,Math.max(0,(width-600)/2),name+': centered');
    assert.ok(result.hostScroll<=width,name+': host overflow');
    assert.deepEqual(result.overflow,[],name+': inner overflow');
    assert.equal(result.brokenImages,0,name+': images');
    assert.equal(result.outsideColor,'rgb(123, 45, 67)',name+': scope');
    assert.equal(result.greeting,'Sveiki,');
    assert.equal(result.cards.length,4);
    assert.ok(result.buttons.every(b=>b.height>=44));
    if(width>=600) {
      assert.equal(result.cards[0].y,result.cards[1].y,name+': desktop pair');
      assert.equal(result.buttons[0].y,result.buttons[1].y,name+': CTA alignment');
      assert.equal(result.buttons[2].y,result.buttons[3].y,name+': CTA alignment');
    } else {
      assert.ok(result.cards.every((b,i)=>!i||b.y>=result.cards[i-1].y+result.cards[i-1].height),name+': mobile stacking');
    }
    if(['editor-600','editor-390','phone-dark'].includes(name)) await page.locator('#host').screenshot({path:fileURLToPath(new URL('./preview-omnisend-'+name+'.png',import.meta.url))});
    console.log(JSON.stringify({name,canvas:result.canvas.width,hostScroll:result.hostScroll,overflow:result.overflow,brokenImages:result.brokenImages,columns:width>=600?2:1}));
    await page.close();
  }
} finally {await browser.close();}
