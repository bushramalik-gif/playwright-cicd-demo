import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { StudentPage } from '../pages/StudentPage';

test.describe('Student Tests', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('admin', 'admin123');

        const studentPage = new StudentPage(page);

        await studentPage.goto();
    });

    test('Students page should be visible', async ({ page }) => {

        const studentPage = new StudentPage(page);

        await expect(studentPage.heading).toBeVisible();
    });

    test('Student search should work', async ({ page }) => {

        const studentPage = new StudentPage(page);

        await studentPage.searchStudent('Ali');

        await expect(studentPage.searchInput).toHaveValue('Ali');
    });

    test('Course filter should be available', async ({ page }) => {

        const studentPage = new StudentPage(page);

        await expect(studentPage.courseDropdown).toBeVisible();
    });

    test('Status filter should be available', async ({ page }) => {

        const studentPage = new StudentPage(page);

        await expect(studentPage.statusDropdown).toBeVisible();
    });

});