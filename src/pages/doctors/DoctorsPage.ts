import { Locator, Page } from "@playwright/test";
import { ModulePageBase } from "../pageBase/ModulePageBase";
import { AdminCreateDoctorData } from "../../types/auth/TestDataTypes";
export class DoctorsPage extends ModulePageBase {

    readonly addButton : Locator
    readonly createButton : Locator
    readonly cancelButton : Locator
    readonly doctorcode :Locator
    readonly licenseNumber : Locator
    readonly firstName : Locator
    readonly lastName : Locator
    readonly specialization : Locator
    readonly experience : Locator
    readonly email : Locator
    readonly phone : Locator

    constructor(page:Page){
      super(page)
      this.addButton =  page.locator("//button[text()='+ Add Doctor']")
      this.createButton = page.locator("//button[text()='Create Doctor']")
      this.cancelButton = page.locator("//button[text()='Cancel']")
      this.doctorcode = page.locator("//input[@placeholder='e.g. DOC-1001']")
      this.licenseNumber = page.locator("//*[@name='licenseNumber']")
      this.firstName = page.locator("//*[@name='firstName']")
      this.lastName = page.locator("//*[@name='lastName']")
      this.specialization = page.locator("//*[@name='specialization']")
      this.experience = page.locator("//*[@name='experience']")
      this.email = page.locator("//*[@name='email']")
      this.phone = page.locator("//*[@name='phone']")
    }

    async CreateDoctor(data : AdminCreateDoctorData){
      await this.addButton.click()
      await this.doctorcode.fill(data.doctorCode)
      await this.licenseNumber.fill(data.licenseNumber)
      await this.firstName.fill(data.firstName)
      await this.lastName.fill(data.lastName)
      await this.specialization.fill(data.specialization)
      await this.experience.fill(data.experience)
      await this.email.fill(data.email)
      await this.phone.fill(data.phone)
      await this.createButton.click()
    }
}