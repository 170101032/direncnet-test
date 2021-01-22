import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'

import Header from '@/components/General/Header.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

describe('Header Componenti >', () => {
  const wrapper = shallowMount(Header, {
    localVue,
    stubs: {
      NuxtLink: true,
    },
  })
  test('vue vm instancei olarak mountlandi', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('markup snapshota uyuyor', () => {
    expect(wrapper.vm).toMatchSnapshot()
  })
})
