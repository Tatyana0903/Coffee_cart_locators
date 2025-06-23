import { test } from '@playwright/test';

test('Cappuccino cup added to Cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
   await page.getByTestId('Cappuccino').click();
   await page.getByLabel('Cart page').click();
   await page.waitForURL('https://coffee-cart.app/cart');
   await page.getByRole('button', { name: 'Add one Cappuccino' }).click();

});
