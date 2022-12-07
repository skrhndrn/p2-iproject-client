<script>
import { RouterLink, RouterView } from "vue-router";
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
          <span class="me-2 fw-semi-bold"
            ><a href="" 
              ><i class="bi bi-box-arrow-in-right"></i> Sign In</a
            ></span
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Topbar End -->

  <!-- Navbar Start -->
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5"
  >
    <a href="index.html" class="navbar-brand d-flex align-items-center">
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
        <a href="index.html" class="nav-item nav-link active">Home</a>
        <a href="about.html" class="nav-item nav-link">About Us</a>
        <a href="product.html" class="nav-item nav-link">Adopt</a>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            ><i class="bi bi-person-circle"></i
          ></a>
          <div class="dropdown-menu bg-light m-0">
            <p class="dropdown-item">Hej, User!</p>
            <a href="gallery.html" class="dropdown-item">Favorites</a>
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
  <!-- Carousel Start -->
  <div class="container-fluid px-0 mb-5">
    <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100" src="./assets/img/cats (1).jpg" alt="Image" />
          <div class="carousel-caption">
            <div class="container">
              <div class="row justify-content-start">
                <div class="col-lg-8 text-start">
                  <p class="fs-4 text-white">Welcome to our page</p>
                  <h1 class="display-1 text-white mb-5 animated slideInRight">
                    Find your new best friend
                  </h1>
                  <a
                    href=""
                    class="btn btn-secondary rounded-pill py-3 px-5 animated slideInRight"
                    >Explore More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="w-100" src="./assets/img/cats.jpg" alt="Image" />
          <div class="carousel-caption">
            <div class="container">
              <div class="row justify-content-end">
                <div class="col-lg-8 text-end">
                  <p class="fs-4 text-white">Welcome to our page</p>
                  <h1 class="display-1 text-white mb-5 animated slideInRight">
                    Browse cats from our shelters
                  </h1>
                  <a
                    href=""
                    class="btn btn-secondary rounded-pill py-3 px-5 animated slideInLeft"
                    >Explore More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- Carousel End -->

  <!-- About Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5 align-items-end">
        <div class="col-lg-6">
          <div class="row g-2">
            <div
              class="col-6 position-relative wow fadeIn"
              data-wow-delay="0.7s"
            >
              <div class="about-experience bg-secondary rounded">
                <h1 class="display-1 mb-0">5</h1>
                <small class="fs-5 fw-bold">Years Experience</small>
              </div>
            </div>
            <div class="col-6 wow fadeIn" data-wow-delay="0.1s">
              <img
                class="img-fluid rounded"
                src="../src/assets/img/cats (3).jpg"
              />
            </div>
            <div class="col-6 wow fadeIn" data-wow-delay="0.3s">
              <img
                class="img-fluid rounded"
                src="../src/assets/img/cats (6).jpg"
              />
            </div>
            <div class="col-6 wow fadeIn" data-wow-delay="0.5s">
              <img
                class="img-fluid rounded"
                src="../src/assets/img/cats (5).jpg"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <p class="section-title bg-white text-start text-primary pe-3">
            About Us
          </p>
          <h1 class="mb-4">Planning to adopt a cat?</h1>
          <p class="mb-4">
            Our Nyans need a new home and new best friends. Are you one of them?
          </p>
          <div class="row g-5 pt-2 mb-5">
            <div class="col-sm-6">
              <img
                class="img-fluid mb-4"
                src="../src/assets/img/service.png"
                alt=""
              />
              <h5 class="mb-3">Dedicated Services</h5>
              <span
                >We give our love and support to our Nyans so they can be at
                their best selves when they'll found their new best
                friends.</span
              >
            </div>
            <div class="col-sm-6">
              <img
                class="img-fluid mb-4"
                src="../src/assets/img/product.png"
                alt=""
              />
              <h5 class="mb-3">Fully Vacinated</h5>
              <span
                >We care about our Nyans' health to keep them happy.</span
              >
            </div>
          </div>
          <a class="btn btn-secondary rounded-pill py-3 px-5" href=""
            >Explore More</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

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
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="product-item">
            <div class="position-relative">
              <img
                class="img-fluid"
                src="../src/assets/img/cats (7).jpg"
                alt=""
              />
              <div class="product-overlay">
                <a
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-info"></i
                ></a>
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
                src="../src/assets/img/cats (8).jpg"
                alt=""
              />
              <div class="product-overlay">
                <a
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-info"></i
                ></a>
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
                src="../src/assets/img/cats (9).jpg"
                alt=""
              />
              <div class="product-overlay">
                <a
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-info"></i
                ></a>
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
                src="../src/assets/img/cats (10).jpg"
                alt=""
              />
              <div class="product-overlay">
                <a
                  class="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                  ><i class="bi bi-info"></i
                ></a>
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
      </div>
    </div>
  </div>
  <!-- Cats End -->

  <!-- Details Start -->
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
              src="./assets/img/cats (7).jpg"
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
              <a
                href=""
                class="btn btn-secondary rounded-pill py-3 px-5 animated slideInRight"
                >Adopt me!</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Details End -->

  <!-- Login Form Start -->
  <div
    class="container-xxl-fluid mt-6 py-5 d-flex justify-content-center bg-dark footer"
  >
    <form class="card px-1 py-4 wow fadeIn">
      <div class="card-body">
        <img
          src="./assets/img/Nyan.png"
          class="img-fluid"
          alt="Responsive image"
        />
        <h6 class="information mt-4 text-center">Login Account</h6>
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <input class="form-control" type="email" placeholder="Email" required />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <div class="input-group">
                <input
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
          <a href="#" class="terms">Register Account</a>
        </div>
        <button onclick="sound()" type="submit" class="btn btn-primary btn-block confirm-button col-sm-12">
          Confirm
        </button>
      </div>
    </form>
  </div>
  <!-- Login Form End -->

  <!-- Register Form Start -->
  <div
    class="container-xxl-fluid mt-6 py-5 d-flex justify-content-center bg-dark footer"
  >
    <form class="card-regist px-1 py-4 wow fadeIn">
      <div class="card-body">
        <img
          src="./assets/img/Nyan-regist.png"
          class="img-fluid"
          alt="Responsive image"
        />
        <h6 class="information mt-4 text-center">Register Account</h6>
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    required
                  />
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <input type="tel" class="form-control" placeholder="Phone Number" />
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <input type="password" class="form-control" placeholder="Password" required/>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 mb-3">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column text-center px-5 mt-3 mb-3">
          <small class="agree-text">By registering your account you agree to our</small>
          <a href="#" class="terms">Terms & Conditions</a>
        </div>
        <button onclick="soundNav()" type="submit" class="btn btn-primary btn-block confirm-button col-sm-12">
          Confirm
        </button>
      </div>
    </form>
  </div>
  <!-- Register Form End -->

  <!-- Adoption Form Start -->
  <div class="container-fluid px-0" id="bg-div">
    <div class="row justify-content-center">
      <div class="col-lg-9 col-12">
        <div class="card0">
          <div class="d-flex" id="wrapper">
            <!-- Sidebar -->
            <div class="bg-light border-right" id="sidebar-wrapper">
              <div class="sidebar-heading pt-5 pb-4">
                <strong>ADOPTION FORM</strong>
              </div>
              <div class="list-group list-group-flush">
                <a
                  data-toggle="tab"
                  href="#menu1"
                  id="tab1"
                  class="tabs list-group-item bg-light"
                >
                  <div class="list-div my-2">
                    <div class="fa fa-home"></div>
                    &nbsp;&nbsp; Inquiry
                  </div>
                </a>
                <a
                  data-toggle="tab"
                  href="#menu2"
                  id="tab2"
                  class="tabs list-group-item active1"
                >
                  <div class="list-div my-2">
                    <div class="fa fa-credit-card"></div>
                    &nbsp;&nbsp; Donate
                  </div>
                </a>
                <a
                  data-toggle="tab"
                  href="#menu3"
                  id="tab3"
                  class="tabs list-group-item bg-light"
                >
                  <div class="list-div my-2">
                    <div class="fa fa-qrcode"></div>
                    &nbsp;&nbsp;&nbsp; Visa QR <span id="new-label">NEW</span>
                  </div>
                </a>
              </div>
            </div>
            <!-- Page Content -->
            <div id="page-content-wrapper">
              <div class="row pt-3" id="border-btm">
                <div class="col-8">
                  <button
                    class="btn btn-success mt-4 ml-3 mb-3"
                    id="menu-toggle"
                  >
                    <div class="bar4"></div>
                    <div class="bar4"></div>
                    <div class="bar4"></div>
                  </button>
                </div>
                <div class="col-4">
                  <div class="row justify-content-right">
                    <div class="col-12">
                      <p class="mb-0 mr-4 mt-4 text-right">
                        customer@email.com
                      </p>
                    </div>
                  </div>
                  <div class="row justify-content-right">
                    <div class="col-12">
                      <p class="mb-0 mr-4 text-right">
                        Pay <span class="top-highlight">$ 100</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="text-center" id="test"></div>
              </div>
              <div class="tab-content">
                <div id="menu1" class="tab-pane">
                  <div class="row justify-content-center">
                    <div class="col-11">
                      <div class="form-card">
                        <h3 class="mt-0 mb-4 text-center">
                          Adoptee Request
                        </h3>
                        <form onsubmit="event.preventDefault()">
                          <div class="row">
                            <div class="col-12">
                              <div class="input-group">
                                <input
                                  type="text"
                                  id="bk_nm"
                                  placeholder="Full Name"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="input-group">
                                <input
                                  type="tel"
                                  name="ben_nm"
                                  id="ben-nm"
                                  placeholder="Phone Number"
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="input-group">
                                <input
                                  type="text"
                                  name="scode"
                                  placeholder="Address"
                                  class="placeicon"
                                  minlength="8"
                                  maxlength="11"
                                />
                                <label>ABOUT ADOPTEE</label>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="input-group">
                                <textarea
                                  type="text"
                                  name="scode"
                                  placeholder="Tell us about you and your interest of this cat"
                                  class="placeicon"
                                  row="5"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <input
                                type="submit"
                                class="btn btn-success placeicon"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu2" class="tab-pane in active">
                  <div class="row justify-content-center">
                    <div class="col-11">
                      <div class="form-card">
                        <h3 class="mt-0 mb-4 text-center">
                          Enter your card details to donate
                        </h3>
                        <form onsubmit="event.preventDefault()">
                          <div class="row">
                            <div class="col-12">
                              <div class="input-group">
                                <input
                                  type="text"
                                  id="cr_no"
                                  placeholder="0000 0000 0000 0000"
                                  minlength="19"
                                  maxlength="19"
                                />
                                <label>CARD NUMBER</label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-6">
                              <div class="input-group">
                                <input
                                  type="text"
                                  name="exp"
                                  id="exp"
                                  placeholder="MM/YY"
                                  minlength="5"
                                  maxlength="5"
                                />
                                <label>CARD EXPIRY</label>
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="input-group">
                                <input
                                  type="password"
                                  name="cvcpwd"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  class="placeicon"
                                  minlength="3"
                                  maxlength="3"
                                />
                                <label>CVV</label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <input
                                type="submit"
                                value="Pay $ 100"
                                class="btn btn-success placeicon"
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <p class="text-center mb-5" id="below-btn">
                                <a href="#">Use a test card</a>
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu3" class="tab-pane">
                  <div class="row justify-content-center">
                    <div class="col-11">
                      <h3 class="mt-0 mb-4 text-center">
                        Scan the QR code to pay
                      </h3>
                      <div class="row justify-content-center">
                        <div id="qr">
                          <img
                            src="https://i.imgur.com/DD4Npfw.jpg"
                            width="200px"
                            height="200px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Adoption Form End -->

  <!-- Copyright Start -->
  <div class="container-fluid bg-secondary text-body copyright py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          &copy; <a class="fw-semi-bold" href="#">Nyan Mansion</a>, All Right
          Reserved.
        </div>
        <div class="col-md-6 text-center text-md-end">
          Designed By <a class="fw-semi-bold">Sekar</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Copyright End -->

  <!-- Back to Top -->
  <a
    href="#"
    class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
    ><i class="bi bi-arrow-up"></i
  ></a>
</template>
