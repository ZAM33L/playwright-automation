import { test, expect } from "@playwright/test"

test.describe("assertions", () => {
    test("checkboxes",async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/checkboxes")

        await page.waitForTimeout(1000)
        await page.waitForLoadState("networkidle")

        
        const cb1 = await page.locator("//input[@type='checkbox']").first()
        const cb2 = await page.locator("//input[@type='checkbox']").nth(1)

        await cb1.click()
        await cb2.click()

        await expect(cb1).toBeChecked()
        await expect(cb2).not.toBeChecked()

    })
})