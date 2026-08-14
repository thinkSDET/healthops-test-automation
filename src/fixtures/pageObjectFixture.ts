import {test as base,expect} from '@playwright/test'
import { LoginPage } from '../pages/auth/LoginPage'
import { DashboardPage } from '../pages/dashboard/DashboardPage'

type pageObjectFixture = {
    loginPage : LoginPage
    dashboardPage : DashboardPage
}


export const test = base.extend<pageObjectFixture>({

  loginPage : async ({page},use)=>{
     await use(new LoginPage(page))
  },

  dashboardPage : async ({page},use) =>{
    await use(new DashboardPage(page))
  }
})

export {expect}