<template>
  <!-- Search Bar -->
  <form @submit.prevent="searchAvilabitiy()">
    <div class="searchBar flex justify-evenly items-center bg-white mx-auto rounded-lg shadow-md">
      <div>
        <img src="../assets/imgs/locationIcon.png" alt="location icon" />
        <select v-model="dest_id">
          <option selected value="123">Where are you going?</option>
          <template v-for="city in cities" :key="city.city_name">
            <option v-if="city.city_name != ''" :value="city.dest_id">
              {{ city.city_name }}
            </option>
          </template>
        </select>
      </div>
      <!-- Location End -->
      <!-- Date Start -->
      <div>
        <img src="../assets/imgs/calendar 1.png" alt="date icon" />
        <Datepicker placeholder="Check in" v-model="arrivalDate"> </Datepicker>
      </div>
      <div>
        <img src="../assets/imgs/calendar 1.png" alt="date icon" />
        <Datepicker placeholder="Check out Date" v-model="depatureDate" />
        <!-- <input placeholder="Check out date" v-model="depatureDate" v-bind="arrivalDate" /> -->
      </div>
      <!-- Date End -->
      <!-- Guest Start -->
      <div>
        <img src="../assets/imgs/guestIcon.png" alt="guest icon" />

        <input placeholder="Guests" v-model="adults" />
      </div>
      <!-- Guest End -->
      <!-- Rooms Start -->
      <div>
        <img src="../assets/imgs/bed.png" alt="room icon" />
        <input placeholder=" Rooms" v-model="rooms" />
      </div>
      <!-- Rooms End -->

      <button class="bg-primary-col text-white rounded-[6px] text-sm px-4 py-2">Search</button>
    </div>
  </form>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import Datepicker from 'vue3-datepicker'
import { useRouter } from 'vue-router'
const Router = useRouter()

let cities = ref([])
let rooms = ref(null)
let adults = ref(null)
let dest_id = ref('123')
let arrivalDate = ref(new Date())
let depatureDate = ref(new Date())

async function searchCity() {
  const {
    data: { data }
  } = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination', {
    params: { query: 'egypt', search_type: 'city' },
    headers: {
      'X-RapidAPI-Key': '23c56101a3msh650fbdde5a8bd53p1c3b52jsnf4d7fc76155e',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
  })
  cities = data
  console.log(cities)
}
function onChangeDest($event) {
  console.log($event)
  dest_id = $event.target.value
  console.log(dest_id)
}

function searchAvilabitiy() {
  let user = JSON.parse(localStorage.getItem('loggedUser'))
  if (user) {
    Router.push({
      name: 'hotels',
      query: {
        dest_id: dest_id.value,
        arrivalDate: arrivalDate.value.toISOString().split('T')[0],
        depatureDate: depatureDate.value.toISOString().split('T')[0],
        rooms: rooms.value,
        adults: adults.value
      }
    })
  } else {
    Router.push('/register')
  }
}
onMounted(() => {
  searchCity()
})
</script>

<style>
.searchBar {
  width: 1050px;
  height: 64px;
  position: relative;
  top: -75px;
}
.searchBar input,
.searchBar select,
Datepicker {
  @apply bg-input-bg text-xs rounded pl-5 box-border;
  height: 43px;
}
.searchBar div {
  @apply flex items-center relative;
}
.searchBar img {
  @apply w-[18px] h-[18px] absolute left-[5px] top-[50%] z-10;
  transform: translateY(-50%);

  /* width: 20px; */
  /* height: 20px;
  position: absolute;
  left: 3px;
  z-index: 100;
  top: 50%; */
}
</style>
