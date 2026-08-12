import { test, expect } from '@playwright/test';
import { SettingsPage } from '../pages/SettingsPage';

test.describe('Settings Tests', () => {

  test('Settings page should be visible', async ({ page }) => {

    const settingsPage = new SettingsPage(page);

    await settingsPage.goto();

    await settingsPage.verifyPageLoaded();
  });


  test('Language dropdown should be available', async ({ page }) => {

    const settingsPage = new SettingsPage(page);

    await settingsPage.goto();

    await settingsPage.verifyLanguageDropdown();
  });


  test('Timezone dropdown should be available', async ({ page }) => {

    const settingsPage = new SettingsPage(page);

    await settingsPage.goto();

    await settingsPage.verifyTimezoneDropdown();
  });


  test('Dark mode toggle should be available', async ({ page }) => {

    const settingsPage = new SettingsPage(page);

    await settingsPage.goto();

    await settingsPage.verifyDarkModeToggle();
  });


  test('Email notification toggle should be available', async ({ page }) => {

    const settingsPage = new SettingsPage(page);

    await settingsPage.goto();

    await settingsPage.verifyEmailNotificationsToggle();
  });


  test('Save Settings button should be available', async ({ page }) => {

    const settingsPage = new SettingsPage(page);

    await settingsPage.goto();

    await settingsPage.verifySaveSettingsButton();
  });


  test('Change Password button should be available', async ({ page }) => {

    const settingsPage = new SettingsPage(page);

    await settingsPage.goto();

    await settingsPage.verifyChangePasswordButton();
  });

});