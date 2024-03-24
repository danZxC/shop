<template>
    <h1>Why us?</h1>
    <div class="wrapper">
        <div class="block-row">
            <secondScreenBlock :source="require('../../assets/sec-screen1.png')" title = "Safety" :text = "text1"/>
            <secondScreenBlock :source="require('../../assets/sec-screen2.png')" title = "Quality" :text = "text2"/>
        </div>
        <div class="block-row">
            <secondScreenBlock :source="require('../../assets/sec-screen3.png')" title = "Delievery" :text = "text3"/>
            <secondScreenBlock :source="require('../../assets/sec-screen4.png')" title = "Variety" :text = "text4"/>
        </div>
    </div>
    
</template>

<style scoped>
.wrapper {
    flex-direction: column;
    margin: 20px auto 0 auto;
}
.block-row{
    width: 100%;
    justify-content: space-between;
    display: flex;
    height: 45%;
    background-color: #fff;
}
@media(max-width:768px){
    .block-row {
        flex-direction: column;
        height: 50%;
    }
    .wrapper{
        height: 150vh;
    }

}
</style>

<script>
import secondScreenBlock from '../mainPage/SecondScreenBlock.vue';

export default {
    components: {
        secondScreenBlock,
    } ,
    data(){
        return {
            text1: "All deals are 100% guranteed and verified. Everything is legally verified",
            text2: "We are providing you with the best devices in  terms of quality and prices.",
            text3: "We are delivering all over the world so getting a new device will be easy!",
            text4: "You will find a perfect laptop depending on your goals (gaming, working, design etc).",
            
        }
    }
}
</script>