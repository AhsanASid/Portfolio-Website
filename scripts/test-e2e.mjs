import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function runE2ETests() {
  const screenshotsDir = path.resolve('screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });

  console.log('1. Navigating to http://localhost:4321/Portfolio-Website/ ...');
  const response = await page.goto('http://localhost:4321/Portfolio-Website/', {
    waitUntil: 'networkidle',
  });

  if (!response || response.status() !== 200) {
    throw new Error(`Failed to load page: status ${response?.status()}`);
  }
  console.log('✓ Page loaded with status 200');

  // Verify Sections exist
  console.log('2. Verifying all sections render correctly...');
  const sectionIds = ['about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
  for (const id of sectionIds) {
    const el = await page.$(`#${id}`);
    if (!el) throw new Error(`Missing section #${id}`);
  }
  console.log('✓ All 6 major sections rendered in DOM');

  // Verify Links
  console.log('3. Verifying key links and endpoints...');
  const links = await page.$$eval('a', (anchors) =>
    anchors.map((a) => ({ href: a.getAttribute('href'), text: a.innerText.trim() }))
  );

  const hasGithub = links.some((l) => l.href?.includes('github.com/AhsanASid'));
  const hasLinkedIn = links.some((l) => l.href?.includes('linkedin.com/in/ahsan-ahmad-siddiqui'));
  const hasResume = links.some((l) => l.href?.includes('Ahsan-Ahmad-Siddiqui-Resume.pdf'));
  const hasCertVerify = links.some((l) => l.href?.includes('details/certifications/'));

  if (!hasGithub) throw new Error('Missing GitHub profile link');
  if (!hasLinkedIn) throw new Error('Missing LinkedIn profile link');
  if (!hasResume) throw new Error('Missing Resume download link');
  if (!hasCertVerify) throw new Error('Missing LinkedIn Certifications verification link');
  console.log('✓ All social, resume download, and certification links verified');

  // Test Theme Toggle
  console.log('4. Testing Dark/Light mode toggle switch...');
  const isInitiallyDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  if (!isInitiallyDark) throw new Error('Default theme should be dark mode');

  await page.click('#theme-toggle');
  await page.waitForTimeout(200);
  const isLight = await page.evaluate(() => document.documentElement.classList.contains('light'));
  if (!isLight) throw new Error('Theme did not switch to light mode');

  await page.click('#theme-toggle');
  await page.waitForTimeout(200);
  const isDarkAgain = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  if (!isDarkAgain) throw new Error('Theme did not return to dark mode');
  console.log('✓ Dark/Light mode toggle functions seamlessly');

  // Test Interactive Architecture Phase Switcher
  console.log('5. Testing Interactive Phase Switcher (CloudOps)...');
  await page.click('button[data-phase="2"]');
  await page.waitForTimeout(150);
  const phase2Visible = await page.isVisible('#phase-content-2');
  const phase1Hidden = !(await page.isVisible('#phase-content-1'));
  if (!phase2Visible || !phase1Hidden) throw new Error('Phase 2 transition failed');

  await page.click('button[data-phase="5"]');
  await page.waitForTimeout(150);
  const phase5Visible = await page.isVisible('#phase-content-5');
  if (!phase5Visible) throw new Error('Phase 5 transition failed');
  console.log('✓ Interactive architecture diagram phase switching verified');

  // Test Email Copy Interaction
  console.log('6. Testing Email Copy-to-Clipboard...');
  await page.click('#hero-copy-email-btn');
  await page.waitForTimeout(100);
  const copyToastText = await page.innerText('#hero-copy-email-text');
  console.log(`✓ Email copy button response: "${copyToastText}"`);

  // Verify Console Errors
  if (consoleErrors.length > 0) {
    throw new Error(`Console errors detected: ${JSON.stringify(consoleErrors)}`);
  }
  console.log('✓ Zero console errors detected');

  // Breakpoints Screenshots
  console.log('7. Capturing screenshots across all 4 breakpoints...');
  const breakpoints = [
    { name: 'mobile-360', width: 360, height: 800 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'laptop-1024', width: 1024, height: 768 },
    { name: 'desktop-1440', width: 1440, height: 900 },
  ];

  for (const bp of breakpoints) {
    await page.setViewportSize({ width: bp.width, height: bp.height });
    await page.waitForTimeout(300);
    const screenshotPath = path.join(screenshotsDir, `${bp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`✓ Saved ${bp.name}.png (${bp.width}x${bp.height})`);
  }

  // Also capture a Light Mode screenshot
  await page.click('#theme-toggle');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(screenshotsDir, 'desktop-1440-light.png'), fullPage: true });
  console.log('✓ Saved desktop-1440-light.png');

  await browser.close();
  console.log('\nAll Playwright E2E verification tests passed successfully!');
}

runE2ETests().catch((err) => {
  console.error('E2E Test Failed:', err);
  process.exit(1);
});
