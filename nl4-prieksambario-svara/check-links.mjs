import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const root=new URL('./',import.meta.url),html=readFileSync(new URL('omnisend.html',root),'utf8');
const links=[...new Set([...html.matchAll(/href="([^"]+)"/g)].map(m=>m[1]))];
for(const url of links){const r=await fetch(url);assert.equal(r.status,200,url);assert.ok(r.url.startsWith('https://www.pro7.lt/'));console.log(r.status,url)}
const sha=b=>createHash('sha256').update(b).digest('hex');
const qa=JSON.parse(readFileSync(new URL('qa-results.json',root)));assert.equal(qa.htmlSHA256,sha(html));assert.equal(qa.cases.length,6);
if(process.argv.includes('--public')){
 for(const url of [...new Set([...html.matchAll(/src="([^"]+)"/g)].map(m=>m[1]))]){const r=await fetch(url);assert.equal(r.status,200,url);const bytes=Buffer.from(await r.arrayBuffer());assert.equal(sha(bytes),sha(readFileSync(new URL('assets/'+url.split('/').pop(),root))));console.log('Public asset matches',url)}
 const r=await fetch('https://raw.githubusercontent.com/elaiskai/pro7-email-assets/main/nl4-prieksambario-svara/omnisend.html');assert.equal(r.status,200);assert.equal(sha(await r.text()),sha(html));console.log('Published HTML hash matches',sha(html));
}
