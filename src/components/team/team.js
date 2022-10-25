import React from 'react';

const Team = () => {
    return (
        <div id="Team">
             <section className="section pricing" id="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div className="heading">
                  <h2 className="mb-0">Team</h2>
                  <div className="box first"></div>
                </div>
                <p className="text-muted">
                  Pays for itself with with one saved invoice.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="toggle-btn text-center pb-5 d-flex align-items-center justify-content-center">
                <div className="me-1 me-md-3 toggle-text">Monthly</div>
                <label className="switch">
                  <input type="checkbox" id="checbox" onclick="check()" />
                  <span className="slider round rounded-pill"></span>
                </label>
                <div className="ms-1 ms-md-3 toggle-text">Annually</div>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-10">
              <div className="row g-md-4">
                <div className="col-lg-4 col-md-6">
                  <div className="card pricing-box h-100">
                    <div className="card-body p-0">
                      <div className="card-header">
                        <h6 className="fw-normal mb-3 text-white">Free Plan</h6>
                        <div className="d-flex align-items-end justify-content-start">
                          <div className="flex-shrink-0 pricing-price">
                            <h1 className="mb-0 text1 text-white">$0</h1>
                            <h1 className="mb-0 text2 text-white">$0</h1>
                          </div>
                          <div className="flex-grow-1">
                            <p className="mb-0 ms-1 fs-14 text-white">
                              / Life Time
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <ul className="list-unstyled">
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>Today Planing & view</span>
                            </i>
                          </li>
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>Checklist templates</span>
                            </i>
                          </li>
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>Clander intergation</span>
                            </i>
                          </li>
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>Browser extension</span>
                            </i>
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary pricing-btn rounded-pill"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card pricing-box h-100 active-price">
                    <div className="card-body p-0">
                      <div className="positin-relative">
                        <span className="lable-name text-uppercase">
                          Popular
                        </span>
                      </div>
                      <div className="card-header">
                        <h6 className="fw-normal mb-3 text-white">
                          Besic Plan
                        </h6>
                        <div className="d-flex align-items-end justify-content-start">
                          <div className="flex-shrink-0 pricing-price">
                            <h1 className="mb-0 text1 text-white">$30</h1>
                            <h1 className="mb-0 text2 text-white">$10</h1>
                          </div>
                          <div className="flex-grow-1">
                            <p className="mb-0 ms-1 fs-14 text2 text-white">
                              / Per Month
                            </p>
                            <p className="mb-0 ms-1 fs-14 text1 text-white">
                              / Annually
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <ul className="list-unstyled">
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>Everithing in Free</span>
                            </i>
                          </li>
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>Checklist templates</span>
                            </i>
                          </li>
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>Premium intergation</span>
                            </i>
                          </li>
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>30-Day trial</span>
                            </i>
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary pricing-btn rounded-pill"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card pricing-box h-100">
                    <div className="card-body p-0">
                      <div className="card-header">
                        <h6 className="fw-normal mb-3 text-white">
                          Advance Plan
                        </h6>
                        <div className="d-flex align-items-end justify-content-start">
                          <div className="flex-shrink-0 pricing-price">
                            <h1 className="mb-0 text1 text-white">$100</h1>
                            <h1 className="mb-0 text2 text-white">$50</h1>
                          </div>
                          <div className="flex-grow-1">
                            <p className="mb-0 ms-1 fs-14 text2 text-white">
                              / Per Month
                            </p>
                            <p className="mb-0 ms-1 fs-14 text1 text-white">
                              / Annually
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <ul className="list-unstyled">
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>Everithing in Basic</span>
                            </i>
                          </li>
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>Unlimited members</span>
                            </i>
                          </li>
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>dedicated support</span>
                            </i>
                          </li>
                          <li className="list-text">
                            <i className="mdi mdi-checkbox-marked-circle">
                              <span>All Advance Featuers</span>
                            </i>
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary pricing-btn rounded-pill"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Team;
