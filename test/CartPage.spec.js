import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import CartPage from '@/pages/CartPage.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let store = new Vuex.Store({
  getters: {
    getCart: jest.fn(() => []),
  },
})

describe('CartPage Sayfasi', () => {
  const wrapper = shallowMount(CartPage, {
    localVue,
    store,
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
