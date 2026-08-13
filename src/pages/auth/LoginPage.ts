import { Locator, Page } from "@playwright/test";

export class LoginPage {
    
    private readonly emailAddress :Locator
    private readonly password :Locator
    private readonly signIn :Locator
    private page :Page

    constructor(page :Page){
        this.page = page
        this.emailAddress = page.locator("input#email")
        this.password = page.locator("input#password")
        this.signIn = page.locator("button#loginSubmit")
    }
    
    async login(emailAddress : string, password :string){
            await this.emailAddress.fill(emailAddress)
            await this.password.fill(password)
            await this.signIn.click()
    }
}