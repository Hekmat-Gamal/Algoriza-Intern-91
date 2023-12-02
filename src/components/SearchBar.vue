<template>
  <!-- Search Bar -->
  <div class="searchBar flex justify-evenly items-baseline bg-white mx-auto rounded-lg shadow-md">
    <!-- <VCalendar :min-date="new Date()" mode="date"></VCalendar> -->
    <!-- <VDatePicker v-model="date"></VDatePicker>
    <VCalendar></VCalendar> -->
    <div>
      <img src="../assets/imgs/locationIcon.png" alt="location icon" />

      <select @change="onChangeDest($event)">
        <option selected>Where are you going?</option>
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
      <img src="../assets/imgs/calendar 1.png" alt="" />
      <input placeholder="Check in date" v-model="arrivalDate" v-bind="arrivalDate" />
    </div>
    <div>
      <img src="../assets/imgs/calendar 1.png" alt="" />
      <input placeholder="Check out date" v-model="depatureDate" v-bind="arrivalDate" />
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

    <div>
      <button class="bg-primary-col text-white rounded-[6px] text-sm px-4 py-2">Search</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
  //composition api
  data() {
    return {
      cities: [],
      hotels: [],
      rooms: null,
      adults: null,
      dest_id: null,
      arrivalDate: new Date(),
      depatureDate: new Date().setMonth(0)
    }
  },
  // components:
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
    // this.searchCity()
    this.arrivalDate()
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
  @apply bg-input-bg text-xs rounded pl-5 box-border;
  height: 43px;
}
.searchBar div {
  position: relative;
  top: -10px;
}
.searchBar img {
  width: 20px;
  height: 20px;

  @apply relative left-[3px] top-[31px];
}
</style>
