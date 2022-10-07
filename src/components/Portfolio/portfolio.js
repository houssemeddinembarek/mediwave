import React from 'react';

const Portfolio = () => {
    return (
        <div>
             <div id="portfolio" className="portfolio-area default-padding">
        <div className="container">
            <div className="row">
                <div className="site-heading">
                    <div className="col-md-8">
                        <h2>Recent <span>Work</span></h2>
                        <p>
                            Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="portfolio-items-area">
                <div className="row">
                    <div className="col-md-12 portfolio-content">
                        <div className="mix-item-menu active-theme">
                            <button className="active" data-filter="*">All</button>
                            <button data-filter=".development">Food</button>
                            <button data-filter=".design">Home</button>
                            <button data-filter=".photography">Education</button>
                            <button data-filter=".branding">Children</button>
                            <button data-filter=".video">Water</button>
                        </div>

                        <div className="row magnific-mix-gallery masonary text-light">
                            <div id="portfolio-grid" className="portfolio-items col-3">
                                <div className="pf-item branding photography">
                                    <div className="effect-item">
                                        <img src="assets/img/800x800.png" alt="thumb" />
                                        <div className="overlay">
                                            <h3>Creative Design</h3>
                                            <a href="assets/img/800x800.png" className="item popup-link"><i className="fa fa-expand"></i></a>
                                            <a href="#"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pf-item video development">
                                    <div className="effect-item">
                                        <img src="assets/img/800x800.png" alt="thumb" />
                                        <div className="overlay">
                                            <h3>Retina Ready</h3>
                                            <a href="assets/img/800x800.png" className="item popup-link"><i className="fa fa-expand"></i></a>
                                            <a href="#"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pf-item design photography">
                                    <div className="effect-item">
                                        <img src="assets/img/800x800.png" alt="thumb" />
                                        <div className="overlay">
                                            <h3>Responsive</h3>
                                            <a href="assets/img/800x800.png" className="item popup-link"><i className="fa fa-expand"></i></a>
                                            <a href="#"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pf-item branding video">
                                    <div className="effect-item">
                                        <img src="assets/img/800x800.png" alt="thumb" />
                                        <div className="overlay">
                                            <h3>User Friendly</h3>
                                            <a href="assets/img/800x800.png" className="item popup-link"><i className="fa fa-expand"></i></a>
                                            <a href="#"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pf-item design photography">
                                    <div className="effect-item">
                                        <img src="assets/img/800x800.png" alt="thumb" />
                                        <div className="overlay">
                                            <h3>Customer Support</h3>
                                            <a href="assets/img/800x800.png" className="item popup-link"><i className="fa fa-expand"></i></a>
                                            <a href="#"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pf-item branding design development">
                                    <div className="effect-item">
                                        <img src="assets/img/800x800.png" alt="thumb" />
                                        <div className="overlay">
                                            <h3>Well Documented</h3>
                                            <a href="assets/img/800x800.png" className="item popup-link"><i className="fa fa-expand"></i></a>
                                            <a href="#"><i className="fas fa-link"></i></a>
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
    );
}

export default Portfolio;
