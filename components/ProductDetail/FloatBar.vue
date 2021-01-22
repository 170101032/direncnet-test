<template>
    <div v-if="visible" class="columns is-multiline floatbar m-0 p-0">
        <div class="column is-12">
            <div class="container">
                <div class="columns mx-4">
                    <div class="column is-5">
                        <div class="columns">
                            <div class="column is-2 floatbar-img m-2">
                                <img :src="require('@/assets/detail/' + productDetails.image)" />
                            </div>
                            <div class="column p-4">
                                <div class="column is floatbar-title">{{ productDetails.name }}<br /></div>
                                <div class="column is floatbar-subtitle">{{ productDetails.brand }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-3 p-4 floatbar-price" align="center">
                        {{ (productDetails.price * 1.18).toPrecision(5) }} TL
                    </div>
                    <div @click="addCart(productDetails)" class="column is-4 p-4" align="right">
                        <a class="column is-6 floatbar-add">SEPETE EKLE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FloatBar",
    data() {
        return {
            visible: false,
            productDetails: {},
        };
    },
    created() {
        this.$store.dispatch("fillProductDetails");
        this.productDetails = this.$store.getters.getProductDetails;
    },
    methods: {
        updateScroll() {
            this.visible = window.scrollY;
        },
        addCart(item) {
            this.$store.dispatch("addCart", {
                name: item.name,
                quantity: 1,
                price: parseFloat(item.price),
                img: "raspbery.jpg",
                link: "/productdetails",
            });
        },
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
};
</script>

<style>
.floatbar {
    position: fixed;
    bottom: 0;
    max-height: 80px;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
    animation: fadeIn ease 1.5s;
}
.floatbar-img {
    border: 1px solid #dddddd;
    width: 13%;
    height: auto;
}
.floatbar-img img {
    vertical-align: bottom;
}
.floatbar-title {
    color: #333333;
    line-height: 32px;
    font-size: 25px;
}
.floatbar-subtitle {
    display: block;
    color: #616161;
    font-size: 14px;
    line-height: 16px;
}
.floatbar-price {
    color: #37c172;
    font-size: 25px;
    font-weight: 600;
}
.floatbar-add {
    display: block;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    color: #ffffff;
    background-color: #f47a00;
}
</style>
