import { test, expect } from "@playwright/test"

async function clickButtonMultipleTimes(page,times) {
    for(let i=1;i<=times;i++){
            await page.locator("//button[@id ='button1']").click()
        }
}

test.describe("counter tests", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("http://127.0.0.1:5500/sites/clickMe.html");
    });

    test("proper single counting", async ({ page }) => {
        await page.locator("//button[@id ='button1']").click()
        await expect(page.locator("//div[@id='counter1']")).toHaveText('1')
    })

    test("proper multiple counting", async ({ page }) => {
        let countNum = 3
        for(let i=1;i<=countNum;i++){
            await page.locator("//button[@id ='button1']").click()
        }
        await expect(page.locator("//div[@id='counter1']")).toHaveText(countNum.toString())
    })

    test("proper multiple counting using fn", async ({ page }) => {
        let countNum = 5
        await clickButtonMultipleTimes(page,countNum)
        await expect(page.locator("//div[@id='counter1']")).toHaveText(countNum.toString())
    })

})