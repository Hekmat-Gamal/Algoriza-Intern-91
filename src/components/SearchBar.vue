<template>
  <div class="searchBar flex justify-evenly items-center bg-white mx-auto rounded-lg shadow-md">
    <select @change="onChangeDest($event)">
      <i class="fa-solid fa-location-dot"></i>
      <option selected>Where are you going</option>
      <template v-for="city in cities" :key="city.city_name">
        <option v-if="city.city_name != ''" :value="city.dest_id">
          {{ city.city_name }}
        </option>
      </template>
    </select>

    <!-- <Datepicker v-model="date" mode="dateTime">Date: {{ date.toJSON() }} </Datepicker> -->
    <input type="date" placeholder="Check in date" v-model="arrivalDate" v-bind="arrivalDate" />
    <input type="date" placeholder="Check out date" v-model="depatureDate" v-bind="arrivalDate" />
    <p>{{ depatureDate }}</p>
    <input placeholder="Guests" v-model="adults" />
    <input placeholder="Rooms" v-model="rooms" />
    <span> {{ rooms }} {{ adults }}</span>
    <button class="bg-primary-col text-white rounded-[6px] text-sm px-4 py-2">Search</button>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, reactive } from 'vue'
//composition api
export default {
  data() {
    return {
      //        date = ref(new Date),
      //       date.value.setDate(Number(data.value.getDate())+35),
      //        range = reactive({
      //         start : new Date() ,
      //         end : data.value}
      // ),
      cities: [],
      hotels: [],
      rooms: null,
      adults: null,
      dest_id: null,
      arrivalDate: null,
      depatureDate: null
    }
  },
  // components: { Datepicker },
  methods: {
    async searchCity() {
      const {
        data: { data }
      } = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination', {
        params: { query: 'egypt', search_type: 'city' },
        headers: {
          'X-RapidAPI-Key': '1525c78c5emsh8a81882367404d0p1dc918jsnf8313c40f51b',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
      })

      this.cities = data
      // console.log(data)
      console.log(this.cities)
    },
    onChangeDest($event) {
      console.log($event.target.value)
      this.dest_id = $event.target.value
    },
    async hotelDetailes() {
      const {
        data: { data }
      } = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels', {
        params: {
          dest_id: this.dest_id,
          search_type: 'CITY',
          arrival_date: this.arrivalDate,
          departure_date: this.depatureDate,
          adults: this.adults,
          room_qty: this.rooms
        },
        headers: {
          'X-RapidAPI-Key': '1525c78c5emsh8a81882367404d0p1dc918jsnf8313c40f51b',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
      })

      this.hotels = data
      console.log(data)
    }
  },
  mounted() {
    this.searchCity()
    // this.hotelDetailes() // on ubmit
  }
}
</script>

<style>
.searchBar {
  width: 1050px;
  height: 64px;
  position: relative;
  top: -75px;
}
.searchBar input,
.searchBar select {
  @apply bg-input-bg mr-4 text-xs rounded;
  height: 43px;
  max-width: 206px;
}
</style>
