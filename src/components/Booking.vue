<template>
  <div class="my-7 w-[810px]">
    <div class="bg-imp-col rounded-t-md">
      <p class="text-lg font-medium p-[12px]">Important information about your booking</p>
    </div>
    <div class="font-normal text-[14px] rounded-b-md bg-white">
      <ul class="bookingOption tracking-wide p-6 w-[762px]">
        <li>
          This rate is non-refundable. If you change or cancel your booking you will not get a
          refund or credit to use for a future stay.
        </li>
        <li>Stay extensions will require a new reservation.</li>
        <li>Front desk staff will greet guests on arrival.</li>
        <li>No refunds will be issued for late check-in or early check-out.</li>
      </ul>
      <p class="ml-4">
        By clicking the button below, I acknowledge that I have reviewed the Privacy Statement and
        have reviewd and accept the <router-link to="#">Rules and Restrictions</router-link> and
        <router-link to="#">Terms of Use</router-link> .
      </p>
      <button
        @click="Move()"
        class="bg-primary-col text-white rounded-[6px] text-sm px-4 py-2 mt-6 ml-4"
      >
        Complete Booking
      </button>
      <div class="mt-[21px] ml-4 pb-5">
        <img src="../assets/imgs/lock-circle1.png" alt="Lock" class="inline" />
        <p class="inline">
          We use secure transmission and encrypted storage to protect your personal information
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
name: 'booking'
import { useRouter } from 'vue-router'
const router = useRouter()
function Move() {
  router.push('/trips')
}
</script>

<style>
.bookingOption {
  list-style-type: decimal;
}
</style>
