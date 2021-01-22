<template>
    <div class="columns is-multiline signin p-4">
        <a @click="$parent.close()" class="close"><img src="@/assets/signin/popupClose.png"/></a>
        <div class="column is-12 signin-title p-3 pl-5">Uye giris bilgilerinizi giriniz.</div>
        <div class="column is-12 p-3">
            <b-field class="column is-12 email">
                <a><img src="@/assets/signin/mail.png"/></a>
                <input placeholder="E-Mail" />
            </b-field>
        </div>
        <div class="column is-12 p-3">
            <b-field class="password">
                <a><img src="@/assets/signin/password.png"/></a>
                <input placeholder="Sifre" type="password" />
            </b-field>
        </div>
        <div class="column is-12 p-4">
            <a class="signin-button">GIRIS YAP</a>
        </div>
        <div class="column is-12 p-4">
            <div class="columns">
                <div class="column is-6 sign-links" align="left">Beni Hatirla</div>
                <div class="column is-6" align="right">
                    <a class="sign-links"><img src="@/assets/signin/info.png" /> Sifremi Unuttum</a><br />
                    <a class="sign-links">Uye Ol</a>
                </div>
            </div>
        </div>
        <div class="column is-12 p-4">
            <a class="columns">
                <a class="column is-1 fb-icon"><img src="@/assets/signin/facebook.png" /> </a>
                <a class="column is-4 fb-box pl-2 sign-links">Facebook Ile Giris</a>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignInModal",
};
</script>

<style>
.modal-background {
    z-index: -1;
}
.signin {
    width: 500px;
    background-color: #fff;
    border-radius: 5px;
}
.signin-title {
    color: black;
    font-size: 13px;
    font-weight: 400;
}
.close {
    position:absolute;
    margin-top:-30px;
    margin-left:470px;
    width: 30px;
    height: 30px;
    z-index: 333;
    cursor: pointer;
}
.email,
.password {
    display: block;
    width: 100%;
}
.email a,
.password a {
    display: block;
    width: 50px;
    height: 50px;
    background-color: #ccc;
    line-height: 3.5;
    text-align: center;
}
.email img,
.password img {
    width: 24px;
    height: 18px;
}
.email input,
.password input {
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0;
    outline: 0;
    padding-left: 10px;
}
.signin-button {
    text-align: center;
    display: block;
    color: #fff;
    background-color: #012990;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    border-radius: 3px;
}
.signin-button:hover {
    color: #fff;
    background-color: #3cbeff;
}
.fb-icon {
    display: block;
    height: 50px;
    width: 50px;
    background-color: #3c599b;
    text-align: center;
    line-height: 3;
}
.fb-icon img {
    vertical-align: middle;
}
.fb-box {
    height: 50px;
    line-height: 50px;
    border: 1px solid #e6e6e6;
}
.sign-links {
    font-size: 15px;
    color: black;
}
.sign-links:hover {
    color: black;
}
</style>
