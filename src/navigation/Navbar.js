import React from 'react';
import anath from "../assets/images/anath.png";
import "./navigation.css";

const Navbar = () => {
    return (
        <div>
<header id="home">

<nav className="navbar navbar-default text-dark navbar-fixed  white bootsnav">

    <div className="container">

        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" style={{display:"inline"}}  href="index.html">
                <img src={anath} className="logo logo-display anathImage" style={{height:"30px", marginTop:"10px"}}  alt="Logo"/>
                <img src={anath} className="logo logo-scrolled anathImage" style={{height:"30px", marginTop:"10px",display:"inline"}}  alt="Logo"/> 

                <h5 className='title' style={{display:"inline"}}>MEDIWAVE</h5>
            </a>
        </div>

        <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                    <a className="smooth-menu" href="#home">Home</a>
                </li>
                <li>
                    <a className="smooth-menu" href="#about">About</a>
                </li>
                <li>
                    <a className="smooth-menu" href="#services">Services</a>
                </li>
                <li>
                    <a className="smooth-menu" href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a className="smooth-menu" href="#team">Team</a>
                </li>
                <li>
                    <a className="smooth-menu" href="#pricing">Pricing</a>
                </li>
                <li>
                    <a className="smooth-menu" href="#blog">Blog</a>
                </li>
                <li>
                    <a className="smooth-menu" href="#contact">contact</a>
                </li>
            </ul>
        </div>
    </div>

</nav>

</header>          
</div>
    );
};

export default Navbar;
