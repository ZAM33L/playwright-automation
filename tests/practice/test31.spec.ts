import { test, expect } from '@playwright/test';

test('testing keyboard 1', async ({ page }) => {
    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").fill("Mohammed Jameel Asfer")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Control+V")
    await page.keyboard.press("Enter")
});