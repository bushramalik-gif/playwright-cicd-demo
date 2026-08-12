import { Page, Locator } from '@playwright/test';

export class StudentPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly searchInput: Locator;
    readonly courseDropdown: Locator;
    readonly statusDropdown: Locator;
    readonly addStudentButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.heading = page.getByRole('heading', { name: 'Students' });

        this.searchInput = page.getByPlaceholder(
            'Search by name, ID or email...'
        );

        this.courseDropdown = page.locator('select').nth(0);
        this.statusDropdown = page.locator('select').nth(1);

        this.addStudentButton = page.getByRole('button', {
            name: /Add Student/i
        });
    }

    async goto() {
        await this.page.goto('http://127.0.0.1:5500/app/student.html');
    }

    async searchStudent(value: string) {
        await this.searchInput.fill(value);
    }

    async selectCourse(course: string) {
        await this.courseDropdown.selectOption({ label: course });
    }

    async selectStatus(status: string) {
        await this.statusDropdown.selectOption({ label: status });
    }
}
