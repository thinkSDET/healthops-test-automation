import { Locator, Page } from "@playwright/test";

export class DashboardPage {

    private readonly appUserName: Locator
    private readonly appUserRole: Locator
    private page: Page
    constructor(page: Page) {
        this.page = page
        this.appUserName = this.page.locator("//span[@class='app-user-name']")
        this.appUserRole = this.page.locator("//span[@class='app-user-role']")
    }

    async getAppUserName(): Promise<string> {
        return await this.appUserName.innerText()
    }

    async getAppUserRole(): Promise<string> {
        return await this.appUserRole.innerText()
    }

}