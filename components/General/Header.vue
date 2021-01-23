<template>
  <div class="columns is-multiline">
    <div class="column is-12 header-top pb-3">
      <div class="container">
        <div class="columns">
          <div class="column p-1" align="right">
            <a class="pl-4"
              ><img class="pr-2" src="@/assets/header/fb.png" />Facebook Ile
              Baglan</a
            >
            <a class="signinbutton pl-4" @click="signinActive = true"
              ><img class="pr-2" src="@/assets/header/log_in.png" />Uye
              Girisi</a
            >
            <a class="pl-4"
              ><img class="pr-2" src="@/assets/header/register.png" />Yeni
              Uyelik</a
            >
            <a class="pl-4"
              ><img class="pr-2" src="@/assets/header/tr.png" />TR</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="column is-12 header p-5">
      <div class="container">
        <div class="columns pt-2">
          <div class="column">
            <a href="/">
              <img class="direnclogo" src="@/assets/header/logo.png" />
            </a>
          </div>
          <div class="column">
            <b-field class="search" position="is-centered">
              <input
                type="text"
                placeholder="Aradiginiz urunun adini yaziniz."
              />
              <button><img src="@/assets/header/search_ico.png" /></button>
            </b-field>
          </div>
          <div class="column" align="right">
            <NuxtLink class="cart" to="/CartPage">
              <b-field position="is-right">
                <button><img src="@/assets/header/basket.png" /></button>
                <input
                  class="cart-text"
                  :placeholder="
                    cart.reduce((acc, e) => acc + e.quantity, 0) +
                    ' Urun/' +
                    cart
                      .reduce((acc, e) => acc + e.price * e.quantity, 0)
                      .toPrecision(4) +
                    'TL'
                  "
                  disabled
                />
                <div v-if="!cart.lentgh" class="tooltip columns is-multiline">
                  <p
                    align="center"
                    style="font-size: 12px; color: red; padding: 10px"
                  >
                    Sepetinizde urun bulunmamaktadir.
                  </p>
                </div>
                <div v-if="cart.length" class="tooltip columns is-multiline">
                  <div
                    class="column is-12 m-2"
                    v-for="(item, i) in cart"
                    :key="i"
                  >
                    <div class="columns border-bot">
                      <div class="column is-4">
                        <img :src="require('@/assets/products/' + item.img)" />
                      </div>
                      <div class="column is-8 p-2" align="left">
                        {{ item.name }}
                        <br />
                        <br />
                        {{ item.quantity }} Adet/{{ item.price }} + KDV
                      </div>
                    </div>
                  </div>
                  <div class="column is-12 m-2 p-2" align="left">
                    Genel Toplam :
                    {{
                      cart
                        .reduce((acc, e) => acc + e.price * e.quantity, 0)
                        .toPrecision(5)
                    }}
                    TL
                  </div>
                  <div>
                    <button class="gotocart ml-6">Sepete Git</button>
                  </div>
                </div>
              </b-field>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      v-model="signinActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <SignInModal />
    </b-modal>
  </div>
</template>

<script>
import SignInModal from '@/components/General/SignInModal.vue'

export default {
  name: 'Header',
  components: {
    SignInModal,
  },
  data() {
    return {
      cart: [],
      signinActive: false,
    }
  },
  created() {
    this.cart = this.$store.getters.getCart
  },
}
</script>

<style>
.header-top {
  background-color: #1eaef6;
}
.header-top img {
  vertical-align: text-bottom;
}
.header-top a {
  font-size: 13px;
  color: #fff;
}
.header-top a:hover {
  font-size: 13px;
  color: #fff;
}
.header {
  background-color: #0aa2ee;
}
.search input {
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  background: #018cd1;
  box-sizing: border-box;
  padding: 10px 40px 10px 20px;
  font-family: 'Roboto Condensed';
}
.search input::placeholder {
  color: #fff;
}
.search button {
  width: 40px;
  cursor: pointer;
  border: none;
  outline: none;
  background: #fff;
}

.cart button {
  cursor: pointer;
  outline: none;
  border: none;
  background: #fff;
}
.cart input {
  width: 33%;
  border: none;
  color: #fff;
  outline: none;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  background: #018cd1;
  padding: 10px 20px 10px 20px;
  font-family: 'Roboto Condensed';
}
.cart input::placeholder {
  color: #fff;
}

.tooltip {
  visibility: hidden;
  color: black;
  font-weight: bolder;
  font-size: 10px;
  line-height: 10px;
  padding: 5px 5px 5px 5px;
  background: white;
  position: absolute;
  z-index: 1000;
  top: 73%;
  left: 85%;
  animation: fadeIn ease 0.3s;
}
.cart:hover .tooltip {
  visibility: visible;
  animation: fadeIn ease 0.3s;
}
.cart:hover .tooltip:hover {
  visibility: visible;
  animation: fadeIn ease 0.3s;
}
.border-bot {
  border-bottom: 1px solid #eee;
}
.gotocart {
  color: #fff !important;
  background-color: #012990 !important;
  border-radius: 3px;
  font-size: 14px;
  border: 0;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  cursor: pointer;
}
.gotocart:hover {
  color: #fff !important;
  background-color: #3cbeff;
}
</style>
