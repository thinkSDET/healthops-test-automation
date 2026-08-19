
import { Roles } from '../../../src/data/constants/roles'
import { URLs } from '../../../src/data/constants/urls'
import { test, expect } from '../../../src/fixtures/customFixtures'
test("AUTH-008 - Register pharmacist  with required profile fields", async ({ page, loginPage, registerPage, validPharmacistRegistration, dashboardHeaderComponent }) => {

     await page.goto("http://localhost:5173/login")
     await loginPage.openRegistrationForm()
     await registerPage.register(validPharmacistRegistration,Roles.PHARMACIST)
     console.log(validPharmacistRegistration.emailAddress)
     await expect(page).toHaveURL(URLs.LOGIN)
     await loginPage.login(validPharmacistRegistration.emailAddress, validPharmacistRegistration.password)
     await expect(page).toHaveURL(URLs.DASHBOARD)
     await expect(dashboardHeaderComponent.appUserName).toHaveText(`${validPharmacistRegistration.firstName} ${validPharmacistRegistration.lastName}`)
     await expect(dashboardHeaderComponent.appUserRole).toHaveText(`${validPharmacistRegistration.accountType}`, {ignoreCase : true})
})
