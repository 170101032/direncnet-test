<template>
    <div class="columns is-multiline m-3 p-3">
        <div class="column is-12">
            <div class="container">
                <div class="columns navbarx">
                    <a class="column is-3 item p-2">Tum kategoriler</a>
                    <a class="column item p-2">Yeni Urunler</a>
                    <a class="column item p-2">Outlet</a>
                    <a class="column item p-2">Toptan Satis</a>
                    <a class="column item p-2">Iletisim</a>
                    <a class="column item p-2"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style>
.navbarx {
    background-color: #018cd1;
}
.navbarx .item{
    color: #fff;
    cursor:pointer;
    text-align: center;
    border-right: 1px solid #fff;
}
.navbarx .item:hover {
    animation: fadeIn ease 0.3s;
    background-color: #3cbeff;
}
.navbarx .item:last-child:hover{
    background-color: #018cd1;

}
.navbarx .item:last-child{
    border-right: 0;
}
</style>
