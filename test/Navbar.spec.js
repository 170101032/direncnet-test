import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import Navbar from '@/components/General/Navbar.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let store = new Vuex.Store({
})

describe('Navbar Componenti', () => {
  const wrapper = shallowMount(Navbar, {
    localVue,
    store,
    stubs: {
      NuxtLink: true,
    },
  })
  test('vue vm instancei olarak mountlandi', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('markup snapshota uyuyor', () => {
    expect(wrapper.vm).toMatchSnapshot()
  })
})
