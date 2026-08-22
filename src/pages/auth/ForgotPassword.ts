import { Locator, Page } from "@playwright/test";
export class ForgotPassword {

    readonly emailAddress: Locator
    readonly sendResetInstructionButton: Locator
    readonly continueToResetPasswordButton: Locator
    page: Page

    constructor(page: Page) {
        this.page = page
        this.emailAddress = this.page.locator("input#forgotPasswordEmail")
        this.sendResetInstructionButton = this.page.locator("//button[@type='submit']")
        this.continueToResetPasswordButton = this.page.locator("//button[@type='button' and contains(text(), 'Reset Password')]")
    }

    async requestPasswordReset(email: string) {
        await this.emailAddress.fill(email)
        await this.sendResetInstructionButton.click()
        await this.continueToResetPasswordButton.click()
    }

}