<template>
    <div class="columns is-multiline p-2">
        <div class="column is-12">
            <div class="columns">
                <div class="column is-2 p-2 showcase-title">
                    Benzer Urunler
                </div>
                <div class="column is-10 p-2" align="right">
                    <a @click="activeslide--"><img class="pl-2" src="@/assets/detail/slide_prev.png"/></a>
                    <a @click="activeslide++"><img class="pl-2" src="@/assets/detail/slide_next.png"/></a>
                </div>
            </div>

            <b-carousel-list v-model="activeslide" :data="productDetails.similarProducts" :items-to-show="4" :arrow="false">
                <template slot="item" slot-scope="item">
                    <a class="">
                        <div class="columns is-multiline carditem">
                            <div class="column is-12">
                                <img :src="require('@/assets/products/' + item.img)" />
                            </div>
                            <div class="column is-12">
                                <div class="column is-12 cardbox">{{ item.title }}</div>
                                <div class="column is-12 cardprice">{{ item.price }} TL <span class="kdv"> + KDV</span></div>
                                <div @click="addCart(item)" class="column is-12 cardadd">
                                    <img src="@/assets/sidebar/plus_passive.png" />Sepete Ekle
                                </div>
                            </div>
                        </div>
                    </a>
                </template>
            </b-carousel-list>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductSimilar",
    data() {
        return {
            activeslide: 0,
            productDetails: {},
        };
    },
    created() {
        this.$store.dispatch("fillProductDetails");
        this.productDetails = this.$store.getters.getProductDetails;
    },
    methods: {
        addCart(item) {
            this.$store.dispatch("addCart", {
                name: item.title,
                quantity: 1,
                price: parseFloat(item.price),
                img: item.img,
                link: item.link,
            });
        },
    },
};
</script>

<style>
.has-shadow {
    box-shadow: none !important;
}
.showcase-title {
    color: #0aa2ee;
    font-size: 18px;
    text-align: center;
    border-bottom: 2px solid #0aa2ee;
}
.carditem {
    margin: 1px;
    text-align: center;
}
.carditem img {
    height: 220px;
    width: auto;
}
.carditem:hover {
    border: 1px solid #0aa2ee;
}
.cardbox {
    height: 57px;
    background-color: #fafafa;
    font-size: 16px;
    color: #021e2c;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cardprice {
    height: 30px;
    background-color: #fafafa;
    font-size: 21px;
    color: #018cd1;
    font-weight: 700;
}
.kdv {
    font-size: 17px;
    font-weight: 700;
    color: #023650;
}
.cardadd {
    height: 35px;
    line-height: 35px;
    background-color: #fafafa;
    text-transform: uppercase;
    color: #0aa2ee;
    font-size: 16px;
    font-weight: 700;
    border-top: 2px solid #0aa2ee;
}
.cardadd img {
    margin-right: 2px;
    height: 16px;
    width: 16px;
    vertical-align: text-top;
}
.carditem:hover .cardadd {
    color: #fff;
    background-color: #0aa2ee;
}
</style>
