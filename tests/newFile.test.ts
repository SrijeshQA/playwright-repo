import test from "@playwright/test";


test("New test #1", async ({page}) => {
    await page.goto("https://automationplayground.com/back-office/pages/login.html");
    await page.fill("//input[@name='email']","admin");
    await page.fill("//input[@name='password']","admin123");
    await page.click("//a[text()='Login']");
    await page.waitForLoadState();
})