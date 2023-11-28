<template>
  <div class="w-[1240px] mx-auto">
    <h4>Popular hotels</h4>
    <div class="flex justify-between">
      <div class="card">
        <img src="../assets/imgs/Lakeside Motel Warefront.png" alt="Lakeside Motel Warefront" />
        <p class="popularCardTitle">Lakeside Motel Warefront</p>
        <p class="propsNum">2246 properties</p>
      </div>
      <div class="card">
        <img src="../assets/imgs/Recce Graham resort.png" alt="Recce Graham resort" />
        <p class="popularCardTitle">Recce Graham resort</p>
        <p class="propsNum">1278 properties</p>
      </div>
      <div class="card">
        <img src="../assets/imgs/fireside dinner.png" alt="Fireside Dinners" />
        <p class="popularCardTitle">Fireside Dinners</p>
        <p class="propsNum">480 properties</p>
      </div>
      <div class="card">
        <img src="../assets/imgs/oculous inn stay.jpg" alt="Oculous Inn Stay" />
        <p class="popularCardTitle">Oculous Inn Stay</p>
        <p class="propsNum">320 properties</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popHotels'
}
</script>

<style>
.popCardTitle {
  @apply text-xl;
}
</style>
