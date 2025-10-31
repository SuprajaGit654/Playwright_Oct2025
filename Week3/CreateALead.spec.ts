import test, {expect} from '@playwright/test'

test("Create A Lead",async({page})=>{

//Login to Leaftaps
//await page.goto("http://leaftaps.com/opentaps/control/main")
await page.goto('http://leaftaps.com/opentaps/control/main', {
    timeout: 30000, // Increase timeout to 30 seconds
    waitUntil: 'domcontentloaded' // Use a faster load trigger
  });
  //verify page content
  //await expect(page).toHaveURL(/.*control\/main/);
await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Platform");
//await page.waitForTimeout(2000)
await page.getByRole("textbox", {name:'USERNAME'}).fill("Demosalesmanager")
await page.getByLabel("Password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
//Click on CRM/SFA
await page.getByText("CRM/SFA").click()
//await page.waitForTimeout(2000)
//Enter into Leads Page
await expect(page).toHaveTitle("My Home | opentaps CRM");
 // Define the locator
  const LeadLink = page.locator("a:has-text('Leads')");
  // Wait for the element to be visible and enabled
  await LeadLink.waitFor({ state: 'visible', timeout: 50000 });
  // Click the element
  await LeadLink.click();
//Click on Create Lead
const createLeadLink = page.locator("a:has-text('Create Lead')");
await createLeadLink.waitFor({ state: 'visible', timeout: 50000 });
await createLeadLink.click();

//Fill Create Lead Form
await page.locator("#createLeadForm_companyName").fill("TestLeaf")
await page.locator("#createLeadForm_firstName").fill("Dilip")
await page.locator("#createLeadForm_lastName").fill("Rajendran")
await page.locator("#createLeadForm_generalProfTitle").fill("Mr")

//await page.locator("#createLeadForm_personalTitle").fill("Hello")
await page.locator("#createLeadForm_annualRevenue").fill("1000000")
await page.locator("#createLeadForm_departmentName").fill("Testing")
await page.locator("#createLeadForm_primaryPhoneNumber").fill("1122334455")
await page.locator(".smallSubmit").click()
await page.waitForTimeout(3000)
//Assertions
//await expect.soft(page.locator("#viewLead_companyName_sp")).toBeDisabled()
await expect.soft(page.locator("#viewLead_companyName_sp")).toContainText("TestLeaf")
await expect.soft(page.locator("#viewLead_firstName_sp")).toHaveText("Dilip")
await expect.soft(page.locator("#viewLead_lastName_sp")).toHaveText("Rajendran")
await expect.soft(page.locator("#viewLead_statusId_sp")).toHaveText("Assigned")

})
