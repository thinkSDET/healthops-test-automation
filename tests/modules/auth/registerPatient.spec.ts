
import { Roles } from '../../../src/data/constants/roles'
import { URLs } from '../../../src/data/constants/urls'
import {test,expect} from '../../../src/fixtures/customFixtures'

test('@AUTH-006 - Register patient with required profile fields',async({page,loginPage,registerPage,dashboardPage,validPatientRegistration})=>{
     await page.goto("http://localhost:5173/login")
     await loginPage.openRegistrationForm()
     await registerPage.register(validPatientRegistration,Roles.PATIENT)
     console.log(validPatientRegistration.emailAddress)
     await expect(page).toHaveURL(URLs.LOGIN)
     await loginPage.login(validPatientRegistration.emailAddress,validPatientRegistration.password)
     await expect(page).toHaveURL(URLs.DASHBOARD)
     await expect(dashboardPage.dashBoardHeader.appUserName).toHaveText(`${validPatientRegistration.firstName} ${validPatientRegistration.lastName}`)
     await expect(dashboardPage.dashBoardHeader.appUserRole).toHaveText(`${validPatientRegistration.accountType}`,{ignoreCase :true})
})
