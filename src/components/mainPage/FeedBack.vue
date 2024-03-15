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
import axios from 'axios';

export default {
    data(){
        return {
            comment: "",
            name: "",
            email:"",
        }
    },
    methods: {
    sendEmail() {
      axios.post('https://api.sendgrid.com/v3/mail/send', {
        personalizations: [
          {
            to: [
              {
                email: 'madbeaver151@gmail.com'
              }
            ],
            subject: 'Новый комментарий',
          }
        ],
        from: {
          email: this.email,
        },
        content: [
          {
            type: 'text/plain',
            value: this.comment,
          }
        ]
      }, {
        headers: {
          'Authorization': 'Bearer YOUR_SENDGRID_API_KEY'
        }
      })
      .then(response => {
        console.log('Письмо успешно отправлено',response);
      })
      .catch(error => {
        console.error('Ошибка при отправке письма', error);
      });
    }
    }
}
</script>

<style scoped>
.wrapper {
    flex-direction: column;
    align-items: center;
    height: 100svh;
    
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
</style>
