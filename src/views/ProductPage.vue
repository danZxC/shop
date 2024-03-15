<template>
    <div class="margin">
        
        <ThirdScreen/>
    
    </div>
    <HeaderControl/>
</template>

<script>
import ThirdScreen from "../components/mainPage/ThirdScreen.vue";
import HeaderControl from "@/components/HeaderControl.vue";
export default {
    components:{
        ThirdScreen,
        HeaderControl
    }
}

</script>

<style scoped>
.margin {
    margin-bottom: 160px;
}
</style>    