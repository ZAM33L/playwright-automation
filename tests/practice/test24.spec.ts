import { test, expect } from '@playwright/test';

// test.use({ viewport: { width: 1500, height: 1000 } });


test('full test using USE property',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    // console.log(await page.viewportSize()?.width)
    // console.log(await page.viewportSize()?.height)
    
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    // await page.locator("//button[@type='submit']").click()
    await page.locator("//button[normalize-space()='Login']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // const errorMsg = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent();
    // console.log("Error message is: " + errorMsg?.trim());
    // expect(errorMsg?.includes("Invalid")).toBeTruthy()
    // expect(errorMsg ==="Invalid credentials").toBeTruthy()

})