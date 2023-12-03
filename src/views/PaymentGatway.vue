<template>
  <div>
    <SimpleNav />
    <div class="bg-input-bg mx-auto">
      <p class="text-3xl font-semibold w-[1240px] my-7 mx-auto">Secure your reservation</p>
      <Warning />
      <div class="gridContainer w-[1240px] mx-auto">
        <div class="gridAreaLeftSide">
          <payOp />
          <BookingVue />
        </div>
        <div class="gridAreaRightSide">
          <YourReservastionVue />
          <PricePay />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleNav from '../components/SimpleNav.vue'
import Warning from '../components/Warning.vue'
import payOp from '../components/PayOp.vue'
import BookingVue from '../components/Booking.vue'
import YourReservastionVue from '../components/YourReservastion.vue'
import PricePay from '../components/PricePay.vue'

export default {
  name: 'payments',
  components: { SimpleNav, Warning, BookingVue, payOp, YourReservastionVue, PricePay }
}
</script>

<style>
.gridContainer {
  display: grid;
  grid-template-areas: 'gridAreaLeftSide gridAreaLeftSide gridAreaLeftSide gridAreaRightSide gridAreaRightSide';
  gap: 10px;
}
.gridAreaLefttSide {
  grid-area: gridAreaLeftSide;
}
.gridAreaRightSide {
  grid-area: gridAreaRightSide;
}
</style>
