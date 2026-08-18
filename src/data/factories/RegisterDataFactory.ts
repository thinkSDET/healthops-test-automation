import registration from '../../data/datasets/auth/registration.json'
import { TestDataGenerator } from './TestDataGenerator'

export class RegisterDataFactory {
    static validRegistration(role: 'patient' | 'doctor' | 'pharmacist') {

        const registrationData = {
            patient: registration.validPatientRegistration,
            doctor: registration.validDoctorRegistration,
            pharmacist: registration.validPharmacistRegistration
        }[role]

        return {
            ...registrationData,
            emailAddress: TestDataGenerator.generateUniqueEmail(),
            phoneNumber: TestDataGenerator.generateUniquePhoneNumber()
        }

    }
}