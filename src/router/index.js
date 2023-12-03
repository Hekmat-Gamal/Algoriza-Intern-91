import { createRouter, useRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import Register from '../views/Register.vue'
import Hotels from '../views/Hotels.vue'

const $router = useRouter()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: () => {
        const user = JSON.parse(localStorage.getItem('loggedUser'))
        if (!user) {
          return true
        } else {
          return { name: 'home' }
        }
      }
    },
    {
      path: '/SignIn',
      name: 'signin',
      component: SignIn,
      beforeEnter: () => {
        const user = JSON.parse(localStorage.getItem('loggedUser'))
        console.log(user)
        if (!user) {
          return true
        } else {
          return { name: 'home' }
        }
      }
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: Hotels,
      beforeEnter: () => {
        const user = JSON.parse(localStorage.getItem('loggedUser'))
        if (user) {
          return true
        } else {
          return { name: 'signin' }
        }
      }
    }
  ]
})

export default router
