import { chromium } from '/Users/lucka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { pathToFileURL } from 'node:url';

const browser = await chromium.launch({ headless: true });
for (const [name, width, height] of [['desktop', 700, 2200], ['mobile', 390, 2200]]) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL('/Users/lucka/Downloads/dropship/pro7-nl1-textile-impregnantas/index.html').href, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `/Users/lucka/Downloads/dropship/pro7-nl1-textile-impregnantas/preview-${name}.png`, fullPage: true });
}
await browser.close();
