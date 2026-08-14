import { test,expect } from '../../../src/fixtures/pageObjectFixture';
import loginTestData from '../../../src/data/datasets/auth/login.json'

test('AUTH-001 - Valid admin login redirects to dashboard',async({loginPage,dashboardHeaderComponent,page})=>{
    
    await page.goto("http://localhost:5173/login")
    await loginPage.login(loginTestData.adminLogin.email,loginTestData.adminLogin.password)
    await expect(page).toHaveURL('http://localhost:5173/dashboard')
    await expect(dashboardHeaderComponent.appUserName).toHaveText("System Administrator")
    await expect(dashboardHeaderComponent.appUserRole).toHaveText("ADMIN")
})
