import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Bootstrap from 'bootstrap-vue'
import Metas from '@/components/Layout/Metas.vue'

Vue.use(Bootstrap)

describe('Metas', () => {
  it('renders', () => {
    const metas = {
      title: 'title',
      description: 'description',
      keywords: 'keywords',
      image: 'image'
    }
    const wrapper = mount(Metas, {
      propsData: {
        metas: metas
      }
    })
    expect(wrapper.props().metas.title).toBe('title')
    expect(wrapper.props().metas.description).toBe('description')
    expect(wrapper.props().metas.keywords).toBe('keywords')
    expect(wrapper.props().metas.image).toBe('image')
  })
})
