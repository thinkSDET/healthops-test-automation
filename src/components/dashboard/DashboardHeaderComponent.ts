import { Locator, Page } from "@playwright/test";

export class DashboardHeaderComponent {

     readonly appUserName: Locator
     readonly appUserRole: Locator
     readonly logoutButton : Locator
     page: Page
    constructor(page: Page) {
        this.page = page
        this.appUserName = this.page.locator("//span[@class='app-user-name']")
        this.appUserRole = this.page.locator("//span[@class='app-user-role']")
        this.logoutButton = this.page.locator("//button[@type='button' and text()=('Logout')]")
    }

    async logout(){
        await this.page.locator("//button[@class='app-user-trigger']").click()
        this.logoutButton.click()
    }
}