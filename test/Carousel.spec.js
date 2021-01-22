import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import Carousel from '@/components/Homepage/Carousel.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let store = new Vuex.Store({
  actions: {
    fillCarousel: jest.fn(),
  },
})

describe('Carousel Componenti', () => {
  const wrapper = shallowMount(Carousel, {
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
