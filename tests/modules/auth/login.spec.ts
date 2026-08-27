import { Messages } from '../../../src/data/constants/appMessages';
import { URLs } from '../../../src/data/constants/urls';
import { test, expect } from '../../../src/fixtures/customFixtures';


test.describe('Login', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URLs.LOGIN); // swap for URLs.LOGIN when you fix the URL
    });

    test('AUTH-001 - Valid admin login redirects to dashboard', async ({ loginPage, dashboardPage, page, login }) => {
        await loginPage.login(login.admin.valid.email, login.admin.valid.password)
        await expect(page).toHaveURL(URLs.DASHBOARD)
        await expect(dashboardPage.dashBoardHeader.appUserName).toHaveText(login.admin.valid.appUserName)
        await expect(dashboardPage.dashBoardHeader.appUserRole).toHaveText(login.admin.valid.appUserRole)
    })


    test('AUTH-003 - Wrong password shows error', async ({ loginPage, page, login }) => {
        await loginPage.login(login.admin.wrongPassword.email, login.admin.wrongPassword.password)
        await expect(page).toHaveURL(URLs.LOGIN)
        await expect(loginPage.authError).toHaveText(Messages.AUTH.INVALID_CREDENTIALS)
    })

})


