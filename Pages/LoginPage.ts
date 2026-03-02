import { Page, expect } from '@playwright/test';

export class LoginPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(
      'https://rahulshettyacademy.com/client/#/auth/login'
    );
  }

  async login(username: string, password: string) {
    await this.page.locator('#userEmail').fill(username);
    await this.page.locator('#userPassword').fill(password);
    await this.page.locator('#login').click();
  }
}