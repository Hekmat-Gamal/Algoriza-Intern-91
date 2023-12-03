<template>
  <div class="welcomeCard" v-if="welcome">
    <div
      class="welcomeContent w-[400px] mx-auto py-4 text-centert rounded-[10px] shadow-lg bg-slate-50"
    >
      <div class="welcomeImgs mx-[80px] my-[50px]">
        <div class="mt-2 ml-[18px] flex">
          <img
            src="../assets/imgs/welcome card girl.png"
            alt="welcome card"
            class="relative left-[87px]"
          />
          <img
            src="../assets/imgs/welcome card man.png"
            alt="welcome card"
            class="relative right-16 w-[81px]"
          />
        </div>
      </div>
      <div>
        <p class="text-xl font-semibold text-center">Welcome to My Dream Place</p>
        <p class="text-base font-normal mt-3 mb-11 text-center">
          You can now enjoy your travel experience with easy access to resources and more
        </p>
      </div>
      <button
        @click="closeModel()"
        class="ml-5 py-3 px-[18px] bg-primary-col text-white rounded-[6px] text-sm w-[352px]"
      >
        Get Statred
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
const { welcome, updateWelcome } = inject('welcome')
function closeModel() {
  updateWelcome(false)
}
</script>

<style>
.welcomeCard {
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
.welcomeContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.welcomeImgs {
  background-image: url('../assets/imgs/welcomebg.png');
  background-repeat: no-repeat;
}
</style>
