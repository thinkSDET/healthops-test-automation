import { DashboardHeaderComponent } from "../../components/dashboard/DashboardHeaderComponent";
import { Page } from "@playwright/test";
import { DashboardModuleCardComponent } from "../../components/dashboard/DashboardModuleCardComponent";
import { URLs } from "../../data/constants/urls";

export class DashboardPage {

    page: Page
    readonly dashBoardHeader: DashboardHeaderComponent
    readonly dashboardModuleCardComponent: DashboardModuleCardComponent

    constructor(page: Page) {
        this.page = page
        this.dashBoardHeader = new DashboardHeaderComponent(page)
        this.dashboardModuleCardComponent = new DashboardModuleCardComponent(page)
    }
    async navigateToDashboard() {
        await this.page.goto(URLs.DASHBOARD);
    }
    async openDoctors() {
        await this.dashboardModuleCardComponent.clickDoctors();
    }

    async openPatients() {
        await this.dashboardModuleCardComponent.clickPatients();
    }

    async openAppointments() {
        await this.dashboardModuleCardComponent.clickAppointments();
    }

    async openAppointmentRequests() {
        await this.dashboardModuleCardComponent.clickAppointmentRequests();
    }

    async openRefillRequests() {
        await this.dashboardModuleCardComponent.clickRefillRequests();
    }

    async openInventory() {
        await this.dashboardModuleCardComponent.clickInventory();
    }

    async openReplenishment() {
        await this.dashboardModuleCardComponent.clickReplenishment();
    }

    async openAuditLogs() {
        await this.dashboardModuleCardComponent.clickAuditLogs();
    }

}