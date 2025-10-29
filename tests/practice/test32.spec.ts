import { test, expect } from '@playwright/test';

test('testing keyboard 1', async ({ page }) => {
    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").focus()
    await page.keyboard.type("Jio")
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.press("Shift")
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Enter")
});