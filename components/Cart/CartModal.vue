<template>
    <div class="columns is-multiline cartmodal p-4">
        <a @click="$parent.close()" class="closex"><img src="@/assets/signin/popupClose.png"/></a>
        <div class="column is-12 cartmodal-title">
            Urun Sepetinize Eklendi
        </div>
        <div class="column is-12">
            <table class="column is-12 table-box">
                <tr class="columns">
                    <th class="column is-1 table-box table-head p-2">Urun</th>
                    <th class="column is-4 table-box table-head p-2">Urun Adi</th>
                    <th class="column is-2 table-box table-head p-2">Miktar</th>
                    <th class="column is-2 table-box table-head p-2">Birim Fiyati</th>
                    <th class="column is-2 table-box table-head p-2">Toplam Tutar</th>
                    <th class="column is-1 table-box table-head p-2">Sil</th>
                </tr>
                <tr class="columns" v-for="(item, i) in cart" :key="i">
                    <td class="column is-1 table-box p-2">
                        <img class="cartmodal-img" :src="require('@/assets/products/' + item.img)" />
                    </td>
                    <td class="column is-4 table-box table-head p-2">
                        <span>{{ item.name }}</span>
                    </td>
                    <td class="column is-2 table-box p-2">
                        <div class="column is-12 table-box p-2 pb-4">
                            ADET:<br /><br />
                            <a @click="item.quantity > 1 ? item.quantity-- : 1" class="table-box p-2 px-3 mx-1">-</a>
                            {{ item.quantity }}
                            <a @click="item.quantity++" class="table-box p-2 px-3 mx-1">+</a>
                        </div>
                    </td>
                    <td class="column is-2 table-box p-2">{{ item.price.toPrecision(5) }} TL + %18 KDV</td>
                    <td class="column is-2 table-box p-2">{{ (item.price * item.quantity).toPrecision(5) }} TL</td>
                    <td class="column is-1 table-box p-2">
                        <a @click="removeCart(item)" class="cartmodal-cross p-1"><img src="@/assets/cart/cross.png"/></a>
                    </td>
                </tr>
            </table>
        </div>
        <div class="column is-12" align="right">
            <div class="column is-4 table-box p-1" align="right">
                <b class="is-pulled-left px-2 table-head">Sepet Toplamı:</b>
                {{ cart.reduce((acc, e) => acc + e.price * e.quantity, 0).toPrecision(5) }} TL
            </div>
        </div>

        <div class="column is-12 border-top mt-3 p-2 pt-3">
            <a class="cartmodal-button p-2" @click="$parent.close()">Alisverise Devam</a>
            <NuxtLink class="cartmodal-button p-2 is-pulled-right" to="/CartPage">Sepete Git</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartModal",
    props: {},
    data() {
        return {
            cart: [],
        };
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
.cartmodal {
    font-size: 13px;
    background-color: #fff;
}
.cartmodal-title {
    font-size: 20px;
}
.cartmodal-img {
    width: 60px;
}
.cartmodal-cross {
    background-color: #012990;
}
.cartmodal-table td span {
    float: left;
    vertical-align: middle;
    line-height: 2;
}
.border-top {
    border-top: 1px solid #eee;
}
.cartmodal-button {
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
    color: #000;
    font-weight: 700;
}
.table-box {
    border: 1px solid #ececec;
}
.closex {
    position: absolute;
    margin-top:-30px;
    margin-left:930px;
    width: 30px;
    height: 30px;
    z-index: 333;
    cursor: pointer;
}
</style>
