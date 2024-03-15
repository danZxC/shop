<template>
<div class="button-wrapper" @click="GetValue()">
    <img :src="imgSrc" alt="">
    <div class="text-wrapper">
        <div class="text-wrapper-column">
            <h2>{{ title }}</h2>
            <h3>{{ amount }} $ / s</h3>
        </div>
        <div class="text-wrapper-column">
            <button >{{ price }} $</button>
            <p>{{ quantity }}</p>
        </div>
    </div>
</div>
    
</template>


<script>
export default {
    
    props: ["amount", "title", "imgSrc","quantity", "price"],
    data(){
        return {
            temp: this.amount,
        }
    },
    methods: {
        GetValue(){
            this.$emit('get',this.temp)            
        },
        
    }
}
</script>

<style scoped>
.button-wrapper{
    width: 523px;
    height: 160px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;
    -webkit-box-shadow: 10px 11px 33px 2px rgba(34, 60, 80, 0.38);
    -moz-box-shadow: 10px 11px 33px 2px rgba(34, 60, 80, 0.38);
    box-shadow: 10px 11px 33px 2px rgba(34, 60, 80, 0.38);
        
}
.text-wrapper{
    
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 80%;
    justify-content: space-around;
}
.text-wrapper-column{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30%;
}
img{
    width: 25%;
    height: 70%;
}
h2{
    font-family: 'Exo';
    font-size: calc(15px + 16 * (100vw / 1920));
}
button{
    width: 60%;
    height: 100%;
    border-radius: 10px;
    font-size: calc(9px + 16 * (100vw / 1920));
}
.button-wrapper:hover {
    cursor: pointer;
}
</style>