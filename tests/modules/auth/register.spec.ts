
import { Roles } from '../../../src/data/constants/roles'
import { URLs } from '../../../src/data/constants/urls'
import { test, expect } from '../../../src/fixtures/customFixtures'


test.describe('Registration', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URLs.LOGIN)
    })


    test('@AUTH-006 - Register patient with required profile fields', async ({ page, loginPage, registerPage, dashboardPage, validPatientRegistration }) => {

        await test.step('Register patient and verify registration redirects to login', async () => {
            await loginPage.openRegistrationForm()
            await registerPage.register(validPatientRegistration, Roles.PATIENT)
            await expect(page).toHaveURL(URLs.LOGIN)
        })
        await test.step('Login with registered patient and verify patient lands on dashboard', async () => {
            await loginPage.login(validPatientRegistration.emailAddress, validPatientRegistration.password)
            await expect(page).toHaveURL(URLs.DASHBOARD)
            await expect(dashboardPage.dashBoardHeader.appUserName).toHaveText(`${validPatientRegistration.firstName} ${validPatientRegistration.lastName}`)
            await expect(dashboardPage.dashBoardHeader.appUserRole).toHaveText(`${validPatientRegistration.accountType}`, { ignoreCase: true })
        })

    })

    // Skipped because doctor registration flow has changed.
    test.skip("AUTH-008.1 - Blocked: Doctor account requires Admin approval", async ({ page, loginPage, registerPage, validDoctorRegistration, dashboardPage }) => {

        await loginPage.openRegistrationForm()
        await registerPage.register(validDoctorRegistration, Roles.DOCTOR)
        await expect(page).toHaveURL(URLs.LOGIN)
        await loginPage.login(validDoctorRegistration.emailAddress, validDoctorRegistration.password)
        await expect(page).toHaveURL(URLs.DASHBOARD)
        await expect(dashboardPage.dashBoardHeader.appUserName).toHaveText("Harsh Rane")
        await expect(dashboardPage.dashBoardHeader.appUserRole).toHaveText("DOCTOR")
    })


    test("AUTH-008.2 - Register pharmacist  with required profile fields", async ({ page, loginPage, registerPage, validPharmacistRegistration, dashboardPage }) => {
        await test.step('Register pharmacist and verify registration redirects to login', async () => {
            await loginPage.openRegistrationForm()
            await registerPage.register(validPharmacistRegistration, Roles.PHARMACIST)
            await expect(page).toHaveURL(URLs.LOGIN)
        })
        await test.step('Login with registered pharmacist and verify pharmacist lands on dashboard', async () => {
            await loginPage.login(validPharmacistRegistration.emailAddress, validPharmacistRegistration.password)
            await expect(page).toHaveURL(URLs.DASHBOARD)
            await expect(dashboardPage.dashBoardHeader.appUserName).toHaveText(`${validPharmacistRegistration.firstName} ${validPharmacistRegistration.lastName}`)
            await expect(dashboardPage.dashBoardHeader.appUserRole).toHaveText(validPharmacistRegistration.accountType, { ignoreCase: true })
        })

    })

})

