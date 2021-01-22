<template>
    <div class="columns is-multiline product-tab p-2">
        <div class="column is-12">
            <b-tabs>
                <b-tab-item label="Urun Ozellikleri">
                    {{ productDetails.descr }}
                </b-tab-item>
                <b-tab-item label="Odeme Secenekleri"></b-tab-item>
                <b-tab-item :label="'Yorumlar(' + productDetails.comments.length + ')'"><ProductComment /></b-tab-item>
                <b-tab-item label="Resimler"></b-tab-item>
            </b-tabs>
        </div>
    </div>
</template>

<script>
import ProductComment from "@/components/ProductDetail/ProductComment.vue";

export default {
    name: "ProductTab",
    components: {
        ProductComment,
    },
    props: {},
    data() {
        return {
            productDetails: {},
        };
    },
    created() {
        this.$store.dispatch("fillProductDetails");
        this.productDetails = this.$store.getters.getProductDetails;
    },
};
</script>

<style>
.product-tab .tabs li.is-active a {
    color: #0aa2ee;
    border-bottom: 2px solid #0aa2ee;
}
.product-tab .tabs li {
    line-height: 30px;
    font-size: 18px;
    color: #021e2c;
    font-weight: 300;
}
</style>
