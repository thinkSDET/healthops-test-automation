export class TestDataGenerator {


    static generateUniqueEmail(): string {
        return `patient${Date.now()}@healthcare.local`
    }

    static generateUniquePhoneNumber(): string {
        return `9${Math.floor(100000000 + Math.random() * 900000000)}`
    }
}