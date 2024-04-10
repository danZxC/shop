<template>
    <div class="block-wrapper">
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
.block-wrapper {
    width: 45%;
    height: 90%;
    background: linear-gradient(0deg, rgba(69,9,88,1) 0%, rgba(134,36,196,1) 100%);
    opacity: 90%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1;
}
.block-wrapper:hover {
    background: linear-gradient(174deg, rgba(117,3,153,1) 0%, rgba(175,31,124,1) 100%);
    cursor: pointer;
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
    color: white;
    font-family: 'Exo';
    font-size: calc(20px + 16 * (100vw / 1920));
}
p{
    color:white;
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
    .block-wrapper {
        width: 100%;
        height: 45%;
    }
}
</style>