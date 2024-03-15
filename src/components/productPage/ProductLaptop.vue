<template>


    <div class="title">    
        <h1>Laptops</h1>
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

   
<div class="laptop-wrapper">
    <div class="laptop" v-for="laptop in laptopArray" :key="laptop.id" >
        <CardProduct @delete="onDelete(laptop.id)"  :title="laptop.name" :price="laptop.price" :quantity="laptop.quantity" :description="laptop.description" :id="laptop.id" :src = "laptop.imgSrc"/>
    </div> 
</div>

</template>


<script>
import CardProduct from './CardProduct.vue';
export default {
    data() {
        return {
            showButton: false,
            laptopArray: [],
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
            this.laptopArray.splice(id,1)
            for (let index = 0; index < this.laptopArray.length; index++) {
                this.laptopArray[index].id=index
                console.log(this.laptopArray[index])
            }

            localStorage.setItem('laptops',JSON.stringify(this.laptopArray))
            alert(" элемент удален!")
            location.reload()
       },
       updateList(){
              if(!isNaN(this.product.price) && !isNaN(this.product.quantity) && this.product.name!='' && this.product.description!='' && this.product.price!='' && this.product.quantity!=''){
                this.laptopArray.push(
                {
                    name: this.product.name,
                    price: this.product.price + ' $',
                    quantity:this.product.quantity,
                    description:this.product.description,
                    id: this.laptopArray.length,
                    imgSrc:this.product.srcImg
                    
                })
                localStorage.setItem('laptops',JSON.stringify(this.laptopArray))
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
        this.laptopArray = JSON.parse(localStorage.getItem('laptops'))
        console.log(this.laptopArray)
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

    .laptop-wrapper {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin: 160px auto;
        justify-content: space-between;
    }
    .laptop{
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