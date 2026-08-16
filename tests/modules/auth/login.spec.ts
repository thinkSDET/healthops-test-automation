import { test,expect } from '../../../src/fixtures/customFixtures';

test('AUTH-001 - Valid admin login redirects to dashboard',async({loginPage,dashboardHeaderComponent,page,login})=>{
    await page.goto("http://localhost:5173/login")
    await loginPage.login(login.admin.valid.email,login.admin.valid.password)
    await expect(page).toHaveURL('http://localhost:5173/dashboard')
    await expect(dashboardHeaderComponent.appUserName).toHaveText("System Administrator")
    await expect(dashboardHeaderComponent.appUserRole).toHaveText("ADMIN")
})


test('AUTH-003 - Wrong password shows error',async({loginPage,page,login})=>{
    await page.goto("http://localhost:5173/login")
    await loginPage.login(login.admin.wrongPassword.email,login.admin.wrongPassword.password)
    await expect(page).toHaveURL('http://localhost:5173/login')
    await expect(loginPage.authError).toHaveText("Invalid email or password")
})
