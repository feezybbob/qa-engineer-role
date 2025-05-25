## Test Cases

### ✅ Test Case 1: Prevent Duplicate Todos on Rapid Entry

**Description**: Ensure the app prevents identical todos from being added when Enter is pressed quickly in succession.

**Preconditions**:
- App is running and user is on the main todo screen.

**Steps to Reproduce**:
1. Focus on the input field.
2. Type "Buy milk".
3. Press Enter 3 times quickly (within 1 second).

**Expected Result**:
- Only **one instance** of "Buy milk" is added to the list.
- No duplicates are present.

---

### ✅ Test Case 2: Unique ID Assignment for Each Todo

**Description**: Verify that each todo is assigned a unique identifier upon creation.

**Preconditions**:
- Developer tools are open, and you can inspect todo objects (state or console).

**Steps to Reproduce**:
1. Add two todos with the same text: "Check mail".
2. Inspect the internal state or DOM data attributes (e.g., `data-id`).

**Expected Result**:
- Each todo has a unique `id`.
- Deleting one does not affect the other.

---

### ✅ Test Case 3: Single Deletion Only Removes Target Todo

**Description**: Ensure that clicking "Delete" on one todo does not delete multiple items.

**Preconditions**:
- At least two todos exist with similar text, e.g., "Call Mom" and "Call Mom".

**Steps to Reproduce**:
1. Add two identical todos ("Call Mom") quickly.
2. Click the "Delete" button next to the first one.

**Expected Result**:
- Only **one** "Call Mom" is removed.
- The other instance remains in the list.

---

### ✅ Test Case 4: Input Field Clears After Submission

**Description**: Confirm that the input field is cleared after a todo is successfully added.

**Preconditions**:
- App is loaded and input field is empty.

**Steps to Reproduce**:
1. Type "Walk dog" in the input field.
2. Press Enter.

**Expected Result**:
- "Walk dog" appears in the todo list.
- Input field is reset to empty, preventing accidental duplicates from pressing Enter again.

---

### ✅ Test Case 5: Adding Different Todos Rapidly

**Description**: Ensure that rapidly entering **different** todos results in all being added successfully.

**Preconditions**:
- User is on the main todo screen.

**Steps to Reproduce**:
1. Type and submit "Task 1", then quickly type and submit "Task 2", then "Task 3" — all within 5 seconds.
2. Wait for rendering.

**Expected Result**:
- All three todos ("Task 1", "Task 2", "Task 3") appear in the list.
- No duplicates or missing items.

