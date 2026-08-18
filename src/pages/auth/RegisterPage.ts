import { Locator, Page } from "@playwright/test"
import { RegistrationData } from '../../types/auth/Registration'

export class RegisterPage {

    readonly firstName: Locator
    readonly lastName: Locator
    readonly emailAddress: Locator
    readonly password: Locator
    readonly confirmPassword: Locator
    readonly accountType: Locator
    readonly dob: Locator
    readonly gender: Locator
    readonly phoneNumber: Locator
    readonly address: Locator
    readonly createAccount: Locator
    readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.firstName = this.page.locator("input#firstName")
        this.lastName = this.page.locator("input#lastName")
        this.emailAddress = this.page.locator("input#email")
        this.password = this.page.locator("input#password")
        this.confirmPassword = this.page.locator("input#confirmPassword")
        this.accountType = this.page.locator("select#role")
        this.dob = this.page.locator("input#dateOfBirth")
        this.gender = this.page.locator("select#gender")
        this.phoneNumber = this.page.locator("input#phone")
        this.address = this.page.locator("input#address")
        this.createAccount = this.page.locator("//button[@type='submit']")
    }

    async register(data: RegistrationData, role: string) {

        await this.firstName.fill(data.firstName)
        await this.lastName.fill(data.lastName)
        await this.emailAddress.fill(data.emailAddress)
        await this.password.fill(data.password)
        await this.confirmPassword.fill(data.confirmPassword)
        await this.accountType.selectOption(data.accountType)
        if (role.toLowerCase() === 'patient') {
            await this.dob.fill(data.dateOfBirth!)
            await this.gender.selectOption(data.gender!)
            await this.phoneNumber.fill(data.phoneNumber!)
            await this.address.fill(data.address!)
        }
        await this.createAccount.click()
    }
}