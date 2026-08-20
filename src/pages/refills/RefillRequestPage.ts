import { Locator, Page } from "@playwright/test";
import { ModulePageBase } from "../pageBase/ModulePageBase";

export class RefillRequestPage extends ModulePageBase {

    constructor(page:Page){
      super(page)
    }
}