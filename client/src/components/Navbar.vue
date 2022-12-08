<script>
import { RouterLink, RouterView } from "vue-router";
import NavButton from './NavButton.vue'
import { useUserStore } from '../stores/userLog'
import { mapState } from "pinia";

export default {
  components: {
    NavButton
  },
  computed: {
    ...mapState(useUserStore, ['isLogin', 'username'])
  }
}
</script>

<template>
  <!-- Topbar Start -->
  <div class="container-fluid bg-dark px-0">
    <div class="row g-0 d-none d-lg-flex">
      <div class="col-lg-6 ps-5 text-start"></div>
      <div class="col-lg-6 text-end">
        <div
          class="h-100 bg-secondary d-inline-flex align-items-center text-dark py-2 px-4"
        >
        <NavButton />
        </div>
      </div>
    </div>
  </div>
  <!-- Topbar End -->

  <!-- Navbar Start -->
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5"
  >
    <a href="/" class="navbar-brand d-flex align-items-center">
      <h1 class="m-0">Nyan Mansion</h1>
    </a>
    <button
      type="button"
      class="navbar-toggler me-0"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <a href="" class="nav-item nav-link active">Home</a>
        <a href="" class="nav-item nav-link">About Us</a>
        <a v-if="isLogin" href="" class="nav-item nav-link">Adopt</a>
        <div v-if="isLogin" class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            ><i class="bi bi-person-circle"></i
          ></a>
          <div class="dropdown-menu bg-light m-0">
            <p class="dropdown-item">Hej, {{username}}!</p>
            <RouterLink to="/favorites"><a href="" class="dropdown-item">Favorites</a></RouterLink>
          </div>
        </div>
      </div>
      <div class="border-start ps-4 d-none d-lg-block">
        <button type="button" class="btn btn-sm p-0">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  </nav>
  <!-- Navbar End -->
</template>