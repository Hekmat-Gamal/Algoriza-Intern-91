<template>
  <nav class="flex justify-between bg-white">
    <router-link to="/">
      <div class="cursor-pointer">
        <img src="../assets/imgs/plan.png" alt="our logo" class="inline" />
        <span class="text-black"> My Dream Place </span>
      </div>
    </router-link>
    <div class="flex">
      <ul class="flex justify-between">
        <li>Home</li>
        <li>Discover</li>
        <li>Activity</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    <div>
      <router-link to="/SignIn" v-if="!loggedUser"
        ><button class="bg-primary-col text-white rounded-[6px] text-sm px-4 py-2">
          Login
        </button></router-link
      >

      <div class="flex justify-between" v-if="loggedUser">
        <img
          src="../assets/imgs/notification.png"
          class="w-[30px] h-[30px]"
          alt="notification icon"
        />
        <img src="../assets/imgs/user.png" alt="user profile picture" class="mx-2" />
        <button
          v-if="loggedUser"
          @click="logout()"
          class="bg-primary-col text-white rounded-[6px] text-sm px-4 py-2"
        >
          Sign out
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import SimpleNav from './SimpleNav.vue'
components: {
  SimpleNav
}

const router = useRouter()

const { loggedUser, updateUser } = inject('user')

function logout() {
  updateUser(null)
  localStorage.removeItem('loggedUser')
  router.push('/SignIn')
}
</script>
<style>
ul li {
  @apply mr-2;
}
</style>
