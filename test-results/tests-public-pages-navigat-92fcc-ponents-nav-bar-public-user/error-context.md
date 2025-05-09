# Test info

- Name: Verify the Navigation bar components @nav-bar @public-user
- Location: C:\Users\gulsu\Desktop\College Kickstart\college-kickstart-tests\tests\public-pages\navigation-bar.spec.ts:10:5

# Error details

```
Error: page.goto: net::ERR_NETWORK_ACCESS_DENIED at https://www.collegekickstart.com/
Call log:
  - navigating to "https://www.collegekickstart.com/", waiting until "domcontentloaded"

    at C:\Users\gulsu\Desktop\College Kickstart\college-kickstart-tests\tests\public-pages\navigation-bar.spec.ts:6:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { login } from '../../helpers/helpers';
   3 |
   4 | test.beforeEach(async ({ page, baseURL }) => {
   5 |   //await page.goto(baseURL!);
>  6 |   await page.goto(baseURL!, { waitUntil: 'domcontentloaded' });
     |              ^ Error: page.goto: net::ERR_NETWORK_ACCESS_DENIED at https://www.collegekickstart.com/
   7 |
   8 | });
   9 |
  10 | test('Verify the Navigation bar components @nav-bar @public-user', async ({ page }) => {
  11 |   const navItems = await page.locator('.uk-navbar-container').allTextContents();
  12 |   console.log('Navigation bar items:', navItems);
  13 | });
  14 |
```