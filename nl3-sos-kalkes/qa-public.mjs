import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {chromium} from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=new URL('./',import.meta.url);
const top=readFileSync(new URL('omnisend-top.html',root),'utf8');
const bottom=readFileSync(new URL('omnisend-bottom.html',root),'utf8');
const css=readFileSync(new URL('omnisend-styles.css',root),'utf8');
const both=readFileSync(new URL('omnisend.html',root),'utf8');
const hero=readFileSync(new URL('hero-omnisend.html',root),'utf8');
assert.equal((top+bottom).replace(/\s/g,''),both.replace(/\s/g,''));
assert.ok(!/<!doctype|<html|<head|<body|<script|<style|PERŽIŪROS VIETA|unsubscribe|contact.first_name/i.test(both));
assert.ok(!/body\s*\{/.test(css));
const images=[...both.matchAll(/src="([^"]+)"/g)].map(m=>m[1]);
assert.equal(images.length,11);
const assetCommit=images[0].match(/pro7-email-assets\/([a-f0-9]{40})\//)[1];
for(const src of images)assert.ok(src.startsWith(`https://raw.githubusercontent.com/elaiskai/pro7-email-assets/${assetCommit}/nl3-sos-kalkes/assets/`));
assert.ok(hero.includes(images[0]));
assert.ok(both.includes('>KALKES</p>'));
assert.ok(both.includes('iki rugsėjo 20 d. imtinai.'));
assert.ok(!/asmenini|COUPON_SLOT/.test(both));
const checks=await Promise.all(images.map(async url=>{const r=await fetch(url);assert.equal(r.status,200,url);assert.ok(r.headers.get('content-type').startsWith('image/'));return {url,status:r.status,type:r.headers.get('content-type')}}));
const browser=await chromium.launch({headless:true});
try{
for(const width of [320,600]){
const page=await browser.newPage({viewport:{width:1200,height:1000}});
await page.setContent(`<html><head><style>${css}</style></head><body><div style="width:${width}px;margin:auto">${both}</div><p id="probe" style="color:rgb(123,45,67)">Outside</p></body></html>`,{waitUntil:'networkidle'});
const result=await page.evaluate(()=>({broken:[...document.images].filter(i=>!i.complete||!i.naturalWidth).length,widths:[...document.querySelectorAll('.pro7-email')].map(t=>t.getBoundingClientRect().width),probe:getComputedStyle(document.getElementById('probe')).color}));
assert.equal(result.broken,0);assert.ok(result.widths.every(w=>w<=width));assert.equal(result.probe,'rgb(123, 45, 67)');await page.close();
}
}finally{await browser.close()}
writeFileSync(new URL('qa-public-results.json',root),JSON.stringify({assetCommit,images:checks,hostWidths:[320,600],platformCodeNotTested:true},null,2));
console.log('PASS: 11 public images HTTP 200; full email renders in 320px and 600px hosts.');
