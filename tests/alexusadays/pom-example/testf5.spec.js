import { test, expect } from '@playwright/test'
import LoginPage from './loginPage'

let login;

test.describe('login tests', () => {

    test.beforeEach(async ({ page }) => {
        login = new LoginPage(page)
    })

    test('login with valid credentials', async () => {
        await login.navigateToPage()
        await login.login('tomsmith', 'SuperSecretPassword!')
    })

})
