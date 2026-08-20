
import { Roles } from '../../../src/data/constants/roles'
import { URLs } from '../../../src/data/constants/urls'
import { test, expect } from '../../../src/fixtures/customFixtures'
test("AUTH-008 - Register doctor  with required profile fields", async ({ page, loginPage, registerPage, validDoctorRegistration, dashboardPage }) => {

     await page.goto("http://localhost:5173/login")
     await loginPage.openRegistrationForm()
     await registerPage.register(validDoctorRegistration,Roles.DOCTOR)
     console.log(validDoctorRegistration.emailAddress)
     await expect(page).toHaveURL(URLs.LOGIN)
     await loginPage.login(validDoctorRegistration.emailAddress, validDoctorRegistration.password)
     await expect(page).toHaveURL(URLs.DASHBOARD)
     await expect(dashboardPage.dashBoardHeader.appUserName).toHaveText("Harsh Rane")
     await expect(dashboardPage.dashBoardHeader.appUserRole).toHaveText("DOCTOR")
})
