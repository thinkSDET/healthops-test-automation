import { Locator, Page } from "@playwright/test";
import { ModulePageBase } from "../pageBase/ModulePageBase";

export class InventoryPage extends ModulePageBase {

    
    constructor(page:Page){
      super(page)
    }
}