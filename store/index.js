import * as api from "@/store/api.js";

export const state = () => ({
  carousel: [],
  sidebar: [],
  products: [],
  cart: [],
  productDetails: {
    name: null,
    brand: null,
    code: null,
    price: null,
    imgages: [],
    comments: [],
    similarProducts: []
  }
});

export const getters = {
  getCarousel: state => state.carousel,
  getSidebar: state => state.sidebar,
  getProducts: state => state.products,
  getProductDetails: state => state.productDetails,
  getCart: state => state.cart
};

export const mutations = {
  setCarousel: (state, payload) => (state.carousel = payload),
  setSidebar: (state, payload) => (state.sidebar = payload),
  setProducts: (state, payload) => (state.products = payload),
  setProductDetails: (state, payload) => (state.productDetails = payload),
  setCart: (state, payload) => (state.cart = payload),
  addCart: (state, payload) => {
    if (state.cart.some(e => e.name == payload.name)) {
      return (state.cart.find(e => e.name == payload.name).quantity +=
        payload.quantity);
    }
    state.cart.push(payload);
  },
  removeCart: (state, payload) => {
    console.log(state.cart);
    state.cart = state.cart.filter(e => e.name != payload.name);
  }
};

export const actions = {
  fillCarousel(state) {
    state.commit("setCarousel", api.selectCarousel());
  },
  fillSidebar(state) {
    state.commit("setSidebar", api.selectSidebar());
  },
  fillProducts(state) {
    state.commit("setProducts", api.selectProducts());
  },
  fillProductDetails(state) {
    state.commit("setProductDetails", api.selectProductDetails());
  },
  addCart(state, payload) {
    state.commit("addCart", payload);
  },
  removeCart(state, payload) {
    state.commit("removeCart", payload);
  }
};
