<template>
  <SimpleNav class="py-5 px-24"></SimpleNav>
  <form class="mt-8 mx-auto w-[400px]">
    <h5 class="text-[28px] text-center font-semibold">Register</h5>
    <div class="items">
      <label class="text-sm block mt-5">Email address</label>
      <input class="inline bg-input-bg w-[400px] h-11 rounded" type="email" />
      <span></span>
      <label class="text-sm block mt-5">Password</label>
      <input class="bg-input-bg w-[400px] h-11 rounded block" type="password" />
      <label class="text-sm block mt-5">Confirm assword</label>
      <input class="bg-input-bg w-[400px] h-11 rounded block" type="password" />
      <button class="bg-primary-col text-white w-[400px] h-11 rounded-md block mt-8">Submit</button>
      <p class="text-center text-xs mt-5">
        Already have account ? <router-link to="/SignIn">Signin</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import SimpleNav from '../components/SimpleNav.vue'
export default {
  name: 'register',
  components: { SimpleNav }
}
</script>

<style></style>
