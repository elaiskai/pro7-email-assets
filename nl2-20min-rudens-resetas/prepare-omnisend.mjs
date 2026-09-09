// Build the HTML and Styles inputs for Omnisend's Custom HTML block.
// node prepare-omnisend.mjs <full pushed asset commit SHA>
import {readFileSync,writeFileSync} from 'node:fs';
const commit=process.argv[2];
if(!/^[0-9a-f]{40}$/.test(commit||'')) throw new Error('Provide the full pushed asset commit SHA.');
const html=readFileSync(new URL('./index.html',import.meta.url),'utf8');
const base='https://raw.githubusercontent.com/elaiskai/pro7-email-assets/'+commit+'/nl2-20min-rudens-resetas/';
const font='font-family:Montserrat,Arial,sans-serif;';
// Scope normal selectors so our styles cannot change the editor or system footer.
const styles=html.match(/<style>([\s\S]*?)<\/style>/)[1].trim()
  .replace(/([^{}]+)\{/g,(whole,prelude)=>{
    const split=prelude.lastIndexOf(';');
    const leading=split>=0?prelude.slice(0,split+1):'';
    const selectors=(split>=0?prelude.slice(split+1):prelude).trim();
    if(selectors.startsWith('@')) return whole;
    const scoped=selectors.split(',').map(s=>{
      s=s.trim();
      if(['html','body',':root'].includes(s)) return '.pro7-email';
      if(s.startsWith('[data-ogsc] ')) return '[data-ogsc] .pro7-email '+s.slice(12);
      return '.pro7-email '+s;
    });
    return leading+'\n'+[...new Set(scoped)].join(',')+'{';
  }).replace('.pro7-email{margin:0!important;', '.pro7-email{margin:0 auto!important;');
let body=html.match(/<body>([\s\S]*?)<\/body>/)[1].trim()
  .replace(/<p class="preheader"[\s\S]*?<\/p>\s*/,'')
  .replace('class="canvas"','class="pro7-email canvas"')
  .replaceAll('src="assets/','src="'+base+'assets/');
body=body.replace(/<td\b([^>]*)>/g,(_,attrs)=>'<td'+(
  attrs.includes('style="')?attrs.replace('style="','style="'+font):attrs+' style="'+font+'"')+'>');
body=body.replace('style="width:100%;table-layout:fixed"','style="'+font+'color:#232832;width:100%;max-width:600px;table-layout:fixed;margin:0 auto"');
const output='<!-- PRO7 NL2. HTML input only. Paste omnisend-styles.css into Styles. Asset commit: '+commit+'. -->\n'+body+'\n';
if(/<!doctype|<head\b|<body\b|<style\b|<div\b|<script\b|src="(?!https:\/\/)/i.test(output)) throw new Error('Unsupported HTML block markup or local asset.');
if(/unsubscribe_link|contact\.first_name/.test(output)) throw new Error('Use the static greeting and Omnisend system footer.');
writeFileSync(new URL('./omnisend.html',import.meta.url),output);
writeFileSync(new URL('./omnisend-styles.css',import.meta.url),styles+'\n');
console.log('Created omnisend.html and omnisend-styles.css with '+[...output.matchAll(/src="https:/g)].length+' public images.');
