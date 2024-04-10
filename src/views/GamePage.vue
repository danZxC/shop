<template>
    <div class="game-wrapper" >
        <div class="wrapper"> 
            <ul class="upgrade-menu">
                <div class="close-upgrade" @click="Upgrade">
                <img src="../assets/close.png" alt="">
                </div>
                <li 
                v-for="upgrade in UpgradeInfo"
                :key="upgrade.id" 
                @click="upgrade.funct"
                @mouseover="AddUpgradeClass(upgrade.id)" 
                @mouseleave="DeleteUpgradeClass(upgrade.id)
                ">
                <div class="upgrade-text">
                     <h1>{{ upgrade.name }}</h1>
                     <p>{{ upgrade.price }}</p>
                </div>
                <img  :src="upgrade.source" alt="">
                </li>
            </ul>
            <div class="text-wrapper">
                <button class="assend" @click = "Upgrade"> ↑ </button>
                <button class="button-show" @click = "ShowButtons">  🏠︎ </button>
                <h1 class="counter" @click="ToZero()">{{ counter }} $</h1>
                <h2>Your current passive income is: {{ passiveIncome }}</h2>
            </div>
            <img class="main-image" :src="PcSource" @click="Increment()" alt="">
            
        </div>
    
            
    </div>
    <div class="buttons">    
            <div class="close-button" @click="ShowButtons">
                <img src="../assets/close.png" alt="">
            </div>
             <div class="buttons-wrapper">
                <div class="button" v-for="button in buttons" :key="button.id" >
                    <GameButton 
                    v-if="button.show"
                    @click="IncreaseQuantity(button.id-1)" 
                     
                    :title=button.title 
                    :imgSrc=button.imgSrc 
                    :quantity=button.quantity 
                    :price=button.price 
                    :amount="button.amount"
                    />
                </div>
             </div>
            </div>
</template>

<script>    
import GameButton from "../components/gamePage/GameButton.vue"

import PcDustSource from "../assets/game-pc.png"
export default {
    components:{GameButton},
    data() {
        return {
            buttons: [
                {title: "Plata", imgSrc: require('../assets/chip.png'), amount: 1, quantity:0, price:10, id:1, show:true},
                {title: "Processor", imgSrc: require('../assets/cpu.png'), amount: 2, quantity:0, price:100, id:2, show:true},
                {title: "Screen", imgSrc: require('../assets/monitor.png'), amount: 3, quantity:0, price:150, id:3, show:true},
                {title: "PC", imgSrc: require('../assets/chip.png'), amount: 1, quantity:0, price:10, id:4, show:true},
                {title: "Laptop", imgSrc: require('../assets/cpu.png'), amount: 2, quantity:0, price:100, id:5, show:true},
                {title: "Server", imgSrc: require('../assets/monitor.png'), amount: 3, quantity:0, price:150, id:6, show:true},
            ],
            buttonsAdd:localStorage.getItem("buttonsAdd"),
            counter: 0,
            passiveIncome: 0,
            ClickIncrease:1,
            PcSource: PcDustSource,
            UpgradeInfo: [
            {name: "Клик", price: 1000, source: require("../assets/game0.png"), id:0, funct: this.UpgradeClick},
            {name: "Доход", price: 500, source: require("../assets/game1.png"), id:1, funct: this.UpgradeIncome},
            {name: "Кот", price: 300, source: require("../assets/game2.png"), id:2, funct:this.AddButton}
            ],
            
        };
    },
    methods: {

        ToZero(){
            this.passiveIncome=0
            this.counter=0
            this.ClickIncrease = 1
            this.UpgradeInfo[0].price = 1000
            this.UpgradeInfo[1].price = 500
            for (let index = 0; index < this.buttons.length; index++) {
                this.buttons[index].quantity = 0
                this.buttons[index].amount = index+1
                this.buttons[index].show = false
                // this.buttons[index].amount = index+1
                if(index===0){
                    this.buttons[index].price = 10
                    this.buttons[index].show = true
                }
                else this.buttons[index].price = index*50
            }
            
            this.SaveAll()
            console.log(this.buttons)
        },
        Increment(){
          this.counter=this.counter + this.ClickIncrease,
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
            console.log(this.buttons[id].price)
            if(this.buttons[id].price<=this.counter){   
                this.counter=this.counter - this.buttons[id].price 
                this.buttons[id].price=(this.buttons[id].price*1.4).toFixed()
                this.buttons[id].quantity++
                this.passiveIncome+=this.buttons[id].amount
                this.SaveAll()
            }
            else {alert("No money to buy this upgrade")}
        },

        //Открытие меню 
        Upgrade(){
            let upgradeMenu = document.querySelector(".upgrade-menu")
            upgradeMenu.classList.toggle("active")
        },

        ShowButtons(){
            let ShowButtons = document.querySelector(".buttons")
            ShowButtons.classList.toggle("active")
        },


        //Прокачка 
        UpgradeClick(){
           if(this.counter>this.UpgradeInfo[0].price){
            this.counter=this.counter - this.UpgradeInfo[0].price
            this.ClickIncrease++
            this.UpgradeInfo[0].price=this.UpgradeInfo[0].price*1.5
            this.SaveAll()
           }
           else alert("No money")
        },
        UpgradeIncome(){
            if(this.counter>this.UpgradeInfo[1].price){
            this.counter=this.counter - this.UpgradeInfo[1].price
            for(let i=0;i<this.buttons.length;i++){
                this.buttons[i].amount*=2
                this.buttons[i].price=(this.buttons[i].price*1.5).toFixed()
            }
            this.UpgradeInfo[1].price=this.UpgradeInfo[1].price*2
            this.SaveAll()
           }
           else alert("No money")
        },
        AddButton(){
            if(this.UpgradeInfo[2].price<this.counter){
                this.counter-=this.UpgradeInfo[2].price
                this.UpgradeInfo[2].price*=4
                for(let i=0;i<this.buttons.length;i++){
                    
                    if(i===7) {alert("Max Button Count is 6 ");  break;} 
                    else if(this.buttons[i].show === false){
                        this.buttons[i].show = true
                        break;
                    }
                
                }
                this.SaveItem("buttons",this.buttons)
                this.SaveItem("AddButtonIncreasePrice",this.UpgradeInfo[2].price)
            }
            else alert("No money")

        },


        //Добавляем ховер на список апгрейдов)))
        AddUpgradeClass(id){
            let upgradeLi = document.querySelectorAll("li")
            upgradeLi[id].classList.add("hovering");
            this.UpgradeInfo[id].source = require("../assets/game"+String(id)+"2.png")
        },
        DeleteUpgradeClass(id){
            let upgradeLi = document.querySelectorAll("li")
            upgradeLi[id].classList.remove("hovering");    
            this.UpgradeInfo[id].source = require("../assets/game"+String(id)+".png")
            
        },


        //SAVE AND LOAD AND CHECK
        SaveItem(Where,toSave){
            localStorage.setItem(Where,JSON.stringify(toSave))
        },

        SaveAll(){
            this.SaveItem("buttons", this.buttons)
            this.SaveItem("passiveIncome", this.passiveIncome)     
            this.SaveItem("game-counter",this.counter)
            
            this.SaveItem("clickIncrease",this.UpgradeInfo[0].price)
            this.SaveItem("incomeIncreasePrice",this.UpgradeInfo[1].price)
            this.SaveItem("AddButtonIncreasePrice",this.UpgradeInfo[2].price)

            
        },
        LoadAll(){
            this.counter = JSON.parse(localStorage.getItem("game-counter"))
            this.passiveIncome = JSON.parse(localStorage.getItem("passiveIncome"))

            this.buttons = JSON.parse(localStorage.getItem("buttons"))
            this.ClickIncrease = JSON.parse (localStorage.getItem("clickIncrease"))
            this.UpgradeInfo[0].price = JSON.parse (localStorage.getItem("clickIncreasePrice"))
            this.UpgradeInfo[1].price = JSON.parse(localStorage.getItem("incomeIncreasePrice"))
            this.UpgradeInfo[2].price = JSON.parse(localStorage.getItem("AddButtonIncreasePrice"))
        },
        CheckAll(){
            if(this.passiveIncome === null  || this.buttons === null || this.UpgradeInfo === null){
                this.passiveIncome = 0
                this.buttons = [
                    {title: "Plata", imgSrc: require('../assets/chip.png'), amount: 1, quantity:0, price:10, id:0},
                    {title: "Processor", imgSrc: require('../assets/cpu.png'), amount: 2, quantity:0, price:100, id:1},
                    {title: "Screen", imgSrc: require('../assets/monitor.png'), amount: 3, quantity:0, price:150, id:2}
                ]
                this.SaveAll()
            }
            if (this.UpgradeInfo[0].price===null || this.UpgradeInfo[1].price===null || this.UpgradeInfo[2].price===null) {
                this.SaveItem("clickIncrease",1000)
                this.SaveItem("incomeIncreasePrice",500)
                this.SaveItem("AddButtonIncreasePrice",3500)
            }
        }

    },
    mounted(){
        this.SaveItem("buttons", this.buttons)
    //  this.SaveItem("AddButtonIncreasePrice",this.UpgradeInfo[2].price)

          

        
        this.LoadAll()
        console.log(this.buttons)
        this.CheckAll()
        setInterval(this.UpdateCounterPassive, 2000)            
    }
}
</script>


<style scoped>
.game-wrapper {
    height: 100svh;
    width: 100%;
    background-image: url("../assets/game-bg-test.png");
    background-size: cover;
    background-position: center;
}
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
 
    align-items: center;
    height: 100vh;
}
.counter{
    color: white;
}
.main-image{
    width: 30%;
}
img:hover{
    cursor: pointer;
}
.close-upgrade{
    display: none;
}
.text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 15%;
    backdrop-filter: blur(10px);
}
li {
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    height: 20%;
    transition: .5s;
}
li img {
    height: 70%;
}
h2{
    color: #f0b9ff;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    text-align: center;
    font-weight: 900;
    font-size: calc(15px + 16 * (100vw / 1920));
    font-weight: 300;
    letter-spacing: 10px;
    font-family: 'Nunito', sans-serif;
}


.assend,.button-show{
    position: absolute;
    width: 25%;
    height: 70px;
    background-color:#f0b9ff;
    color:black;
}
.assend {
    right: 0%;
}
.button-show {
    left: 0%;
}
.button{
    width: 30%;
}
.close-button{
    position: absolute;
    top:30px;
    right:30px;
    width: 50px;
    height: 50px;
}
.upgrade-menu
{
    position: fixed;
    top: 100px;
    height: 70svh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f0b9ff;
    list-style-type: none;
    border-radius: 30px 0px 0px 30px;
    opacity: 0;
    right: 0;
    width: 0;   
    transition: .5s;

    z-index:100;
}

.upgrade-menu.active{
    transition: .5s;
    width: 30%;
    opacity: 1;
}

.buttons{
    width: 0;
    display: flex;
    align-items: center;
    background-color: #f0b9ff;
    flex-direction: column;
    justify-content: center;
    border-radius:50px;
    height: 0vh;
    opacity: 0;
    z-index:5;
    position: fixed;
    top: 100px;
    left:0;
    transition:500ms
}
.buttons.active{
    width: 100%;
    display: flex;
    opacity: 1;
    height: 90vh;
    transition: 500ms;
}
.buttons-wrapper {
    display: flex;
    width: 90%;
    height: 90%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10%;
    align-items: center;
}
.close-button img{
    width: 100%;
    height: 100%;
}
li h1 {
    margin-top:0;
    font-size: calc(12px + 16 * (100vw / 1920));
    color:black;
    transition: .5s;
}
h1 {
    margin-top:0;
}
.upgrade-text{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.upgrade-text p {
    font-size: calc(10px + 16 * (100vw / 1920));
    padding: 20px;
    color: #f0b9ff;
    background-color: blueviolet;
    border-radius: 20px;
    transition: .5s;
}
li.hovering{
    background-color: blueviolet;
    color:#f0b9ff;
    transition: .5s;
    padding: 30px 0;
}

li.hovering h1{
    color:#f0b9ff;
    transition: .5s;
}
.close-upgrade {
    display: block;
    position: absolute;
    top:10px;
    width: 30px;
    height: 30px;
    right: 30px;
 }
 .close-upgrade img {
    width: 100%;
    height: 100%;
 }
li.hovering p{
    background-color:#f0b9ff;
    color:blueviolet;
    transition: .5s;
}
@media (max-width:1440px){
    .button {
        width: 40%;
    }
}
@media (max-width:1024px){
 .main-image{
    width: 50%;
 }   
 .button {
    width: 43%;
 }
 .upgrade-menu.active{
    width: 40%;
 }
}
@media (max-width:768px){
 .main-image{
    width: 70%;
 }   
 
 .close-upgrade img {
    width: 100%;
    height: 100%;
 }
 .upgrade-menu {
    height: 0;
 }
 .upgrade-menu.active{
    height: 100vh;
    width: 100%;
    top:0;
    border-radius: 0;
    justify-content: center;
    gap:15%;
 }
 .upgrade-menu h1 {
    font-size: 30px;
 }
 .upgrade-menu p {
    width: 90%;
    font-size: calc(15px + 16*(100vw / 1920));
 }
 li {
    height: 15%;
 }
 li img {
    width: 20%;
 }
 .close-upgrade {
    display: block;
    position: absolute;
    top:30px;
    width: 40px;
    height: 40px;
    right: 50px;
 }
 .buttons-wrapper {
    flex-direction: column;
    justify-content: start;
    gap:10%;  
    flex-wrap: nowrap;
    align-items: center;
    overflow: scroll;
    height: 70%;
 }
 .close-button {
    height: 30px;
    width: 30px;
    right: 20px;
    top: 20px;
 }
 .buttons.active {
    width: 100%;
    height: 100vh;
    top:0;  
    border-radius: 0;
    justify-content: center;
    align-items: center;
    z-index: 100;
 }
 .button{
    width: 100%;
    margin:0;
 }
 .button-wrapper {
    margin:0px;
 }
}
@media (max-width:500px){
 .main-image{
    width: 90%;
 }   

}
</style>