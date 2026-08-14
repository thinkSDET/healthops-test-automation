/**
 * Custom Playwright test entry point with page-object fixtures.
 *
 * Tests import `test` and `expect` from this file instead of `@playwright/test`
 * so page objects are created once per test and injected automatically —
 * specs do not need to call `new LoginPage(page)` themselves.
 */
import {test as base,expect} from '@playwright/test'
import { LoginPage } from '../pages/auth/LoginPage'
import { DashboardHeaderComponent } from '../pages/dashboard/DashboardHeaderComponent'

/** Declares which extra dependencies each test can request in its callback. */
type pageObjectFixture = {
    loginPage : LoginPage
    dashboardHeaderComponent : DashboardHeaderComponent
}

/** Extends the base Playwright `test` with the page objects listed above. */
export const test = base.extend<pageObjectFixture>({

  /** Provides a LoginPage bound to the current browser page for this test. */
  loginPage : async ({page},use)=>{
     await use(new LoginPage(page))
  },

  /** Provides a DashboardHeaderComponent bound to the current browser page. */
  dashboardHeaderComponent : async ({page},use) =>{
    await use(new DashboardHeaderComponent(page))
  }
})

/** Re-exported so specs can import both `test` and `expect` from one place. */
export {expect}
