<template>
  <div class="mx-auto">
    <p class="text-2xl font-semibold">Available rooms</p>
    <div class="flex">
      <!--  -->
      <div class="content rounded">
        <div class="flex">
          <img src="../assets/imgs/planWhite.png" alt="ourlogo" />
          <p class="text-white">my Dream Place</p>
        </div>
        <div class="w-[195px]">
          <p class="text-2xl font-bold text-white">
            20% off Use Promotional Coupon Code: <span class="text-yellow">Orlando</span>
          </p>
        </div>
      </div>
      <!--  -->
      <div>
        <img src="../assets/imgs/room.png" alt="" />
        <div class="pl-5">
          <p class="font-medium text-lg"></p>
          <div class="flex">
            <img src="../assets/imgs/bag-tick.png" />
            <p class="text-gray">300 sq ft</p>
          </div>
          <div class="flex">
            <img src="../assets/imgs/lifebuoy1.png" />
            <p class="text-gray">Sleeps 3</p>
          </div>
          <div class="flex">
            <img src="../assets/imgs/like-graypng.png" />
            <p class="text-gray">1 double bed and 1 twin bed</p>
          </div>
          <button
            @click="Move()"
            class="bg-primary-col text-white rounded-[6px] text-sm px-4 py-2 mt-6 mx-auto"
          >
            Reserve suite
          </button>
        </div>
        <!--  -->
        <div>
          <img src="../assets/imgs/room2.png" alt="" />
          <div class="pl-5">
            <p class="text-gray">300 sq ft</p>
            <div class="flex">
              <img src="../assets/imgs/bag-tik.png" />
              <p class="text-gray">Sleeps 3</p>
            </div>
            <div class="flex">
              <img src="../assets/imgs/lifebuoy1.png" />
              <p class="font-medium text-lg">1 double bed and 1 twin bed</p>
            </div>
            <div class="flex">
              <img src="../assets/imgs/like-graypng.png" />
              <p class="text-gray">300 sq ft</p>
            </div>
            <button
              @click="Move()"
              class="bg-primary-col text-white rounded-[6px] text-sm px-4 py-2 mt-6 mx-auto"
            >
              Reserve suite
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
const router = useRouter()
function Move(){
  router.push('/payments')
}
</script>

<style>
.content {
  background-image: linear-gradient(180deg, #4796ff 0%, #2366bf 100%);
}
</style>
