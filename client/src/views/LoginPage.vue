<script>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from '../stores/userLog'
import { mapActions, mapWritableState } from 'pinia'

export default {
  methods: {
    ...mapActions(useUserStore, ["loginUser"])
  },
  computed: {
    ...mapWritableState(useUserStore, ["formLogin"])
  }
}

</script>

<template>
  <div
    class="container-xxl-fluid mt-6 py-5 d-flex justify-content-center bg-dark footer"
  >
    <form @submit.prevent="loginUser" class="card px-1 py-4 wow fadeIn">
      <div class="card-body">
        <img
          src="../assets/img/Nyan.png"
          class="img-fluid"
          alt="Responsive image"
        />
        <h6 class="information mt-4 text-center">Login Account</h6>
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <input v-model="formLogin.email" class="form-control" type="email" placeholder="Email" required />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <div class="input-group">
                <input
                  v-model="formLogin.password"
                  class="form-control"
                  type="Password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column text-center px-5 mt-3 mb-3">
          <small class="agree-text">Not a member?</small>
          <RouterLink to="/register"><a href="#" class="terms">Register Account</a></RouterLink>
        </div>
        <button id="login" type="submit" class="btn btn-primary btn-block confirm-button col-sm-12">
          Confirm
        </button>
      </div>
    </form>
  </div>
</template>