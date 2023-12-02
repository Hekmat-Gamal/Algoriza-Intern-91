<template>
  <SimpleNav class="py-5 px-24"></SimpleNav>

  <form class="mt-8 mx-auto w-[400px]">
    <h5 class="text-[28px] text-center font-semibold">Sign in</h5>

    <div class="items">
      <label for="userEmail" class="text-sm block mt-5">Email address</label>
      <input
        class="bg-input-bg w-[400px] h-11 rounded block userEmail"
        id="userEmail"
        type="email"
        v-model="email"
      />
      <!-- <span v-if="!email.include('@')" class="text-red-700"> * Required Field</span> -->
      <label class="text-sm block mt-5">Password</label>
      <input class="bg-input-bg w-[400px] h-11 rounded block" type="password" v-model="password" />
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

<script>
import SimpleNav from '../components/SimpleNav.vue'
import { useUserStore } from '../stores/user'
export default {
  components: {
    SimpleNav,
    setup() {
      const Store = useUserStore()
      console.log(Store.users)
      return Store
    }
  }
}
</script>

<style></style>
