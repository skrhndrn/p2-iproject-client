<script></script>

<template>
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
                        Cat: <span class="top-highlight">Nyan's name</span>
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
</template>
