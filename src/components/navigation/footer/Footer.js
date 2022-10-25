import React from 'react'
import logoWeb from '../../..//assets/images/anath.png'
import "./Footer.css"

const Footer = () => {
  return (
    <div >
        <footer className="section footer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-sm-10 text-center">
                <a href="javascript:void(0)">
                  <img src={logoWeb} height="50" width="120" alt="" />
                </a>
                <p className="mx-auto mt-sm-4">
                  Obviously I'm a Web Designer. Experienced with all stages of
                  the development cycle for dynamic web projects.
                </p>
                {/* <ul className="list-unstyled mb-0 mt-3 social-icon">
                <li className="list-inline-item">
                  <div data-aos="fade-up" data-aos-duration="800">
                    <div className="icon-text">
                      <div className="icon facebook">
                        <div className="tooltip">Facebook</div>
                        <span>
                          <i className="mdi mdi-facebook"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div data-aos="fade-up" data-aos-duration="1200">
                    <div className="icon-text">
                      <div className="icon twitter">
                        <div className="tooltip">Twitter</div>
                        <span>
                          <i className="mdi mdi-twitter"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div data-aos="fade-up" data-aos-duration="1600">
                    <div className="icon-text">
                      <div className="icon instagram">
                        <div className="tooltip">Instagram</div>
                        <span>
                          <i className="mdi mdi-instagram"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div data-aos="fade-up" data-aos-duration="2000">
                    <div className="icon-text">
                      <div className="icon github">
                        <div className="tooltip">Github</div>
                        <span>
                          <i className="mdi mdi-github"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div data-aos="fade-up" data-aos-duration="2400">
                    <div className="icon-text">
                      <div className="icon youtube">
                        <div className="tooltip">Youtube</div>
                        <span>
                          <i className="mdi mdi-youtube"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}
              </div>
            </div>
            {/* <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center mt-3">
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item mx-lg-3 m-2 mb-0">
                    <a className="text-black" href="javascript:void(0)">
                      Home
                    </a>
                  </li>
                  <li className="list-inline-item mx-lg-3 m-2 mb-0">
                    <a className="text-black" href="javascript:void(0)">
                      About us
                    </a>
                  </li>
                  <li className="list-inline-item mx-lg-3 m-2 mb-0">
                    <a className="text-black" href="javascript:void(0)">
                      Order
                    </a>
                  </li>
                  <li className="list-inline-item mx-lg-3 m-2 mb-0">
                    <a className="text-black" href="javascript:void(0)">
                      Member
                    </a>
                  </li>
                  <li className="list-inline-item mx-lg-3 m-2 mb-0">
                    <a className="text-black" href="javascript:void(0)">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          </div>
        </footer>
    </div>
  )
}

export default Footer
