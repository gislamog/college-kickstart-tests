import { Page } from '@playwright/test';
import { selectors } from './selectors';

export async function login(page: Page, email: string, password: string) {
  await page.click(selectors.loginButton);
  await page.fill(selectors.emailInput, email);
  await page.fill(selectors.passwordInput, password);
  await page.click(selectors.submitButton);
}