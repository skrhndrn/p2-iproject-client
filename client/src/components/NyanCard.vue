<script>
import { RouterLink, RouterView } from "vue-router";
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/userLog'
import { useCatStore } from "../stores/cats";

export default {
  props: ['cat'],
  computed: {
    ...mapState(useUserStore, ['isLogin'])
  }, 
  methods: {
    ...mapActions(useCatStore, ['fetchCats'])
  }
}
</script>

<template>
       <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="product-item">
            <div class="position-relative">
              <img
                class="img-fluid"
                src="../assets/img/cats7.jpg"
                alt=""
              />
              <div class="product-overlay">
                <RouterLink to="/cats/:id"> <a
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-info"></i
                ></a></RouterLink>
                <a
                  
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-suit-heart-fill"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <a class="d-block h5" href="">Milky</a>
              <span class="text-primary me-1">Female</span>
              <span class="">1 years old</span>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div class="product-item">
            <div class="position-relative">
              <img
                class="img-fluid"
                src="../assets/img/cats8.jpg"
                alt=""
              />
              <div class="product-overlay">
                <RouterLink to="/cats/:id"> <a
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-info"></i
                ></a></RouterLink>
                <a
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-suit-heart-fill"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <a class="d-block h5" href="">Nala</a>
              <span class="text-primary me-1">Female</span>
              <span class="">5 months</span>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div class="product-item">
            <div class="position-relative">
              <img
                class="img-fluid"
                src="../assets/img/cats9.jpg"
                alt=""
              />
              <div class="product-overlay">
                <RouterLink to="/cats/:id"> <a
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-info"></i
                ></a></RouterLink>
                <a
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-suit-heart-fill"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <a class="d-block h5" href="">Mochi</a>
              <span class="text-primary me-1">Male</span>
              <span class="">3 months</span>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div class="product-item">
            <div class="position-relative">
              <img
                class="img-fluid"
                src="../assets/img/cats10.jpg"
                alt=""
              />
              <div class="product-overlay">
                <RouterLink to="/cats/:id"> <a
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-info"></i
                ></a></RouterLink>
                <a
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-suit-heart-fill"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <a class="d-block h5" href="">Franklin</a>
              <span class="text-primary me-1">Male</span>
              <span class="">3 years old</span>
            </div>
          </div>
        </div>
</template>