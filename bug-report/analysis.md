# Bug Analysis: Duplicate Todo Items on Rapid Entry

## Steps to Reproduce (Based on Testing)
1. Navigate to the todo app.
2. Type a todo item (e.g., "Buy groceries").
3. Rapidly press the Enter key multiple times (within 1 second).
4. Observe that the same todo item is added multiple times to the list.
5. Delete one of the duplicate entries — notice that sometimes more than one instance disappears.

## Root Cause Hypothesis
The app likely does not debounce or throttle input submission events. When Enter is pressed multiple times quickly:
- The same input is processed multiple times before it is cleared.
- Each entry gets added separately, possibly with identical IDs or no ID at all.
- On deletion, if todos are not uniquely identifiable, the DOM rendering engine may remove multiple visually similar entries due to internal state misalignment.

## How to Prevent Regression
- **Debounce submissions**: Prevent the input handler from firing too rapidly by adding a debounce of ~300ms.
- **Enforce unique IDs**: Ensure each todo item gets a unique ID upon creation using `Date.now()` + random suffix or UUID.
- **Improve deletion logic**: Use item IDs for deletion instead of matching based only on text or index.
- **Add automated tests**:
  - Test for duplicate prevention when rapidly entering the same item.
  - Test that only one item is removed when deleting a single todo.

