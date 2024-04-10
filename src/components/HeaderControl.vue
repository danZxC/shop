<template>
    <header>
        <img src="../assets/shop-logo.png" alt="">
        <div class="burger">
            <div class="burger-lines" :class = "{active: isActive}"  @click="OpenMenu">
                
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            </div>
            <nav>
            <router-link to = '/'>Main</router-link>
            <router-link :to = "{name: 'Product'}">Product</router-link>
            <router-link :to = "{ name: 'Game'}">Game</router-link>
            </nav>
        </div>
        
    </header>
    <RouterView/>
</template>

<style scoped>
.burger {
    width: 40%;
}
header{
    padding: 10px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #29003B;
    position: fixed;
    top:0;
    z-index: 100;
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
    padding: 10px 30px;
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
    header img {
        width: 40%;
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
    .burger-lines.active{
        justify-content: center;
        align-items: center;
    }
    .burger-line:first-child.active{
        transform: rotate(45deg);
        transition: 500ms;
        
    }
    .burger-line:last-child.active{
        transform: rotate(-45deg);
        transition: 500ms;
    }
    .burger-line:nth-child(2).active{
        display: none;
    }
    nav.active{
        z-index:100;    
        width: 100%;
        height: 250px;
        opacity: 100;
        display: flex;
        position: absolute;
        top:95px;
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

@media (max-width:800px) and (min-height:1000px){
    .nav.active{
        margin-top:50px;
    }

}
@media (max-width: 600px){
    nav.active {
        top:80px;
    }
}

@media (max-width: 400px){
    nav.active {
        top:60px;
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
            let menu = document.querySelector("nav")
            let burgerLines = document.querySelectorAll(".burger-line")
            let burger = document.querySelector(".burger-lines")
            menu.classList.toggle("active")
            for(let i=0;i<burgerLines.length;i++){
                burgerLines[i].classList.toggle("active")
            }
            burger.classList.toggle("active")
        }
    }
}
</script>