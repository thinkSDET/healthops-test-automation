import { DashboardModules } from '../../../src/data/constants/dashboardModules'
import { expect, test } from '../../../src/fixtures/customFixtures'

test('E2E-020: Admin creates Doctor and completes activation and login', async ({ page, loginPage, login, validDoctor, dashboardPage, doctorsPage, forgotPassword, resetPassword }) => {
    await page.goto("http://localhost:5173/login")
    await loginPage.login(login.admin.valid.email, login.admin.valid.password)
    await dashboardPage.dashboardModuleCardComponent.clickModule(DashboardModules.DOCTORS)
    await doctorsPage.CreateDoctor(validDoctor)
    await doctorsPage.searchDoctor(validDoctor.doctorCode);
    await expect(doctorsPage.doctorStatus).toHaveText("INACTIVE")
    await dashboardPage.dashBoardHeader.logout()
    await loginPage.login(validDoctor.email, "Random")
    await expect(loginPage.authError).toHaveText("ACCOUNT_ACTIVATION_REQUIRED")
    await loginPage.openForgotPassword()
    await forgotPassword.requestPasswordReset(validDoctor.email)
    await resetPassword.setNewPassword("12345678", "12345678")
    await loginPage.login(login.admin.valid.email, login.admin.valid.password)
    await dashboardPage.dashboardModuleCardComponent.clickModule(DashboardModules.DOCTORS)
    await doctorsPage.searchDoctor(validDoctor.doctorCode);
    await expect(doctorsPage.doctorStatus).toHaveText("ACTIVE")
    await dashboardPage.dashBoardHeader.logout()
    await loginPage.login(validDoctor.email, "12345678")
    await expect(dashboardPage.dashBoardHeader.appUserRole).toHaveText("DOCTOR")

})