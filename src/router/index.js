import { createRouter, createWebHistory } from 'vue-router'
import CamisaScreen from '../screens/CamisaScreen.vue'
import HomeScreen from '../screens/HomeScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeScreen
    },
    {
      path: '/camisa',
      name: 'camisa',
      component: CamisaScreen
    },
  ]
})

export default router
