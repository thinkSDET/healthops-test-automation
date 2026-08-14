import { test,expect } from '../../../src/fixtures/pageObjectFixture';
import loginTestData from '../../../src/data/datasets/auth/login.json'

test('AUTH-001 - Valid admin login redirects to dashboard',async({loginPage,dashboardPage,page})=>{
    
    await page.goto("http://localhost:5173/login")
    await loginPage.login(loginTestData.adminLogin.email,loginTestData.adminLogin.password)
    await expect(page).toHaveURL('http://localhost:5173/dashboard')
    expect(await dashboardPage.getAppUserName()).toBe("System Administrator")
    expect(await dashboardPage.getAppUserRole()).toBe("ADMIN")
})
