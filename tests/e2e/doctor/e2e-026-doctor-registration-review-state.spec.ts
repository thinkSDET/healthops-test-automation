
import { Roles } from '../../../src/data/constants/roles';
import { URLs } from '../../../src/data/constants/urls';
import { expect, test } from '../../../src/fixtures/customFixtures'

test('E2E-026 - Approved Doctor request cannot be approved or rejected again', async ({ page, loginPage, registerPage, validDoctorRegistration, dashboardPage, login, doctorRegistrationRequestPage}) => {
    
    const doctorContact = `${validDoctorRegistration.emailAddress}`
    await test.step('Register as DOCTOR with valid unique details', async () => {
        await page.goto("http://localhost:5173/login")
        await loginPage.openRegistrationForm()
        await registerPage.register(validDoctorRegistration, Roles.DOCTOR)
        await expect(page).toHaveURL(URLs.LOGIN)
        console.log(doctorContact)
    });

    await test.step('Admin approves the Doctor registration request and verifies the request is APPROVED and Reviewed', async () => {
        await loginPage.login(login.admin.valid.email, login.admin.valid.password)
        await dashboardPage.dashBoardHeader.openDoctorRequests()
        expect(await doctorRegistrationRequestPage.getRegistrationActionMessageOnApprove(doctorContact)).toBe('Doctor registration approved successfully.')
        const {status,action} = doctorRegistrationRequestPage.getDoctorRequestStatusAndAction(doctorContact)
        await expect(status).toHaveText("APPROVED")
        await expect(action).toHaveText('Reviewed');
    });
})

test('E2E-026 - Rejected Doctor request cannot be approved or rejected again', async ({ page, loginPage, registerPage, validDoctorRegistration, dashboardPage, login, doctorRegistrationRequestPage}) => {
     const doctorContact = `${validDoctorRegistration.emailAddress}`
    await test.step('Register as DOCTOR with valid unique details', async () => {
        await page.goto("http://localhost:5173/login")
        await loginPage.openRegistrationForm()
        await registerPage.register(validDoctorRegistration, Roles.DOCTOR)
        await expect(page).toHaveURL(URLs.LOGIN)
        console.log(doctorContact)
    });

    await test.step('Admin rejects the Doctor registration request and verifies the request is REJECTED and Reviewed', async () => {
        await loginPage.login(login.admin.valid.email, login.admin.valid.password)
        await dashboardPage.dashBoardHeader.openDoctorRequests()
        await doctorRegistrationRequestPage.rejectDoctor(doctorContact, "Please updated details")
        await expect(doctorRegistrationRequestPage.registrationRejectionMessage).toHaveText("Doctor registration rejected.")
        const {status,action} = doctorRegistrationRequestPage.getDoctorRequestStatusAndAction(doctorContact)
        await expect(action).toHaveText('Reviewed');
        await expect(status).toHaveText("REJECTED")
    });
})