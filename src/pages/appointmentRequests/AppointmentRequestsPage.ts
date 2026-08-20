import { Locator, Page } from "@playwright/test";

export class AppointmentRequestPage {

    readonly appointmentRequestHeader: Locator;
    page : Page
    constructor(page:Page){
      this.page = page
      this.appointmentRequestHeader = page.locator('header.patients-header h1');
    }
}