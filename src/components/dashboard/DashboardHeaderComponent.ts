import { Locator, Page } from "@playwright/test";

export class DashboardHeaderComponent {

     readonly appUserName: Locator
     readonly appUserRole: Locator
     page: Page
    constructor(page: Page) {
        this.page = page
        this.appUserName = this.page.locator("//span[@class='app-user-name']")
        this.appUserRole = this.page.locator("//span[@class='app-user-role']")
    }
}