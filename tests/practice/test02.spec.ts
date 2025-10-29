import { test, expect } from '@playwright/test'

test('second test',async({page})=>{
    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle('Google')
})