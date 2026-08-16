import {test, expect} from '@playwright/test'

import { AccountRegistration } from '../page objects/AccountRegistration';
import {AccountLogin} from '../page objects/AccountLogin';

test.skip("Account Registration test case", async ({page}) => {
    const accountRegistration = new AccountRegistration(page);
    await accountRegistration.goto("https://eventhub.rahulshettyacademy.com/register");
    await accountRegistration.registerAccount("testing00444@gmail.com", "Testing@123", "Testing@123");
    // await page.goto("https://eventhub.rahulshettyacademy.com/register");
    // await page.locator("#register-email").fill("technoji550@gmail.com")
    // await page.locator("#register-password").fill("Techno@123")
    // await page.getByPlaceholder("Repeat your password").fill("Techno@123")
    // await page.locator("#register-btn").click()
    console.log(await page.title());
    await expect(await page.title()).toBe("EventHub — Discover & Book Events");
    //Already have an account then navigate to login page using below element link
    //wait page.locator("//a[text()='Sign in']").click()
})






test.skip("Account Logout", async ({page}) => {
    await page.goto("https://eventhub.rahulshettyacademy.com/login")
    await page.locator('#email').fill("technoji550@gmail.com")
    await page.locator("#password").fill("Techno@123")
    await page.locator('#login-btn').click()
    //await expect(page).toHaveTitle("EventHub - Discover & Book Events");
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/");
    console.log(await page.title())
    await page.locator("#logout-btn").click()

})



