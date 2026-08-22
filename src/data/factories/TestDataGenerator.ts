import { randomUUID } from 'crypto';
export class TestDataGenerator {


    static generateUniqueEmail(): string {
        return `test-${randomUUID().slice(0, 8)}@healthcare.local`;
    }

    static generateUniquePhoneNumber(): string {
        return `9${Math.floor(100000000 + Math.random() * 900000000)}`
    }

    static generateUniqueDoctorCode(): string {
        return `DOC-${randomUUID().slice(0, 8).toUpperCase()}`;
    }

    static generateUniqueLicenseNumber(): string {
        return `MEDLIC-${randomUUID().slice(0, 8).toUpperCase()}`;
    }

    static generateFirstName(): string {
        const names = ['John', 'David', 'Robert', 'Michael', 'James'];
        return names[Math.floor(Math.random() * names.length)];
    }

    static generateLastName(): string {
        const names = ['Smith', 'Brown', 'Wilson', 'Taylor', 'Anderson'];
        return names[Math.floor(Math.random() * names.length)];
    }
}