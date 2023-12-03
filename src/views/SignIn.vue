<template>
  <SimpleNav class="py-5 px-24 text-black"></SimpleNav>

  <form class="mt-8 mx-auto w-[400px]" @submit.prevent="registerUser()">
    <h5 class="text-[28px] text-center font-semibold">Sign in</h5>
    <p class="error" v-if="worngPassword">Wrong Email or password</p>
    <div class="items">
      <label for="userEmail" class="text-sm block mt-5">Email address</label>

      <input
        class="bg-input-bg w-[400px] h-11 rounded block userEmail"
        id="userEmail"
        type="email"
        v-model="email"
      />
      <span class="error" v-show="emailError">email required</span>
      <label class="text-sm block mt-5">Password</label>
      <input class="bg-input-bg w-[400px] h-11 rounded block" type="password" v-model="password" />
      <span class="error" v-show="passError">Password required</span>
      <button class="bg-primary-col text-white w-[400px] h-11 rounded-md block mt-8">
        Sign In
      </button>
      <p class="text-center text-xs mt-5">
        Don't have an account?
        <router-link to="/register" class="text-btn-primary"> Register</router-link>
      </p>
      <div v-for="user in Store" :key="user.email">
        <span> {{ user.email }}</span>
      </div>
    </div>
  </form>
</template>

<script setup>
import SimpleNav from '../components/SimpleNav.vue'
import { ref, onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'
components: {
  SimpleNav
}
const Router = useRouter()
const email = ref('')
const password = ref('')

let emailError = ref(false)
let passError = ref(false)

let worngPassword = ref(false)

onMounted(() => {})

const { loggedUser, updateUser } = inject('user')
const { welcome, updateWelcome } = inject('welcome')

function validateRequired(value) {
  if (value.value === '') {
    return false
  } else {
    return true
  }
}

function isUserRegister(userEmail) {
  let users = JSON.parse(localStorage.getItem('users'))
  if (users) {
    return users.some((user) => user.email === userEmail)
  }
}

function isPassCorrect(password) {
  let users = JSON.parse(localStorage.getItem('users'))
  if (users) {
    return users.some((user) => user.password === password)
  }
}

function registerUser() {
  if (!validateRequired(email)) {
    emailError.value = true
  } else {
    emailError.value = false
  }
  if (!validateRequired(password)) {
    passError.value = true
  } else {
    passError.value = false
  }

  let users = JSON.parse(localStorage.getItem('users'))

  if (!emailError.value && !passError.value) {
    if (users) {
      if (isUserRegister(email.value) && isPassCorrect(password.value)) {
        localStorage.setItem(
          'loggedUser',
          JSON.stringify({ email: email.value, password: password.value })
        )
        updateUser({ email: email.value, password: password.value })
        updateWelcome(true)
        Router.push('/')
      } else {
        worngPassword.value = true
      }
    }
  }
}
</script>

<style>
.error {
  @apply text-error-col text-sm inline-block mt-3;
}
</style>
