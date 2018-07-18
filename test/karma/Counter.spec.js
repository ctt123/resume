import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '../../src/components/page/Counter.vue'

describe('Counter.vue', () => {
  it('当点击之后count+1', () => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text()).contains('1')
  })
})
