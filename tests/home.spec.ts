import { expect, test } from '@playwright/test';

test('index page has expected footer', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('footer')).toBeVisible();
});
