import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Dashboard Tests', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('admin', 'admin123');

        await expect(page).toHaveURL(/dashboard\.html/);
    });

    test('Dashboard should be visible after login', async ({ page }) => {

        const dashboardPage = new DashboardPage(page);

        await expect(dashboardPage.dashboardHeading).toBeVisible();
    });

    test('Dashboard should display student statistics', async ({ page }) => {

        await expect(page.getByText('Total Students')).toBeVisible();
        await expect(page.getByText('Active Students')).toBeVisible();
        await expect(page.getByText('Total Courses')).toBeVisible();
        await expect(page.getByText('Reports')).toBeVisible();
    });

    test('User should be able to logout', async ({ page }) => {

        const dashboardPage = new DashboardPage(page);

        await dashboardPage.logout();

        await expect(page).toHaveURL(/login\.html/);
    });

});