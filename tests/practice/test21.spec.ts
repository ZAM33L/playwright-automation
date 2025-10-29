import { test, expect } from '@playwright/test';

test('verify title',async ({page})=>{
    await page.goto("https://google.com")
    const url = await page.url()
    console.log("url is "+ url)
    const title = await page.title()
    console.log("title is "+ title)
    await expect(page).toHaveTitle("Google")
})