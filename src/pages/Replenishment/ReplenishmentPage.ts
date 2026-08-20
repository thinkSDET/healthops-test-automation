import { Locator, Page } from "@playwright/test";

export class ReplenishmentPage {

    readonly replenishmentHeader: Locator;
    page : Page
    constructor(page:Page){
      this.page = page
      this.replenishmentHeader = page.locator('header.patients-header h1');
    }
}