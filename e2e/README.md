# End-to-End Test: Todo App

## How flakiness was handled

To reduce test flakiness:
- **Explicit waits**: `page.waitForTimeout(1100)` was added after each todo entry to ensure the DOM has time to update before assertions.
- **Stable selectors**: Used visible and reliable text-based or placeholder-based selectors instead of brittle CSS class names.
- **Assertions**: `expect(page.locator(...)).toHaveCount()` and `expect(...).not.toContain()` help verify UI state in a controlled manner.

## How test failures would be reported

- **Screenshots**: `page.screenshot()` captures UI snapshots (`after-adding-todos.png`, `after-delete.png`) for debugging purposes.
- **Playwright artifacts**: When running with `npx playwright test`, failures automatically generate:
  - Screenshots
  - Videos
  - Trace files
  These are saved in the `test-results/` directory.
- **Error context**: Clear stack traces and logs are printed in the terminal and saved with the test run.

## How this fits into CI

- This test can be integrated into a Continuous Integration (CI) pipeline by:
  1. Installing dependencies: `npm ci`
  2. Installing browsers: `npx playwright install`
  3. Starting the app server (e.g., `npm run dev &`)
  4. Running tests: `npx playwright test`
- Results can be viewed in CI logs or enhanced with HTML reports using `npx playwright show-report`.

This helps ensure the todo app works as expected in production-like environments.
