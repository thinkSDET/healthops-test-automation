import { DashboardModules } from '../../../src/data/constants/dashboardModules'
import {test} from '../../../src/fixtures/customFixtures'

test('E2E-020: Admin creates Doctor and completes activation and login',async({page,loginPage,login,validDoctor,dashboardPage,doctorsPage})=>{
     await page.goto("http://localhost:5173/login")
    await loginPage.login(login.admin.valid.email,login.admin.valid.password)
    await dashboardPage.dashboardModuleCardComponent.clickModule(DashboardModules.DOCTORS)
    await doctorsPage.CreateDoctor(validDoctor)
    await page.waitForTimeout(3000)
})