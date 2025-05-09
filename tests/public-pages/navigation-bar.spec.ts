import { test, expect } from '@playwright/test';
import { login } from '../../helpers/helpers';

test.beforeEach(async ({ page, baseURL }) => {
  //await page.goto(baseURL!);
  await page.goto(baseURL!, { waitUntil: 'domcontentloaded' });

});

test('Verify the Navigation bar components @nav-bar @public-user', async ({ page }) => {
  const navItems = await page.locator('.uk-navbar-container').allTextContents();
  console.log('Navigation bar items:', navItems);
});
