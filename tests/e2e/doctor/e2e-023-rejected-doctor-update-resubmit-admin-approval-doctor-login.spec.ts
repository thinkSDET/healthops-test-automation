import { Roles } from '../../../src/data/constants/roles';
import { URLs } from '../../../src/data/constants/urls';
import { expect, test } from '../../../src/fixtures/customFixtures'


test('E2E-023 - Rejected doctor - Update & resubmit - Admin approval - Doctor becomes active', async ({ page, loginPage, registerPage, validDoctorRegistration, dashboardPage, login, doctorRegistrationRequestPage }) => {

    const doctorContact = `${validDoctorRegistration.emailAddress}`
    const rejectedReason = "Please updated details"
    await test.step('Doctor has an existing REJECTED registration request with a rejection reason', async () => {
        await page.goto("http://localhost:5173/login")
        await loginPage.openRegistrationForm()
        await registerPage.register(validDoctorRegistration, Roles.DOCTOR)
        await expect(page).toHaveURL(URLs.LOGIN)
        await loginPage.login(login.admin.valid.email, login.admin.valid.password)
        await dashboardPage.dashBoardHeader.openDoctorRequests()
        await doctorRegistrationRequestPage.rejectDoctor(doctorContact,rejectedReason)
        await dashboardPage.dashBoardHeader.logout()
    })

    await test.step('Login as rejected Doctor and verify rejection details', async () => {
        await loginPage.login(validDoctorRegistration.emailAddress, validDoctorRegistration.password)
        await expect(page).toHaveURL(URLs.DASHBOARD)
        await expect(dashboardPage.rejectedReason).toHaveText(rejectedReason)
    })

    await test.step('Update and resubmit the rejected Doctor registration', async () => {
        await dashboardPage.updateAndResubmit()
        await registerPage.updateAndResubmitDoctor(validDoctorRegistration)
        await expect(page).toHaveURL(URLs.LOGIN)

    })

    await test.step('Login as Admin and verify the resubmitted Doctor registration request is PENDING', async () => {
        await loginPage.login(login.admin.valid.email, login.admin.valid.password)
        await dashboardPage.dashBoardHeader.openDoctorRequests()
        await expect(doctorRegistrationRequestPage.getDoctorRegistrationStatus(doctorContact)).toHaveText('PENDING')
    })

    await test.step('Admin approves the resubmitted Doctor registration', async () => {
        expect(await doctorRegistrationRequestPage.getRegistrationActionMessageOnApprove(doctorContact)).toBe('Doctor registration approved successfully.')
        await dashboardPage.dashBoardHeader.logout();
    })

    await test.step('Verify Doctor can login after approval', async () => {
        await loginPage.login(validDoctorRegistration.emailAddress, validDoctorRegistration.password)
        await expect(page).toHaveURL(URLs.DASHBOARD)
        await dashboardPage.dashBoardHeader.logout();
        await expect(page).toHaveURL(URLs.LOGIN)
    })


})