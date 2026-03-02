import { test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { DashboardPage } from "../Pages/Dashboard";

test.describe("Rahul Shetty Client App Tests", () => {
  test("Valid Login Test", async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await login.navigate();
    await login.login("sitanshuparida54@gmail.com", "Roli@123");

    await dashboard.verifyDashboardLoaded();
  });

  test("Verify Title After Login", async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigate();
    await login.login("sitanshuparida54@gmail.com", "Roli@123");

    await page.waitForLoadState("networkidle");
    console.log(await page.title());
  });

  test("Checkout", async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigate();
    await login.login("sitanshuparida54@gmail.com", "Roli@123");

    await page.waitForLoadState("networkidle");
    console.log(await page.title());
    await page.getByRole("button", { name: " Add To Cart" }).first().click();
    await page.getByRole("button", { name: "   Cart" }).click();
    await page.getByRole("button", { name: "Checkout❯" }).click();
    await page.getByRole("textbox").nth(1).click();
    await page.getByRole("textbox").nth(1).fill("879");
    await page.getByRole("textbox").nth(2).click();
    await page.getByRole("textbox").nth(2).press("CapsLock");
    await page.getByRole("textbox").nth(2).fill("H");
    await page.getByRole("textbox").nth(2).press("CapsLock");
    await page.getByRole("textbox").nth(2).fill("Henry");
    await page.locator('input[name="coupon"]').click();
    await page.locator('input[name="coupon"]').press("CapsLock");
    await page.locator('input[name="coupon"]').fill("RRTH");
    await page.getByRole("button", { name: "Apply Coupon" }).click();
    await page.getByRole("textbox", { name: "Select Country" }).click();
    await page
      .getByRole("textbox", { name: "Select Country" })
      .press("CapsLock");
    await page.getByRole("textbox", { name: "Select Country" }).fill("i");
    await page
      .getByRole("textbox", { name: "Select Country" })
      .press("CapsLock");
    await page.getByRole("textbox", { name: "Select Country" }).fill("iNDIA");
    await page.getByRole("button", { name: " India" }).click();
    await page.getByText("Place Order").click();
  });
});
