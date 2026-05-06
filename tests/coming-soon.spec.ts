import { test, expect } from '@playwright/test'

test('migrated WordPress homepage renders key live-site content', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /April/i }).first()).toBeVisible()
  await expect(page.getByText(/April/i).first()).toBeVisible()
  await expect(page.getByText(/Weekly/i).first()).toBeVisible()
})
