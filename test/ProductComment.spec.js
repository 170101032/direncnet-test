import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import ProductComment from '@/components/ProductDetail/ProductComment.vue'

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

describe('ProductComment Componenti', () => {
  const wrapper = shallowMount(ProductComment, {
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
