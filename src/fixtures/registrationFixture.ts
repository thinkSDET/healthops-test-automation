import {test as base} from '@playwright/test'
import {RegisterDataFactory} from '../data/factories/RegisterDataFactory'
import { RegisterPage } from '../pages/auth/RegisterPage';
import { URLs } from '../data/constants/urls';
import { Roles } from '../data/constants/roles';


type RegistrationFixtures  ={

    registeredPatient: ReturnType<typeof RegisterDataFactory.validRegistration>;
    registeredDoctor: ReturnType<typeof RegisterDataFactory.validRegistration>;

}

export const test = base.extend<RegistrationFixtures>({
        
       registeredPatient : async({page},use) =>{
        const patientData = RegisterDataFactory.validRegistration('patient');
        const registrationPage = new RegisterPage(page)
        await page.goto(URLs.REGISTER);
        await registrationPage.register(patientData,Roles.PATIENT);
        await use(patientData); 
       },

        registeredDoctor : async({page},use) =>{
        const doctorData = RegisterDataFactory.validRegistration("doctor");
        const registrationPage = new RegisterPage(page)
        await page.goto(URLs.REGISTER);
        await registrationPage.register(doctorData,Roles.DOCTOR);
        await use(doctorData); 
       }

})
export { expect } from '@playwright/test';