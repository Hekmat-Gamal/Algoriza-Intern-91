<template>
  <div class="mx-auto w-[1240px]">
    <h4 class="text-[28px] mt-[60px]">Get inspiration for your next trip</h4>

    <div class="flex align-middle justify-between">
      <div class="card">
        <img
          class="cardImg"
          src="../assets/imgs/Sydeny.png"
          alt="Sydeny's 10 most fashionable 5 star hotels"
        />
        <p class="cardTitle">Sydeny's 10 most fashionable 5 star hotels</p>
        <p class="fullDesc">
          Browse the fastest growing tourism sector in the heart of Australia tourism capital ....
        </p>
      </div>
      <div class="card">
        <img
          class="cardImg"
          src="../assets/imgs/topCities.png"
          alt="Top cities for Vegan Travellers"
        />
        <p class="cardTitle">Top cities for Vegan Travellers</p>
        <p class="fullDesc">
          Top sites where you do not have to worry about being a vegan. Our tourist guide is here...
        </p>
      </div>
      <div class="card">
        <img
          class="cardImg"
          src="../assets/imgs/WorldTop.png"
          alt="World's top destinations during and post covid timeline"
        />
        <p class="cardTitle">World's top destinations during and post covid timeline</p>
        <p class="fullDesc">
          Pandemic is still intact and will be here for a longer time. Here's where your next
          destination...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.cardImg {
  width: 400px;
  height: 280px;
}
.cardTitle {
  @apply text-sm text-white relative top-[-120px] w-[360px] px-5;
}
.fullDesc {
  @apply text-xs text-white font-light relative top-[-120px] w-[360px] pl-5;
}
</style>
