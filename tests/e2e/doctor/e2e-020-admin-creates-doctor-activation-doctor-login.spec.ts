import { DashboardModules } from '../../../src/data/constants/dashboardModules'
import { expect, test } from '../../../src/fixtures/customFixtures'

test('E2E-020: Admin creates Doctor and completes activation and login', async ({
    page,
    loginPage,
    login,
    validDoctor,
    dashboardPage,
    doctorsPage,
    forgotPassword,
    resetPassword
}) => {
    const newDoctorPassword = '12345678';
    const randomPassword = '123456'
    
    await test.step('Create Doctor as Admin', async () => {
        await page.goto("http://localhost:5173/login")
        await loginPage.login(login.admin.valid.email, login.admin.valid.password);
        await dashboardPage.dashboardModuleCardComponent.clickModule(DashboardModules.DOCTORS);
        await doctorsPage.createDoctor(validDoctor);
    });

    await test.step('Verify Doctor is inactive', async () => {
        await doctorsPage.searchDoctor(validDoctor.doctorCode);
        await expect(doctorsPage.doctorStatus).toHaveText('INACTIVE');
    });

    await test.step('Verify Doctor cannot login before activation', async () => {
        await dashboardPage.dashBoardHeader.logout();
        await loginPage.login(validDoctor.email, randomPassword);
        await expect(loginPage.authError).toHaveText('ACCOUNT_ACTIVATION_REQUIRED1');
    });

    await test.step('Activate Doctor through password reset', async () => {
        await loginPage.openForgotPassword();
        await forgotPassword.requestPasswordReset(validDoctor.email);
        await resetPassword.setNewPassword(newDoctorPassword, newDoctorPassword);
    });

    await test.step('Verify Doctor is active after activation', async () => {
        await loginPage.login(login.admin.valid.email, login.admin.valid.password);

        await dashboardPage.dashboardModuleCardComponent.clickModule(DashboardModules.DOCTORS);
        await doctorsPage.searchDoctor(validDoctor.doctorCode);
        await expect(doctorsPage.doctorStatus).toHaveText('ACTIVE');
    });
    await test.step('Login as Doctor after activation', async () => {
        await dashboardPage.dashBoardHeader.logout();
        await loginPage.login(validDoctor.email, newDoctorPassword);
        await expect(dashboardPage.dashBoardHeader.appUserRole).toHaveText('DOCTOR');
    });
});