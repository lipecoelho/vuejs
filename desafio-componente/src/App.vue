<template>
  <v-app>
    <app-menu />
    <app-toolbar />
    <app-carousel />
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Carousel from "./components/Carousel.vue";
import Toolbar from "./components/Toolbar.vue";

import Menu from "./components/Menu.vue";
export default {
  components: {
    Footer,
    appCarousel: Carousel,
    appToolbar: Toolbar,
    appMenu: Menu
  }
}
</script>
