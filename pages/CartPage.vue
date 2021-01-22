<template>
    <section class="columns is-multiline">
        <div class="column is-12">
            <Header />
        </div>
        <div class="column is-12">
            <Navbar />
        </div>
        <div class="column is-12">
            <Cart />
        </div>
        <FooterTop class="column is-12" />
        <Footer class="column is-12" />
    </section>
</template>

<script>
import Header from "@/components/General/Header.vue";
import Navbar from "@/components/General/Navbar.vue";
import Cart from "@/components/Cart/Cart.vue";
import FooterTop from "@/components/General/FooterTop.vue";
import Footer from "@/components/General/Footer.vue";

export default {
    name: "ProductPage",
    components: {
        Header,
        Navbar,
        Cart,
        FooterTop,
        Footer,
    },
};
</script>
