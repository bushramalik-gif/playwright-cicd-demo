import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {

  test('Valid login should navigate to Dashboard', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.login('admin', 'admin123');

    await expect(page).toHaveURL(/dashboard\.html/);

    await expect(
      page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();
  });

});