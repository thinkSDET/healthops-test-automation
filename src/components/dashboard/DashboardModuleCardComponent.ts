import { Locator, Page } from "@playwright/test";

export class DashboardModuleCardComponent {

    page: Page
    readonly patientCard: Locator
    readonly doctorCard: Locator
    readonly appointmentCard: Locator
    readonly appointmentRequestCard: Locator
    readonly refillRequestCard: Locator
    readonly inventoryCard: Locator
    readonly replenishmentCard: Locator
    readonly auditLogsCard: Locator
    
    constructor(page: Page) {
        this.page = page
        this.patientCard = this.page.locator("//div[@class='dashboard-card']//h3[text()='Patients']")
        this.doctorCard = this.page.locator("//div[@class='dashboard-card']//h3[text()='Doctors']")
        this.appointmentCard = this.page.locator("//div[@class='dashboard-card']//h3[text()='Appointments']")
        this.appointmentRequestCard = this.page.locator("//div[@class='dashboard-card']//h3[text()='Appointment Requests']")
        this.refillRequestCard = this.page.locator("//div[@class='dashboard-card']//h3[text()='Refill Requests']")
        this.inventoryCard = this.page.locator("//div[@class='dashboard-card']//h3[text()='Inventory']")
        this.replenishmentCard = this.page.locator("//div[@class='dashboard-card']//h3[text()='Replenishment']")
        this.auditLogsCard = this.page.locator("//div[@class='dashboard-card']//h3[text()='Audit Logs']")
    }

    async clickPatients() {
        await this.patientCard.click();
    }

    async clickDoctors() {
        await this.doctorCard.click();
    }

    async clickAppointments() {
        await this.appointmentCard.click();
    }

    async clickAppointmentRequests() {
        await this.appointmentRequestCard.click();
    }

    async clickRefillRequests() {
        await this.refillRequestCard.click();
    }

    async clickInventory() {
        await this.inventoryCard.click();
    }

    async clickReplenishment() {
        await this.replenishmentCard.click();
    }

    async clickAuditLogs() {
        await this.auditLogsCard.click();
    }
}