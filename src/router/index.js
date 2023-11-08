import { createRouter, createWebHistory } from 'vue-router'
import Product_View from '@/components/Product_View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Product_View',
      component: Product_View
    }
  ]
})

export default router
