// Compile the local preview into an Omnisend body fragment with immutable public assets.
// Run after committing and pushing the assets: node prepare-omnisend.mjs <40-character-commit>
import {readFileSync,writeFileSync} from 'node:fs';
const commit=process.argv[2];
if(!/^[0-9a-f]{40}$/.test(commit||'')) throw new Error('Provide the full pushed asset commit SHA.');
const html=readFileSync(new URL('./index.html',import.meta.url),'utf8');
const base='https://raw.githubusercontent.com/elaiskai/pro7-email-assets/'+commit+'/nl2-20min-rudens-resetas/';
const styles=html.match(/<style>[\s\S]*?<\/style>/)[0]
  .replaceAll('html,body','.pro7-email')
  .replaceAll(':root','.pro7-email')
  .replaceAll('body,table,td,a,p,h1,h2,h3,div{','.pro7-email,.pro7-email table,.pro7-email td,.pro7-email a,.pro7-email p,.pro7-email h1,.pro7-email h2,.pro7-email h3,.pro7-email div{');
const outlook=html.match(/<!--\[if mso\]>[\s\S]*?<!\[endif\]-->/)[0];
const body=html.match(/<body>([\s\S]*?)<\/body>/)[1].replaceAll('src="assets/','src="'+base+'assets/');
const output='<!-- PRO7 NL2. Asset commit: '+commit+'. Omnisend supplies its unsubscribe footer. -->\n'+styles+'\n'+outlook+'\n<div class="pro7-email" lang="lt" style="font-family:Montserrat,Arial,sans-serif;background:#edf1ef;color:#232832">\n'+body+'\n</div>\n';
if(/<!doctype|<head\b|<body\b|src="(?!https:\/\/)/i.test(output)) throw new Error('Unsupported import wrapper or local image path.');
if(/unsubscribe_link/.test(output)) throw new Error('Use the Omnisend system footer for this campaign.');
writeFileSync(new URL('./omnisend.html',import.meta.url),output);
console.log('Created omnisend.html with '+[...output.matchAll(/src="https:/g)].length+' public images.');
