import { chromium } from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { pathToFileURL } from 'node:url';
const browser = await chromium.launch({headless:true});
const page = await browser.newPage({viewport:{width:600,height:500},deviceScaleFactor:2});
await page.goto(pathToFileURL('/Users/lucka/Downloads/dropship/pro7-nl1-textile-impregnantas/hero-build.html').href,{waitUntil:'networkidle'});
await page.screenshot({path:'/Users/lucka/Downloads/dropship/pro7-nl1-textile-impregnantas/assets/hero-final.png'});
await browser.close();
