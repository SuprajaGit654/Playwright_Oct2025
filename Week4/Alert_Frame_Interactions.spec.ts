import test from '@playwright/test';

test("Alert and Frame",async({page})=>{  
    
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")   

   
    await page.frameLocator("#iframeResult").locator("button[onclick='myFunction()']").click()

    await page.on("dialog",async(dialog)=>{
        const type = dialog.type();
        console.log(`Dialog Type: ${dialog.type()}`);
        console.log("Message from Dialog Box : " + dialog.message())
        if(type === 'confirm'){
            await dialog.accept()
        } else {
            await dialog.dismiss()
        }
    })

    await page.waitForTimeout(3000)
    const message = await page.frameLocator("#iframeResult").locator("#demo").innerText()
    console.log("Message displayed on the webpage : " + message)

})