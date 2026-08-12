import { test, expect } from '@playwright/test';
import { ChartsPage } from '../pages/ChartsPage';

test.describe('Charts Tests', () => {

  test('Charts page should be visible', async ({ page }) => {

    const chartsPage = new ChartsPage(page);

    await chartsPage.goto();

    await chartsPage.verifyPageLoaded();
  });

  test('Student Enrollment section should be visible', async ({ page }) => {

    const chartsPage = new ChartsPage(page);

    await chartsPage.goto();

    await chartsPage.verifyStudentEnrollment();
  });

  test('Course Distribution section should be visible', async ({ page }) => {

    const chartsPage = new ChartsPage(page);

    await chartsPage.goto();

    await chartsPage.verifyCourseDistribution();
  });

  test('Export Report button should be visible', async ({ page }) => {

    const chartsPage = new ChartsPage(page);

    await chartsPage.goto();

    await chartsPage.verifyExportReportButton();
  });

});