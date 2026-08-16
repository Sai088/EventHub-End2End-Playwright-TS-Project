import { expect, type Locator, type Page } from '@playwright/test';


export class BookingPage{
    readonly page: Page;
    readonly BookEventBtn: Locator;
    readonly countTicket: Locator;
    readonly eventName: Locator;
    readonly eventDate: Locator;
    readonly eventLocation: Locator;
    readonly perTicketPrice: Locator;
    readonly ticketCount: Locator;
    readonly personName: Locator;
    readonly personEmail: Locator;
    readonly personPhone: Locator;
    readonly totalAmount: Locator;
    readonly submitBookingBtn: Locator;
    readonly successMessage: Locator;
    readonly message1: Locator;
    readonly bookingId: Locator;
    readonly bookingDetails: Locator;

    constructor(page: Page) {
        this.page = page;
        this.BookEventBtn = this.page.locator('[data-testid="book-now-btn"]');
        this.countTicket = this.page.locator('//button[text()="+"]');
        this.eventName = this.page.locator('//div/h1');
        this.eventDate = this.page.locator('//div[@class="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5"][1]//div//p[2]');
        this.eventLocation = this.page.locator('//div[@class="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5"][3]//div//p[2]');
        this.perTicketPrice = this.page.locator('//div[@class="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5"][6]//div//p[2]');
        this.ticketCount = this.page.locator("//span[@id='ticket-count']");
        this.personName = this.page.getByPlaceholder('Your full name');
        this.personEmail = this.page.getByPlaceholder('you@email.com');
        this.personPhone = this.page.locator('#phone');
        this.totalAmount = this.page.locator("//span[@class='text-indigo-700']");
        this.submitBookingBtn = this.page.locator("//button[@type='submit']");
        this.successMessage = this.page.locator("//div//h3[text()='Booking Confirmed! 🎉']");
        this.message1 = this.page.locator("//p[@class='text-gray-500 text-sm mb-5']");
        this.bookingId = this.page.locator("//span[@class='booking-ref font-mono font-bold text-indigo-600']");
        this.bookingDetails = this.page.locator("//div[@class='bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-5 text-left space-y-2']");


}

async navigateToBookAnEvent(page: Page) {
    await this.BookEventBtn.first().click();

}

async verifyBookingPageURL(page: Page) {
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/events/3")
}

async fillBookingDetailsAndSubmit(name:string, email:string, phone: string) {
    
    let nameOfEvent = await this.eventName.textContent();
    console.log("Event Name is : " + nameOfEvent);
    let date =await this.eventDate.textContent()
    console.log("Event Date is : " + date)
    let location =await this.eventLocation.textContent()
    console.log("Event Location is: " + location)
    let ticketPriceEach = await this.perTicketPrice.textContent()
    console.log("Per Ticket Price is: " + ticketPriceEach)

    //await this.countTicket.click() //2, default ticket count is 1, so clicking once to make it 2
    //await expect(this.ticketCount).toHaveText("2");
    await this.personName.fill("technoji")
    await this.personEmail.fill("technoji550@gmail.com")
    await this.personPhone.fill("9876543210");
    var Total = await this.totalAmount.textContent()
    console.log("Total Amount is: " + Total)
    await this.submitBookingBtn.click()

}


async verifySuccessMessageAndBookingDetails() {
    let successMsg =await this.successMessage.textContent()
    console.log("Success Message is: " + successMsg)

    let msg1 = await this.message1.textContent()
    console.log("Message is: "+msg1)

    let bookingEventID = await this.bookingId.textContent()
    console.log("Booking ID is: " + bookingEventID)

    let bookingEventDetails = await this.bookingDetails.textContent()
    console.log("Booking Details: " + bookingEventDetails)
}

    //await page.goto("https://eventhub.rahulshettyacademy.com/login")
    // await page.locator('#email').fill("technoji550@gmail.com")
    // await page.locator("#password").fill("Techno@123")
    // await page.locator('#login-btn').click()
    //await page.waitForEvent('load')
    //await page.locator('#book-now-btn').click()
    // 
    // Click "Book Now" on the first event card
    

    

    
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

}