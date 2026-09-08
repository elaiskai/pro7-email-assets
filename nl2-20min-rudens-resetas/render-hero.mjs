import {chromium} from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {pathToFileURL} from 'node:url';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:600,height:430},deviceScaleFactor:2});
await page.goto(pathToFileURL('/Users/lucka/Downloads/dropship/pro7-email-assets/nl2-20min-rudens-resetas/hero-build.html').href,{waitUntil:'networkidle'});
await page.evaluate(()=>document.fonts.ready);
await page.screenshot({path:'/Users/lucka/Downloads/dropship/pro7-email-assets/nl2-20min-rudens-resetas/assets/hero-20min.png'});
await browser.close();
