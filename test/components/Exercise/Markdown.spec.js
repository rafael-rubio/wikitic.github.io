import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Bootstrap from 'bootstrap-vue'

import Markdown from '@/components/Exercise/Markdown.vue'

describe('Markdown', () => {
  beforeEach(() => {
    Vue.use(Bootstrap)
  })
  test('is a Vue instance', () => {
    const wrapper = mount(Markdown)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
