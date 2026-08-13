import { expect, test } from '@playwright/test';
import { LoginPage } from '../../../src/pages/auth/LoginPage';
import { DashboardPage } from '../../../src/pages/dashboard/DashboardPage';
import loginTestData from '../../../src/data/datasets/auth/login.json'

test('AUTH-001 - Valid admin login redirects to dashboard',async({page})=>{
    
    const loginPage = new LoginPage(page)
    const dahsboardPage = new DashboardPage(page)
    await page.goto("http://localhost:5173/login")
    await loginPage.login(loginTestData.adminLogin.email,loginTestData.adminLogin.password)
    expect(await dahsboardPage.getAppUserName()).toBe("System Administrator")
    expect(await dahsboardPage.getAppUserRole()).toBe("ADMIN")
    await page.waitForTimeout(3000)
})
