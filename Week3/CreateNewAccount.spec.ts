import test, {expect} from '@playwright/test'

test("Create New Account",async({page})=>{

//Login to SalesForce
await page.goto('https://login.salesforce.com/', {
    timeout: 30000, // Increase timeout to 30 seconds
    waitUntil: 'domcontentloaded' // Use a faster load trigger
  });
await page.waitForTimeout(5000)
//Verify Login Page Title
await expect(page).toHaveTitle("Login | Salesforce");
//Fill Login Form
await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
await page.getByLabel("Password").fill("TestLeaf@2025")
await page.locator("#Login").click()

await page.waitForTimeout(5000)
//Check Home Page Title and URL
//await expect(page).toHaveTitle("Lightning Experience");
await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home");
//Click on App Launcher
await page.locator(".slds-button.slds-context-bar__button.slds-icon-waffle_container.slds-show").click()
await page.waitForTimeout(2000)
await page.getByText("View All").nth(2).click()
await page.waitForTimeout(2000)
//Search and Select 'Service' App
await page.getByPlaceholder("Search apps or items...").fill("Service")
await page.waitForTimeout(3000)
//await page.locator("//*[@id='lgt-accordion-section-928']/slot/div/one-app-launcher-app-tile[1]/div/div[2]/div[1]/a/lightning-formatted-rich-text/span/p/mark").click()
//await page.locator("a:has-text('Service')").click()
await page.getByRole('link', { name: 'Service',exact: true }).click()
await page.click('[title="Accounts"]')
await page.getByRole("button",{name:"New"}).click()
await page.locator("//input[@name='Name']").fill("Dilip Rajendran")
await page.locator("//button[@name='SaveEdit']").click()

await page.waitForTimeout(3000)
//Assertions
await expect(page.locator("//div[contains(@class,'errorMessage')]")).toContainText("No duplicate rules are activated. Activate duplicate rules to identify potential duplicate records.")

})
