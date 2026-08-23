import registration from '../../data/datasets/auth/registration.json'
import doctor from '../datasets/doctor/doctor.data.json'
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
            firstName : TestDataGenerator.generateFirstName(),
            lastName :  TestDataGenerator.generateLastName(),
            emailAddress: TestDataGenerator.generateUniqueEmail(),
            phoneNumber: TestDataGenerator.generateUniquePhoneNumber(),
            specialization : TestDataGenerator.generateDoctorSpecialization(),
            experience : TestDataGenerator.generateRandomNumber(),
            licenseNumber : TestDataGenerator.generateUniqueLicenseNumber(),
        }

    }

    static validDoctor() {
        return {

            ...doctor.validDoctor,
            doctorCode: TestDataGenerator.generateUniqueDoctorCode(),
            licenseNumber: TestDataGenerator.generateUniqueLicenseNumber(),
            firstName: TestDataGenerator.generateFirstName(),
            lastName: TestDataGenerator.generateLastName(),
            email: TestDataGenerator.generateUniqueEmail(),
            phone: TestDataGenerator.generateUniquePhoneNumber()

        }
    }
}