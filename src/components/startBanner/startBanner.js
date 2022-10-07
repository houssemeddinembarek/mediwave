import React from 'react';
import "./startBanner.css";
const StartBanner = () => {
    return (
        <div className="banner-area text-center transparent-nav small-text bg-fixed startBanner" >
            <div className="box-table">
                <div className="box-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="content" data-animation="animated fadeInUpBig">
                                    <h2>Lets start with us</h2>
                                    <h1>get solution for your Business</h1>
                                    <a className="btn circle btn-light effect btn-sm" href="#">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartBanner;
