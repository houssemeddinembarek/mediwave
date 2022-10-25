import React from 'react'
import './App.css'
import Footer from './components/navigation/footer/Footer'
import Header from './components/navigation/header/Header'
import Form from './components/form/form'
import Carousel from './components/carousel/CarouselPart'
import DescriptionMediwave from './components/description_mediwave/DescriptionMediwave'
import { FaRegClock } from 'react-icons/fa'
import { CircularProgressbar } from 'react-circular-progressbar'
import ProgressProvider from './ProgressProvider'
import 'react-circular-progressbar/dist/styles.css'
import ReactBootstrapCarousel from 'react-bootstrap-carousel'
import doc from './assets/video/doc.mp4'
import AnimatedNumbers from 'react-animated-numbers'
import VisibilitySensor from 'react-visibility-sensor'
import Button from '@mui/material/Button'
import ProgressBar from 'bootstrap-progress-bar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import anath from './assets/images/anath.png'
import logoWeb from './assets/images/anath.png'
import TabPanel from './components/form/TabPanel'
import AskedQuestions from './components/asked_question/AskedQuestions'
import ProjectPart from './components/project_part/ProjectPart'
import PourquoiInvestir from './components/pourquoi_investir/PourquoiInvestir'
import Team from './components/team/team'
import Investors from './components/investors/Investors'
import Statistique from './components/statistique/Statistique'

const App = () => {
  const percentage = 45

  return (
    <div>
      <Header />

      {/* First Part carousel  OK */}
      <Carousel />

      {/* <a href='./src/assets/files/file.pdf' download>Download PDF</a> */}

      {/* Description Mediwave partie2 OK */}
      <DescriptionMediwave />

      {/* Progress Bar */}
      <span className="progressBar">
        <FaRegClock style={{ color: '#4baae9' }} /> 60 jours restants (1
        Novembre - 30 Décembre)
      </span>

      <div className="progress progressBar mt-4" style={{ height: 30 }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '25%' }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>

      {/* Nos Projets Part */}
      <ProjectPart />

      {/* <section className="section home home-1 firstImage" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-md-10">
              <div className="mt-4">
                <h1 className="head-line text-uppercase">do more for less</h1>
                <p className="home-caption text-muted mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignssimos provident requste uisquam quia vel sint the
                  mollitia the Internet tend to repeat predefined chunks as
                  necessary, making.
                </p>
                <div className="mt-5">
                  <a href="javascript:void(0)" className="btn btn-primary me-3">
                    Get Started
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-white play-button text-center shadow-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#watchvideomodal"
                  >
                    <i className="mdi mdi-play align-middle home-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade bd-example-modal-lg"
            id="watchvideomodal"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="watchvideomodalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog modal-lg">
              <div className="modal-content home-modal">
                <div className="modal-header border-0">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <video id="VisaChipCardVideo" className="video-box" controls>
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="section team" id="team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="heading mb-3">
                <h2 className="mb-0">our team</h2>
                <div className="box first"></div>
              </div>
              <div className="swiper mySwiper6">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="images/team/team1.png"
                            alt=""
                          />
                          <div className="img-text">
                            <h6>Marta Matković</h6>
                            <span className="text-white-50">Web designer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="card h-100">
                          <div className="team-heading">
                            <div data-aos="fade-left" data-aos-duration="2000">
                              <h6>Marta</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="card-text">
                              <h6>Designation</h6>
                              <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla
                              </p>
                            </div>
                            <ul className="inline-item team-icon">
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-facebook"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1800"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-twitter"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="2500"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-instagram"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="3000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-google-play"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="images/team/team2.png"
                            alt=""
                          />
                          <div className="img-text">
                            <h6>Silvija Vučković</h6>
                            <span className="text-white-50">Web devloper</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="card h-100">
                          <div className="team-heading">
                            <div data-aos="fade-left" data-aos-duration="2000">
                              <h6>Silvija</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="card-text">
                              <h6>Designation</h6>
                              <p className="text-muted">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit
                              </p>
                            </div>
                            <ul className="inline-item team-icon">
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-facebook"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1800"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-twitter"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="2500"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-instagram"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="3000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-google-play"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="images/team/team3.png"
                            alt=""
                          />
                          <div className="img-text">
                            <h6>Laura Rodrigues Pereira</h6>
                            <span className="text-white-50">Team Leader</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="card h-100">
                          <div className="team-heading">
                            <div data-aos="fade-left" data-aos-duration="2000">
                              <h6>Laura</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="card-text">
                              <h6>Designation</h6>
                              <p className="text-muted">
                                But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain
                                was born and I will give you a complete account
                                of the system, and expound the actual teachings
                                of the great explorer of the truth, the
                                master-builder of human happiness. No
                              </p>
                            </div>
                            <ul className="inline-item team-icon">
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-facebook"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1800"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-twitter"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="2500"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-instagram"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="3000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-google-play"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="images/team/team4.png"
                            alt=""
                          />
                          <div className="img-text">
                            <h6>Arthur Hjálmarsson</h6>
                            <span className="text-white-50">CEO</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="card h-100">
                          <div className="team-heading">
                            <div data-aos="fade-left" data-aos-duration="2000">
                              <h6>Arthur</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="card-text">
                              <h6>Designation</h6>
                              <p className="text-muted">
                                Li Europan lingues es membres del sam familie.
                                Lor separat existentie es un myth. Por scientie,
                                musica, sport etc, litot Europa usa li sam
                                vocabular. Li lingues differe solmen in li
                                grammatica, li pronunciation e li plu commun
                                vocabules. Omnicos directe al desirabilite de
                              </p>
                            </div>
                            <ul className="inline-item team-icon">
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-facebook"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1800"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-twitter"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="2500"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-instagram"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="3000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-google-play"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
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
      </section> */}

      {/* Question part */}
      <AskedQuestions />

      {/*  */}

      {/* <section className="section reviews" id="review">
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="text-center">
                <div className="heading">
                  <h2 className="mb-0 text-white">Reviews</h2>
                  <div className="box first"></div>
                </div>
                <p className="text-white-50">What Our Customers Are Saying. </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <div className="accordion-header" id="headingOne">
                    <a
                      href="#collapseOne"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div className="d-flex align-items-center">
                        <span className="flex-shrink-0">
                          <img
                            src="images/user/user.png"
                            className="avatar-md rounded-circle"
                            alt=""
                          />
                        </span>
                        <div className="flex-grow-1 ms-4">
                          <h6 className="mb-0 text-primary fw-bold">
                            Alan <span className="text-black">Macedo</span>{' '}
                          </h6>
                          <div className="flex-shrink-0">
                            <span className="mb-0 fs-14 text-muted">
                              47 Follower,69 Reviews
                            </span>
                            <ul className="list-unstyled">
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-15">
                        <i className="bx bxs-quote-alt-left fs-4"></i>
                        Li Europan lingues es membres del sam familie. Lor
                        separat existentie es un myth. Por scientie, musica,
                        sport etc, litot Europa usa li sam vocabular. Li lingues
                        differe solmen in li grammatica, li pronunciation e li
                        plu commun vocabules. Omnicos directe al desirabilite de
                        un nov lingua franca: On refusa continuar payar custosi
                        traductores. At solmen va esser necessi far
                      </p>
                      <ul className="list-unstyled">
                        <li className="list-inline-item">
                          <a
                            className="btn btn-soft-primary clinte-btn"
                            href="javascript:void(0)"
                          >
                            <i className="mdi mdi-comment-multiple-outline me-1"></i>
                            Public comment
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="btn btn-soft-primary clinte-btn"
                            href="javascript:void(0)"
                          >
                            <i className="mdi mdi-email-multiple-outline me-1"></i>
                            Direct message
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="headingTwo">
                    <a
                      href="#collapseTwo"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div className="d-flex align-items-center">
                        <span className="flex-shrink-0">
                          <img
                            src="images/user/user1.png"
                            className="avatar-md rounded-circle"
                            alt=""
                          />
                        </span>
                        <div className="flex-grow-1 ms-4">
                          <h6 className="mb-0 text-primary fw-bold">
                            Erla{' '}
                            <span className="text-black">Petursdottir</span>{' '}
                          </h6>
                          <div className="flex-shrink-0">
                            <span className="mb-0 fs-14 text-muted">
                              87 Follower,79 Reviews
                            </span>
                            <ul className="list-unstyled">
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                  >
                    <div className="accordion-body">
                      <p className="fs-15">
                        <i className="bx bxs-quote-alt-left fs-4"></i>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis
                      </p>
                      <ul className="list-unstyled">
                        <li className="list-inline-item">
                          <a
                            className="btn btn-soft-primary clinte-btn"
                            href="javascript:void(0)"
                          >
                            <i className="mdi mdi-comment-multiple-outline me-1"></i>
                            Public comment
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="btn btn-soft-primary clinte-btn"
                            href="javascript:void(0)"
                          >
                            <i className="mdi mdi-email-multiple-outline me-1"></i>
                            Public comment
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="headingThree">
                    <a
                      href="#collapseThree"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <div className="d-flex align-items-center">
                        <span className="flex-shrink-0">
                          <img
                            src="images/user/user2.png"
                            className="avatar-md rounded-circle"
                            alt=""
                          />
                        </span>
                        <div className="flex-grow-1 ms-4">
                          <h6 className="mb-0 text-primary fw-bold">
                            Palmi <span className="text-black">Arnason</span>{' '}
                          </h6>
                          <div className="flex-shrink-0">
                            <span className="mb-0 fs-14 text-muted">
                              78 Follower,89 Reviews
                            </span>
                            <ul className="list-unstyled">
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                  >
                    <div className="accordion-body">
                      <p className="fs-15">
                        <i className="bx bxs-quote-alt-left fs-4"></i>
                        The European languages are members of the same family.
                        Their separate existence is a myth. For science, music,
                        sport, etc, Europe uses the same vocabulary. The
                        languages only differ in their grammar, their
                        pronunciation and their most common words. Everyone
                        realizes why a new common language would be desirable:
                        one could refuse to pay expensive translators. To
                        achieve this
                      </p>
                      <ul className="list-unstyled">
                        <li className="list-inline-item">
                          <a
                            className="btn btn-soft-primary clinte-btn"
                            href="javascript:void(0)"
                          >
                            <i className="mdi mdi-comment-multiple-outline me-1"></i>
                            Public comment
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="btn btn-soft-primary clinte-btn"
                            href="javascript:void(0)"
                          >
                            <i className="mdi mdi-email-multiple-outline me-1"></i>
                            Public comment
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="headingFour">
                    <a
                      href="#collapseFour"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <div className="d-flex align-items-center">
                        <span className="flex-shrink-0">
                          <img
                            src="images/user/user6.png"
                            className="avatar-md rounded-circle"
                            alt=""
                          />
                        </span>
                        <div className="flex-grow-1 ms-4">
                          <h6 className="mb-0 text-primary fw-bold">
                            Charlotte{' '}
                            <span className="text-black">Charpentier</span>{' '}
                          </h6>
                          <div className="flex-shrink-0">
                            <span className="mb-0 fs-14 text-muted">
                              44 Follower,53 Reviews
                            </span>
                            <ul className="list-unstyled">
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="link">
                                  <i className="mdi mdi-star"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                  >
                    <div className="accordion-body">
                      <p className="fs-15">
                        <i className="bx bxs-quote-alt-left fs-4"></i>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts.
                      </p>
                      <ul className="list-unstyled">
                        <li className="list-inline-item">
                          <a
                            className="btn btn-soft-primary clinte-btn"
                            href="javascript:void(0)"
                          >
                            <i className="mdi mdi-comment-multiple-outline me-1"></i>
                            Public comment
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="btn btn-soft-primary clinte-btn"
                            href="javascript:void(0)"
                          >
                            <i className="mdi mdi-email-multiple-outline me-1"></i>
                            Public comment
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="section team" id="team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="heading mb-3">
                <h2 className="mb-0">Our Team</h2>
                <div className="box first"></div>
              </div>
              <div className="swiper mySwiper6">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="images/team/team1.png"
                            alt=""
                          />
                          <div className="img-text">
                            <h6>Marta Matković</h6>
                            <span className="text-white-50">Web designer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="card h-100">
                          <div className="team-heading">
                            <div data-aos="fade-left" data-aos-duration="2000">
                              <h6>Marta</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="card-text">
                              <h6>Designation</h6>
                              <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla
                              </p>
                            </div>
                            <ul className="inline-item team-icon">
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-facebook"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1800"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-twitter"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="2500"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-instagram"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="3000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-google-play"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="images/team/team2.png"
                            alt=""
                          />
                          <div className="img-text">
                            <h6>Silvija Vučković</h6>
                            <span className="text-white-50">Web devloper</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="card h-100">
                          <div className="team-heading">
                            <div data-aos="fade-left" data-aos-duration="2000">
                              <h6>Silvija</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="card-text">
                              <h6>Designation</h6>
                              <p className="text-muted">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit
                              </p>
                            </div>
                            <ul className="inline-item team-icon">
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-facebook"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1800"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-twitter"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="2500"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-instagram"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="3000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-google-play"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="images/team/team3.png"
                            alt=""
                          />
                          <div className="img-text">
                            <h6>Laura Rodrigues Pereira</h6>
                            <span className="text-white-50">Team Leader</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="card h-100">
                          <div className="team-heading">
                            <div data-aos="fade-left" data-aos-duration="2000">
                              <h6>Laura</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="card-text">
                              <h6>Designation</h6>
                              <p className="text-muted">
                                But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain
                                was born and I will give you a complete account
                                of the system, and expound the actual teachings
                                of the great explorer of the truth, the
                                master-builder of human happiness. No
                              </p>
                            </div>
                            <ul className="inline-item team-icon">
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-facebook"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1800"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-twitter"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="2500"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-instagram"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="3000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-google-play"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="team-img">
                          <img
                            className="img-fluid"
                            src="images/team/team4.png"
                            alt=""
                          />
                          <div className="img-text">
                            <h6>Arthur Hjálmarsson</h6>
                            <span className="text-white-50">CEO</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="card h-100">
                          <div className="team-heading">
                            <div data-aos="fade-left" data-aos-duration="2000">
                              <h6>Arthur</h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="card-text">
                              <h6>Designation</h6>
                              <p className="text-muted">
                                Li Europan lingues es membres del sam familie.
                                Lor separat existentie es un myth. Por scientie,
                                musica, sport etc, litot Europa usa li sam
                                vocabular. Li lingues differe solmen in li
                                grammatica, li pronunciation e li plu commun
                                vocabules. Omnicos directe al desirabilite de
                              </p>
                            </div>
                            <ul className="inline-item team-icon">
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-facebook"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1800"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-twitter"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="2500"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-instagram"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="3000"
                                >
                                  <a href="javascript:void(0)">
                                    <i className="mdi mdi-google-play"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
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
      </section> */}

      {/* Statistique part */}
      <Statistique />

      {/* Team Part */}
      <Team />

      {/* Pourquoi Investir Part OK */}
      <PourquoiInvestir />

      {/* Form Part  */}
      <Form />

      <TabPanel />

      {/* Footer Part */}
      <Footer />

      {/* Investors OK */}
      <Investors />

      {/* Dialogs */}
      {/* <div
        className="modal fade"
        id="diagnoseMe"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-close">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body m-3">
              <div className="modal-body">
                <div className="mb-4">
                  <h4 className="fw-semibold mb-0">Sign Up</h4>
                  <p className="text-muted">
                    Already Have an account?{' '}
                    <a href="javascript:void(0)">Log in here</a>{' '}
                  </p>
                </div>
                <form>
                  <div className="mb-3 serch-form">
                    <label className="mb-2" for="Email">
                      Email
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <span className="input-group-text">
                      <i className="mdi mdi-email-outline"></i>
                    </span>
                  </div>
                  <div className="mb-2 serch-form">
                    <label className="mb-2" for="userpassword">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="userpassword"
                      placeholder="Enter Password"
                    />
                    <span className="input-group-text">
                      <i className="mdi mdi-lock-outline"></i>
                    </span>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="text-end">
                    <a href="recoverpw.html" className="text-muted fs-13">
                      <i className="mdi mdi-lock me-1"></i> Forgot password?
                    </a>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-primary w-100" type="submit">
                      Log in
                    </button>
                  </div>
                </form>
                <p className="text-muted pt-3 mb-0">
                  By signing up You agree to our
                  <a href="javascript:void(0)" className="text-muted">
                    <u>Privacy Policy</u>
                  </a>{' '}
                  and{' '}
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                  <a href="" className="text-muted">
                    <u>Terms of Service</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="footer-alt pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p className="mb-0 fs-15">Powered By 3D wave</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
