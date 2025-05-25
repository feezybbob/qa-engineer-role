import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
// Use this (assuming structure):
import Todo from '../../src/components/Todo.vue'

describe('Todo.vue', () => {
  // Computed Property Test
  it('filters todos by length using computed property', async () => {
    const wrapper = mount(Todo)
    
    // Add short and long todos
    await wrapper.find('input').setValue('Short')
    await wrapper.find('input').trigger('keydown.enter')
    await wrapper.find('input').setValue('This is a long todo')
    await wrapper.find('input').trigger('keydown.enter')

    // Filter short todos
    await wrapper.find('select').setValue('short')
    expect(wrapper.findAll('li').length).toBe(1)
    expect(wrapper.text()).toContain('Short')

    // Filter long todos
    await wrapper.find('select').setValue('long')
    expect(wrapper.findAll('li').length).toBe(1)
    expect(wrapper.text()).toContain('This is a long todo')
  })

  // User Interaction Test
  it('adds and deletes a todo item', async () => {
    const wrapper = mount(Todo)

    const input = wrapper.find('input')
    await input.setValue('Buy milk')
    await input.trigger('keydown.enter')

    expect(wrapper.findAll('li')).toHaveLength(1)
    expect(wrapper.text()).toContain('Buy milk')

    await wrapper.find('button').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(0)
  })

  // Edge Case Test
  it('shows error when trying to add empty todo', async () => {
    const wrapper = mount(Todo)

    await wrapper.find('input').setValue('')
    await wrapper.find('input').trigger('keydown.enter')

    expect(wrapper.find('.error').exists()).toBe(true)
    expect(wrapper.find('.error').text()).toBe('Todo cannot be empty')
  })
})
