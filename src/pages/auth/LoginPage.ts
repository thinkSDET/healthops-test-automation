import { Locator, Page } from "@playwright/test";

export class LoginPage {
    
     readonly emailAddress :Locator
     readonly password :Locator
     readonly signIn :Locator
     readonly authError : Locator
     readonly createAccountLink : Locator
     page :Page

    constructor(page :Page){
        this.page = page
        this.emailAddress = this.page.locator("input#email")
        this.password = this.page.locator("input#password")
        this.signIn = this.page.locator("button#loginSubmit")
        this.authError = this.page.locator("//div[@class='auth-error']")
        this.createAccountLink = this.page.locator("button#createAccount")
    }
    
    async login(emailAddress : string, password :string){
            await this.emailAddress.fill(emailAddress)
            await this.password.fill(password)
            await this.signIn.click()
    }

    async openRegistrationForm(){
        await this.createAccountLink.click()
    }
}