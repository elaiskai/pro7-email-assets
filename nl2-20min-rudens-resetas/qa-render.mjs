import { chromium } from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const browser = await chromium.launch({headless:true});
const checks = [
  ['desktop',700,'light',false],
  ['mobile',390,'light',false],
  ['narrow',320,'light',false],
  ['mobile-dark',390,'dark',false],
  ['desktop-fallback',700,'light',true],
];
try {
  for (const [name,width,colorScheme,fallback] of checks) {
    const page = await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1,colorScheme});
    if (fallback) await page.route('**/fonts.*',r=>r.abort());
    await page.goto(new URL('./index.html',import.meta.url).href,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    if (fallback) await page.addStyleTag({content:'body,table,td,a,p,h1,h2,h3,div{font-family:Arial,sans-serif!important}'});
    // Local layout simulation only. Omnisend must resolve the tag in contact preview.
    await page.locator('.greeting').evaluate(e=>e.textContent='Sveiki!');
    const result = await page.evaluate(()=>({
      width:innerWidth,
      scroll:document.documentElement.scrollWidth,
      brokenImages:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),
      cards:document.querySelectorAll('.product-card').length,
      wrappedTables:document.querySelectorAll('a table').length,
      buttons:[...document.querySelectorAll('.product-card .button a')].map(a=>{const r=a.getBoundingClientRect();return {y:r.y,width:r.width,height:r.height}}),
      unsubscribe:document.querySelectorAll('a[href*="unsubscribe"]').length
    }));
    assert.equal(result.cards,4);
    assert.equal(result.wrappedTables,0);
    assert.equal(result.unsubscribe,0);
    assert.deepEqual(result.brokenImages,[]);
    assert.ok(result.scroll<=width,`Horizontal overflow in ${name}`);
    assert.ok(result.buttons.every(b=>b.height>=44));
    assert.ok(result.buttons.every(b=>Math.abs(b.width-result.buttons[0].width)<1));
    if(width===700){
      assert.ok(Math.abs(result.buttons[0].y-result.buttons[1].y)<1);
      assert.ok(Math.abs(result.buttons[2].y-result.buttons[3].y)<1);
    }
    await page.screenshot({path:fileURLToPath(new URL(`./preview-${name}.png`,import.meta.url)),fullPage:true});
    console.log(JSON.stringify({preview:name,...result}));
    await page.close();
  }
} finally { await browser.close(); }
