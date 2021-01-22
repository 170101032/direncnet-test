<template>
    <div class="container">
        <b-carousel :pause-info="false" :arrow-hover="false" :indicator="false" iconSize="is-large">
            <b-carousel-item v-for="(item, i) in carousels" :key="i">
                <b-image :src="require('@/assets/carousel/' + item.img)"> </b-image>
            </b-carousel-item>
        </b-carousel>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    computed:{
        carousels(){
            return this.$store.getters.getCarousel
        }
    },
    created() {
        this.$store.dispatch("fillCarousel")
    },
};
</script>

<style>
.carousel-arrow .icon {
    cursor: pointer;
    color: #fff;
    border: unset;
    border-radius: unset;
    background: rgba(128, 128, 128, 0.5);
}
</style>
