
import {test,expect} from '../../../src/fixtures/customFixtures'

test('@AUTH-006 - Register patient with required profile fields',async({page,loginPage,registerPage,dashboardHeaderComponent,validRegistration})=>{
     await page.goto("http://localhost:5173/login")
     await loginPage.openRegistrationForm()
     await registerPage.register(validRegistration)
     console.log(validRegistration.emailAddress)
     await expect(page).toHaveURL("http://localhost:5173/login")
     await loginPage.login(validRegistration.emailAddress,validRegistration.password)
     await expect(page).toHaveURL('http://localhost:5173/dashboard')
     await expect(dashboardHeaderComponent.appUserName).toHaveText("John Doe")
     await expect(dashboardHeaderComponent.appUserRole).toHaveText("PATIENT")
})
