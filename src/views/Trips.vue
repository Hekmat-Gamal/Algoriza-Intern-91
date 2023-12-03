<template>
  <BookingSuccess />
  <Nav></Nav>
  <div class="mx-auto w-[1030px]">
    <p class=" text-xl font-bold" >My trips</p>

  </div>
  <WarningVue />
  <FooterVue></FooterVue>
</template>

<script>
import Nav from '../components/Nav.vue'
import FooterVue from '../components/Footer.vue'
import WarningVue from '../components/Warning.vue'
import BookingSuccess from '../components/BookingSuccess.vue'
components: {
  BookingSuccess, Nav, WarningVue, FooterVue
}
</script>

<style></style>
