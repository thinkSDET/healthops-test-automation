import { DashboardHeaderComponent } from "../../components/dashboard/DashboardHeaderComponent";
import { Page } from "@playwright/test";

export class DashboardPage{

    page : Page
    readonly dashBoardHeader : DashboardHeaderComponent

    constructor(page:Page){
        this.page = page
        this.dashBoardHeader = new DashboardHeaderComponent(page)
    }
}