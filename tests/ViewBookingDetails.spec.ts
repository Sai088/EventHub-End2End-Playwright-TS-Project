import {test, expect} from '@playwright/test'

import { AccountRegistration } from '../page objects/AccountRegistration';
import {AccountLogin} from '../page objects/AccountLogin';
import { MyBookings } from '../page objects/MyBookings';

test.skip("View the Booking Event Details", async({page}) => {
    const accountLogin = new AccountLogin(page);
    await accountLogin.gotoLoginURL("https://eventhub.rahulshettyacademy.com/login");
    await accountLogin.LoginEmail.fill("technoji550@gmail.com");
    await accountLogin.LoginPassword.fill("Techno@123");
    await accountLogin.clickLoginbutton();
    const mybooking = new MyBookings(page);
    await mybooking.bookingHeader.click()
    await mybooking.viewDetails.first().click();
    await mybooking.getScreenshot();

    // var bookingHeaderDetails = await page.locator("//div[@class='flex flex-wrap items-start justify-between gap-4 mb-8']//div").textContent()
    // console.log("Booking Header Details are: " + bookingHeaderDetails)

    // var fullBookingDetails = await page.locator("//div[@class='space-y-4']").textContent()
    // console.log("Full Booking Details are: " + fullBookingDetails)

})