import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import ProductDetail from '@/components/ProductDetail/ProductDetail.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let mocks = {
  getProductDetails: jest.fn(() => [
    {
      name: null,
      descr: null,
      brand: null,
      code: null,
      price: null,
      images: [],
      comments: [],
      similarProducts: [],
    },
  ]),
  addCart: jest.fn(),
}
let store = new Vuex.Store({
  getters: {
    getProductDetails: mocks.getProductDetails,
  },
  actions: {
    addCart: mocks.addCart,
  },
})

describe('ProductDetail Componenti', () => {
  const wrapper = shallowMount(ProductDetail, {
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

  test('Sepete ekle metodu calistirir', () => {
    const button = wrapper.find('.add-cart-button')
    button.trigger('click')
    expect(mocks.addCart).toHaveBeenCalled()
  })

  test('Arttirma butonu miktari arttirir', () => {
    const prev = wrapper.vm.quantity
    const button = wrapper.find('.upquan')
    button.trigger('click')
    button.trigger('click')
    expect(wrapper.vm.quantity).toBe(prev + 2)
  })

  test('Azaltma butonu miktari azaltir', () => {
    const prev = wrapper.vm.quantity
    const button = wrapper.find('.downquan')
    button.trigger('click')
    expect(wrapper.vm.quantity).toBe(prev - 1)
  })
})
