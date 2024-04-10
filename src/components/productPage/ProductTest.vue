<template>
<div class="bg">
    

    <div class="title"> 
        <router-link class="back control" :to = "{name: 'Product'}">🠔</router-link>
        <RouterView/>
        <h1>{{ rout }}</h1>
        <button class="show-button control" @click="ToggleForm">+</button>
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

   
<div class="product-wrapper">
    <div class="product" v-for="product in arr" :key="product.id" >
        <CardProduct @delete="onDelete(product.id)"  :title="product.name" :price="product.price" :quantity="product.quantity" :description="product.description" :id="product.id" :src = "product.imgSrc"/>
    </div> 
</div>


</div>
</template>


<script>
import CardProduct from './CardProduct.vue';
export default {
    props:['title'],
    data() {
        return {
            showButton: false,
            arr: [],
            product: {
                name: "",
                price: "",
                quantity: "",
                description: "",
                id:0,
                srcImg:"",
            },
            rout: this.$route.params.title,
            nameToDelete:'Name'
        };
    },
    methods:{
       ToggleForm(){
        this.showButton = !this.showButton
       },
       onDelete(id){
            this.arr.splice(id,1)
            for (let index = 0; index < this.arr.length; index++) {
                this.arr[index].id=index
                console.log(this.arr[index])
            }

            localStorage.setItem(this.rout,JSON.stringify(this.arr))
            alert(" элемент удален!")
            // location.reload()
       },
       updateList(){
              if(!isNaN(this.product.price) && !isNaN(this.product.quantity) && this.product.name!='' && this.product.description!='' && this.product.price!='' && this.product.quantity!=''){
                this.arr.push(
                {
                    name: this.product.name,
                    price: this.product.price + ' $',
                    quantity:this.product.quantity,
                    description:this.product.description,
                    id: this.arr.length,
                    imgSrc:this.product.srcImg
                    
                })
                localStorage.setItem(this.rout,JSON.stringify(this.arr))
                alert("Новый элемент зарегистрирован!")
                // location.reload()
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
        this.arr = JSON.parse(localStorage.getItem(this.rout))
        if(this.arr === null){
            this.arr = []
        }
        console.log(this.arr)
    },
    components: { CardProduct}
    }
</script>


<style scoped>
    .bg{
        background-image: url("../../assets/product-bg.png");
        min-height:100vh;
    }
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
    .control{
        background-color: white;
        color:blueviolet;
        position: absolute;
        width: 90px;
        height: 90px;
        z-index: 1;
    }
    .show-button{
        right: 10%;
    }
    .back {
        font-size: calc(20px + 16 * (100vw / 1920));
        left: 10%;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .back img{
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

    .product-wrapper {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin: 160px auto;
        justify-content: space-between;
    }
    .product{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 60svh;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 20px;
        background-color: white;
        
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
    @media(max-width:1200px){
    .product{
        width: 45%;
    }
   }
   @media (max-width:768px){
    .wrapper {
        margin-top:40px
    }
    form {
        width: 100%;
    }
    .product{
    width: 100%;
    }
    .control {
        width: 40px;
        height: 40px;
    }
    .back img {
        width: 40px;
        height: 40px;
    }
    .PriceQuantity {
        width: 100%;
    }

   }

</style>