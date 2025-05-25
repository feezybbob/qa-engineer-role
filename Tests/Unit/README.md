## ✅ Todo.vue Unit Test Summary

### 📁 File Tested
- `src/components/Todo.vue`

### 🧪 Test Framework
- [Vitest](https://vitest.dev/)
- [@vue/test-utils](https://test-utils.vuejs.org/)

### 🔍 Tests Written
- ✅ **Computed Property**: Tested `filteredTodos` to show only short todos.
- ✅ **User Interaction**: Tested adding and deleting a todo item.
- ✅ **Edge Case**: Tested submitting empty input and checking error message.

---

### 🔧 Mocking Explained

No external modules (e.g., API calls or third-party services) were used, so mocking was minimal.

Only minor mocking involved:
- Simulated `Date.now()` by overriding it to ensure predictable `id` generation for todos (optional).
- DOM events (e.g., `keydown.enter`) were simulated using Vue Test Utils’ `trigger()` and `setValue()`.

---

### ❌ Failing Test & Fix Example

#### Failing Test:

Initially, this test failed:

```js
it('should show an error on empty todo submission', async () => {
  const wrapper = mount(Todo)
  await wrapper.find('input').setValue('')
  await wrapper.find('input').trigger('keydown.enter')
  expect(wrapper.find('.error').text()).toBe('Todo cannot be empty')
})
