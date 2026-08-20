import { Locator, Page,expect } from "@playwright/test";

export class ModulePageBase {
    readonly page: Page;
    readonly pageHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeader = page.locator('header.patients-header h1');
    }

     async verifyPage(expectedTitle: string) {
        await expect(this.pageHeader).toHaveText(expectedTitle);
    }
}