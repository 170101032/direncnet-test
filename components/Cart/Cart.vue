<template>
    <div class="container">
        <div class="columns is-multiline cart p-4">
            <div class="column is-12">
                <table class="column is-12 table-box">
                    <tr class="columns">
                        <th class="column is-1 table-head table-bold p-2">Urun</th>
                        <th class="column is-4 table-head table-bold p-2">Urun Adi</th>
                        <th class="column is-2 table-head table-bold p-2">Miktar</th>
                        <th class="column is-2 table-head table-bold p-2">Birim Fiyati</th>
                        <th class="column is-2 table-head table-bold p-2">Toplam Tutar</th>
                        <th class="column is-1 table-head table-bold p-2">Sil</th>
                    </tr>
                    <tr class="columns" v-for="(item, i) in cart" :key="i">
                        <td class="column is-1 p-2">
                            <img class="cart-img" :src="require('@/assets/products/' + item.img)" />
                        </td>
                        <td class="column is-4 table-bold p-2">
                            <span>{{ item.name }}</span>
                        </td>
                        <td class="column is-2 p-2">
                            <div class="column is-12 table-box p-4">
                                ADET:
                                <a @click="item.quantity > 1 ? item.quantity-- : 1" class="table-box p-2 px-3 ml-4 mr-1">-</a>
                                {{ item.quantity }}
                                <a @click="item.quantity++" class="table-box p-2 px-3 mx-1">+</a>
                            </div>
                        </td>
                        <td class="column is-2 table-bold p-2">{{ item.price.toPrecision(5) }} TL + %18 KDV</td>
                        <td class="column is-2 p-2">{{ (item.price * item.quantity).toPrecision(5) }} TL</td>
                        <td class="column is-1 p-2">
                            <a @click="removeCart(item)" class="cart-cross p-1"><img src="@/assets/cart/cross.png"/></a>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="column is-12" align="right">
                <div class="column is-12" align="left">
                    <div class="column is-8">
                        <a class="cart-link p-1 mr-1">Sepeti Guncelle</a>
                        <a class="cart-link p-1 mr-1">Sepeti Temizle</a>
                        <NuxtLink to="/" class="cart-link p-1 mr-1">Alisverise Devam</NuxtLink>
                        <a class="cart-link p-1 mr-1">Alisveris Listeme Ekle</a>
                    </div>
                </div>
                <div class="column is-4" align="right">
                    <table class="column is-12">
                        <tr class="columns">
                            <td class="column is-6 table-box p-1">Sepet Toplamı</td>
                            <td class="column is-6 table-box p-1">
                                {{ cart.reduce((acc, e) => acc + e.price * e.quantity, 0).toPrecision(5) }}TL
                            </td>
                        </tr>
                        <tr class="columns">
                            <td class="column is-6 table-box p-1">Genel Toplam</td>
                            <td class="column is-6 table-box p-1">
                                {{ cart.reduce((acc, e) => acc + e.price * e.quantity, 0).toPrecision(5) }}TL
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cart",
    data() {
        return { cart: [] };
    },
    created() {
        this.cart = this.$store.getters.getCart;
    },
    methods: {
        removeCart(item) {
            this.$store.dispatch("removeCart", { name: item.name });
        },
    },
    watch: {
        "$store.getters.getCart": function() {
            this.cart = this.$store.getters.getCart;
        },
    },
};
</script>

<style>
.cart {
    font-size: 13px;
    background-color: #fff;
}
.cart-title {
    font-size: 20px;
}
.cart-link {
    color: #fff;
    background-color: #012990;
}
.cart-link:hover {
    color: #fff;
    background-color: #3cbeff;
}
.cart-img {
    width: 90px;
}
.cart-cross {
    background-color: #012990;
}
.cart-table td span {
    float: left;
    vertical-align: middle;
    line-height: 2;
}
.border-top {
    border-top: 1px solid #eee;
}
.cart-button {
    color: #fff;
    background-color: #5cb85c;
    border-radius: 3px;
    font-size: 14px;
    border: 0;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    cursor: pointer;
}
.table-head {
    background-color: #ececec;
}
.table-box {
    border: 1px solid #ececec;
}
.table-bold {
    font-weight: 700;
    color: #000;
}
</style>
