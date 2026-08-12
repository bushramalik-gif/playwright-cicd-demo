import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
 await page.goto('/login.html');

  await expect(page.locator('#username')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();

  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('admin123');

  await page.locator('#loginButton').click();

  await page.waitForURL('**/dashboard.html');

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  await page.context().storageState({ path: authFile });

  console.log('Authentication state saved successfully.');
});
