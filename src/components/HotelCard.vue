<template>
  <div>
    <div>
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
            <img
              :src="hotel.property.photoUrls[0]"
              alt="Hotel view"
              class="w-[285px] h-[200px] p-5 rounded-md"
            />
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
              <button
                @click="checkHotel()"
                class="bg-primary-col px-[18px] py-[10px] text-white rounded my-5"
              >
                See availability
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { onMounted } from 'vue'
const route = useRoute()
const router = useRouter()
let hotels = ref([])
let sorted = ref([])
async function searchHotel() {
  const { data } = await axios.get(
    'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
    {
      params: {
        dest_id: route.query.dest_id,
        search_type: 'CITY',
        arrival_date: route.query.arrival_date,
        departure_date: route.query.departure_date,
        adults: route.query.adults,
        children_age: '1,17',
        room_qty: route.query.rooms,
        page_number: '1',
        languagecode: 'en-us',
        currency_code: 'AED'
      },

      // الكود االى فوق المفروض يباصي اللى دخلناه بس للاسف ال
      // api
      // مش بتستقبل غير حاجات محدده

      // params: {
      //   dest_id: '-290029',
      //   search_type: 'CITY',
      //   arrival_date: '2023-12-03',
      //   departure_date: '2024-01-01',
      //   adults: '1',
      //   children_age: '1,17',
      //   room_qty: '1',
      //   page_number: '1',
      //   languagecode: 'en-us',
      //   currency_code: 'AED'
      // },
      headers: {
        'X-RapidAPI-Key': '7160e0018bmshc22f0a1fe576e27p15e18ejsn4cfe8693738e',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
      }
    }
  )
  hotels = data.hotels
  console.log(hotels)
}
async function sortedBY() {
  const {
    data: { data }
  } = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy', {
    params: {
      dest_id: route.query.dest_id,
      search_type: 'CITY',
      arrival_date: route.query.arrival_date,
      departure_date: route.query.departure_date,
      adults: route.query.adults,
      children_age: '1,17',
      room_qty: route.query.rooms
    },
    headers: {
      'X-RapidAPI-Key': '7160e0018bmshc22f0a1fe576e27p15e18ejsn4cfe8693738e',
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
function checkHotel() {
  router.push('/hoteldetails')
}

onMounted(() => {
  searchHotel()
  sortedBY()
})
</script>

<style></style>
