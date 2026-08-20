import { URLs } from '../../../src/data/constants/urls'
import { expect, test } from '../../../src/fixtures/customFixtures'

test.describe('DashBoard Page Test Cases', () => {


    test('DASH-001 - Admin dashboard cards navigate correctly', async ({ page, loginPage, login, 
        dashboardPage,patientsPage,doctorsPage,appointmentsPage,
        appointmentRequestPage,refillRequestPage,inventoryPage,replenishmentPage,auditLogsPage}) => {
        await page.goto("http://localhost:5173/login")
        await loginPage.login(login.admin.valid.email, login.admin.valid.password)
        await expect(page).toHaveURL(URLs.DASHBOARD)

        await dashboardPage.openPatients()
        await expect(page).toHaveURL(URLs.PATIENTS)
        await expect(patientsPage.patientsHeader).toHaveText("Patients")
        await page.goBack()

        await dashboardPage.openDoctors()
        await expect(page).toHaveURL(URLs.DOCTORS)
        await expect(doctorsPage.doctorsHeader).toHaveText("Doctors")
        await page.goBack()
        
        await dashboardPage.openAppointments()
        await expect(page).toHaveURL(URLs.APPOINTMENTS)
        await expect(appointmentsPage.appointmentsHeader).toHaveText("Appointments")
        await page.goBack()

        await dashboardPage.openAppointmentRequests()
        await expect(page).toHaveURL(URLs.APPOINTMENT_REQUEST)
        await expect(appointmentRequestPage.appointmentRequestHeader).toHaveText("Appointment Requests")
        await page.goBack()

        await dashboardPage.openRefillRequests()
        await expect(page).toHaveURL(URLs.REFILL_REQUEST)
         await expect(refillRequestPage.refillRequestHeader).toHaveText("Refill / Renewal Review")
        await page.goBack()

        await dashboardPage.openInventory()
        await expect(page).toHaveURL(URLs.INVENTORY)
        await expect(inventoryPage.inventoryHeader).toHaveText("Inventory")
        await page.goBack()

        await dashboardPage.openReplenishment()
        await expect(page).toHaveURL(URLs.REPLENISHMENT_REQUESTS)
        await expect(replenishmentPage.replenishmentHeader).toHaveText("Replenishment Requests")
        await page.goBack()

        await dashboardPage.openAuditLogs()
        await expect(page).toHaveURL(URLs.AUDIT_LOGS)
        await expect(auditLogsPage.auditLogsHeader).toHaveText("Audit Logs")
        await page.goBack()
        await page.waitForTimeout(3000)
    })

})