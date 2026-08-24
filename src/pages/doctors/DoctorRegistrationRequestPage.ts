import { Locator, Page } from "@playwright/test";
import { ModulePageBase } from "../pageBase/ModulePageBase";

export class DoctorRegistrationRequestPage extends ModulePageBase {

    readonly registrationActionMessage: Locator
    readonly rejectionReasonInput: Locator
    readonly registrationRejectionMessage: Locator
    page: Page
    constructor(page: Page) {
        super(page)
        this.page = page
        this.registrationActionMessage = page.locator("//div[contains(text(),'approved successfully')]")
        this.registrationRejectionMessage = page.locator("//div[contains(text(),'registration rejected.')]")
        this.rejectionReasonInput = page.locator("//label[contains(text(),'Rejection reason')]/following-sibling::textarea")
    }

    getDoctorRegistrationStatus(doctorContact: string): Locator {
        const doctorRow = this.getDoctorRow(doctorContact)
        return doctorRow.locator('td').filter({ hasText: /PENDING|APPROVED|REJECTED/ })

    }
    async getRegistrationActionMessageOnApprove(doctorContact: string) {
        const doctorRow = this.getDoctorRow(doctorContact)
        await doctorRow.getByRole('button', { name: 'Approve' }).click()
        return (await this.registrationActionMessage.innerText()).trim();
    }
    private getDoctorRow(doctorContact: string): Locator {
        return this.page.locator('table tr').filter({ hasText: doctorContact })
    }

    async rejectDoctor(doctorContact: string, rejectReason: string) {
        const doctorRow = this.getDoctorRow(doctorContact)
        await doctorRow.getByRole('button', { name: 'Reject' }).click()
        await this.rejectionReasonInput.fill(rejectReason)
        await this.page.getByRole('button', { name: 'Reject Registration' }).click()
    }

    getDoctorRequestStatusAndAction(doctorContact: string): {
        status: Locator;
        action: Locator;
    } {
        const doctorRow = this.getDoctorRow(doctorContact)
        const status = doctorRow.locator('td').filter({ has: this.page.getByText(/APPROVED|REJECTED|PENDING/) });
        const action = doctorRow.locator('td').filter({ hasText: 'Reviewed' });
        return { status, action };
    }

}
