import { Locator, Page } from "@playwright/test";

export class DoctorsPage {

    readonly doctorsHeader: Locator;
    page : Page
    constructor(page:Page){
      this.page = page
      this.doctorsHeader = page.locator('header.patients-header h1');
    }
}