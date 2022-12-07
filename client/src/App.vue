<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import TopPageButton from './components/TopPageButton.vue'

export default {
  components: {
    Navbar,
    Footer,
    TopPageButton
  }
}
</script>

<template>
<Navbar />
<RouterView />
<Footer />
<TopPageButton />
</template>
