import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  timeout: 30000,

  expect: {
    timeout: 10000,
  },

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never',
    }],
    ['allure-playwright'],
  ],

  use: {
    baseURL: 'http://127.0.0.1:5500/app',

    headless: !!process.env.CI,

    viewport: {
      width: 1366,
      height: 768,
    },

    screenshot: 'on',
    video: 'on',
    trace: 'on',

    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  // Start the demo application automatically
  // This is required for GitHub Actions because
  // localhost:5500 does not exist on the GitHub runner.
  webServer: {
    command: 'npx http-server . -p 5500',
    url: 'http://127.0.0.1:5500/app/login.html',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});
