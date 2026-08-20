import { Locator, Page } from "@playwright/test";
import { ModulePageBase } from "../pageBase/ModulePageBase";
export class DoctorsPage extends ModulePageBase {

    
    constructor(page:Page){
      super(page)
    }
}