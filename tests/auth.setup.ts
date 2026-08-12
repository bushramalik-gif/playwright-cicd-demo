import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

  const loginUrl = '/app/login.html';

  await page.goto(loginUrl, {
    waitUntil: 'networkidle',
  });

  console.log('CURRENT URL:', page.url());
  console.log('PAGE TITLE:', await page.title());
  console.log('PAGE HTML:', (await page.locator('body').innerText()).substring(0, 1000));

  await expect(page.locator('#username')).toBeVisible({
    timeout: 15000,
  });

  await expect(page.locator('#password')).toBeVisible({
    timeout: 15000,
  });

  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('admin123');

  await page.locator('#loginButton').click();

  await page.waitForURL('**/dashboard.html');

  await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();

  await page.context().storageState({
    path: authFile,
  });

  console.log('Authentication state saved successfully.');
});
