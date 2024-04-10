

<template>
<HeaderControl/>
</template>


<script>
import HeaderControl from './components/HeaderControl.vue'
export default {
components:{
  HeaderControl
}
}
</script>

<style>
a{
  text-decoration: none;
}

@import url('https://fonts.googleapis.com/css2?family=Exo:wght@600&family=Nunito&display=swap');
* {
  margin:0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Nunito', sans-serif;

  margin:0;
  padding:0;
  font-family: 'Nunito';
}

h1 {
  color: white;
  text-transform: uppercase;
  font-size: calc(35px + 16 * (100vw / 1920));
 
  font-weight: 600;
  font-family: 'Exo';
  text-align: center;
  margin-top:160px;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 70svh;
  margin:0 auto;
}

.bg {
  background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
}
input {
    width: 80%;
    height: 80px;

    color:#959595;
    font-size: calc(15px + 16 * (100vw / 1920));

    font-family: 'Nunito';
    font-weight: 300;
    padding-left: 40px;
    box-sizing: border-box;
    -webkit-box-shadow: 10px 11px 33px 2px rgba(34, 60, 80, 0.38);
    -moz-box-shadow: 10px 11px 33px 2px rgba(34, 60, 80, 0.38);
    box-shadow: 10px 11px 33px 2px rgba(34, 60, 80, 0.38);
    border:0;
    border-radius: 20px;
}
button {
    width: 50%;
    background-color: #861285;
    height: 90px;
    color:white;
    border: 0;
    border-radius: 20px;
    
  font-size: calc(20px + 16 * (100vw / 1920));
    font-weight: 600;
    font-family: 'Exo';
}
button:hover{
  cursor: pointer;
}

@media(max-width:768px){
  input{
    padding-left: 20px;
    width: 100%;
    -webkit-box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.17);
    -moz-box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.17);
    box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.17);
  }
}
</style>
