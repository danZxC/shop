<template>
  <div class="title">    
        <h1>Phones</h1>
        <button class="show-button" @click="ToggleForm">+</button>
    </div>
    <div class="wrapper" v-if="showButton">
        <form >
        <input type="text" placeholder="Name"  v-model="product.name">
        <div class="PriceQuantity">
            <input type="text"  class="Price" placeholder="Price" v-model="product.price">
            <input type="text" placeholder="Quantity" class="Quantity" v-model="product.quantity">
        </div>
        <input type="text" placeholder="Description" class="Description" v-model="product.description">
        <input type="text" placeholder="Image URL" class="ImageLink" v-model="product.srcImg">
        
        <button @click="updateList">Submit</button>
    </form>
    </div>

   
<div class="phone-wrapper">
    <div class="phone" v-for="phone in phoneArray" :key="phone.id" >
        <CardProduct @delete="onDelete(phone.id)"  :title="phone.name" :price="phone.price" :quantity="phone.quantity" :description="phone.description" :id="phone.id" :src = "phone.imgSrc"/>
    </div> 
</div>

</template>


<script>
import CardProduct from './CardProduct.vue';
export default {
    data() {
        return {
            showButton: false,
            phoneArray: [],
            product: {
                name: "",
                price: "",
                quantity: "",
                description: "",
                id:0,
                srcImg:"",
            },

            nameToDelete:'Name'
        };
    },
    methods:{
       ToggleForm(){
        this.showButton = !this.showButton
       },
       onDelete(id){
            this.phoneArray.splice(id,1)
            for (let index = 0; index < this.phoneArray.length; index++) {
                this.phoneArray[index].id=index
                console.log(this.phoneArray[index])
            }

            localStorage.setItem('phones',JSON.stringify(this.phoneArray))
            alert(" элемент удален!")
            location.reload()
       },
       updateList(){
              if(!isNaN(this.product.price) && !isNaN(this.product.quantity) && this.product.name!='' && this.product.description!='' && this.product.price!='' && this.product.quantity!=''){
                this.phoneArray.push(
                {
                    name: this.product.name,
                    price: this.product.price + ' $',
                    quantity:this.product.quantity,
                    description:this.product.description,
                    id: this.phoneArray.length,
                    imgSrc:this.product.srcImg
                    
                })
                localStorage.setItem('phones',JSON.stringify(this.phoneArray))
                alert("Новый элемент зарегистрирован!")
                location.reload()
            }
            if(isNaN(this.product.price)){alert("The price should contain only numbers")}
            if(isNaN(this.product.quantity)){alert("The quantity should contain only numbers")}
            if(this.product.name==''){alert("Please change the name of the product")}
            if(this.product.description==''){alert("Please change the description of the product")}
            if(this.product.price==''){alert("Please change the price of the product")}
            if(this.product.quantity==''){alert("Please change the quantity of the product")}
        
        },   
     
    },
    mounted(){    
       
        this.phoneArray = JSON.parse(localStorage.getItem('phones'))
        if(this.phoneArray === null) {
            this.phoneArray = []
        }
        console.log(this.phoneArray)
    },
    components: { CardProduct }
}
</script>


<style scoped>

    .title{
        display: flex;
        width: 80%;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 160px;
    }
    h1{
        margin:0
    }
    .show-button{
        position: absolute;
        right: 10%;
        width: 90px;
        height: 90px;
    }
    .head{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 35%;
        align-items: center;
    }
    .wrapper{
        margin-top: 80px;
        flex-direction: column; 
        height: 65svh;
        align-items: center;
    }
    form{
        width: 80%;
        height: 65svh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .PriceQuantity{
        display: flex;
        width: 80%;
        justify-content: space-between;
    }
    .Price,.Quantity{
        width: 40%;
    }

    .phone-wrapper {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin: 160px auto;
        justify-content: space-between;
    }
    .phone{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 60svh;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 20px;
            
        -webkit-box-shadow: 10px 11px 33px 2px rgba(34, 60, 80, 0.38);
        -moz-box-shadow: 10px 11px 33px 2px rgba(34, 60, 80, 0.38);
        box-shadow: 10px 11px 33px 2px rgba(34, 60, 80, 0.38);
        margin-bottom: 50px;
    }
    .buttons {
        display: flex;
        width: 65%;
        justify-content: space-between;
    }
    .add-button, .delete-button{
        width: 40%;
        height: 70px;
    }

    .choose-delete-wrapper {
        display: flex;
        justify-content: space-between;
        width: 50%;
        align-items: center;
    }
    .choose-delete-wrapper button {
        width: 30%; 
        font-size: calc(15px + 16 * (100vw / 1920));
    }

</style>
./Card.vue