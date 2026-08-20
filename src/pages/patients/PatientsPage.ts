import { Locator, Page } from "@playwright/test";
import { ModulePageBase } from "../pageBase/ModulePageBase";

export class PatientsPage extends ModulePageBase {

   
    constructor(page:Page){
     super(page)
    }
}