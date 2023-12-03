<template>
  <BookingSuccess />
  <Nav />
  <ExploreVue />
  <WarningVue />
  <FooterVue />
</template>

<script>
import Nav from '../components/Nav.vue'
import ExploreVue from '../components/Explore.vue'
import FooterVue from '../components/Footer.vue'
import WarningVue from '../components/Warning.vue'
import BookingSuccess from '../components/BookingSuccess.vue'
components: {
  BookingSuccess, Nav, ExploreVue, WarningVue, FooterVue
}
</script>

<style></style>
