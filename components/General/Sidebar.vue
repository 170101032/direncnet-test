<template>
    <div class="columns is-multiline mt-2">
        <b-collapse
            class="column is-12 category"
            animation="slide"
            v-for="(category, i) of categories"
            :key="i"
            :open="isOpen == i"
            @open="isOpen = i"
        >
            <div class="p-1" slot="trigger" slot-scope="props" :class="props.open ? 'catopen' : 'catclosed'">
                <img v-if="props.open" :src="require('@/assets/sidebar/minus_active.png')" />
                <img v-if="!props.open" :src="require('@/assets/sidebar/plus_passive.png')" />
                {{ category.title }}
            </div>
            <b-collapse
                class="column is-12 subcategory"
                animation="slide"
                v-for="(subcategory, i2) of category.subcategories"
                :key="i2"
                :open="isOpen2 == i2"
                @open="isOpen2 = i2"
            >
                <div class="p-1" slot="trigger" slot-scope="props">
                    <img v-if="subcategory.items && props.open" :src="require('@/assets/sidebar/minus_active.png')" />
                    <img v-if="subcategory.items && !props.open" :src="require('@/assets/sidebar/plus_active.png')" />
                    <img v-if="!subcategory.items" :src="require('@/assets/sidebar/sub_arrow.png')" />
                    {{ subcategory.title }}
                </div>
                <div class="column is-12 item p-1 pl-5" v-for="(item, i3) of subcategory.items" :key="i3">
                    {{ item }}
                </div>
            </b-collapse>
        </b-collapse>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    data() {
        return {
            isOpen: -1,
            isOpen2: -1,
            categories: [],
        };
    },
    created() {
        this.$store.dispatch("fillSidebar");
        this.categories = this.$store.getters.getSidebar;
    },
};
</script>

<style>
.category {
    cursor: pointer;
    font-size: 14px;
}
.category img {
    vertical-align: sub;
}
.catopen {
    color: #fff;
    background-color: #0190d6;
    border-bottom: 1px solid #d8d8d8;
}
.catclosed {
    color: #000;
    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;
}
.category .subcategory {
    color: #fff;
    background-color: #0aa2ee;
    border-bottom: 1px solid #d8d8d8;
}
.category .item {
    color: #fff;
    background-color: #3cbeff;
    border-bottom: 1px solid #d8d8d8;
}
</style>
