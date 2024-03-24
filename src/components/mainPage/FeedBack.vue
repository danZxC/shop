<template>
    <div class="wrapper">
        <h1>Feedback</h1>
        <h2>Feel free to express your opinion!</h2>
    
        <form class="feedback-wrapper">
            <input type="text" value="E-mail" v-model="email">
            <input type="text" value="Name" v-model="name">
            <input type="text" value="Comment" class="comment-input" v-model="comment">
            <button class="send-button" >Отправить</button>
        </form>
    </div>
</template>



<script>

export default {
    data(){
        return {
            comment: "",
            name: "",
            email:"",
        }
    },
}
</script>

<style scoped>
.wrapper {
    flex-direction: column;
    align-items: center;
    height: 100svh;
    text-align: center;
    margin-bottom: 160px;
}
h2 {
    font-family: 'Nunito';
    font-size: calc(25px + 16 * (100vw / 1920));
 
    color:#959595;
}
form{
    width: 80%;
    height:60svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
input {
  height: 20%;  
}

@media(max-width:768px){
  form{
    width: 100%;
  }
  button{
    width: 100%;
  }
}
</style>
