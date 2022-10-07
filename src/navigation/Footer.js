import React from 'react';

const Footer = () => {
    return (
        <div>
    <footer className="text-light default-padding centered bg-dark text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="logo">
                        <img src="assets/img/logo-light.png" alt="Logo"/>
                    </div>
                    <div className="footer-social">
                        <ul>
                            <li className="facebook">
                                <a href="#">Fb</a>
                            </li>
                            <li className="twitter">
                                <a href="#">Tw</a>
                            </li>
                            <li className="google">
                                <a href="#">G+</a>
                            </li>
                            <li className="vimeo">
                                <a href="#">Vm</a>
                            </li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <p>&copy; Copyright 2018. Adipotto Template By <a href="#">Validthemes</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
    );
}

export default Footer;
