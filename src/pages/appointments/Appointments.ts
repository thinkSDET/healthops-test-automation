import { Locator, Page } from "@playwright/test";
import { ModulePageBase } from "../pageBase/ModulePageBase";

export class AppointmentsPage extends ModulePageBase {

    readonly requestAppointment : Locator

    constructor(page:Page){
      super(page)
      this.requestAppointment = page.locator("//button[text()='Request appointment']")
    }

    async openRequestAppointment(){
      this.requestAppointment.click()
    }
}