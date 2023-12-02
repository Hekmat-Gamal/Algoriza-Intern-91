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
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/hotels">hotels</router-link></li>
        <li>Discover</li>
        <li>Activity</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    <div>
      <router-link to="/SignIn"
        ><button class="bg-primary-col text-white rounded-[6px] text-sm px-4 py-2">
          Login
        </button></router-link
      >
    </div>
  </nav>
</template>

<script>
import SimpleNav from './SimpleNav.vue'
export default {
  name: 'nav',
  components: { SimpleNav },
  methods: {
    homeRedirect() {
      wi
    }
  }
}
</script>
<style>
ul li {
  @apply mr-2 text-black;
}
</style>
