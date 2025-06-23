import { test } from '@playwright/test';

test('Espresso cup added to Cart', async ({ page }) => {

  await page.goto('https://coffee-cart.app/');
  await page.getByTestId('Espresso').click();
  await page.getByLabel('Cart page').click();
  await page.waitForURL('https://coffee-cart.app/cart');
  await page.getByLabel('Remove all Espresso').click();
});
