<script>
</script>

<template>
  <div
    class="container-xxl-fluid mt-6 py-5 d-flex justify-content-center bg-dark footer"
  >
    <form class="card-regist px-1 py-4 wow fadeIn">
      <div class="card-body">
        <img
          src="../assets/img/Nyan-regist.png"
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
        <button onclick="soundRegist()" type="submit" class="btn btn-primary btn-block confirm-button col-sm-12">
          Confirm
        </button>
      </div>
    </form>
  </div>
</template>