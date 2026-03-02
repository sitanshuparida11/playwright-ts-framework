import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/Dashboard';

test.describe('Rahul Shetty Client App Tests', () => {

  test('Valid Login Test', async ({ page }) => {

    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await login.navigate();
    await login.login(
      'sitanshuparida54@gmail.com',
      'Roli@123'
    );

    await dashboard.verifyDashboardLoaded();
  });

  test('Verify Title After Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();
    await login.login(
      'sitanshuparida54@gmail.com',
      'Roli@123'
    );

    await page.waitForLoadState('networkidle');
    console.log(await page.title());
  });

});