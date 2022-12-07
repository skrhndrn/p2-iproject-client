<script>
import { RouterLink, RouterView } from "vue-router";
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
          Nyan Detail
        </p>
        <h1 class="mb-5">Nyan's Name</h1>
      </div>
      <div class="row g-5 align-items-center">
        <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="testimonial-img">
            <img
              class="img-fluid animated pulse infinite"
              src="../assets/img/cats (7).jpg"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
          <div>
            <div class="testimonial-item">
              <img class="img-fluid mb-3" src="img/testimonial-1.jpg" alt="" />
              <h5>Client Name</h5>
              <span class="text-primary">Profession</span>
              <p class="fs-5">
                Dolores sed duo clita tempor justo dolor et stet lorem kasd
                labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
                labore et tempor diam tempor erat.
              </p>
              <p></p>
            </div>
          </div>
          <div>
            <div>
              <RouterLink to="/adopt"><a
                href=""
                class="btn btn-secondary rounded-pill py-3 px-5 animated slideInRight"
                >Adopt me!</a
              ></RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>