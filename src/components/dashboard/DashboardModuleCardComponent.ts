import { Locator, Page } from "@playwright/test";
import { DashboardModule } from "../../data/constants/dashboardModules";

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

    async clickModule(module: DashboardModule) {
        const cards: Record<DashboardModule, Locator> = {
            patients: this.patientCard,
            doctors: this.doctorCard,
            appointments: this.appointmentCard,
            appointmentRequests: this.appointmentRequestCard,
            refillRequests: this.refillRequestCard,
            inventory: this.inventoryCard,
            replenishment: this.replenishmentCard,
            auditLogs: this.auditLogsCard
        };
        await cards[module].click();
    }
} 