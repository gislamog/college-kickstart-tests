import { defineConfig } from '@playwright/test';

export default defineConfig({
    reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
    use: {
        baseURL: 'https://www.collegekickstart.com',
        headless: true,
        viewport: { width: 1280, height: 720 },
        //navigationTimeout: 120000,   // use for slow internet
    },
});