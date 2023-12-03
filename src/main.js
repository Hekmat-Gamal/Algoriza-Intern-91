import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { provide, ref } from 'vue'
const loggedUser = ref(JSON.parse(localStorage.getItem('loggedUser')))
const welcome = ref(false)
const bookingSucc = ref(false)

function updateUser(user) {
  loggedUser.value = user
}

// provide('user')

function updateWelcome(value) {
  welcome.value = value
}
function updateBookingSucc(value) {
  bookingSucc.value = value
}

// Use plugin with optional defaults

const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.provide('user', {
  loggedUser,
  updateUser
})
app.provide('welcome', {
  welcome,
  updateWelcome
})
app.provide('bookingSucc', {
  bookingSucc,
  updateBookingSucc
})
app.mount('#app')
