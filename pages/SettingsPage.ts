import { Page, Locator, expect } from '@playwright/test';

export class SettingsPage {
  readonly page: Page;

  readonly heading: Locator;
  readonly languageDropdown: Locator;
  readonly timezoneDropdown: Locator;
  readonly darkModeToggle: Locator;
  readonly emailNotificationsToggle: Locator;
  readonly saveSettingsButton: Locator;
  readonly changePasswordButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Page heading - exact to avoid "General Settings" conflict
    this.heading = page.getByRole('heading', {
      name: 'Settings',
      exact: true,
    });

    // Exact IDs from settings.html
    this.languageDropdown = page.locator('#languageSelect');
    this.timezoneDropdown = page.locator('#timezoneSelect');
    this.darkModeToggle = page.locator('#darkModeToggle');
    this.emailNotificationsToggle = page.locator(
      '#emailNotificationToggle'
    );

    this.saveSettingsButton = page.locator('#saveSettingsBtn');
    this.changePasswordButton = page.locator('#changePasswordBtn');
  }

  async goto() {
    await this.page.goto(
      'http://127.0.0.1:5500/app/settings.html'
    );

    console.log('Settings URL:', this.page.url());

    await expect(this.page).toHaveURL(
      /\/app\/settings\.html$/
    );
  }

  async verifyPageLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async verifyLanguageDropdown() {
    await expect(this.languageDropdown).toBeVisible();
    await expect(this.languageDropdown).toBeEnabled();
  }

  async verifyTimezoneDropdown() {
    await expect(this.timezoneDropdown).toBeVisible();
    await expect(this.timezoneDropdown).toBeEnabled();
  }

  async verifyDarkModeToggle() {
    await expect(this.darkModeToggle).toBeVisible();
    await expect(this.darkModeToggle).toBeEnabled();
  }

  async verifyEmailNotificationsToggle() {
    await expect(this.emailNotificationsToggle).toBeVisible();
    await expect(this.emailNotificationsToggle).toBeEnabled();
  }

  async verifySaveSettingsButton() {
    await expect(this.saveSettingsButton).toBeVisible();
    await expect(this.saveSettingsButton).toBeEnabled();
  }

  async verifyChangePasswordButton() {
    await expect(this.changePasswordButton).toBeVisible();
    await expect(this.changePasswordButton).toBeEnabled();
  }
}