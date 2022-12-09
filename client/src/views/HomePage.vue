<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import NyanCard from '../components/NyanCard.vue'
import { useCatStore } from '../stores/cats'
import { mapActions, mapWritableState } from 'pinia'

export default {
  components: {
    Hero,
    About,
    NyanCard
  },
  methods: {
    ...mapActions(useCatStore, ['fetchCats'])
  },
  computed: {
    ...mapWritableState(useCatStore, ['oneCat', 'cats'])
  }
}
</script>

<template>
<Hero />
<About />
  <!-- Cats Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div
        class="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 500px"
      >
        <p class="section-title bg-white text-center text-primary px-3">
          Nyan Mansion
        </p>
        <h1 class="mb-5">Our Nyans</h1>
      </div>
      <div class="row gx-4">
        <NyanCard  />
      </div>
    </div>
  </div>
  <!-- Cats End -->
</template>