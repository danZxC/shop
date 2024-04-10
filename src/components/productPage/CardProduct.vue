<template>
        <div class="cross" @click = "deleteClick">
            <div class="cross-line"></div>
            <div class="cross-line"></div>
        </div>
        <img :src="src" alt="">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="price-quantity">
            <div class="price">{{ price }}</div>
            <div class="quantity">{{ quantity }}</div>
        </div>
</template>

<script>
export default {
    props:['title', 'price', 'quantity', 'description', 'id', 'src'],
    methods: {
        deleteClick(){
            this.$emit('delete', {
                id: this.id
            })            
        }
    }
}
</script>

<style scoped>

h1{
    font-size: 35px;
    font-family: 'Nunito';
    font-weight: 700;
    margin:0;
    word-wrap: break-word;
    width: 80%;
    color:#861285;
    text-transform: none;
}
p{
  font-family: 'Nunito';
  font-size: 20px;
  width: 80%;
  
  word-wrap: break-word;
}
.price-quantity{
    display: flex;
    width: 80%;
    height: 65px;
    justify-content: space-between;
    align-items: center;
}

.price,.quantity{
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
}
.price {
    background-color: #861285;
    border-radius: 20px;
    color:white;
    font-weight: 300;
}
.quantity {
    color:#861285;
}
.cross{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 20px;
    right: 20px;
            
}
.cross-line{
    width: 50px;
    height: 5px;
    background-color: #861285;
    border-radius: 10px;
    position: absolute;
    top: 20px;
    left: auto;
}
.cross-line:first-child{

    transform: rotate(45deg);
}
.cross-line:last-child{
    transform: rotate(-45deg);
}
img{
    width: 50%;
}

@media (max-width: 1300px){

}
</style>
