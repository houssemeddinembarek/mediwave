import React from 'react'
import logoWeb from '../../..//assets/images/anath.png'

const Header = () => {
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
                <a className="nav-link" href="#Projets">
                  Projets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#FAQ">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Stratégie">
                  Stratégie
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-3 mb-lg-0" href="#Team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-3 mb-lg-0" href="#Investir">
                  Investir
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-3 mb-lg-0" href="#Contact">
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
    </div>
  )
}

export default Header
