import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import Sidebar from '@/components/General/Sidebar.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

let mocks = {
  getSidebar: jest.fn(() => [
    {
      title: 'Mikrodenetleyiciler',
      subcategories: [
        {
          title: 'Microchip Pic Mikrodenetleyici',
          items: [
            'Pic12 Serisi Dip',
            'Pic12 Serisi Smd',
            'Pic16 Serisi Dip',
            'Pic16 Serisi Smd',
            'Pic18 Serisi Dip',
            'Pic18 Serisi Smd',
            'Pic24fj Serisi (16 Bit)',
            'Pic32mx Serisi (32 Bit)',
            'Dspic Serisi',
            'Low Power Microcchips',
            'Microchip Pic Mikrodenetleyici (Tumu)',
          ],
        },
      ],
    },
  ]),
}
let store = new Vuex.Store({
  getters: {
    getSidebar: mocks.getSidebar,
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

  test('Api dan sidebar itemleri yuklenir', () => {
    expect(mocks.getSidebar).toHaveBeenCalled()
  })

  test('Sidebar kategori butonlari menu acilmasina neden olur', () => {
    expect(wrapper.vm.isOpen).toBe(-1)
    const button = wrapper.find('.category')
    button.trigger('click')
    expect(wrapper.vm.isOpen).toBeTruthy()
  })

  test('Sidebar alt-kategori butonlari menu acilmasina neden olur', () => {
    expect(wrapper.vm.isOpen2).toBe(-1)
    const button = wrapper.find('.subcategory')
    button.trigger('click')
    expect(wrapper.vm.isOpen2).toBeTruthy()
  })
})
