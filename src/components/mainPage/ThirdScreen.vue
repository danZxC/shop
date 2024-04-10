<template>
   <div class="bg">
    <h1>Categories</h1>
    <div class="wrapper">
        <div class="column">
            <router-link :to = "{ name: 'Test', params: {title: 'Accesories'}}" class="block block1"><div class="text">Accesories</div></router-link>
            <router-link :to = "{ name: 'Test', params: {title: 'Laptops'}}"  class="block block2"><div class="text">Laptops</div></router-link>
            
        </div>
        <div class="column">
            <router-link :to = "{ name: 'Test', params: {title: 'PC'}}" class="block block3"><div class="text">PC</div></router-link>
            <router-link :to = "{ name: 'Test', params: {title: 'Phones'}}" class="block block4"><div class="text">Phones</div></router-link>
        </div>
    </div>
   </div>
</template>


<script>
export default {
    data(){
        return {

            arr:[
                {title: "LAPTOPS"}
            ]
        }
    }
}
</script>

<style scoped>
.bg {
    background-image: url(../../assets/third-screen-bg.png);
}
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
    color:black;
    font-family: 'Exo';
    font-weight: 600;
    font-size: calc(30px + 16 * (100vw / 1920));
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.block1{
    height: 30%;
    background-image: url(../../assets/accesories.png);
    
}
.block2 {
    height: 65%;
    background-image: url(../../assets/laptops.png)
}
.block3{
    height: 65%;
    background-image: url(../../assets/pc.png);
}
.block4{
    height: 30%;
    background-image: url(../../assets/phones.png);
}
.text{
    padding: 30px;
    border-radius:30px;
    background-color: white;
}
h1{
    margin-top:100px;
}

@media (max-width:768px){
    .column {
        width: 100%;
    }
    .wrapper {
        gap:20px;
    }
    .block1,.block2,.block3,.block4 {
        height: 48%;
    }
    
    .text {
        border-radius: 10px;
        padding: 10px;
    }
    
}
</style>