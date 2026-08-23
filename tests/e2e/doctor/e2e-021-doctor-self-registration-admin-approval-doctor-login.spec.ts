import { Roles } from '../../../src/data/constants/roles';
import { URLs } from '../../../src/data/constants/urls';
import { expect, test } from '../../../src/fixtures/customFixtures'

test('E2E-021: Doctor self-registers, gets approved by Admin, and logs in', async ({ page, loginPage, registerPage, validDoctorRegistration, dashboardPage, login, doctorRegistrationRequestPage }) => {
    const doctorContact = `${validDoctorRegistration.emailAddress}`
    const doctorFullName = `${validDoctorRegistration.firstName} ${validDoctorRegistration.lastName}`
    const action = 'Approve'
    await test.step('Register as DOCTOR with valid unique details', async () => {
        await page.goto("http://localhost:5173/login")
        await loginPage.openRegistrationForm()
        await registerPage.register(validDoctorRegistration, Roles.DOCTOR)
        await expect(page).toHaveURL(URLs.LOGIN)
    });

    await test.step('Login as Admin and verify the new Doctor registration request is pending', async () => {
        await loginPage.login(login.admin.valid.email, login.admin.valid.password)
        await dashboardPage.dashBoardHeader.openDoctorRequests()
        await expect(doctorRegistrationRequestPage.getDoctorRegistrationStatus(doctorContact)).toHaveText('PENDING')
    });

    await test.step('Admin Approve the Doctor registration request and verify the Doctor is ACTIVE', async () => {
        expect(await doctorRegistrationRequestPage.getRegistrationActionMessage(doctorContact, action)).toBe('Doctor registration approved successfully.')
        await dashboardPage.dashBoardHeader.logout();
    });
    await test.step('Login as the approved Doctor', async () => {
        await loginPage.login(validDoctorRegistration.emailAddress, validDoctorRegistration.password)
        await expect(page).toHaveURL(URLs.DASHBOARD)
        await expect(dashboardPage.dashBoardHeader.appUserName).toHaveText(doctorFullName)
        await expect(dashboardPage.dashBoardHeader.appUserRole).toHaveText("DOCTOR")
    });

})
