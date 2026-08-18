import patientRegistration from '../../data/datasets/auth/patientRegistration.json'
import { TestDataGenerator } from './TestDataGenerator'

export class RegisterDataFactory {
    static validRegistration(){
         return{
                ...patientRegistration.validPatientRegistration,
                emailAddress : TestDataGenerator.generateUniqueEmail(),
                phoneNumber : TestDataGenerator.generateUniquePhoneNumber()
         }
       
    }
}