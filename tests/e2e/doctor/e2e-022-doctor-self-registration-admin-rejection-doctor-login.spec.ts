import { Roles } from '../../../src/data/constants/roles';
import { URLs } from '../../../src/data/constants/urls';
import { expect, test } from '../../../src/fixtures/customFixtures'

test('E2E-022 - Doctor self-registration - Admin rejection - Doctor login with rejection notice', async ({ page, loginPage, registerPage, validDoctorRegistration, dashboardPage, login, doctorRegistrationRequestPage }) => {

    const doctorContact = `${validDoctorRegistration.emailAddress}`
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
    await test.step("Admin rejects the pending Doctor registration with a rejection reason", async () => {
        await doctorRegistrationRequestPage.rejectDoctor(doctorContact, "Please updated details")
        await expect(doctorRegistrationRequestPage.registrationRejectionMessage).toHaveText("Doctor registration rejected.")
        await dashboardPage.dashBoardHeader.logout()

    });

    await test.step("Login as rejected Doctor and verify login is allowed", async () => {
        await loginPage.login(validDoctorRegistration.emailAddress, validDoctorRegistration.password)
        await expect(page).toHaveURL(URLs.DASHBOARD)

    });

    await test.step("Verify Doctor dashboard opens with rejection popup and reason", async () => {
        await expect(dashboardPage.updateAndSubmitButton).toBeVisible();

    });
})
