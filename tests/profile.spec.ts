import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';

test.describe('Profile Tests', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('admin', 'admin123');

        const profilePage = new ProfilePage(page);

        await profilePage.goto();
    });

    test('Profile page should be visible', async ({ page }) => {

        const profilePage = new ProfilePage(page);

        await expect(profilePage.heading).toBeVisible();
    });

    test('Profile should display admin information', async ({ page }) => {

        const profilePage = new ProfilePage(page);

        await expect(profilePage.fullName).toHaveValue('Admin User');
        await expect(profilePage.username).toHaveValue('admin');
        await expect(profilePage.email).toHaveValue('admin@example.com');
    });

    test('Edit Profile button should be visible', async ({ page }) => {

        const profilePage = new ProfilePage(page);

        await expect(profilePage.editProfileButton).toBeVisible();
    });

});