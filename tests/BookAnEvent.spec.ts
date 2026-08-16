import {test, expect} from '@playwright/test'

import { AccountRegistration } from '../page objects/AccountRegistration';
import {AccountLogin} from '../page objects/AccountLogin';
import {BookingPage} from '../page objects/BookingPage';



test.skip("Book for an Event", async({page}) => {
    const accountLogin = new AccountLogin(page);
    await accountLogin.gotoLoginURL("https://eventhub.rahulshettyacademy.com/login");
    await accountLogin.LoginEmail.fill("technoji550@gmail.com");
    await accountLogin.LoginPassword.fill("Techno@123");
    await accountLogin.clickLoginbutton();
    console.log(await page.title());
    //await page.waitForEvent('load')
    //await page.locator('#book-now-btn').click()
    // 
    // Click "Book Now" on the first event card
    //await page.locator('[data-testid="book-now-btn"]').first().click();
    const bookingPage = new BookingPage(page);
    await bookingPage.navigateToBookAnEvent(page);

    await bookingPage.verifyBookingPageURL(page);

    await bookingPage.fillBookingDetailsAndSubmit("technoji", "technoji550@gmail.com", "9876543222");

    await bookingPage.verifySuccessMessageAndBookingDetails();
    // var eventName = await page.locator('//div/h1').textContent()
    // console.log("Event Name is : " + eventName)
    // var eventDate = await page.locator('//div[@class="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5"][1]//div//p[2]').textContent()
    // console.log("Event Date is : " + eventDate)

    // var eventLocation = await page.locator('//div[@class="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5"][3]//div//p[2]').textContent()
    // console.log("Event Location is: " + eventLocation)


    // var perTicketPrice = await page.locator('//div[@class="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5"][6]//div//p[2]').textContent()
    // console.log("Per Ticket Price is: " + perTicketPrice)

    // await page.locator('//button[text()="+"]').click()
    // await expect(page.locator("//span[@id='ticket-count']")).toHaveText("2")
    // await page.getByPlaceholder('Your full name').fill("technoji")
    // await page.getByPlaceholder('you@email.com').fill("technoji550@gmail.com")
    // await page.locator('#phone').fill("9876543210");
    // var Total = await page.locator("//span[@class='text-indigo-700']").textContent()
    // console.log("Total Amount is: " + Total)
    // await page.locator("//button[@type='submit']").click()

    

    // var successMessage =await page.locator("//div//h3[text()='Booking Confirmed! 🎉']").textContent()
    // console.log("Success Message is: " + successMessage)

    // var message1 = await page.locator("//p[@class='text-gray-500 text-sm mb-5']").textContent()
    // console.log("Message is: "+message1)

    // var bookingID = await page.locator("//span[@class='booking-ref font-mono font-bold text-indigo-600']").textContent()
    // console.log("Booking ID is: " + bookingID)

    // var bookingDetails = await page.locator("//div[@class='bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-5 text-left space-y-2']").textContent()
    // console.log("Booking Details: " + bookingDetails)

    //await page.locator("//button[text()='View My Bookings']").click()
    

})