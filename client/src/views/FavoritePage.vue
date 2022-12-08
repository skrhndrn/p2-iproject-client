<script>
import FavoriteCard from '../components/FavoriteCard.vue'

export default {
  components: {
    FavoriteCard
  }
}
</script>

<template>
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
        <h1 class="mb-5">Your Favorites</h1>
      </div>
      <div class="row gx-4">
        <FavoriteCard />
      </div>
    </div>
  </div>
</template>