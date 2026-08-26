import { DashboardModules } from '../../../src/data/constants/dashboardModules';
import { Roles } from '../../../src/data/constants/roles';
import { URLs } from '../../../src/data/constants/urls';
import { expect, test } from '../../../src/fixtures/customFixtures'

test('E2E-001: Patient submits appointment request, gets approved by staff, and completes consultation', async ({requestAppointment,registeredDoctor,registeredPatient,loginPage,page,dashboardPage,appointmentsPage}) => {
    
    await test.step('Patient submits an appointment request for a doctor with a future slot and reason', async () => {
            await page.goto(URLs.LOGIN)
            await loginPage.login(registeredPatient.emailAddress,registeredPatient.password)
            await expect(page).toHaveTitle(URLs.DASHBOARD)
            await dashboardPage.dashboardModuleCardComponent.clickModule(DashboardModules.MY_APPOINTMENTS)
            await appointmentsPage.openRequestAppointment()
           // await requestAppointment.submitRequestAppointment(registeredDoctor.firstName)

           // This TC is pending I need to resume from here
    });

    await test.step('Staff opens the Appointment Requests and approves the submitted request', async () => {

    });

    await test.step('Verify the approved request creates a SCHEDULED appointment', async () => {

    });

    await test.step('Advance the appointment from Confirm to Check In', async () => {

    });

    await test.step('Start the consultation for the checked-in appointment', async () => {

    });

    await test.step('Complete the consultation and verify the appointment is COMPLETED', async () => {

    });

    await test.step('Patient opens My Appointments and verifies the completed visit is visible', async () => {

    });

});