import { test, expect } from '@playwright/test';

test('testing keyboard 1', async ({ page }) => {
    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").focus()
    await page.keyboard.type("Jio")
    // await page.pause()
    await page.waitForSelector("//li[@role='presentation']")
    // await page.keyboard.press("ArrowDown")
    // await page.keyboard.press("ArrowDown")
    // await page.keyboard.press("Enter")
    const elements = await page.$$("//li[@role='presentation']")

     for (let i = 0; i < elements.length; i++) {
        const text = (await elements[i].innerText())?.trim();
        console.log(`Suggestion ${i}: ${text}`);

        if (text && text.toLowerCase().includes("recharge")) {
            await elements[i].click();
            break; // stop after clicking the first match
        }
    }
    
});
//jio recharge