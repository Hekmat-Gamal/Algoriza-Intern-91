<template>
  <SimpleNav />
  <div class="bg-input-bg">
    <p class="text-3xl font-semibold w-[1240px] my-7 mx-auto">Secure your reservation</p>

    <Warning />

    <payOp />
    <BookingVue></BookingVue>
  </div>
</template>

<script>
import BookingVue from '../components/Booking.vue'
import SimpleNav from '../components/SimpleNav.vue'
import Warning from '../components/Warning.vue'
import payOp from '../components/payOp.vue'
export default {
  name: 'payment',
  components: { SimpleNav, Warning, BookingVue, payOp }
}
</script>

<style></style>
