<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <img :src="source" :alt="source">
            <h2 class="title"> {{ title }}</h2>
        </div>
        <p class="text">
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    props: ['title', 'source', 'text'],
}
</script>

<style scoped>
.wrapper {
    width: 47%;
    height: 100%;
    border: 3px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.title-wrapper {
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: center;
    gap:10%;
}
img {
    width: 55px;
    height: 60px;
}
h2 {
    color: #861285;
    font-family: 'Exo';
    font-size: calc(20px + 16 * (100vw / 1920));
}
p{
    color:#270133;
    font-size: calc(12px + 16 * (100vw / 1920));
    font-family: 'Nunito';
    width: 70%;
    text-align: center;
}
@media(max-width:768px){
    .wrapper{
        width: 100%;
        height: 30svh;
        
    }
}
</style>