import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import ProductDetail from '@/components/ProductDetail/ProductDetail.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let store = new Vuex.Store({
  getters: {
    getProductDetails: jest.fn(() => ({
      name: null,
      descr: null,
      brand: null,
      code: null,
      price: null,
      images: [],
      comments: [],
      similarProducts: [],
    })),
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
})
