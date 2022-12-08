<script>
import { mapActions, mapWritableState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import { useLoginStore } from '../stores/login'

export default {
  computed: {
    ...mapWritableState(useLoginStore, ["isLogin"])
  },
  methods: {
    ...mapActions(useLoginStore, ["logout"])
  }
}
</script>

<template>
  <span class="me-2 fw-semi-bold"
    ><RouterLink to="/login"><a v-if="!isLogin" href="" 
      ><i  class="bi bi-box-arrow-in-right"></i> Sign In</a
    ></RouterLink>
    <a onclick="soundLogout()" v-if="isLogin" @click.prevent="logout"  href="" 
      ><i class="bi bi-box-arrow-in-right"></i> Logout</a
    >
    </span>
</template>