<template>
    <div class="game-wrapper" >
        <div class="wrapper"> 
            
            <div class="text-wrapper">
                <button class="assend" @click = "Assend"> ↑ </button>
                <h1 class="counter" @click="ToZero()">{{ counter }} $</h1>
                <h2>Your current passive income is: {{ passiveIncome }}</h2>
            </div>
            <img :src="PcSource" @click="Increment()" alt="">
            
        </div>
    </div>
    <div class="buttons">       
        <div class="button" v-for="button in buttons" :key="button.id">
            
            <GameButton @click="IncreaseQuantity(button.id)" @get="UpdatePassiveIncome" :title=button.title :imgSrc=button.imgSrc :quantity=button.quantity :price=button.price :amount="button.amount"/>
        </div>
    </div>
</template>

<script>    
import GameButton from "../components/gamePage/GameButton.vue"
import image from "../assets/game-background.png"
import PcDustSource from "../assets/game-pc-dust.png"
import PcFutureSource from "../assets/game-pc.png"
export default {
    components:{GameButton},
    data() {
        return {
            buttons: [
                {title: "Plata", imgSrc: require('../assets/chip.png'), amount: 1, quantity:0, price:10, id:0},
                {title: "Processor", imgSrc: require('../assets/cpu.png'), amount: 2, quantity:0, price:100, id:1},
                {title: "Screen", imgSrc: require('../assets/monitor.png'), amount: 3, quantity:0, price:150, id:2}
            ],
            counter: 0,
            assendCoeficient: 1,
            passiveIncome: 0,

            PcSource: PcDustSource
            
        };
    },
    methods: {

        ToZero(){
            this.passiveIncome=0
            this.counter=0
            for (let index = 0; index < this.buttons.length; index++) {
                this.buttons[index].quantity = 0
                // this.buttons[index].amount = index+1
                if(!index){
                    this.buttons[index].price = 10
                }
                else this.buttons[index].price = index*50
            }
            
           this.SaveAll()

        },
        Increment(){
          this.counter++
          this.SaveItem("game-counter",this.counter)
        },
        UpdatePassiveIncome(value){
            this.passiveIncome = this.passiveIncome+value
            this.SaveItem("passiveIncome",this.passiveIncome)
        },


        UpdateCounterPassive(){
            this.counter = this.counter + this.passiveIncome
            this.SaveItem("game-counter",this.counter)
        },
        
        IncreaseQuantity(id){
            if(this.buttons[id])
            if(this.buttons[id].price<=this.counter){   
                this.counter=this.counter - this.buttons[id].price 
                this.buttons[id].price=this.buttons[id].price+ (this.buttons[id].quantity+1)*15
                this.buttons[id].quantity++
                this.SaveItem("buttons", this.buttons)
            }
            else {alert("No money to buy this upgrade")}
        },


        Assend(){
            let back = document.querySelector(".game-wrapper")
            if(this.counter>10){
                console.log(image)
                back.style.background = 'url("'+image+'")'
                back.style.backgroundRepeat= 'no-repeat'
                back.style.backgroundSize = 'cover'

                this.PcSource = PcFutureSource
                this.SaveItem("level",this.back)
                
            }
        },



        //SAVE AND LOAD 
        SaveItem(Where,toSave){
            localStorage.setItem(Where,JSON.stringify(toSave))
        },

        SaveAll(){
            this.SaveItem("buttons", this.buttons)
            this.SaveItem("passiveIncome", this.passiveIncome)     
            this.SaveItem("game-counter",this.counter)
            this.SaveItem("assend", this.assendCoeficient)
        },
        LoadAll(){
            this.counter = JSON.parse(localStorage.getItem("game-counter"))
            this.passiveIncome = JSON.parse(localStorage.getItem("passiveIncome"))
            this.assendCoeficient = JSON.parse(localStorage.getItem("assend"))
            this.buttons = JSON.parse(localStorage.getItem("buttons"))
        },
        CheckAll(){
            if(this.passiveIncome === null || this.assendCoeficient === null || this.buttons === null ){
                this.passiveIncome = 0
                this.assendCoeficient = 1
                this.buttons = [
                    {title: "Plata", imgSrc: require('../assets/chip.png'), amount: 1, quantity:0, price:10, id:0},
                    {title: "Processor", imgSrc: require('../assets/cpu.png'), amount: 2, quantity:0, price:100, id:1},
                    {title: "Screen", imgSrc: require('../assets/monitor.png'), amount: 3, quantity:0, price:150, id:2}
                ]
                this.SaveAll()
            }
        }

    },
    mounted(){

        this.LoadAll()
        this.CheckAll()
        console.log(this.buttons)
        setInterval(this.UpdateCounterPassive, 2000)            
    }
}
</script>

<style scoped>
.game-wrapper {
    height: 83svh;
    width: 100%;
    background-image: url("../assets/game-background-dust\ .png");
    background-size: cover;
}
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.counter{
    color: white;
}
img{
    width: 30%;
}
img:hover{
    cursor: pointer;
}
h2{
    color: #f0b9ff;
    
    font-size: calc(15px + 16 * (100vw / 1920));
    font-weight: 300;
    letter-spacing: 10px;
    font-family: 'Nunito', sans-serif;
}

.buttons{
    margin:50px  auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;
}

.assend{
    position: absolute;
    top:280px;
    right:10%;
    width: 100px;
    background-color:#f0b9ff;
    color:black;
}
</style>