<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  props: [],
  methods: {
    authHandler() {
      if (isLogin === true) {
        return ' Logout'
      } else {
        return ' Sign In'
      }
    }
  }
}
</script>

<template>
  <span class="me-2 fw-semi-bold"
    ><RouterLink to="/login"><a href="" 
      ><i class="bi bi-box-arrow-in-right"></i> Sign In</a
    ></RouterLink></span>
</template>