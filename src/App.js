import React, { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoWeb from './assets/images/anath.png'
import actia from './assets/images/actia.png'
import anath from './assets/images/anath.png'
import cetem from './assets/images/cetem.png'
import eniso from './assets/images/eniso.png'
import hopitalMilitaire from './assets/images/hopitalMilitaire.jpg'
import ministereDeSante from './assets/images/ministereDeSante.png'
import novationCity from './assets/images/novationCity.jpg'
import ordreNationaldesMedecins from './assets/images/ordreNationaldesMedecins.jpg'
import sofap from './assets/images/sofap.jpg'
import unimed from './assets/images/unimed.png'
import enim from './assets/images/enim.png'
import medecineSfax from './assets/images/medecineSfax.jpg'
import mediwaveVideo from './assets/video/mediwaveVideo2_1~1.mp4'
import doc from './assets/video/doc.mp4'
import ReactBootstrapCarousel from 'react-bootstrap-carousel'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import AnimatedNumbers from 'react-animated-numbers'
import VisibilitySensor from 'react-visibility-sensor'
import Button from '@mui/material/Button'
import ProgressBar from 'bootstrap-progress-bar'

const App = () => {
  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  let now = 60
  const [num, setNum] = useState(500000)
  const [leve, setLeve] = useState(0)
  const [action, setAction] = useState('18,7')
  const [evaluation, setEvaluation] = useState(11520000)

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky"
        id="navbar"
      >
        <div className="container">
          <a className="navbar-brand text-uppercase" href="index-1.html">
            <img
              className="logo-light"
              src={logoWeb}
              alt=""
              height="40"
              width="100"
            />
            <img className="logo-dark" src={logoWeb} alt="" height="28" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="mdi mdi-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav" id="navbar-navlist">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#review">
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-3 mb-lg-0" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            {/* <button
              type="button"
              className="btn btn-primary nav-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalLong"
            >
              Sign Up
            </button> */}
          </div>
        </div>
      </nav>

      {/* sign up */}
      {/* Boite de dialogue */}
      {/* <div
        className="modal fade"
        id="exampleModalLong"
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
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* First Part carousel  OK */}
      <Carousel>
        <video className="video mediwaveVideo" loop autoPlay muted>
          <source src={mediwaveVideo} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <div className="mt-4 d-flex flex-column justify-content-start">
            <h1
              className="head-line text-uppercase d-flex "
              style={{ marginRight: '40%' }}
            >
              do more for less
            </h1>
            <p
              className="mt-4 carouselText"
              style={{ marginRight: '60%', textAlign: 'justify' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignssimos provident requste uisquam quia vel sint the mollitia
              the Internet tend to repeat predefined chunks as necessary,
              making.
            </p>
            <div className="mt-3 d-flex justify-content-start">
              <a
                className="btn btn-primary me-3 "
                href="#form"
                style={{ marginRight: '70%' }}
              >
                Investir Avec Nous
              </a>
              {/* <a
                href="javascript:void(0)"
                className="btn btn-white play-button text-center shadow-sm"
                data-bs-toggle="modal"
                data-bs-target="#watchvideomodal"
              >
                <i className="mdi mdi-play align-middle home-icon"></i>
              </a> */}
            </div>
          </div>
        </Carousel.Caption>
      </Carousel>

      {/* button Three arrows  OK */}
      <div className="container-fluid">
        <div className="row">
          <div className="home-shape-arrow">
            <a href="#features" className="mouse-down">
              <svg className="arrows">
                <path className="a1" d="M0 0 L25 22 L50 0"></path>
                <path className="a2" d="M0 15 L25 40 L50 15"></path>
                <path className="a3" d="M0 30 L25 54 L50 30"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* partie2 numbers animation  OK */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4">
            <div className="mt-5 text-center">
              <p
                className="cta-text"
                style={{ color: '#505050', fontWeight: 'bold' }}
              >
                Objectif :
              </p>
              <h1 className="cta-heading">
                <div className="d-flex justify-content-center">
                  {/* <AnimatedNumbers
                    includeComma
                    animateToNumber={num}
                    style={{}}
                    fontStyle={{
                      fontSize: 'calc(1.2825rem + .39vw)',
                      textAlign: 'center',
                      color: '#ff7f29',
                    }}
                    duration={1000}
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  ></AnimatedNumbers> */}
                  <p style={{ fontSize: 24, color: '#ff7f29' }}>{num} TND</p>
                </div>
              </h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="mt-5 text-center">
              <p className="cta-text" style={{ fontWeight: 'bold' }}>
                Levé:
              </p>
              <h1 className="cta-heading">
                <div className="d-flex justify-content-center">
                  <p style={{ fontSize: 24, color: '#ff7f29' }}>{leve}</p>
                </div>
              </h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="mt-5 text-center">
              <p className="cta-text" style={{ fontWeight: 'bold' }}>
                Actions libérées
              </p>
              <h1 className="cta-heading">
                <div className="d-flex justify-content-center">
                  <p style={{ fontSize: 24, color: '#ff7f29' }}>{action} %</p>
                </div>
              </h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="mt-5 text-center">
              <p className="cta-text" style={{ fontWeight: 'bold' }}>
                Evaluation de la société
              </p>
              <h1 className="cta-heading">
                <div className="d-flex justify-content-center">
                  {/* <AnimatedNumbers
                    includeComma
                    animateToNumber={evaluation}
                    style={{}}
                    fontStyle={{
                      fontSize: 'calc(1.2825rem + .39vw)',
                      textAlign: 'center',
                      color: '#ff7f29',
                    }}
                    duration={1000}
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  ></AnimatedNumbers> */}
                  <p style={{ fontSize: 24, color: '#ff7f29' }}>
                    {evaluation} TND
                  </p>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>

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

      <section className="section service-2" id="service">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div className="heading">
                  <h2 className="mb-0">
                    Pourquoi investir à Anath health care:
                  </h2>
                  <div className="box first"></div>
                </div>
                <p className="text-muted">
                  4 avantages à avoir suite à un investissement dans une
                  start-up labellisée :
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-6 col-md-6 ">
                  <div className="process-box card border-0 mt-5">
                    <div className="process-icon flex-shrink-0 me-3">
                      <i className="mdi mdi-lightning-bolt"></i>
                    </div>
                    <div>
                      <h5>Exonération de l’Impôt sur les sociétés :</h5>
                      <p className="mt-2 mb-0 text-muted mb-4">
                        Les startups sont exemptées de l'impôt sur les sociétés
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="process-box card border-0 mt-5">
                    <div className="process-icon flex-shrink-0 me-3">
                      <i className="mdi mdi-chart-box-plus-outline"></i>
                    </div>
                    <div>
                      <h5>L'exonération de l'impôt sur les plus-values :</h5>
                      <p className="mt-2 mb-0 text-muted">
                        Les bénéfices provenant de la vente de titres relatifs à
                        des participations dans des startups sont exonérés de
                        l'impôt sur les plus-values.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="process-box card border-0 mt-5">
                    <div className="process-icon flex-shrink-0 me-3">
                      <i className="mdi mdi-arrow-decision-outline"></i>
                    </div>
                    <div>
                      <h5>La réduction d'impôt pour l'investisseur :</h5>
                      <p className="mt-2 mb-0 text-muted mb-4">
                        Les montants investis par des personnes physiques ou
                        morales dans des startups ou dans des organismes
                        d'investissement réglementés dédiés aux startups, sont
                        entièrement déductibles de la base d'imposition.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="process-box card border-0 mt-5">
                    <div className="process-icon flex-shrink-0 me-3">
                      <i className="mdi mdi-file-document-edit-outline"></i>
                    </div>
                    <div>
                      <h5>Fonds de garantie des startups :</h5>
                      <p className="mt-2 mb-0 text-muted">
                        C'est un mécanisme de garantie pour les participations
                        des fonds d'investissement et autres organismes
                        d'investissement réglementés dans les startups. Ce
                        mécanisme ne peut être activé qu'en cas de liquidation
                        amiable de la startup objet de la garantie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="section features" id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="text-center">
                <div className="heading">
                  <h2 className="mb-0">NOS PROJETS</h2>
                  <div className="box first"></div>
                </div>
                <p className="text-muted">
                  {/* All the features. No hidden layers.{' '} */}
                </p>
              </div>
            </div>
          </div>

          <div className="row g-3 gx-sm-5">
            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                {/* <div className="avatar-sm features-icon">
                   <span className="avatar-title gradients">
                    <i className="mdi mdi-file-document-edit-outline"></i>
                  </span> 
                </div>  */}
                <h5 className="features-title fs-5 fw-bold">Diagnose me</h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little.
                </p> 
                <Button
                  className="mt-4"
                  variant="contained"
                  size="small"
                  onClick={() => console.log('click btn')}
                >
                  plus de détails
                </Button>
                */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                <h5 className="features-title fs-5 fw-bold">Thérapie VR</h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little.
                </p>
                <Button
                  className="mt-4"
                  variant="contained"
                  size="small"
                  onClick={() => console.log('click btn')}
                >
                  plus de détails
                </Button> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                <h5 className="features-title fs-5 fw-bold">Pousse Seringue</h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little.
                </p>
                <Button
                  className="mt-4"
                  variant="contained"
                  size="small"
                  onClick={() => console.log('click btn')}
                >
                  plus de détails
                </Button> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                <h5 className="features-title fs-5 fw-bold">
                  Stérilisateur UVC
                </h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence.
                </p>
                <Button
                  className="mt-4"
                  variant="contained"
                  size="small"
                  onClick={() => console.log('click btn')}
                >
                  plus de détails
                </Button> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                <h5 className="features-title fs-5 fw-bold">
                  Coeur Artificiel
                </h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrovee.
                </p>
                <Button
                  className="mt-4"
                  variant="contained"
                  size="small"
                  onClick={() => console.log('click btn')}
                >
                  plus de détails
                </Button> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                <h5 className="features-title fs-5 fw-bold">
                  Ventilateur 12 modes{' '}
                </h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  The European languages are members of the same family. Their
                  separate existence is a myth. For science, music, sport, etc,
                  Europe uses the same vocabulary. The languages
                </p>
                <Button
                  className="mt-4"
                  variant="contained"
                  size="small"
                  onClick={() => console.log('click btn')}
                >
                  plus de détails
                </Button> */}
              </div>
            </div>
          </div>

          {/* <div className="mt-5 text-center">
            <a
              href="javascript:void(0)"
              className="btn btn-primary text-uppercase"
            >
              Start for free
            </a>
          </div> */}
        </div>
      </section>

      {/*  */}

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

      <section className="section faqs-2" id="faqs">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center">
                <div className="heading">
                  <h2 className="mb-0">Frequently Asked Quetions</h2>
                  <div className="box first"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            {/* <div className="col-lg-9">
              <ul
                className="nav nav-tabs nav-tabs-custom nav-justified justify-content-center faq-tab-box"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    href="#pills-genarel"
                    className="nav-link"
                    id="pills-genarel-tab"
                    data-bs-toggle="pill"
                    role="tab"
                    aria-controls="pills-genarel"
                    aria-selected="true"
                  >
                    <h5 className="mb-0">General Questions</h5>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#pills-privacy_policy"
                    className="nav-link active"
                    id="pills-privacy_policy-tab"
                    data-bs-toggle="pill"
                    role="tab"
                    aria-controls="pills-privacy_policy"
                    aria-selected="false"
                  >
                    <h5 className="mb-0">Privacy Policy</h5>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#pills-pricing_plan"
                    className="nav-link"
                    id="pills-teachers-tab"
                    data-bs-toggle="pill"
                    role="tab"
                    aria-controls="pills-pricing_plan"
                    aria-selected="false"
                  >
                    <h5 className="mb-0">Pricing & Plans</h5>
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="col-lg-9">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="pills-genarel"
                  role="tabpanel"
                  aria-labelledby="pills-genarel-tab"
                >
                  <div className="accordion" id="accordionExampleONE">
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingOne1">
                        <a
                          href="#collapseOne1"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="collapseOne1"
                        >
                          <h6>
                            {' '}
                            <span>1.</span> C’est quoi le dégrèvement fiscal?
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapseOne1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne1"
                        data-bs-parent="#accordionExampleONE"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            Un dégrèvement est une diminution totale ou
                            partielle pratiquée sur le montant de l'impôt dû par
                            le redevablee{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingTwo2">
                        <a
                          href="#collapseTwo2"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        >
                          <h6>
                            {' '}
                            <span>2.</span>Les avantages d’investir dans une
                            startup labellisée
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapseTwo2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            Le dégrèvement fiscal : les montants investis par
                            des personnes physiques ou des personnes morales
                            dans des Startups ou dans des organismes
                            d’investissement réglementés dédiés aux Startups
                            sont totalement déductibles de l’assiette imposable.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingThree3">
                        <a
                          href="#collapseThree3"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="collapseThree3"
                        >
                          <h6>
                            {' '}
                            <span>3.</span>L’exonération de l’impôt sur la
                            Plus-value:
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapseThree3"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree3"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            les bénéfices provenant de la cession des titres
                            relatifs aux participations dans les Startups sont
                            exonérés de l’impôt sur la plus-value.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingfour4">
                        <a
                          href="#collapsefour4"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="collapsefour4"
                        >
                          <h6>
                            {' '}
                            <span>4.</span>La réduction d'impôt, c’est quoi?
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapsefour4"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingfour4"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            Les montants investis par des personnes physiques ou
                            morales dans des startups ou dans des organismes
                            d'investissement réglementés dédiés aux startups,
                            sont entièrement déductibles de la base
                            d'imposition.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-privacy_policy"
                  role="tabpanel"
                  aria-labelledby="pills-privacy_policy-tab"
                >
                  <div className="accordion" id="accordionExample1">
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingOne">
                        <a
                          href="#collapseOne"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <h6>
                            {' '}
                            <span>1.</span> Where can I get some?
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample1"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis{' '}
                          </p>
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
                          <h6>
                            {' '}
                            <span>2.</span>Where does it come from ?
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            Li Europan lingues es membres del sam familie. Lor
                            separat existentie es un myth. Por scientie, musica,
                            sport etc, litot Europa usa li sam vocabular. Li
                            lingues differe solmen in li grammatica, li
                            pronunciation e li plu commun vocabules. Omnicos
                            directe al desirabilite de un nov lingua franca: On
                            refusa continuar payar custosi traductores. At
                            solmen va esser necessi far
                          </p>
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
                          <h6>
                            {' '}
                            <span>3.</span>Why do we use it ?
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            The European languages are members of the same
                            family. Their separate existence is a myth. For
                            science, music, sport, etc, Europe uses the same
                            vocabulary. The languages only differ in their
                            grammar, their pronunciation and their most common
                            words. Everyone realizes why a new common language
                            would be desirable: one could refuse to pay
                            expensive translators. To achieve this
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingfour">
                        <a
                          href="#collapsefour"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          <h6>
                            {' '}
                            <span>4.</span>Why do we use it ?
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapsefour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingfour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean. A small river named Duden
                            flows by their place and supplies it with the
                            necessary regelialia. It is a paradisematic country,
                            in which roasted parts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-pricing_plan"
                  role="tabpanel"
                  aria-labelledby="pills-tab"
                >
                  <div className="accordion" id="accordionexampleOnE">
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingone">
                        <a
                          href="#collapseone"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="collapseone"
                        >
                          <h6>
                            {' '}
                            <span>1.</span> Where can I get some?
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapseone"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingone"
                        data-bs-parent="#accordionexampleOnE"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingtwo">
                        <a
                          href="#collapsetwo"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="collapsetwo"
                        >
                          <h6>
                            {' '}
                            <span>2.</span>Where does it come from ?
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapsetwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingtwo"
                        data-bs-parent="#accordionexample"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            Li Europan lingues es membres del sam familie. Lor
                            separat existentie es un myth. Por scientie, musica,
                            sport etc, litot Europa usa li sam vocabular. Li
                            lingues differe solmen in li grammatica, li
                            pronunciation e li plu commun vocabules. Omnicos
                            directe al desirabilite de un nov lingua franca: On
                            refusa continuar payar custosi traductores. At
                            solmen va esser necessi far
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingthree">
                        <a
                          href="#collapsethree"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="collapsethree"
                        >
                          <h6>
                            {' '}
                            <span>3.</span>Why do we use it ?
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapsethree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingthree"
                        data-bs-parent="#accordionexample"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            The European languages are members of the same
                            family. Their separate existence is a myth. For
                            science, music, sport, etc, Europe uses the same
                            vocabulary. The languages only differ in their
                            grammar, their pronunciation and their most common
                            words. Everyone realizes why a new common language
                            would be desirable: one could refuse to pay
                            expensive translators. To achieve this
                          </p>
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
                          <h6>
                            {' '}
                            <span>4.</span>Why do we use it ?
                          </h6>
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionexample"
                      >
                        <div className="accordion-body">
                          <p className="text-muted">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean. A small river named Duden
                            flows by their place and supplies it with the
                            necessary regelialia. It is a paradisematic country,
                            in which roasted parts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      <section className="section cta">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center text-white">
                <h1 className="lh-base">
                  Start controlling your contributions, <br />
                  together with GititBack !
                </h1>
                <p className="mt-4 lh-base text-white-50">
                  The generated lorem is therefore always free trial from
                  explore we denounce <br /> with righteous indignation and
                  dislike men{' '}
                </p>
                <div className="mt-5">
                  <a href="javascript:void(0)" className="btn btn-primary">
                    <i className="mdi mdi-github fs-16"></i>
                    Sign in with Github Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div className="heading">
                  <h2 className="mb-0">Pricing</h2>
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

      <section className="section contact" id="form">
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="row align-items-center gy-3">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="social-list">
                        <h6 className="mb-0">Let's Get</h6>
                        <h3 className="fw-semibold">Started</h3>
                        <div className="d-sm-flex card-text">
                          <p className="me-4 mb-0">Reach up</p>
                          <a className="text-white" href="javascript:void(0)">
                            <i className="mdi mdi-phone-outline me-2"></i>
                            408.409.6483
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <form
                    method="post"
                    onsubmit="return validateForm()"
                    className="contact-form"
                    name="myForm"
                    id="myForm"
                  >
                    <span id="error-msg"></span>
                    <div className="row rounded-3 py-3">
                      <div className="col-lg-12">
                        <div className="position-relative mb-3">
                          <span className="input-group-text">
                            <i className="mdi mdi-account-outline"></i>
                          </span>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter your name*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="position-relative mb-3">
                          <span className="input-group-text">
                            <i className="mdi mdi-email-outline"></i>
                          </span>
                          <input
                            name="email"
                            id="Email"
                            type="email"
                            className="form-control"
                            placeholder="Enter your email*"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="position-relative mb-3">
                          <span className="input-group-text">
                            <i className="mdi mdi-file-document-outline"></i>
                          </span>
                          <input
                            name="phone"
                            id="phone"
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label
                          className="form-check-label"
                          style={{ color: 'white' }}
                          for="exampleRadios1"
                        >
                          Default radio
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          style={{ color: 'white' }}
                          for="exampleRadios2"
                        >
                          Second default radio
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          value="option3"
                        />
                        <label
                          className="form-check-label"
                          style={{ color: 'white' }}
                          for="exampleRadios3"
                        >
                          Second default radio
                        </label>
                      </div>

                      {/* <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          Default checkbox
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label className="form-check-label" for="flexCheckChecked">
                          Checked checkbox
                        </label>
                      </div> */}
                      {/* <div className="col-lg-12">
                        <div className="position-relative mb-3">
                          <span className="input-group-text align-items-start">
                            <i className="mdi mdi-comment-text-outline"></i>
                          </span>
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            className="form-control"
                            placeholder="Enter your message*"
                          ></textarea>
                        </div> 
                      </div>*/}
                      <div className="col-lg-12">
                        <div className="text-end">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="btn btn-primary"
                            value="Send Message"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="section footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-10 text-center">
              <a href="javascript:void(0)">
                <img src={logoWeb} height="50" width="120" alt="" />
              </a>
              <p className="mx-auto mt-sm-4">
                Obviously I'm a Web Designer. Experienced with all stages of the
                development cycle for dynamic web projects.
              </p>
              <ul className="list-unstyled mb-0 mt-3 social-icon">
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
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
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
          </div>
        </div>
      </footer>

      {/* Investors */}
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src={actia}
              className="investorImage"
              style={{ marginTop: '20%', marginBottom: '20%', height: '30%' }}
            />
          </div>
          <div className="col-2">
            <img
              src={cetem}
              className="investorImage"
              style={{ height: '150px' }}
            />
          </div>
          <div className="col-2">
            <img src={enim} className="investorImage" />
          </div>
          <div className="col-2">
            <img
              src={eniso}
              className="investorImage"
              style={{ height: '150px' }}
            />
          </div>
          <div className="col-2">
            <img
              src={hopitalMilitaire}
              className="investorImage"
              style={{ height: '150px' }}
            />
          </div>
          <div className="col-2">
            <img
              src={medecineSfax}
              className="investorImage"
              style={{ marginTop: '10%', marginBottom: '20%', height: '60%' }}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <img
              src={ministereDeSante}
              className="investorImage"
              style={{ height: '150px' }}
            />
          </div>
          <div className="col-2">
            <img src={novationCity} className="investorImage" />
          </div>
          <div className="col-2">
            <img src={ordreNationaldesMedecins} className="investorImage" />
          </div>
          <div className="col-2">
            <img
              src={sofap}
              className="investorImage"
              style={{ marginTop: '10%', marginBottom: '20%', height: '60%' }}
            />
          </div>
          <div className="col-2">
            <img
              src={unimed}
              className="investorImage"
              style={{ marginTop: '10%', marginBottom: '20%', height: '60%' }}
            />
          </div>
        </div>
      </div>

      <div className="footer-alt pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p className="mb-0 fs-15">
                  ©<script>document.write(new Date().getFullYear())</script>{' '}
                  Mito Design by
                  <i className="mdi mdi-heart text-danger"></i> Themesdesign
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </div>
  )
}

export default App
