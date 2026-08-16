import { expect, type Locator, type Page } from '@playwright/test';

export class MyBookings {
    readonly page: Page;
    readonly viewMyBookingsBtn: Locator;
    readonly cancelBookingBtn: Locator;
    readonly confirmDialogYesBtn: Locator;
    readonly toastmessage: Locator;
    readonly bookingHeader: Locator;
    readonly viewDetails: Locator;

    constructor(page: Page) {
        this.page = page;
        this.viewMyBookingsBtn = this.page.locator("//button[text()='View My Bookings']");
        this.cancelBookingBtn = this.page.locator("#cancel-booking-btn");
        this.confirmDialogYesBtn = this.page.locator('#confirm-dialog-yes');
        this.toastmessage = this.page.locator('[aria-live="polite"]');
        this.bookingHeader = this.page.locator("#nav-bookings");
        this.viewDetails = this.page.locator("//button[text()='View Details']");
    }


    async gotoBookedEvent() {
        await this.viewMyBookingsBtn.click();
        
        // await expect(await this.toastmessage).toBeVisible();     // shows up
        // await expect(await this.toastmessage).toBeHidden({ timeout: 10000 }); // confirms it auto-dismisses
        // console.log("Booking cancelled successfully")
    }

    async cancelBooking() {
        await this.cancelBookingBtn.first().click();
    }

    async confirmCancelBooking() {
        await this.confirmDialogYesBtn.click();
    }

    getToastMessage() {
        return this.toastmessage.getByText('Booking cancelled successfully');
    }

    async verifyToastMessage() {
        const toast = this.getToastMessage();
        await expect(toast).toBeVisible();
        await expect(toast).toBeHidden({ timeout: 10000 });
        console.log("Booking cancelled successfully")
    }

    async navigateToBookingsTab() {
        await this.bookingHeader.click()
    }

    async ClickOnViewDetails() {
        await this.viewDetails.first().click();
    }
    
    // Take the screenshot
    async getScreenshot() {
        await this.page.screenshot({ 
            path: './screenshots/booking-details.png', 
            fullPage: true 
        });
    }
}






// await page.locator("//button[text()='View My Bookings']").click()
//     await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings")
//     await page.locator("#cancel-booking-btn").first().click()

//     await page.locator('#confirm-dialog-yes').click()
//     // Assert the toast appears with the right message
//     const toast = page.locator('[aria-live="polite"]').getByText('Booking cancelled successfully');

//     await expect(toast).toBeVisible();     // shows up
//     await expect(toast).toBeHidden({ timeout: 10000 }); // confirms it auto-dismisses
//     console.log("Booking cancelled successfully")
        