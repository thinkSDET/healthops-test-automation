import { Locator, Page } from "@playwright/test";
import { ModulePageBase } from "../pageBase/ModulePageBase";

export class DoctorRegistrationRequestPage extends ModulePageBase {

    readonly registrationActionMessage : Locator
    page: Page
    constructor(page: Page) {
        super(page)
        this.page = page
        this.registrationActionMessage = page.locator("//div[contains(text(),'approved successfully')]")
    }

     getDoctorRegistrationStatus(doctorContact: string): Locator {
        const doctorRow = this.page.locator('tbody tr').filter({ hasText: doctorContact })
        return doctorRow.locator('td').filter({hasText: /PENDING|APPROVED|REJECTED/ })

    }
    async getRegistrationActionMessage(doctorContact : string, action : 'Approve' | 'Reject'){
            const doctorRow = this.page.locator('table tr').filter({hasText :doctorContact})
            await doctorRow.getByRole('button',{name : action}).click()
            return (await this.registrationActionMessage.innerText()).trim();
    }

}
