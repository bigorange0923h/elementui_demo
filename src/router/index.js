import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import User from '../views/User.vue'
import List from '../components/user/List.vue'
const routes = [
  {
    path: "/",
    redirect: "/index"

  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
