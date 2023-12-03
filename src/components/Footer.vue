<template>
  <footer class="mt-2 block">
    <div class="flex justify-evenly">
      <div>
        <div class="flex">
          <SimpleNav></SimpleNav>
        </div>
        <p class="text-sm pl-5">Your next goto companion for travel</p>
      </div>
      <div>
        <h6>Company</h6>
        <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>Newsroom</li>
          <li>Advertising</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
        <h6>Explore</h6>
        <ul>
          <li>Australia</li>
          <li>New Zealand</li>
          <li>United States America (USA)</li>
          <li>Greece</li>
          <li>Maldives</li>
          <li>Singapore</li>
          <li class="text-primary"><a href="#">see more</a></li>
        </ul>
      </div>
      <div>
        <h6>Terms and Policies</h6>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of use</li>
          <li>Acessibility</li>
          <li>Reward system policy</li>
        </ul>
      </div>
      <div>
        <h6>Help</h6>
        <ul>
          <li>Support</li>
          <li>Cancel your bookings</li>
          <li>Use Coupon</li>
          <li>Refund Policies</li>
          <li>International Travel Documents</li>
        </ul>
      </div>
    </div>
    <div class="bg-input-bg text-right px-20 h-10 mt-14">
      <p>&copy; My Dream Place 2024</p>
    </div>
  </footer>
</template>

<script>
import SimpleNav from './SimpleNav.vue'
export default {
  name: 'footer',
  components: { SimpleNav }
}

SimpleNav
</script>

<style scoped>
ul li {
  @apply text-sm;
}
h6 {
  @apply font-medium;
}
</style>
