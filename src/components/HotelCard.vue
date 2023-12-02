<template>
  <div class="mx-auto">
    <p class="text-xs text-gray4">Sort by</p>
    <select @change="onChangeDest($event)">
      <option selected>Recommended</option>
      <template v-for="item in sorted" :key="item.title">
        <option :value="item.id">
          {{ item.title }}
        </option>
      </template>
    </select>
  </div>
  <template v-for="hotel in hotels" :key="hotel.name">
    <div class="rounded border-gray2 border-2 w-[915px] h-[240px] mb-[14px]">
      <div class="flex">
        <img :src="hotel.property.photoUrls[0]" alt="Hotel view" class="w-[285px] h-[200px] p-5" />
        <div>
          <p class="font-medium text-xl p-5">{{ hotel.property.name }}</p>
          <p class="text-[13px] font-medium w-[360px]">{{ hotel.accessibilityLabel }}</p>
          <span class="text-del-col text-sm font-mediumt- line-through">
            $ {{ Math.round(hotel.property.priceBreakdown.grossPrice.value) }}
          </span>
          <span class="col text-xl font-mediumt- line-through">
            $ {{ Math.round(hotel.property.priceBreakdown.grossPrice.value) }}
          </span>
          <p class="text-[13px] font-normal"></p>
          <button class="bg-primary-col px-[18px] py-[10px] text-white rounded my-5">
            See availability
          </button>
        </div>
      </div>
    </div>
  </template>
</template>
<script setup>
import axios from 'axios'

import { onMounted } from 'vue'
let hotels = []
let sorted = []
async function searchHotel() {
  const {
    data: { data }
  } = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels', {
    params: {
      dest_id: '-290029',
      search_type: 'CITY',
      arrival_date: '2023-12-03',
      departure_date: '2024-01-01',
      adults: '1',
      children_age: '0,17',
      room_qty: '1',
      page_number: '1',
      languagecode: 'en-us',
      currency_code: 'AED'
    },
    headers: {
      'X-RapidAPI-Key': '1525c78c5emsh8a81882367404d0p1dc918jsnf8313c40f51b',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
  })
  hotels = data.hotels
  console.log(hotels)
}
async function sortedBY() {
  const {
    data: { data }
  } = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy', {
    params: {
      dest_id: '-290029',
      search_type: 'CITY',
      arrival_date: '2023-11-03',
      departure_date: '2024-01-01',
      adults: '1',
      children_age: '1,17',
      room_qty: '1'
    },
    headers: {
      'X-RapidAPI-Key': '1525c78c5emsh8a81882367404d0p1dc918jsnf8313c40f51b',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
  })
  sorted = data
  console.log(sorted)
}
function onChangeDest($event) {
  console.log($event.target.value)
  id = $event.target.id
  console.log(id)
}
onMounted(() => {
  searchHotel()
  sortedBY()
})
</script>

<style></style>
