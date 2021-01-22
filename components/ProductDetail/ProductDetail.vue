<template>
    <div class="columns is-multiline m-2">
        <div class="column is-12 breadcrumbs p-1 mb-2">
            Anasayfa > Raspberry Pi > <span class="breadcrumbs-bold">Raspberry Pi Ana Kartlar</span>
        </div>
        <div class="column is-12">
            <div class="columns detail-border">
                <div class="column is-6">
                    <b-carousel :pause-info="false" :arrow-hover="false" :indicator-inside="false" iconSize="is-medium">
                        <b-carousel-item v-for="(item, i) in productDetails.images" :key="i">
                            <span class="image">
                                <b-image :src="require('@/assets/detail/' + item.img)"> </b-image>
                            </span>
                        </b-carousel-item>
                        <template slot="indicators" slot-scope="props">
                            <span class="al image">
                                <b-image :src="require('@/assets/detail/' + productDetails.images[props.i].img)"> </b-image>
                            </span>
                        </template>
                    </b-carousel>
                </div>
                <div class="column is-6">
                    <div class="columns is-multiline detail-right">
                        <div class="column is-12 product-name p-4 pb-6">
                            {{ productDetails.name }}
                        </div>
                        <div class="column is-12 product-bold left-border p-3 px-4">
                            Marka/Menşei:
                            <a
                                ><span class="blu">{{ productDetails.brand }}</span></a
                            >
                        </div>
                        <div class="column is-12 product-bold left-border p-3 px-4">Stok Kodu : {{ productDetails.code }}</div>
                        <div class="column is-12 left-border p-3 px-4">{{ productDetails.price }} TL +KDV</div>
                        <div class="column is-12 product-price left-border p-3 px-4">
                            <span class="blu">{{ (productDetails.price * 1.18).toPrecision(5) }} TL</span> KDV Dahil
                        </div>
                        <div class="column is-12 left-border px-4 py-1">
                            <div class="columns is-multiline">
                                <div class="column is-6">
                                    <div class="columns p-4">
                                        <a
                                            class="column is-3 quantity-button"
                                            @click="quantity > 1 ? quantity-- : (quantity = 1)"
                                            ><p>-</p></a
                                        >
                                        <input class="column quantity-input is-6" type="text" v-model="quantity" disabled />
                                        <a class="column is-3 quantity-button" @click="quantity++"><p>+</p></a>
                                    </div>
                                </div>
                                <div class="column is-6 p-4">
                                    <a @click="addCart(productDetails)" class="add-cart-button">Sepete Ekle</a>
                                </div>
                                <div class="column is-12">
                                    <a class="column is-12 add-list-button">
                                        <img src="@/assets/detail/favicon.png" />Alisveris Listeme Ekle
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column is-12 p-3"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductDetail",
    data() {
        return {
            quantity: 1,
            productDetails: {},
        };
    },
    created() {
        this.$store.dispatch("fillProductDetails");
        this.productDetails = this.$store.getters.getProductDetails;
    },
    methods: {
        addCart(item) {
            console.log(this.quantity)
            this.$store.dispatch("addCart", {
                name: item.name,
                quantity: this.quantity,
                price: parseFloat(item.price),
                img: "raspbery.jpg",
                link: "/productdetails",
            });
        },
    },
};
</script>

<style>
.breadcrumbs {
    color: #018cd1;
    font-size: 17px;
    border-bottom: 1px solid #018cd1;
}
.breadcrumbs-bold {
    color: #162d33;
    font-weight: 700;
    font-size: 17px;
}
.detail-border {
    border: 1px solid #ececec;
}
.detail-right {
    background-color: #fafafa;
}
.product-name {
    line-height: 30px;
    font-size: 22px;
    color: #021e2c;
}
.product-bold {
    color: #162d33;
    font-weight: 400;
    font-size: 17px;
}
.product-price {
    font-size: 32px;
    font-weight: 700;
}
.blu {
    color: #3cbeff;
    font-weight: 700;
}
.left-border {
    border-left: 4px solid #018cd1;
    border-bottom: 1px solid #f8f8f8;
}
.al .image {
    max-width: 60px;
    border: 1px solid gray;
}
.quantity-button {
    height: 40px;
    color: #018cd1;
    border: 1px solid #018cd1;
    background-color: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 30px;
    font-weight: 700;
}
.quantity-button:hover {
    color: #018cd1;
}
.quantity-input {
    height: 40px;
    border: 1px solid #018cd1;
    background-color: #fff;
    font-size: 20px;
    outline: 0;
    color: #999999;
    text-align: center;
}
.add-cart-button {
    height: 40px;
    line-height: 40px;
    background: #5cb85c;
    text-align: center;
    color: #fff;
    font-size: 24px;
    display: block;
}
.add-cart-button:hover {
    color: #fff;
    background-color: #0aa2ee;
    animation: fadeIn ease 0.3s;
}
.add-list-button {
    color: #0cb57b;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
}
.add-list-button:hover {
    color: #0cb57b;
}
.add-list-button img {
    vertical-align: bottom;
}
.carousel .carousel-indicator {
    justify-content: left;
}
.detail-border .carousel-arrow .icon {
    cursor: pointer;
    color: #018cd1;
    border: unset;
    border-radius: unset;
    border-color: #018cd1;
    background: rgba(128, 128, 128, 0.1);
}
</style>
