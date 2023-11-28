<template v-on:load="toggleModal()">
  <div class="welcomeCard w-[400px] mx-auto py-4 rounded-[10px] shadow-lg bg-slate-50 text-center">
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
    <div class="welcomeContent">
      <p class="text-xl font-semibold">Welcome to My Dream Place</p>
      <p class="text-base font-normal mt-3 mb-11">
        You can now enjoy your travel experience with easy access to resources and more
      </p>
    </div>
    <button
      :on-click="toggleModal()"
      class="py-3 px-[18px] bg-primary-col text-white rounded-[6px] text-sm w-[352px]"
    >
      Get Statred
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false
    }
  },
  methods: {
    toggleModal() {
      this.modal = !this.modal
    }
  }
}
</script>

<style>
.welcomeImgs {
  background-image: url('../assets/imgs/welcomebg.png');
  background-repeat: no-repeat;
}
</style>
