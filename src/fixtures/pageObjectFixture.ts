import {test as base,expect} from '@playwright/test'
import { LoginPage } from '../pages/auth/LoginPage'
import { DashboardHeaderComponent } from '../pages/dashboard/DashboardHeaderComponent'

type pageObjectFixture = {
    loginPage : LoginPage
    dashboardHeaderComponent : DashboardHeaderComponent
}


export const test = base.extend<pageObjectFixture>({

  loginPage : async ({page},use)=>{
     await use(new LoginPage(page))
  },

  dashboardHeaderComponent : async ({page},use) =>{
    await use(new DashboardHeaderComponent(page))
  }
})

export {expect}