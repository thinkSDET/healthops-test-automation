import { Locator, Page } from "@playwright/test";
import { ModulePageBase } from "../pageBase/ModulePageBase";

export class AppointmentRequestPage extends ModulePageBase{

    constructor(page:Page){
     super(page)
    }
}