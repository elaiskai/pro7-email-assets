import {chromium} from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {pathToFileURL} from 'node:url';
const browser = await chromium.launch({headless:true});
const page = await browser.newPage({viewport:{width:300,height:104},deviceScaleFactor:2});
await page.goto(pathToFileURL('/Users/lucka/Downloads/dropship/pro7-email-assets/nl2-20min-rudens-resetas/logo-build.html').href,{waitUntil:'networkidle'});
await page.screenshot({path:'/Users/lucka/Downloads/dropship/pro7-email-assets/nl2-20min-rudens-resetas/assets/pro7-logo-safe.png',omitBackground:true});
await browser.close();
