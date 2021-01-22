import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import FooterTop from '@/components/General/FooterTop.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let store = new Vuex.Store({
})

describe('FooterTop Componenti', () => {
  const wrapper = shallowMount(FooterTop, {
    localVue,
    stubs: {
      NuxtLink: true,
    },
  })
  test('Vue vm instance olarak mountlandi', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('Markup snapshot ile eslesiyor', () => {
    expect(wrapper.vm).toMatchSnapshot()
  })
})