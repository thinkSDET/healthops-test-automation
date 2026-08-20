import { Locator, Page } from "@playwright/test";

export class RefillRequestPage {

    readonly refillRequestHeader: Locator;
    page : Page
    constructor(page:Page){
      this.page = page
      this.refillRequestHeader = page.locator('header.patients-header h1');
    }
}