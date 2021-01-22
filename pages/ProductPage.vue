<template>
    <section class="columns is-multiline">
        <div class="column is-12">
            <Header />
        </div>
        <div class="column is-12">
            <Navbar />
        </div>
        <div class="column is-12">
            <div class="container">
                <div class="columns">
                    <div class="column is-3">
                        <Sidebar />
                    </div>
                    <div class="column is-9">
                        <ProductDetail />
                        <ProductTab />
                        <ProductSimilar />
                    </div>
                </div>
            </div>
        </div>
        <FooterTop class="column is-12" />
        <Footer class="column is-12" />
        
        <FloatBar />
    </section>
</template>

<script>
import Header from "@/components/General/Header.vue";
import Navbar from "@/components/General/Navbar.vue";
import Sidebar from "@/components/General/Sidebar.vue";
import ProductDetail from "@/components/ProductDetail/ProductDetail.vue";
import ProductTab from "@/components/ProductDetail/ProductTab.vue";
import ProductSimilar from "@/components/ProductDetail/ProductSimilar.vue";
import FooterTop from "@/components/General/FooterTop.vue";
import Footer from "@/components/General/Footer.vue";
import FloatBar from "@/components/ProductDetail/FloatBar.vue";

export default {
    name: "ProductPage",
    components: {
        Header,
        Navbar,
        Sidebar,
        ProductDetail,
        ProductTab,
        ProductSimilar,
        FooterTop,
        Footer,
        FloatBar,
    },
};
</script>
