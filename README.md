# EventHub Playwright TS Project

This project contains automated UI tests for the EventHub application using Playwright with TypeScript. The tests cover key user journeys such as login, registration, booking events, viewing bookings, and cancelling bookings.

## Project Overview

The application under test is:
- https://eventhub.rahulshettyacademy.com

This test suite follows the Page Object Model (POM) pattern and keeps UI interactions organized in reusable page classes under the `page objects` folder.

## Tech Stack

- TypeScript
- Playwright
- Playwright Test Runner
- JavaScript/Node.js

## Project Structure

```text
.
├── page objects/
│   ├── AccountLogin.ts
│   ├── AccountRegistration.ts
│   ├── BookingPage.ts
│   └── MyBookings.ts
├── tests/
│   ├── AccountLoginAndLogout.spec.ts
│   ├── AccountRegistration.spec.ts
│   ├── BookAnEvent.spec.ts
│   ├── BookingFullFlow.spec.ts
│   ├── CancelAnBooking.spec.ts
│   └── ViewBookingDetails.spec.ts
├── playwright.config.ts
├── package.json
├── playwright-report/
├── screenshots/
├── test-results/
└── README.md
```

## What the Tests Cover

- User account login and logout
- New user registration
- Booking an event
- Full booking flow validation
- Viewing booking details
- Cancelling an existing booking

## Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js (LTS version recommended)
- npm

## Installation

1. Clone the repository
2. Navigate to the project folder
3. Install dependencies:

```bash
npm install
```

4. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/BookingFullFlow.spec.ts
```

Run tests in headed mode (visible browser):

```bash
npx playwright test --headed
```

Run a specific test name:

```bash
npx playwright test -g "Book for an Event"
```

## Reporting

This project is configured to generate an HTML report using Playwright.

To view the last generated report:

```bash
npx playwright show-report
```

The report files are stored in the `playwright-report` folder.

## Configuration

The main Playwright configuration is defined in `playwright.config.ts`.

Key settings include:

- Test directory: `./tests`
- Browser project: Chromium
- Screenshot capture enabled
- Trace recording enabled
- HTML reporter enabled

## Notes

- Some tests are currently marked with `test.skip(...)` and can be enabled when you want to run them individually.
- The scripts use real UI interactions against the EventHub website, so credentials and flows should be validated before running in a shared environment.
- Screenshots and test results are automatically stored in the `screenshots` and `test-results` folders.

## Contribution

Feel free to add more test scenarios, improve page objects, or expand coverage for additional user flows.

## License

This project is currently using the ISC license as defined in `package.json`.
