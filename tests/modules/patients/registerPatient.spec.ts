import {test,expect} from '../../../src/fixtures/pageObjectFixture'
import patientRegistrationTestData from '../../../src/data/datasets/auth/patientRegistration.json'

test('@AUTH-006 - Register patient with required profile fields',async({page,loginPage,registerPage})=>{
     await page.goto("http://localhost:5173/login")
     await loginPage.openRegistrationForm()
     await registerPage.register(patientRegistrationTestData.validPatientRegistration)
     await page.waitForTimeout(20000)
})
