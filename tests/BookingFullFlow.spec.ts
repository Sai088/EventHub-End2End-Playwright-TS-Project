import {test, expect} from '@playwright/test'
import {AccountLogin} from '../page objects/AccountLogin';
import {BookingPage} from '../page objects/BookingPage';
import { MyBookings } from '../page objects/MyBookings';



test("Book for an Event", async({page}) => {
    const accountLogin = new AccountLogin(page);
    await accountLogin.gotoLoginURL("https://eventhub.rahulshettyacademy.com/login");
    await accountLogin.LoginEmail.fill("technoji550@gmail.com");
    await accountLogin.LoginPassword.fill("Techno@123");
    await accountLogin.clickLoginbutton();
    console.log(await page.title());
    
    const bookingPage = new BookingPage(page);
    await bookingPage.navigateToBookAnEvent(page);

    await bookingPage.verifyBookingPageURL(page);

    await bookingPage.fillBookingDetailsAndSubmit("technoji", "technoji550@gmail.com", "9876543222");

    await bookingPage.verifySuccessMessageAndBookingDetails();

    const mybooking = new MyBookings(page);
    await mybooking.bookingHeader.click()
    await mybooking.viewDetails.first().click();
    await mybooking.getScreenshot();
})