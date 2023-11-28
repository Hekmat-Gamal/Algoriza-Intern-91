<template v-modal="">
  <!-- <WelcomeCardVue /> -->
  <main>
    <Nav></Nav>
    <Hero />
    <SearchBar />
    <Warning />
    <EnjoyVue />
    <InspireVue />
    <PopHotelsVue />
    <MobileApp />
    <Footer></Footer>
  </main>
</template>

<script>
import Nav from '../components/Nav.vue'
import Hero from '../components/Hero.vue'
import SearchBar from '../components/SearchBar.vue'
import Warning from '../components/Warning.vue'
import EnjoyVue from '../components/Enjoy.vue'
import InspireVue from '../components/Inspire.vue'
import PopHotelsVue from '../components/PopHotels.vue'
import MobileApp from '../components/MobileApp.vue'
import Footer from '../components/Footer.vue'
import WelcomeCardVue from '../components/WelcomeCard.vue'
export default {
  components: {
    WelcomeCardVue,
    Nav,
    Hero,
    SearchBar,
    Warning,
    EnjoyVue,
    InspireVue,
    PopHotelsVue,
    MobileApp,
    Footer
  },
  data() {
    return {
      modal: false
    }
  },
  methods: {}
}
</script>
<style></style>
