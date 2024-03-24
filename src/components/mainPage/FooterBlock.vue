<template>
    <header>
        <img src="../../assets/shop-logo.png" alt="">
        <div class="burger">
            <div class="burger-lines" :class = "{active: isActive}"  @click="OpenMenu">
                
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            </div>
            <nav :class = "{active: isActive}">
            <router-link to = '/'>Main</router-link>
            <router-link :to = "{name: 'Product'}">Product</router-link>
            <router-link :to = "{ name: 'Game'}">Game</router-link>
            </nav>
        </div>
        
    </header>
    <RouterView/>
</template>

<style>
.burger {
    width: 40%;
}
header{
    padding: 40px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #29003B;
    position: static;
}
nav { 
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    font-family: 'Nunito', sans-serif;
    
    font-size: calc(10px + 16 * (100vw / 1920));
}
.burger-lines{
    display: none;

    width: 30px;
    height: 20px;
}
.burger-line {
    width: 100%;
    height: 10%;
    background-color: white;

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

@media (max-width:768px){
    header{
        padding: 20px 0 ;
    }
    .burger {
        width: 50px;
    }
    nav{
        flex-direction: column;
        opacity: 0;
        height: 0;
        padding: 0;
        margin: 0;
    }
    nav a {
        padding: 0;
        display: flex;
        height: 36%;
        justify-content: center;
        align-items:center ;
        border-radius: 0;
        border-bottom: 2px solid white;
        background-color: #29003B;
    }
    img{
        width: 20%;
    }
    .burger-lines{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .wrapper {
        flex-direction: column-reverse;
    }
    nav.active{
        z-index:100;    
        width: 100%;
        height: 250px;
        opacity: 100;
        display: flex;
        position: absolute;
        top:65px;
        right: 0px;
        transition: 500ms;
        
    }
    .burger{
        display: flex;
        flex-direction: column;
    }
    .router-link-exact-active {
        color:#E3C7E9;
    }
    
    
}


</style>

<script>
export default {
    data(){
        return{
            isActive: false
        }
    },
    methods:{
        OpenMenu(){
            this.isActive=!this.isActive
        }
    }
}
</script>