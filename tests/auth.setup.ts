import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

  // Open login page through the configured baseURL
  await page.goto('login.html');

  // Verify login fields
  await expect(page.locator('#username')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();

  // Enter credentials
  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('admin123');

  // Login
  await page.locator('#loginButton').click();

  // Verify successful login
  await page.waitForURL('**/dashboard.html');

  await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();

  // Save authenticated session
  await page.context().storageState({
    path: authFile,
  });

  console.log('Authentication state saved successfully.');
});
