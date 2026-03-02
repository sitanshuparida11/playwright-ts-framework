import { Page, expect } from '@playwright/test';

export class DashboardPage {

  constructor(private page: Page) {}

  async verifyDashboardLoaded() {
  const products = this.page.locator('.card-body');
  await expect(products).toHaveCount(3);
}
}