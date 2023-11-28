<template>
  <div class="mobApp my-14">
    <div class="mobileContent mx-auto w-[1240px]">
      <img
        class="relative left-1/3"
        src="../assets/imgs/mobile.png"
        alt="get our app on your mobile"
      />
      <div class="w-[540px] relative top-[-200px] left-5 text-white">
        <p class="font-semibold text-xl">
          Download the mobile application for bonus coupons and travel codes
        </p>
        <button
          @click="downloadApp()"
          class="bg-primary-col text-white rounded-[6px] p-2 text-sm mt-6"
        >
          Download mobile app
        </button>
      </div>
    </div>
    <div class="text-center">
      <p class="font-semibold text-2xl">Explore the world with My Dream place</p>
      <a href="#">Discover new places and experiences</a>
    </div>
  </div>
</template>
<script setup>
// export default {
// };
function downloadApp() {
  window.open('https://play.google.com')
}
</script>

<style>
.mobileContent {
  background-image: url(../assets/imgs/mobileBG.png);
  background-repeat: no-repeat;
}
</style>
