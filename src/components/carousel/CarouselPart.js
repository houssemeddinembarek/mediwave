import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import mediwaveVideo from '../../assets/video/mediwaveVideo2_1~1.mp4'

const CarouselPart = () => {
  return (
    <div id="home">
      <Carousel style={{ marginTop: '80px' }}>
        <video className="video mediwaveVideo" loop autoPlay muted>
          <source src={mediwaveVideo} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <div className="mt-4 d-flex flex-column justify-content-start">
            <h1
              className="head-line text-uppercase d-flex "
              style={{ marginRight: '40%' }}
            >
              Le premier fabricant de dispositifs médicaux électriques en
              afrique du nord
            </h1>
            <p
              className="mt-4 carouselText"
              style={{ marginRight: '60%', textAlign: 'justify' }}
            >
              Nous vous invitons à intégrer une équipe d’ingénieurs et médecins
              hautement qualifiés pour réaliser des processes technologiques
              dans le secteur médical.
            </p>
            <div className="mt-3 d-flex justify-content-start">
              <a
                className="btn btn-primary me-3 "
                href="#form"
                style={{ marginRight: '70%' }}
              >
                Investir
              </a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel>
      {/* button Three arrows  OK */}
      <div className="container-fluid">
        <div className="row">
          <div className="home-shape-arrow">
            <a href="#descriptionMediwave" className="mouse-down">
              <svg className="arrows">
                <path className="a1" d="M0 0 L25 22 L50 0"></path>
                <path className="a2" d="M0 15 L25 40 L50 15"></path>
                <path className="a3" d="M0 30 L25 54 L50 30"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselPart
