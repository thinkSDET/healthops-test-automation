import { Locator, Page } from "@playwright/test";

export class PatientsPage {

    readonly patientsHeader: Locator;
    page : Page
    constructor(page:Page){
      this.page = page
      this.patientsHeader = page.locator('header.patients-header h1');
    }
}