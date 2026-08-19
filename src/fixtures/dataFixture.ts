/**
 * Data Fixture Module
 * 
 * PURPOSE:
 * Provides test data (JSON datasets) to all tests via Playwright's fixture system.
 * 
 * RESPONSIBILITY:
 * - Loads static test data files from the datasets directory
 * - Makes test data available as injected dependencies in test cases
 * - Ensures consistent, reusable test data across all test modules
 * 
 * HOW IT WORKS:
 * This module extends Playwright's base test with custom fixtures.
 * Each fixture loads a JSON dataset and injects it into tests that request it.
 * Tests access data by requesting the fixture name in their callback parameters.
 */

import { test as base, expect } from '@playwright/test'
import registrationTestData from '../data/datasets/auth/registration.json'
import loginTestData from '../data/datasets/auth/login.json'
import { RegisterDataFactory } from '../data/factories/RegisterDataFactory'


/** Declares the shape of data fixtures available to tests. */
type DataFixture = {
    /** Patient registration test data (valid/invalid scenarios, required fields, etc.) */
    //"patientRegistration fixture mein exactly wahi type/structure ka data aayega jo patientRegistrationTestData ka hai."
    registrationTestData: typeof registrationTestData
    /** Login test data (valid credentials, wrong passwords, invalid users, etc.) */
    login: typeof loginTestData
    validPatientRegistration: ReturnType<typeof RegisterDataFactory.validRegistration>
    validDoctorRegistration: ReturnType<typeof RegisterDataFactory.validRegistration>
    validPharmacistRegistration: ReturnType<typeof RegisterDataFactory.validRegistration>
}

/** Extends the base test with DataFixture. Each fixture is lazy-loaded when requested. */
export const test = base.extend<DataFixture>({

    /** 
     * patientRegistration fixture - provides patient registration test data.
     * WHAT IT DOES:
     * - Takes no dependencies (empty destructure)
     * - Loads patientRegistrationTestData from JSON file
     * - Passes it to the test via the `use` callback
     * - Test accesses via: patientRegistration parameter
     */
    registrationTestData: async ({ }, use) => {
        await use(registrationTestData)
    },

    /** 
     * login fixture - provides login test data (credentials, error scenarios, etc.).
     * WHAT IT DOES:
     * - Takes no dependencies (empty destructure)
     * - Loads loginTestData from JSON file
     * - Passes it to the test via the `use` callback
     * - Test accesses via: login parameter
     */
    login: async ({ }, use) => {
        await use(loginTestData)
    },

    validPatientRegistration: async ({ }, use) => {
        const registrationData = RegisterDataFactory.validRegistration("patient")
        await use(registrationData)
    },
    validDoctorRegistration: async ({ }, use) => {
        const registrationData = RegisterDataFactory.validRegistration("doctor")
        await use(registrationData)
    },
    validPharmacistRegistration :async ({},use) =>{
        const registrationData = RegisterDataFactory.validRegistration("pharmacist")
        await use(registrationData)
    }
})
