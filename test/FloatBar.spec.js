import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import FloatBar from '@/components/ProductDetail/FloatBar.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let mocks = {
  getProductDetails: jest.fn(() => ({
    name: 'Raspberry Pi',
    descr: null,
    brand: 'Raspberry Pi',
    code: null,
    price: null,
    images: [],
    comments: [],
    similarProducts: [],
  })),
}
let store = new Vuex.Store({
  getters: {
    getProductDetails: mocks.getProductDetails,
  },
})

describe('FloatBar Componenti', () => {
  const wrapper = shallowMount(FloatBar, {
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

  test('Api dan urun aciklamalari/detaylari yuklenir', () => {
    expect(mocks.getProductDetails).toHaveBeenCalled()
  })

  test('Floatbar basligi dogru yuklendi', () => {
    const title = wrapper.find('.floatbar-title')
    expect(title.text()).toBe('Raspberry Pi')
  })
})
