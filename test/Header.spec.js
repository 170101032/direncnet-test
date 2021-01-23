import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import Header from '@/components/General/Header.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let mocks = {
  getCart: jest.fn(() => []),
}
let store = new Vuex.Store({
  getters: {
    getCart: mocks.getCart,
  },
})

describe('Header Componenti', () => {
  const wrapper = shallowMount(Header, {
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

  test('Vuestore dan alisveris sepeti itemleri yuklenir', () => {
    expect(mocks.getCart).toHaveBeenCalled()
  })

  test('Logo basarili sekilde renderlar', () => {
    const img = wrapper.findAll('.direnclogo')
    expect(img.length).toBe(1)
  })

  test('Giris tusu modal menuyu acar', () => {
    expect(wrapper.vm.signinActive).toBeFalsy()
    const button = wrapper.find('.signinbutton')
    button.trigger('click')
    expect(wrapper.vm.signinActive).toBeTruthy()
  })
})
