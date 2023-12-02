<template>
  <Nav class="hotelNav h-[200px] m-0 text-white" />
  <SearchBar />
  <div class="rightSide">
    <SortedBy />
    <FilterByVue />
    <Rating />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import SearchBar from '../components/SearchBar.vue'
import SortedBy from '../components/SortedBy.vue'
import FilterByVue from '../components/FilterBy.vue'
import Rating from '../components/Rating.vue'
export default {
  components: { Nav, SearchBar, SortedBy, FilterByVue, Rating }
}
</script>

<style>
.hotelNav {
  background-image: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
}
</style>
