<template>
  <Nav class="hotelNav h-[200px] m-0 text-white" />
  <SearchBar />
  <div class="container mx-auto">
    <div class="leftSide">
      <SortedBy />
      <FilterByVue />
      <Rating />
    </div>
    <div class="rightSide">
      <HotelCard />
      <HotelCard />
    </div>
  </div>
</template>

<script setup>
import Nav from '../components/Nav.vue'
import SearchBar from '../components/SearchBar.vue'
import SortedBy from '../components/SortedBy.vue'
import FilterByVue from '../components/FilterBy.vue'
import Rating from '../components/Rating.vue'
import HotelCard from '../components/HotelCard.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'
components: {
  Nav, SearchBar, SortedBy, FilterByVue, Rating, HotelCard
}
</script>
<style>
.hotelNav {
  background-image: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
}
.container {
  display: grid;
  grid-template-areas: 'leftSide leftSide rightSide rightSide rightSide rightSide ';
  gap: 10px;
}
.rightSide {
  grid-area: rightSide;
}
.leftSide {
  grid-area: leftSide;
}
</style>
