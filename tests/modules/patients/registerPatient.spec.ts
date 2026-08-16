import {test,expect} from '../../../src/fixtures/customFixtures'

test('@AUTH-006 - Register patient with required profile fields',async({page,loginPage,registerPage,patientRegistration})=>{
     await page.goto("http://localhost:5173/login")
     await loginPage.openRegistrationForm()
     await registerPage.register(patientRegistration.validPatientRegistration)
     await page.waitForTimeout(20000)
})
