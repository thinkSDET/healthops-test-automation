
import { Roles } from '../../../src/data/constants/roles'
import { test, expect } from '../../../src/fixtures/customFixtures'
test("AUTH-008 - Register doctor  with required profile fields", async ({ page, loginPage, registerPage, validDoctorRegistration, dashboardHeaderComponent }) => {

     await page.goto("http://localhost:5173/login")
     await loginPage.openRegistrationForm()
     await registerPage.register(validDoctorRegistration,Roles.DOCTOR)
     console.log(validDoctorRegistration.emailAddress)
     await expect(page).toHaveURL("http://localhost:5173/login")
     await loginPage.login(validDoctorRegistration.emailAddress, validDoctorRegistration.password)
     await expect(page).toHaveURL('http://localhost:5173/dashboard')
     await expect(dashboardHeaderComponent.appUserName).toHaveText("Harsh Rane")
     await expect(dashboardHeaderComponent.appUserRole).toHaveText("DOCTOR")
})
