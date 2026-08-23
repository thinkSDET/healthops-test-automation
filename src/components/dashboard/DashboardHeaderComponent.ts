import { Locator, Page } from "@playwright/test";

export class DashboardHeaderComponent {

     readonly appUserName: Locator
     readonly appUserRole: Locator
     readonly logoutButton : Locator
     readonly doctorRequestLink : Locator
     page: Page
    constructor(page: Page) {
        this.page = page
        this.appUserName = this.page.locator("//span[@class='app-user-name']")
        this.appUserRole = this.page.locator("//span[@class='app-user-role']")
        this.logoutButton = this.page.locator("//button[@type='button' and text()=('Logout')]")
        this.doctorRequestLink = this.page.locator("//a//span[text()='Doctor Requests']")
    }

    async logout(){
        await this.page.locator("//button[@class='app-user-trigger']").click()
        this.logoutButton.click()
    }

    async openDoctorRequests(){
        await this.doctorRequestLink.click()
    }

    
}