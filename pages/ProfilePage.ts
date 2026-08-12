import { Page, Locator, expect } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly editProfileButton: Locator;

  readonly fullName: Locator;
  readonly username: Locator;
  readonly email: Locator;
  readonly phone: Locator;
  readonly department: Locator;
  readonly role: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole('heading', { name: 'My Profile' });

    this.editProfileButton = page.getByRole('button', {
      name: /Edit Profile/i
    });

    // Read-only inputs / displayed values
    this.fullName = page.locator('#fullName');
    this.username = page.locator('#username');
    this.email = page.locator('#email');
    this.phone = page.locator('#phone');
    this.department = page.locator('#department');
    this.role = page.locator('#role');
  }

  async goto() {
    await this.page.goto('http://127.0.0.1:5500/app/profile.html');
  }

  async verifyProfileInformation() {
    await expect(this.fullName).toHaveValue('Admin User');
    await expect(this.username).toHaveValue('admin');
    await expect(this.email).toHaveValue('admin@example.com');
    await expect(this.phone).toHaveValue('+92 300 1234567');
    await expect(this.department).toHaveValue('Administration');
    await expect(this.role).toHaveValue('Administrator');
  }
}