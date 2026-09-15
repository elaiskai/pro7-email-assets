import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {chromium} from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=new URL('./',import.meta.url);
const top=readFileSync(new URL('omnisend-top.html',root),'utf8');
const bottom=readFileSync(new URL('omnisend-bottom.html',root),'utf8');
const css=readFileSync(new URL('omnisend-styles.css',root),'utf8');
const both=top+bottom;
assert.ok(!/<!doctype|<html|<head|<body|<script|<style|PERŽIŪROS VIETA|unsubscribe|contact.first_name/i.test(both));
assert.ok(!/body\s*\{/.test(css));
const images=[...both.matchAll(/src="([^"]+)"/g)].map(m=>m[1]);
assert.equal(images.length,10);
for(const src of images)assert.ok(src.startsWith('https://raw.githubusercontent.com/elaiskai/pro7-email-assets/aab87f39e6e31a00540e6d946c9a26675ca6fff0/nl3-sos-kalkes/assets/'));
const checks=await Promise.all(images.map(async url=>{const r=await fetch(url);assert.equal(r.status,200,url);assert.ok(r.headers.get('content-type').startsWith('image/'));return {url,status:r.status,type:r.headers.get('content-type')}}));
const browser=await chromium.launch({headless:true});
try{
for(const width of [320,600]){
const page=await browser.newPage({viewport:{width:1200,height:1000}});
await page.setContent(`<html><head><style>${css}</style></head><body><div style="width:${width}px;margin:auto">${top}<p style="text-align:center">Platformos kodo bloko patikros vieta</p>${bottom}</div><p id="probe" style="color:rgb(123,45,67)">Outside</p></body></html>`,{waitUntil:'networkidle'});
const result=await page.evaluate(()=>({broken:[...document.images].filter(i=>!i.complete||!i.naturalWidth).length,widths:[...document.querySelectorAll('.pro7-email')].map(t=>t.getBoundingClientRect().width),probe:getComputedStyle(document.getElementById('probe')).color}));
assert.equal(result.broken,0);assert.ok(result.widths.every(w=>w<=width));assert.equal(result.probe,'rgb(123, 45, 67)');await page.close();
}
}finally{await browser.close()}
writeFileSync(new URL('qa-public-results.json',root),JSON.stringify({assetCommit:'aab87f39e6e31a00540e6d946c9a26675ca6fff0',images:checks,hostWidths:[320,600],platformCodeNotTested:true},null,2));
console.log('PASS: 10 public images HTTP 200; two scoped HTML fragments render in 320px and 600px hosts.');
