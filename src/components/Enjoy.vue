<template>
  <div class="mx-auto w-[1240px]">
    <h4 class="relative top-1/4 text-[28px]">Enjoy your dream vacation</h4>
    <p class="relative top-2/4 w-3/4 mb-4">
      Plan and book our perfect trip with expert advice, travel tips, destination information and
      inspiration from us
    </p>
    <div class="flex justify-between">
      <div class="card">
        <img src="../assets/imgs/austuralia.png" alt="austuralia" />
        <p class="enjoyCardTitle">Austuralia</p>
        <p class="propsNum">2246 properties</p>
      </div>
      <div class="card">
        <img src="../assets/imgs/japan.png" alt="Japan" />
        <p class="enjoyCardTitle">Japan</p>
        <p class="propsNum">1278 properties</p>
      </div>
      <div class="card">
        <img src="../assets/imgs/new zealan.png" alt="new zealand" />
        <p class="enjoyCardTitle">New Zealand</p>
        <p class="propsNum">480 properties</p>
      </div>
      <div class="card">
        <img src="../assets/imgs/greec.png" alt="Greece" />
        <p class="enjoyCardTitle">Greece</p>
        <p class="propsNum">320 properties</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'enjoy'
}
</script>

<style>
.enjoyCardTitle {
  @apply text-xl;
}
</style>
