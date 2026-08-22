import { Locator, Page } from "@playwright/test";
export class ResetPassword {

    readonly newPassword: Locator
    readonly confirmPassword: Locator
    readonly resetPasswordButton: Locator
    page: Page

    constructor(page: Page) {
        this.page = page
        this.newPassword = this.page.locator("input#new-password")
        this.confirmPassword = this.page.locator("input#confirm-password")
        this.resetPasswordButton = this.page.locator("//button[@type='submit' and contains(text(), 'Reset Password')]")
    }

    async setNewPassword(newPassword: string,confirmPassword : string) {
        await this.newPassword.fill(newPassword)
        await this.confirmPassword.fill(confirmPassword)
        await this.resetPasswordButton.click()
    }

}