
import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly dashboardHeading: Locator;
    readonly studentsLink: Locator;
    readonly profileLink: Locator;
    readonly settingsLink: Locator;
    readonly logoutLink: Locator;
    readonly chartsLink: Locator;
    readonly darkModeButton: Locator;
    readonly viewStudentsButton: Locator;
    readonly viewProfileButton: Locator;
    readonly openSettingsButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });

        this.studentsLink = page.getByRole('link', { name: 'Students' });
        this.profileLink = page.getByRole('link', { name: 'Profile' });
        this.settingsLink = page.getByRole('link', { name: 'Settings' });
        this.chartsLink = page.getByRole('link', { name: 'Charts' });
        this.logoutLink = page.getByText('Logout');

        this.darkModeButton = page.getByRole('button', { name: /Dark Mode/i });

        this.viewStudentsButton = page.getByRole('link', { name: 'View Students' });
        this.viewProfileButton = page.getByRole('link', { name: 'View Profile' });
        this.openSettingsButton = page.getByRole('link', { name: 'Open Settings' });
    }

    async goto() {
        await this.page.goto('http://127.0.0.1:5500/app/dashboard.html');
    }

    async logout() {
        await this.logoutLink.click();
    }

    async openStudents() {
        await this.studentsLink.click();
    }

    async openProfile() {
        await this.profileLink.click();
    }

    async openSettings() {
        await this.settingsLink.click();
    }

    async openCharts() {
        await this.chartsLink.click();
    }
}