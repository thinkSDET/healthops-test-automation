import { Locator, Page,expect } from "@playwright/test";
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
    readonly searchInput : Locator
    readonly doctorStatus :Locator

    constructor(page:Page){
      super(page)
      this.addButton =  page.locator("//button[text()='+ Add Doctor']")
      
      this.doctorcode = page.locator("//input[@placeholder='e.g. DOC-1001']")
      this.licenseNumber = page.locator("//input[@placeholder='Medical license number']")
      this.firstName = page.locator("//input[@placeholder='First name']")
      this.lastName = page.locator("//input[@placeholder='Last name']")
      this.specialization = page.locator("//input[@placeholder='e.g. Cardiology']")
      this.experience = page.locator("//input[@placeholder='Years']")
      this.email = page.locator("//input[@placeholder='doctor@example.com']")
      this.phone = page.locator("//input[@placeholder='+91 9876543210']")
      this.searchInput = page.locator("//input[@placeholder='Search doctors...']");
      this.createButton = page.locator("//button[text()='Create Doctor']")
      this.cancelButton = page.locator("//button[text()='Cancel']")
      this.doctorStatus = page.locator("(//article[contains(@class, 'doctor-record-card')]//div[2]//div//span)[1]");
    }

    async createDoctor(data : AdminCreateDoctorData){
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

    async searchDoctor(searchText: string) {
    await this.searchInput.fill(searchText);
    await this.page.waitForLoadState()
}
}