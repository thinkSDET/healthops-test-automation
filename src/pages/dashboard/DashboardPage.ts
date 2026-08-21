import { DashboardHeaderComponent } from "../../components/dashboard/DashboardHeaderComponent";
import { Page } from "@playwright/test";
import { DashboardModuleCardComponent } from "../../components/dashboard/DashboardModuleCardComponent";
import { URLs } from "../../data/constants/urls";
import { DashboardModule } from "../../data/constants/dashboardModules";

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
    async openModule(module: DashboardModule) {
        await this.dashboardModuleCardComponent.clickModule(module);
    }
}