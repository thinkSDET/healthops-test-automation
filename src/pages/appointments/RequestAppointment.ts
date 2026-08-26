import { Locator, Page } from "@playwright/test";
import { ModulePageBase } from "../pageBase/ModulePageBase";

export class RequestAppointment extends ModulePageBase {

    readonly backButton: Locator
    readonly doctorDropdown: Locator
    readonly preferredDateTime: Locator
    readonly duration: Locator
    readonly appointmentType: Locator
    readonly chiefComplaint: Locator
    readonly medicalHistory: Locator
    readonly submitRequest: Locator

    constructor(page: Page) {
        super(page)
        this.backButton = page.locator("//button[normalize-space()='← Back']")
        this.doctorDropdown = page.locator("//label[normalize-space()='Doctor']/following-sibling::select")
        this.preferredDateTime = page.locator("//label[normalize-space()='Preferred date & time']/following-sibling::input[@type='datetime-local']")
        this.duration = page.locator("//label[normalize-space()='Duration (minutes)']/following-sibling::input[@type='number']")
        this.appointmentType = page.locator("//label[normalize-space()='Type']/following-sibling::select")
        this.chiefComplaint = page.locator("//label[normalize-space()='Chief Complaint / Symptoms']/following-sibling::textarea")
        this.medicalHistory = page.locator("//label[normalize-space()='Medical History / Additional Information']/following-sibling::textarea")
        this.submitRequest = page.locator("//button[@type='submit' and normalize-space()='Submit request']")
    }

    async submitRequestAppointment(doctor : string, dateTime : string, duration :string, type:string, Symptoms: string, medicalHistory :string){

    }
}
