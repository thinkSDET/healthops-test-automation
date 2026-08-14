import { Locator, Page } from "@playwright/test";

export class LoginPage {
    
    private readonly emailAddress :Locator
    private readonly password :Locator
    private readonly signIn :Locator
    private page :Page

    constructor(page :Page){
        this.page = page
        this.emailAddress = this.page.locator("input#email")
        this.password = this.page.locator("input#password")
        this.signIn = this.page.locator("button#loginSubmit")
    }
    
    async login(emailAddress : string, password :string){
            await this.emailAddress.fill(emailAddress)
            await this.password.fill(password)
            await this.signIn.click()
    }
}