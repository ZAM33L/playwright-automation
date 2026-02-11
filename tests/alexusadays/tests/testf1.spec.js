import { test, expect } from "@playwright/test"

test.describe("login tests", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/login");
    });

    test("proper login", async ({ page }) => {
        await page.locator('//input[@id="username"]').fill("tomsmith")
        await page.locator('//input[@id="password"]').fill("SuperSecretPassword!")
        await page.locator('//button[@type="submit"]').click()
        await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure")
        await expect(page.locator("//div[@id='flash']")).toContainText("You logged into a secure area!")
    })

    test.afterEach(async ({ page }) => {
        await page.locator('//a//i[text()="Logout"]').click()
        await expect(page).toHaveURL("https://the-internet.herokuapp.com/login")
    });
})