import { test, expect } from '@playwright/test';
test.describe('Flyr App Sign In', () => {
    test ('should sign in successfully with valid credentials', async ({ page}) => {
        // Go to the pagarbook website
        await page.goto('https://web.bookmypagar.com/');

        // Navigate to the pagarbook sign-in page
        await page.click('text=login');

        // Enter valid mobile number
        await page.fill('input[number="4894000000"]', 'validUser');

        // Click on the 'Continue' button
        await page.click('button:has-test("Continue")');

        // Enter valid otp
        await page.fill('input[otp="999999"]','validOtp');

        // Verify successful sign-in by checking for a specific element on the dashboard
        await expect(page.locator('text=Dashboard')).toBeVisible();


    })
})