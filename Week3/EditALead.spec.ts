import test, {expect} from '@playwright/test'

test("Edit A Lead",async({page})=>{

//Login to Leaftaps

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

//Enter into Leads Page
await expect(page).toHaveTitle("My Home | opentaps CRM");
 // Define the locator
  const LeadLink = page.locator("a:has-text('Leads')");
  // Wait for the element to be visible and enabled
  await LeadLink.waitFor({ state: 'visible', timeout: 50000 });
  // Click the element
  await LeadLink.click();
//Click on Find Leads
const findLeadLink = page.locator("a:has-text('Find Leads')");
await findLeadLink.waitFor({ state: 'visible', timeout: 50000 });
await findLeadLink.click();
page.waitForTimeout(2000)
//Fill Find Lead Form
await page.getByRole('textbox', { name: 'First name:' }).fill("Dilip")
await page.locator("button:has-text('Find Leads')").click()
await page.waitForTimeout(5000)
await page.locator("div.x-grid3-cell-inner.x-grid3-col-partyId > a").first().click()
//Click on Edit
const editLeadLink = page.locator("a:has-text('Edit')");
//await editLeadLink.waitFor({ state: 'visible', timeout: 50000 });
await editLeadLink.click()
await page.locator("#updateLeadForm_companyName").fill("TestLeaf Solutions")
await page.locator("#updateLeadForm_annualRevenue").fill("2000000")
await page.locator("#updateLeadForm_departmentName").fill("Development")
await page.locator("#updateLeadForm_description").fill("Details Updated")
await page.locator("input:has-text('Update')").click()
await page.waitForTimeout(3000)

//Assertions
await expect.soft(page.locator("#viewLead_companyName_sp")).toContainText("TestLeaf Solutions")
await expect.soft(page.locator("#viewLead_annualRevenue_sp")).toHaveText("$2,000,000.00")
await expect.soft(page.locator("#viewLead_departmentName_sp")).toHaveText("Development")
await expect.soft(page.locator("#viewLead_description_sp")).toHaveText("Details Updated")

})
