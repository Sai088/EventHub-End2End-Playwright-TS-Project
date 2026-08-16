import { expect, type Locator, type Page } from '@playwright/test';

export class AccountRegistration {
    readonly page: Page;
    //readonly URL: string;
    readonly registerEmail: Locator;
    readonly registerPassword: Locator;
    readonly repeatPassword: Locator;
    readonly registerBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        //this.URL = page.locator("https://eventhub.rahulshettyacademy.com/register");
        this.registerEmail = this.page.locator("#register-email");
        this.registerPassword = this.page.locator("#register-password");
        this.repeatPassword = this.page.getByPlaceholder("Repeat your password");
        this.registerBtn = this.page.locator("#register-btn");
    }


    async goto(url: string) {
        await this.page.goto(url);
    }

    async registerAccount(email: string, password: string, repeatPassword: string) {
        //await page.goto("https://eventhub.rahulshettyacademy.com/register");
            await this.registerEmail.fill(email)
            await this.registerPassword.fill(password)
            await this.repeatPassword.fill(repeatPassword)
            await this.registerBtn.click()
            //await expect(page).toHaveTitle("EventHub - Discover & Book Events");
            //Already have an account then navigate to login page using below element link
            //wait page.locator("//a[text()='Sign in']").click()
    }
}