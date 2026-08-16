import { test as base, expect } from '@playwright/test'
import patientRegistrationTestData from '../data/datasets/auth/patientRegistration.json'
import loginTestData from '../data/datasets/auth/login.json'


type DataFixture = {
    patientRegistration: typeof patientRegistrationTestData
    login : typeof loginTestData
}

export const test = base.extend<DataFixture>({

    patientRegistration: async ({ }, use) => {
        await use(patientRegistrationTestData)
    },
    login : async ({}, use)=>{
        await use(loginTestData)
    }
})
