import { DashboardModules } from '../../../src/data/constants/dashboardModules'
import { PageTitles } from '../../../src/data/constants/pageTitles'
import { URLs } from '../../../src/data/constants/urls'
import { expect, test } from '../../../src/fixtures/customFixtures'

/**
 * 
 * 
 *     Login once -> Save authentication -> test1, test2 test3, test4...
 */

test.describe('Dashboard', () => {

    // test.beforeEach(async ({ loginPage, login, page }) => {
    //     await page.goto(URLs.LOGIN)
    //     await loginPage.login(login.admin.valid.email, login.admin.valid.password)
    //     await expect(page).toHaveURL(URLs.DASHBOARD)
    // })
     test.use({
        storageState: 'playwright/.auth/admin.json'
    })
    

    test('DASH-001 - Admin can navigate to Patients', async ({
        page,
        dashboardPage,
        patientsPage
    }) => {
        await test.step('Verify Patients module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.PATIENTS)
            await expect(page).toHaveURL(URLs.PATIENTS)
            await patientsPage.verifyPage(PageTitles.PATIENTS)
        })
    })

    test('DASH-002 - Admin can navigate to Doctors', async ({
        page,
        dashboardPage,
        doctorsPage
    }) => {
        await test.step('Verify Doctors module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.DOCTORS)
            await expect(page).toHaveURL(URLs.DOCTORS)
            await doctorsPage.verifyPage(PageTitles.DOCTORS)
        })
    })

    test('DASH-003 - Admin can navigate to Appointments', async ({
        page,
        dashboardPage,
        appointmentsPage
    }) => {
        await test.step('Verify Appointments module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.APPOINTMENTS)
            await expect(page).toHaveURL(URLs.APPOINTMENTS)
            await appointmentsPage.verifyPage(PageTitles.APPOINTMENTS)
        })
    })

    test('DASH-004 - Admin can navigate to Appointment Requests', async ({
        page,
        dashboardPage,
        appointmentRequestPage
    }) => {
        await test.step('Verify Appointment Requests module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.APPOINTMENT_REQUESTS)
            await expect(page).toHaveURL(URLs.APPOINTMENT_REQUEST)
            await appointmentRequestPage.verifyPage(PageTitles.APPOINTMENT_REQUESTS)
        })
    })

    test('DASH-005 - Admin can navigate to Refill Requests', async ({
        page,
        dashboardPage,
        refillRequestPage
    }) => {
        await test.step('Verify Refill Requests module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.REFILL_REQUESTS)
            await expect(page).toHaveURL(URLs.REFILL_REQUEST)
            await refillRequestPage.verifyPage(PageTitles.REFILL_REQUESTS)
        })
    })

    test('DASH-006 - Admin can navigate to Inventory', async ({
        page,
        dashboardPage,
        inventoryPage
    }) => {
        await test.step('Verify Inventory module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.INVENTORY)
            await expect(page).toHaveURL(URLs.INVENTORY)
            await inventoryPage.verifyPage(PageTitles.INVENTORY)
        })
    })

    test('DASH-007 - Admin can navigate to Replenishment', async ({
        page,
        dashboardPage,
        replenishmentPage
    }) => {
        await test.step('Verify Replenishment module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.REPLENISHMENT)
            await expect(page).toHaveURL(URLs.REPLENISHMENT_REQUESTS)
            await replenishmentPage.verifyPage(PageTitles.REPLENISHMENT)
        })
    })

    test('DASH-008 - Admin can navigate to Audit Logs', async ({
        page,
        dashboardPage,
        auditLogsPage
    }) => {
        await test.step('Verify Audit Logs module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.AUDIT_LOGS)
            await expect(page).toHaveURL(URLs.AUDIT_LOGS)
            await auditLogsPage.verifyPage(PageTitles.AUDIT_LOGS)
        })
    })

})