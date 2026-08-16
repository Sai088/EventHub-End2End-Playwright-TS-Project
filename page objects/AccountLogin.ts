import { expect, type Locator, type Page } from '@playwright/test';

export class AccountLogin {
    readonly page: Page;
    readonly LoginEmail: Locator;
    readonly LoginPassword: Locator;
    readonly LoginBtn: Locator;
    readonly LogoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.LoginEmail = this.page.locator('#email');
        this.LoginPassword = this.page.locator("#password");
        this.LoginBtn = this.page.locator('#login-btn');
        this.LogoutBtn = this.page.locator("#logout-btn");
    }

    async gotoLoginURL(url: string){
        await this.page.goto(url);
    }

    async loginAccount(email: string, password: string) {
        await this.LoginEmail.fill(email);
        await this.LoginPassword.fill(password);
    }

    async clickLoginbutton() {
        await this.LoginBtn.click();
    }

    async clickLogoutButton() {
        await this.LogoutBtn.click
    }

}
