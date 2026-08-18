/**
 * Registration form input shape for auth-related UI tests.
 *
 * Why this exists:
 * - Registration has many fields; passing each value as a separate method argument
 *   makes tests and page objects hard to read and easy to break (wrong order, typos).
 * - This type is the single contract for "what data is needed to register a user."
 * - JSON datasets, tests, and page objects all align to this shape without coupling
 *   the page object to a specific JSON file or scenario key.
 *
 * How it works:
 * 1. Static scenarios live in JSON (e.g. src/data/datasets/auth/patientRegistration.json).
 * 2. A test loads a scenario and passes one RegistrationData object to the page object.
 * 3. RegisterPage.register(data) maps each property to the matching form field.
 *
 * Example flow:
 *   const patient = patientRegistrationTestData.validPatientRegistration
 *   await registerPage.register(patient)
 *
 * Note: Field names here should match the JSON dataset keys so no extra mapping is needed
 * in tests. The page object may use different internal names (e.g. `dob` locator) but reads
 * from this shared input shape (e.g. `data.dateOfBirth`).
 */
export type RegistrationData = {
    firstName: string
    lastName: string
    emailAddress: string
    password: string
    confirmPassword: string
    accountType: string
    dateOfBirth?: string
    gender?: string
    phoneNumber?: string
    address?: string
}