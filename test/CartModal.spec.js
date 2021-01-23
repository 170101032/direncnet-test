import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import CartModal from '@/components/Cart/CartModal.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let mocks = {
  getCart: jest.fn(() => [
    {
      title: 'Raspberry Pi 4 4GB - Model B',
      img: 'raspbery.jpg',
      price: 392.49,
      quantity: 1,
      link: '/productpage',
    },
  ]),
  removeCart: jest.fn(),
}
let store = new Vuex.Store({
  getters: {
    getCart: mocks.getCart,
  },
  actions: {
    removeCart: mocks.removeCart,
  },
})

describe('CartModal Componenti', () => {
  const wrapper = shallowMount(CartModal, {
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

  test('Arttirma butonu miktari arttirir', () => {
    const prev = wrapper.vm.cart[0].quantity
    const button = wrapper.find('.upquan')
    button.trigger('click')
    button.trigger('click')
    expect(wrapper.vm.cart[0].quantity).toBe(prev + 2)
  })

  test('Azaltma butonu miktari azaltir', () => {
    const prev = wrapper.vm.cart[0].quantity
    const button = wrapper.find('.downquan')
    button.trigger('click')
    expect(wrapper.vm.cart[0].quantity).toBe(prev - 1)
  })

  test('Silme butonu vue actionu cagirir', () => {
    const button = wrapper.find('.cartmodal-cross')
    button.trigger('click')
    expect(mocks.removeCart).toHaveBeenCalled()
  })
})
