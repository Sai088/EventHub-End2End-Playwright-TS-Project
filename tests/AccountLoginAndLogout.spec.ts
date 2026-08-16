import {test, expect} from '@playwright/test'

import { AccountRegistration } from '../page objects/AccountRegistration';
import {AccountLogin} from '../page objects/AccountLogin';


test.skip("Account Login and Logout test case", async ({page}) => {
    const accountLogin = new AccountLogin(page);
    await accountLogin.gotoLoginURL("https://eventhub.rahulshettyacademy.com/login");
    await accountLogin.LoginEmail.fill("technoji550@gmail.com");
    await accountLogin.LoginPassword.fill("Techno@123");
    await accountLogin.clickLoginbutton();
    console.log(await page.title());
    await expect(page).toHaveTitle("EventHub — Discover & Book Events");
    // await page.goto("https://eventhub.rahulshettyacademy.com/login")
    // await page.locator('#email').fill("technoji550@gmail.com")
    // await page.locator("#password").fill("Techno@123")
    // await page.locator('#login-btn').click()
    // //await expect(page).toHaveTitle("EventHub - Discover & Book Events");
    // await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/");
    await accountLogin.clickLogoutButton();
})



// test.skip("Account Logout", async ({page}) => {
//     await page.goto("https://eventhub.rahulshettyacademy.com/login")
//     await page.locator('#email').fill("technoji550@gmail.com")
//     await page.locator("#password").fill("Techno@123")
//     await page.locator('#login-btn').click()
//     //await expect(page).toHaveTitle("EventHub - Discover & Book Events");
//     await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/");
//     console.log(await page.title())
//     await page.locator("#logout-btn").click()

// })