import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import ShowcaseMain from '@/components/Homepage/ShowcaseMain.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let mocks = {
  getProducts: jest.fn(() => [
    {
      title: 'Raspberry Pi 4 4GB - Model B',
      img: 'raspbery.jpg',
      price: 392.49,
      link: '/productpage',
    },
  ]),
  addCart: jest.fn(),
}
let store = new Vuex.Store({
  getters: {
    getProducts: mocks.getProducts,
  },
  actions: {
    addCart: mocks.addCart,
  },
})

describe('ShowcaseMain Componenti', () => {
  const wrapper = shallowMount(ShowcaseMain, {
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

  test('Vuestore dan urun listesi itemleri yuklenir', () => {
    expect(mocks.getProducts).toHaveBeenCalled()
  })

  test('Sepete ekle tusu modal cart menuyu acar', () => {
    expect(wrapper.vm.cartmodalActive).toBeFalsy()
    const button = wrapper.find('.cardadd')
    button.trigger('click')
    expect(wrapper.vm.cartmodalActive).toBeTruthy()
  })
})
