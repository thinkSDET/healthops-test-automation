import {test as base} from '@playwright/test'
import { LoginPage } from '../pages/auth/LoginPage'
import { DashboardPage } from '../pages/dashboard/DashboardPage'

type pageObjectFixture = {
    loginPage : LoginPage
    dashboardPage : DashboardPage
}


export const test = base.extend<pageObjectFixture>({

  loginPage : async ({page},use)=>{
     
  },

  dashboardPage : async ({page},use) =>{

  }
})