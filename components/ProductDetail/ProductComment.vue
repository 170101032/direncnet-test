<template>
    <div class="columns is-multiline comments">
        <div class="column is-12 page-title py-2 mb-2">
            Bu ürün için toplam {{ productDetails.comments.length }} yorum yapılmıştır. <b>Yorum Yaz</b>
        </div>
        <div class="column is-12 ">
            <div class="columns is-multiline">
                <div class="column is-12 comment" v-for="(comment, i) of productDetails.comments" :key="i">
                    <div class="columns">
                        <div class="column is-3 comment-left my-3">
                            <div class="column is-12">
                                <b>{{ comment.name }}</b>
                            </div>
                            <div class="column is-12">
                                {{ comment.date }}
                            </div>
                            <div class="column is-12 mt-2">
                                <img class="pr-2" src="@/assets/detail/likeIcon.png" />Evet: {{ comment.yes }}
                                <img class="px-2" src="@/assets/detail/dislikeIcon.png" /> Hayir: {{ comment.no }}
                            </div>
                            <div class="column is-12 my-2">
                                Yorumu onayliyor musunuz?
                            </div>
                            <div class="column is-12">
                                <a class="yes">EVET</a>
                                <a class="no ml-3">HAYIR</a>
                            </div>
                        </div>
                        <div class="column is-9 p-2">
                            <div class="column is-12"><img src="@/assets/detail/starsFull.png" /></div>
                            <div class="column is-12 pl-4">
                                <b>{{ comment.title }}</b>
                            </div>
                            <div class="column is-12 pl-4">{{ comment.text }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductComment",
    data() {
        return {
            productDetails: [],
        };
    },
    created() {
        this.$store.dispatch("fillProductDetails");
        this.productDetails = this.$store.getters.getProductDetails;
    },
};
</script>

<style>
.page-title {
    border-bottom: 1px solid #ececec;
}
.comments {
    font-size: 13px;
    color: black;
}
.comment {
    border-bottom: 1px solid #ececec;
}
.comment-left {
    border-right: 1px solid #ececec;
}
.comment-left img {
    vertical-align: middle;
}
.yes {
    color: #fff;
    background-color: #5cb85c;
    border-radius: 3px;
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    border: 0;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    cursor: pointer;
}
.no {
    color: #fff;
    background-color: #d9534f;
    border-radius: 3px;
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    border: 0;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
