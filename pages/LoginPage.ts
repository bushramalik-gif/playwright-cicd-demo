import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly togglePassword: Locator;
  readonly rememberMe: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#loginButton');
    this.togglePassword = page.locator('#togglePassword');
    this.rememberMe = page.locator('#remember');
    this.message = page.locator('#message');
  }

  async goto() {
    await this.page.goto('http://127.0.0.1:5500/app/login.html');

    console.log('Current URL:', this.page.url());

    await expect(this.page).toHaveURL(/\/app\/login\.html/);
  }

  async login(username: string, password: string) {
    await this.goto();

    await expect(this.usernameInput).toBeVisible();

    await this.usernameInput.fill(username);

    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  async loginWithDefaultCredentials() {
    await this.login('admin', 'admin123');
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/dashboard\.html/);

    await expect(
      this.page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();
  }

  async togglePasswordVisibility() {
    await this.togglePassword.click();
  }

  async checkRememberMe() {
    await this.rememberMe.check();
  }
}