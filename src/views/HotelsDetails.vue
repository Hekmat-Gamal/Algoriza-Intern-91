<template>
    <Nav></Nav>
    <div class="  bg-input-bg">

        <div class="container">
            <div class="leftSide">
                <p class="  text-[32px] font-medium">Lakeside Motel Warefront</p>
                <div class="flex">
                    <img src="../assets/imgs/rate.png" alt="Rate Stars">
                    <p class=" text-gray font-normal  text-sm">4.5 (1200 Reviews)</p>
                </div>
                <div class="flex">
                    <img src="../assets/imgs/locationBlue.png" alt="location">
                    <p class=" text-gray font-normal  text-sm">Lorem ipsum road, Tantruim-2322, Melbourne, Australia</p>
                </div>
        <OverView/>
    </div>
    <div class="rightSide">
        <ExploreVue />
    </div>
</div>
<Warning />
<Footer></Footer>
</div>
</template>

<script>
import Nav from '../components/Nav.vue'
import ExploreVue from '../components/Explore.vue'
import OverView from '../components/OverView.vue'
import Warning from 'postcss/lib/warning'
import Footer from '../components/Footer.vue'

name: 'hoteldetails'
</script>

<style>
.container {
  display: grid;
  grid-template-areas: 'leftSide leftSide leftSide leftSide rightSide rightSide ';
  gap: 10px;
}
.leftSide {
  grid-area: leftSide;
}
.rightSide {
  grid-area: rightSide;
}
</style>
