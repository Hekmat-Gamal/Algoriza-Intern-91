<template>
  <iframe class="w-[400px]"> </iframe>
  <iframe
    class="w-[400px] h-[240px] rounded-md"
    src="https://maps.google.com/maps?q=${.latitude},${.longitude}&z=15&output=embed"
  ></iframe>
  <p class="text-lg font-medium">Explore the area</p>
  <img class="icon" src="../assets/imgs/plane.png" alt="plan icon" />
  <span>Hotel Penselvenyia</span>

  <img class="icon" src="../assets/imgs/map.png" alt="map icon" />
  <span>Travis Bakery store house</span>
  <img class="icon" src="../assets/imgs/map.png" alt="map icon" />
  <span>Olivia Johnson Garden</span>
  <img class="icon" src="../assets/imgs/map.png" alt="map icon" />
  <span>Norman Opera Circus</span>
  <img class="icon" src="../assets/imgs/map.png" alt="map icon" />
  <span>Rockdeset hotel</span>
</template>

<script></script>

<style>
.icon {
  width: 20px;
  height: 20px;
}
span {
  @apply text-sm font-normal text-gray;
}
</style>
