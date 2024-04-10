import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '../views/ProductPage.vue'
import GamePage from '../views/GamePage.vue'
import MainPage from '../views/MainPage.vue'
import ProductTest from '@/components/productPage/ProductTest.vue'




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
    path: '/product/prod/:title',
    name: 'Test',
    component: ProductTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
