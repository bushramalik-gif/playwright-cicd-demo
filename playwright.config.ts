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
    [
      'html',
      {
        outputFolder: 'playwright-report',
        open: 'never',
      },
    ],
    ['allure-playwright'],
  ],

  use: {
    // App folder is served directly by http-server
    baseURL: 'http://127.0.0.1:5500',

    // Headless in GitHub Actions, headed locally
    headless: !!process.env.CI,

    viewport: {
      width: 1366,
      height: 768,
    },

    // Capture everything for Allure / GitHub artifacts
    screenshot: 'on',
    video: 'on',
    trace: 'on',

    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  // Start the demo application before Playwright tests
  webServer: {
    command: 'npx http-server ./app -p 5500',
    url: 'http://127.0.0.1:5500/login.html',
    reuseExistingServer: true,
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

        // Reuse login session created by setup
        storageState: 'playwright/.auth/user.json',
      },

      dependencies: ['setup'],
    },
  ],
});
