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
    <div class="main-img">
        <img class="image" src="../../assets/картинка.png" alt="">
    </div>
    
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
    
    height: 80%;
     width: 45%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
}
h1{
    color: #FFD6FF;
    font-family: 'Exo', sans-serif;
    margin-top:0;
    font-size: calc(35px + 16 * (100vw / 1920));
    font-weight: 600;
    text-align: left;
}
.main-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 90%;
    margin-top:200px;
}
.image{
    width: 100%;
}
.cta-title{
   width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 70%;
}


h2 {
    color: #9468A0;
    
    font-size: calc(15px + 16 * (100vw / 1920));
    font-weight: 300;
    letter-spacing: 10px;
    font-family: 'Nunito', sans-serif;
}

p {
    font-size: calc(10px + 16 * (100vw / 1920));
    color:white;
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
.cta{
    margin-top:200px;
}

@media(max-width: 1024px) and (min-height:800px){
    .wrapper {
        flex-direction: column;
        text-align: center;

    }
    .cta {
        width: 100%;
        margin-top: 100px;
    }
    .cta-title {
        height: 60vh;
    }
    .networks {
        height: 50px;
        width: 100%;
    }
    .networks img {
        width: 50px;
    }
    .cta-title p {
        margin: 0;
    }
    h1{
        margin-top: 60px;
        text-align: center;

    }
    .back-wrapper {
        height: 180vh;
    }
    .main-img {
        width: 80%;
    }
}
@media(max-width:1024px){
    .main-img{
        width: 100%;
        height: 70%;
    }
    .cta{
        height: 60vh;
    }
}
@media(max-width:768px){
    
    .wrapper {
        flex-direction: column;
        text-align: center;
        height: 150vh;
    }
    .cta {
        width: 100%;
        height: 80vh;
        margin-top:100px;   
    }
    button {
        height: 100px;
    }
    .cta-title {
        height: 60vh;
    }
    .networks {
        height: 50px;
        width: 100%;
    }
    .networks img {
        width: 50px;
    }
    .cta-title p {
        margin: 0;
    }
    h1{
        margin-top: 60px;
        text-align: center;

    }
    .back-wrapper {
        height: 190vh;
    }
    .main-img {
        width: 90%;
        margin-top:100px;
    }
}


@media (max-width: 500px){
    .main-img{
        width: 100%;

    }
    .back-wrapper{
        height: 150vh;
    }
}
</style>