import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '../views/ProductPage.vue'
import GamePage from '../views/GamePage.vue'
import MainPage from '../views/MainPage.vue'
import ProductLaptop from '@/components/productPage/ProductLaptop.vue'
import ProductPc from '@/components/productPage/ProductPc.vue'
import ProductAccesories from '@/components/productPage/ProductAccesories.vue'
import ProductPhones from '@/components/productPage/ProductPhones.vue'




const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductPage
  },
  {
    path: '/game',
    name: 'Game',
    component: GamePage
  },
  {
    path: '/product/laptops',
    name: 'Laptops',
    component: ProductLaptop
  },
  {
    path: '/product/Pc',
    name: 'Pc',
    component: ProductPc
  },  
  {
    path: '/product/Accesories',
    name: 'Accesories',
    component: ProductAccesories
  },
  {
    path: '/product/Phones',
    name: 'Phones',
    component: ProductPhones
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
