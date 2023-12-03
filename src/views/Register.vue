<template>
  <SimpleNav class="py-5 px-24 navBar"></SimpleNav>
  <form class="mt-8 mx-auto w-[400px]" @submit.prevent="registerUser()">
    <h5 class="text-[28px] text-center font-semibold">Register</h5>
    <div class="items">
      <label class="text-sm block mt-5">Email address</label>
      <input class="inline bg-input-bg w-[400px] h-11 rounded" v-model="email" type="email" />
      <span class="error" v-show="emailError">email required</span>
      <label class="text-sm block mt-5">Password</label>
      <input class="bg-input-bg w-[400px] h-11 rounded block" v-model="password" type="password" />
      <span class="error" v-show="passError">Password required</span>

      <label class="text-sm block mt-5">Confirm assword</label>
      <input
        class="bg-input-bg w-[400px] h-11 rounded block"
        v-model="confirmPass"
        type="password"
      />
      <span class="error" v-show="confirmError">confirmPass required</span>
      <span class="error" v-show="confirmPassError">passwords must be ideticals</span>

      <button class="bg-primary-col text-white w-[400px] h-11 rounded-md block mt-8">Submit</button>
      <p class="text-center text-xs mt-5">
        Already have account ? <router-link to="/SignIn">Signin</router-link>
      </p>
    </div>
  </form>
</template>

<script setup>
import SimpleNav from '../components/SimpleNav.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

components: {
  SimpleNav
}

const Router = useRouter()

const email = ref('')
const password = ref('')
const confirmPass = ref('')

let emailError = ref(false)
let passError = ref(false)
let confirmError = ref(false)
let confirmPassError = ref(false)

onMounted(() => {})

function validateRequired(value) {
  if (value.value === '') {
    return false
  } else {
    return true
  }
}

function confirmPassFn() {
  if (password.value === confirmPass.value) {
    confirmPassError.value = false
    return true
  } else {
    confirmPassError.value = true
    return false
  }
}

function isUserRegister(userEmail) {
  let users = JSON.parse(localStorage.getItem('users'))
  if (users) {
    return users.some((user) => user.email === userEmail)
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
  if (!validateRequired(confirmPass)) {
    confirmError.value = true
  } else {
    confirmError.value = false
  }

  let users = JSON.parse(localStorage.getItem('users'))

  if (confirmPassFn() && !emailError.value && !passError.value) {
    if (!users) {
      users = []
      users.push({ email: email.value, password: password.value })
      localStorage.setItem('users', JSON.stringify(users))
    } else {
      if (isUserRegister(email.value)) {
        Router.push('/SignIn')
      } else {
        users.push({ email: email.value, password: password.value })
        localStorage.setItem('users', JSON.stringify(users))
      }
    }
  }
}
</script>

<style>
.error {
  @apply text-error-col text-sm inline-block mt-3;
}
.navBar span {
  @apply text-white;
}
</style>
