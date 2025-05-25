const { test, expect } = require('@playwright/test');

test('Todo app flow: add 3 todos, delete one, verify list', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const todos = ['Write tests', 'Fix bugs', 'Deploy app']
  for (const todo of todos) {
    await page.fill('input[placeholder="Add a todo"]', todo)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(1100)
  }

  await page.screenshot({ path: 'after-adding-todos.png' })
  await expect(page.locator('li')).toHaveCount(3)

  const target = page.locator('li', { hasText: 'Fix bugs' })
  await target.locator('button', { hasText: 'Delete' }).click()
  await page.screenshot({ path: 'after-delete.png' })

  const texts = await page.locator('li').allTextContents()
  expect(texts).not.toContain('Fix bugs')

  await expect(page.locator('li')).toHaveCount(2)
})