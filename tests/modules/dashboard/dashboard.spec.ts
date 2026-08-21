import { DashboardModules } from '../../../src/data/constants/dashboardModules'
import { PageTitles } from '../../../src/data/constants/pageTitles'
import { URLs } from '../../../src/data/constants/urls'
import { expect, test } from '../../../src/fixtures/customFixtures'

test.describe('DashBoard Page Test Cases', () => {


    test('DASH-001 - Admin dashboard cards navigate correctly', async ({ page, loginPage, login,
        dashboardPage, patientsPage, doctorsPage, appointmentsPage,
        appointmentRequestPage, refillRequestPage, inventoryPage, replenishmentPage, auditLogsPage }) => {

        await page.goto("http://localhost:5173/login")
        await loginPage.login(login.admin.valid.email, login.admin.valid.password)
        await expect(page).toHaveURL(URLs.DASHBOARD)

        await test.step('Verify Patients module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.PATIENTS);
            await expect(page).toHaveURL(URLs.PATIENTS);
            await patientsPage.verifyPage(PageTitles.PATIENTS);
            await dashboardPage.navigateToDashboard();
        });

        await test.step('Verify Doctors module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.DOCTORS);
            await expect(page).toHaveURL(URLs.DOCTORS);
            await doctorsPage.verifyPage(PageTitles.DOCTORS);
            await dashboardPage.navigateToDashboard();
        });

        await test.step('Verify Appointments module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.APPOINTMENTS);
            await expect(page).toHaveURL(URLs.APPOINTMENTS);
            await appointmentsPage.verifyPage(PageTitles.APPOINTMENTS);
            await dashboardPage.navigateToDashboard();
        });

        await test.step('Verify Appointment Requests module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.APPOINTMENT_REQUESTS);
            await expect(page).toHaveURL(URLs.APPOINTMENT_REQUEST);
            await appointmentRequestPage.verifyPage(PageTitles.APPOINTMENT_REQUESTS);
            await dashboardPage.navigateToDashboard();
        });

        await test.step('Verify Refill Requests module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.REFILL_REQUESTS);
            await expect(page).toHaveURL(URLs.REFILL_REQUEST);
            await refillRequestPage.verifyPage(PageTitles.REFILL_REQUESTS);
            await dashboardPage.navigateToDashboard();
        });

        await test.step('Verify Inventory module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.INVENTORY);
            await expect(page).toHaveURL(URLs.INVENTORY);
            await inventoryPage.verifyPage(PageTitles.INVENTORY);
            await dashboardPage.navigateToDashboard();
        });

        await test.step('Verify Replenishment module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.REPLENISHMENT);
            await expect(page).toHaveURL(URLs.REPLENISHMENT_REQUESTS);
            await replenishmentPage.verifyPage(PageTitles.REPLENISHMENT);
            await dashboardPage.navigateToDashboard();
        });

        await test.step('Verify Audit Logs module navigation', async () => {
            await dashboardPage.openModule(DashboardModules.AUDIT_LOGS);
            await expect(page).toHaveURL(URLs.AUDIT_LOGS);
            await auditLogsPage.verifyPage(PageTitles.AUDIT_LOGS);
            await dashboardPage.navigateToDashboard();
        });
    })

})