import { Locator, Page } from "@playwright/test";

export class AppointmentsPage {

    readonly appointmentsHeader: Locator;
    page : Page
    constructor(page:Page){
      this.page = page
      this.appointmentsHeader = page.locator('header.patients-header h1');
    }
}