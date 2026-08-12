import { Page, Locator, expect } from '@playwright/test';

export class ChartsPage {
  readonly page: Page;

  readonly heading: Locator;
  readonly studentEnrollment: Locator;
  readonly courseDistribution: Locator;
  readonly exportReportButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Main page heading
    this.heading = page.getByRole('heading', {
      name: /Analytics|Charts/i
    });

    // Specific chart headings
    this.studentEnrollment = page.getByRole('heading', {
      name: /Student Enrollment/i
    }).first();

    this.courseDistribution = page.getByRole('heading', {
      name: 'Course Distribution',
      exact: true
    });

    // Export Report button
    this.exportReportButton = page.getByRole('button', {
      name: /Export Report/i
    });
  }

  async goto() {
    await this.page.goto(
      'http://127.0.0.1:5500/app/charts.html'
    );

    console.log('Charts URL:', this.page.url());

    await expect(this.page).toHaveURL(
      /\/app\/charts\.html$/
    );
  }

  async verifyPageLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async verifyStudentEnrollment() {
    await expect(
      this.studentEnrollment
    ).toBeVisible();
  }

  async verifyCourseDistribution() {
    await expect(
      this.courseDistribution
    ).toBeVisible();
  }

  async verifyExportReportButton() {
    await expect(
      this.exportReportButton
    ).toBeVisible();
  }
}