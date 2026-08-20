import { Locator, Page } from "@playwright/test";

export class InventoryPage {

    readonly inventoryHeader: Locator;
    page : Page
    constructor(page:Page){
      this.page = page
      this.inventoryHeader = page.locator('header.patients-header h1');
    }
}