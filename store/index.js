import * as api from '~/static/api.js'

export const state = () => ({
  cart: [],
  //carousel: [],
  //sidebar: [],
  //products: [],
  //productDetails: {
  //name: null,
  //descr:null,
  //brand: null,
  //code: null,
  //price: null,
  //images: [],
  //comments: [],
  //similarProducts: [],
  //},
})

export const getters = {
  getCarousel: () => api.selectCarousel(),
  getSidebar: () => api.selectSidebar(),
  getProducts: () => api.selectProducts(),
  getProductDetails: () => api.selectProductDetails(),
  getCart: (state) => state.cart,
}

export const mutations = {
  //setCarousel: (state, payload) => (state.carousel = payload),
  //setSidebar: (state, payload) => (state.sidebar = payload),
  //setProducts: (state, payload) => (state.products = payload),
  //setProductDetails: (state, payload) => (state.productDetails = payload),
  setCart: (state, payload) => (state.cart = payload),
  addCart: (state, payload) => {
    if (state.cart.some((e) => e.name == payload.name)) {
      return (state.cart.find((e) => e.name == payload.name).quantity +=
        payload.quantity)
    }
    state.cart.push(payload)
  },
  removeCart: (state, payload) => {
    console.log(state.cart)
    state.cart = state.cart.filter((e) => e.name != payload.name)
  },
}

export const actions = {
  addCart(state, payload) {
    state.commit('addCart', payload)
  },
  removeCart(state, payload) {
    state.commit('removeCart', payload)
  },
}
