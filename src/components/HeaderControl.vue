<template>
    <header>
        <img src="../assets/shop-logo.png" alt="">
        <nav>
            <router-link to = '/'>Main</router-link>
            <router-link :to = "{name: 'Product'}">Product</router-link>
            <router-link :to = "{ name: 'Game'}">Game</router-link>
        </nav>
    </header>
    <RouterView/>
</template>

<style>
header{
    padding: 40px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #29003B;
}
nav { 
    width: 40%;
    display: flex;
    justify-content: space-between;
    
    font-family: 'Nunito', sans-serif;
    
    font-size: calc(10px + 16 * (100vw / 1920));
}

nav a {
    padding: 20px 30px;
    color: white;
    box-sizing: border-box;
    border-radius: 10px;
}

nav a:hover{
    background-color: #E3C7E9;
    color:#29003B

}
.router-link-exact-active #img{
    border:0;
    color: white;
}
.router-link-exact-active{
    border: 1px solid #E3C7E9;
    color: white;
}



</style>