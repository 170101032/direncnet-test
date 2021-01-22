<template>
    <div class="columns is-multiline footer">
        <div class="container">
            <div class="column is-12 top">
                <div class="columns">
                    <div class="column">
                        <b-field position="is-centered">
                            <b-input placeholder="E-posta adresinizi girerek bdivtene katilabilirsiniz!" type="search" expanded></b-input>
                            <p class="control">
                                <b-button class="button">Gonder</b-button>
                            </p>
                        </b-field>
                    </div>
                    <div class="column">
                        <div class="columns is-multiline">
                            <div class="column is-7">
                                Sosyal Medyada Bizi Takip Edin
                            </div>
                            <div class="column is-12">
                                <img class="social is-pulled-right ml-4" :src="require('@/assets/footer/social/facebook.png')">
                                <img class="social is-pulled-right ml-4" :src="require('@/assets/footer/social/instagram.png')">
                                <img class="social is-pulled-right ml-4" :src="require('@/assets/footer/social/twitter.png')">
                                <img class="social is-pulled-right ml-4" :src="require('@/assets/footer/social/youtube.png')">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-12 bottom">
                <div class="columns">
                    <div class="column">
                        <div class="columns">
                            <ul class="column">
                                <li>Onemli Bilgiler</li>
                                <li>Onemli Bilgiler</li>
                                <li>Onemli Bilgiler</li>
                                <li>Onemli Bilgiler</li>
                            </ul>
                            <ul class="column">
                                <li>Onemli Bilgiler</li>
                                <li>Onemli Bilgiler</li>
                                <li>Onemli Bilgiler</li>
                                <li>Onemli Bilgiler</li>
                            </ul>
                            <ul class="column">
                                <li>Onemli Bilgiler</li>
                                <li>Onemli Bilgiler</li>
                                <li>Onemli Bilgiler</li>
                                <li>Onemli Bilgiler</li>
                            </ul>
                        </div>
                    </div>

                    <div class="column">
                        Banka Hesaplarimiz
                        <ul class="columns is-multiline">
                            <li class="column is-12"><span class="is-pulled-left">T. Is Bankasi</span><span class="is-pulled-right">TR89 0006 4000 0011 0252 8448 15</span></li>
                            <li class="column is-12"><span class="is-pulled-left">T. Is Bankasi</span><span class="is-pulled-right">TR89 0006 4000 0011 0252 8448 15</span></li>
                            <li class="column is-12"><span class="is-pulled-left">T. Is Bankasi</span><span class="is-pulled-right">TR89 0006 4000 0011 0252 8448 15</span></li>
                            <li class="column is-12"><span class="is-pulled-left">T. Is Bankasi</span><span class="is-pulled-right">TR89 0006 4000 0011 0252 8448 15</span></li>
                            <li class="column is-12"><span class="is-pulled-left">T. Is Bankasi</span><span class="is-pulled-right">TR89 0006 4000 0011 0252 8448 15</span></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import store from "@/store";

export default {
    name: "Footer",
    components: {},
    props: {},
    data() {
        return {};
    },
    async created() {},
    methods: {},
    watch: {},
};
</script>

<style>
.footer {
    background: #021e2c;
}
.footer .top {
    border-bottom: 2px solid #018cd1;
}
.social{
    width: 48px;
    height: 48px;
}
.footer .bottom {
    border-bottom: 2px solid #018cd1;
}
</style>
