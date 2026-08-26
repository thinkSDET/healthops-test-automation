/**
 * Page Object Fixture Module
 * 
 * PURPOSE:
 * Provides pre-instantiated page objects (LoginPage, DashboardHeaderComponent, etc.)
 * to tests via Playwright's fixture system. Each page object is bound to the current browser page.
 * 
 * RESPONSIBILITY:
 * - Instantiates page objects with the active browser page
 * - Injects page objects into tests that request them
 * - Ensures each test gets a fresh page object instance
 * - Eliminates boilerplate: tests don't need to write `new LoginPage(page)`
 * 
 * HOW IT WORKS:
 * When a test requests a page object fixture (e.g., loginPage), Playwright:
 * 1. Gets the current page from the browser context
 * 2. Creates a new instance of that page object, bound to that page
 * 3. Passes it to the test via the fixture callback
 * 4. Cleans up after the test ends
 */

import {test as base,expect} from '@playwright/test'
import { LoginPage } from '../pages/auth/LoginPage'
import { DashboardHeaderComponent } from '../components/dashboard/DashboardHeaderComponent'
import { RegisterPage } from '../pages/auth/RegisterPage'
import { DashboardPage } from '../pages/dashboard/DashboardPage'
import { PatientsPage } from '../pages/patients/PatientsPage'
import { DoctorsPage } from '../pages/doctors/DoctorsPage'
import { AppointmentsPage } from '../pages/appointments/Appointments'
import { AppointmentRequestPage } from '../pages/appointmentRequests/AppointmentRequestsPage'
import { RefillRequestPage } from '../pages/refills/RefillRequestPage'
import { InventoryPage } from '../pages/inventory/InventoryPage'
import { ReplenishmentPage } from '../pages/Replenishment/ReplenishmentPage'
import { AuditLogsPage } from '../pages/audit/AuditLogsPage'
import { ForgotPassword } from '../pages/auth/ForgotPassword'
import { ResetPassword } from '../pages/auth/ResetPassword'
import { DoctorRegistrationRequestPage } from '../pages/doctors/DoctorRegistrationRequestPage'
import { RequestAppointment } from '../pages/appointments/RequestAppointment'

/** 
 * Declares the shape of page object fixtures available to tests.
 * Each property is a page object class that encapsulates interactions with a specific page or component.
 */
type pageObjectFixture = {
    /** Encapsulates login page selectors and interactions (login, error checking, etc.) */
    loginPage : LoginPage
    /** Encapsulates dashboard header component selectors and interactions (user name, role display, etc.) */
    dashboardPage : DashboardPage
    /** Encapsulates patient registration page selectors and interactions */
    registerPage: RegisterPage
    patientsPage : PatientsPage
    doctorsPage : DoctorsPage
    appointmentsPage:AppointmentsPage
    appointmentRequestPage:AppointmentRequestPage
    refillRequestPage:RefillRequestPage
    inventoryPage:InventoryPage
    replenishmentPage:ReplenishmentPage
    auditLogsPage:AuditLogsPage
    forgotPassword:ForgotPassword
    resetPassword:ResetPassword
    doctorRegistrationRequestPage: DoctorRegistrationRequestPage
    requestAppointment : RequestAppointment
}

/** Extends the base Playwright `test` with page object fixtures. Each fixture creates a fresh instance per test. */
export const test = base.extend<pageObjectFixture>({

  /** 
   * loginPage fixture - provides a LoginPage instance bound to the current browser page.
   * WHAT IT DOES:
   * - Takes the current `page` from Playwright context
   * - Creates a new LoginPage instance and passes the page to it
   * - Injects the LoginPage instance into the test
   * - Test accesses via: loginPage parameter (e.g., await loginPage.login(email, password))
   */
  loginPage : async ({page},use)=>{
     await use(new LoginPage(page))
  },

  /** 
   * dashboardHeaderComponent fixture - provides a DashboardHeaderComponent instance bound to the current browser page.
   * WHAT IT DOES:
   * - Takes the current `page` from Playwright context
   * - Creates a new DashboardHeaderComponent instance and passes the page to it
   * - Injects the component instance into the test
   * - Test accesses via: dashboardHeaderComponent parameter (e.g., await dashboardHeaderComponent.appUserName.textContent())
   */
  dashboardPage : async ({page},use) =>{
    await use(new DashboardPage(page))
  },

  /** 
   * registerPage fixture - provides a RegisterPage instance bound to the current browser page.
   * WHAT IT DOES:
   * - Takes the current `page` from Playwright context
   * - Creates a new RegisterPage instance and passes the page to it
   * - Injects the RegisterPage instance into the test
   * - Test accesses via: registerPage parameter (e.g., await registerPage.register(data))
   */
  registerPage : async ({page},use)=>{
    await use(new RegisterPage(page))
  },
  patientsPage : async({page},use) =>{
      await use(new PatientsPage(page))
  },
  doctorsPage : async({page},use) =>{
    await use(new DoctorsPage(page))
  },
   appointmentsPage : async({page},use) =>{
    await use(new AppointmentsPage(page))
  },
  appointmentRequestPage : async({page},use) =>{
    await use(new AppointmentRequestPage(page))
  },
  refillRequestPage : async({page},use) =>{
    await use(new RefillRequestPage(page))
  },
  inventoryPage : async({page},use) =>{
    await use(new InventoryPage(page))
  },
  replenishmentPage : async({page},use) =>{
    await use(new ReplenishmentPage(page))
  },
  auditLogsPage : async({page},use) =>{
    await use(new AuditLogsPage(page))
  },
  forgotPassword : async({page},use) =>{
    await use (new ForgotPassword(page))
  },
  resetPassword : async({page}, use)=>{
    await use(new ResetPassword(page))
  },
  doctorRegistrationRequestPage : async({page},use)=>{
    await use(new DoctorRegistrationRequestPage(page))
  },
  requestAppointment : async({page},use)=>{
    await use (new RequestAppointment(page))
  }
})

/** Re-exported so specs can import both `test` and `expect` from one place. */
export {expect}
