<template>
  <div class="back-wrapper">
    <div class="wrapper">
    <div class="cta">
        <div class="cta-title">    
            <h1>FAST & SMART</h1>
            <h2>New generation is here</h2>
            <p>New era of laptops is here! We have a model for everyone! So go and try finding the perfect model for you! </p>
            <button>Go shopping</button>
        </div>
        <div class="networks">
            <img src="../../assets/insta.png" alt="">
            <img src="../../assets/telegram.png" alt="">
            <img src="../../assets/vk.png" alt="">
   </div>
    </div>
    <img class="main-img" src="../../assets/картинка.png" alt="">
  </div>
  </div>
 
</template>


<style scoped>

.back-wrapper {
    height: 100dvh;
    background-image: url("../../assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
}


.cta {
     width: 45%;
}
h1{
    color: #FFD6FF;
    font-family: 'Exo', sans-serif;
    
    font-size: calc(35px + 16 * (100vw / 1920));
    font-weight: 600;
    text-align: left;
    margin-top: 140px;
}
.main-img {
    width: 40%;
    margin-top: 100px;
}

h2 {
    color: #9468A0;
    
    font-size: calc(15px + 16 * (100vw / 1920));
    font-weight: 300;
    letter-spacing: 10px;
    font-family: 'Nunito', sans-serif;
}

p {
    font-size: calc(15px + 16 * (100vw / 1920));
    color:white;
    margin: 50px 0; 
}

button {
    width: 100%;
    background-color:#FFD6FF;
    color: #000D20;
    height: 100px;
    border-radius: 10px;

    color: #000D20;
    font-size: calc(20px + 16 * (100vw / 1920));
    font-family: 'Exo', sans-serif;
    font-weight: 600;
    
}
.networks {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.cta-title {
    margin-bottom: 80px;
}
@media(max-width: 1600px){
h1{
    margin-top: 5%;
}
}
</style>

