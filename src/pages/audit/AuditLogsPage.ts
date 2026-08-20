import { Locator, Page } from "@playwright/test";

export class AuditLogsPage {

    readonly auditLogsHeader: Locator;
    page : Page
    constructor(page:Page){
      this.page = page
      this.auditLogsHeader = page.locator('header.patients-header h1');
    }
}