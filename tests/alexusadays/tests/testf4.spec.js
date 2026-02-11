import {test , expect, chromium} from "@playwright/test"
import { permission } from "process";

let browser;
let context;
let page;

test.describe("hooks and pages",()=>{

    test.beforeAll(async()=>{
        browser = await chromium.launch()
        console.log("browser launched in BEFORE ALL HOOK")
    })
    test.beforeEach(async()=>{
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto("https://the-internet.herokuapp.com/")
        console.log("page launched in BEFORE EACH HOOK")
    })
    test.afterEach(async()=>{
        await page.close()
        await context.close()
        console.log("page closed in BEFORE EACH HOOK")
    })
    test.afterAll(async()=>{
        await browser.close()
        console.log("browser closed in BEFORE ALL HOOK")
    })

    test('A/B test',async()=>{
        console.log("A/B test")
        await page.click('//a[text()="A/B Testing"]')
        const h3 = await page.textContent('//h3')
        expect(h3).toBe('A/B Test Variation 1')
    })
    test('Checkbox test',async()=>{
        console.log("Checkbox test")
        await page.click('//a[text()="Checkboxes"]')
        const h3 = await page.textContent('//h3')
        expect(h3).toBe('Checkboxes')

        await page.waitForTimeout(1000)
        await page.waitForLoadState("networkidle")

        
        const cb1 = await page.locator("//input[@type='checkbox']").first()
        const cb2 = await page.locator("//input[@type='checkbox']").nth(1)

        await cb1.click()
        await cb2.click()

        await expect(cb1).toBeChecked()
        await expect(cb2).not.toBeChecked()
    })
    test('Geolocation test',async()=>{

        context = await browser.newContext({
            permissions:['geolocation'],
            geolocation:{latitude:52.520007,longitude:13.404954},
            viewport:{width:1280,height:720}
        })
        page = await context.newPage()
        console.log("page launched in NEW CONTEXT")
        await page.goto("https://the-internet.herokuapp.com/geolocation")

        await page.locator('//button[text()="Where am I?"]').click()

        const latitude = await page.textContent('#lat-value')
        const longitude = await page.textContent('#long-value')

        expect(parseFloat(latitude)).toBeCloseTo(52.520007)
        expect(parseFloat(longitude)).toBeCloseTo(13.404954)



    })
}) 