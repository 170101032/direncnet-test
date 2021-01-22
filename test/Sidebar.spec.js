import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import Sidebar from '@/components/General/Sidebar.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let store = new Vuex.Store({
  actions: {
    fillSidebar: jest.fn(),
  },
})

describe('Header Componenti >', () => {
  const wrapper = shallowMount(Sidebar, {
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
