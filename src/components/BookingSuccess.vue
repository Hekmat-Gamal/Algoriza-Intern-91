<template>
  <div class="bookingCard" v-if="bookingSucc">
    <div class="bookingContent w-[400px] h-[500px] bg-white">
      <img src="../assets/imgs/bookingSuccess.jpg" alt="Booking Success" />
    <p class="text-xl font-semibold">Booking Successful</p>
    <p class="text-base">
      Congratulations your reservation has been made. You will be notified 2 days prior the date.
      <button
      @click="closeModel()"
      class="bg-primary-col text-white w-[352px] h-11 rounded-md block mt-8"
      >
      View Trip
    </button>
  </p>
</div>
</div>
</template>


<script setup>
import { ref, inject } from 'vue'
const { BookingSucc,updateBookingSucc } = inject('BookingSucc')
function closeModel() {
  updateBookingSucc(false)
}



</script>

<style>
.bookingCard {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.9;
}
.bookingContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

