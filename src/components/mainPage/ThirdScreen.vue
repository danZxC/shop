<template>
    <h1>Categories</h1>
    <div class="wrapper">
        <div class="column">
            <router-link :to = "{ name: 'Accesories'}" class="block block1">Accesories</router-link>
            <router-link :to = "{ name: 'Laptops'}" class="block block2">Laptops</router-link>
            
        </div>
        <div class="column">
            <router-link :to = "{ name: 'Pc'}" class="block block3">PC</router-link>
            <router-link :to = "{ name: 'Phones'}" class="block block4">Phones</router-link>
        </div>
    </div>
</template>

<style scoped>
.wrapper{
    margin:40px auto 0 auto;
}
.column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:5%;
    width: 48%;
    height: 100%;
}
.block{
    height: 100%;
    border-radius: 20px;

    font-family: 'Exo';
    font-weight: 600;
    font-size: calc(30px + 16 * (100vw / 1920));
    display: flex;
    justify-content: center;
    align-items: center;
}
.block1{
    height: 30%;
    background-color: #FFD6FF;
}
.block2 {
    height: 65%;
    background-color: #B5BCFF;
}
.block3{
    height: 65%;
    background-color: #BCEBFF;
}
.block4{
    height: 30%;
    background-color: #FFE4BC;
}

a {
    color: black;
    text-decoration: none;
}
a:visited{
    color:black;
}
</style>