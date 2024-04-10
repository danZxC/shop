<template>
<HeaderControl/>
<FirstScreen/>
<SecondScreen/>
<ThirdScreen/>
<FeedBack/>
<FooterBlock/>
</template>

<script>
import FirstScreen from '../components/mainPage/FirstScreen.vue';
import SecondScreen from "../components/mainPage/SecondScreen.vue"
import ThirdScreen from "../components/mainPage/ThirdScreen.vue"
import FeedBack from '@/components/mainPage/FeedBack.vue'; 
import FooterBlock from "../components/mainPage/FooterBlock.vue"
import HeaderControl from '@/components/HeaderControl.vue';

export default {
    components: {
        FirstScreen,
        SecondScreen,
        ThirdScreen,
        FeedBack,
        FooterBlock,
        HeaderControl
    }
}
</script>