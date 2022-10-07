import React from 'react';

const Skills = () => {
    return (
    <div>
        <div className="skill-area bg-gray">
            <div className="container-full">
                <div className="row">
                    <div className="col-md-6 thumb bg-cover" style={{backgroundImage: "url(../../../public/assets/img/2440x1578.png)"}}></div>
                    <div className="col-md-6 info">
                        <div className="site-heading">
                            <h2>Our <span>Skill</span></h2>
                            <p>
                                Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. 
                            </p>
                            <p>
                                Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought. 
                            </p>
                        </div>
                        <div className="skills-section">
                            <div className="progress-box">
                                <h5>Strategy & Analysis <span className="pull-right">88%</span></h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-width="87"></div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <h5>Eeconomic growth <span className="pull-right">95%</span></h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-width="96"></div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <h5>Achieves goals <span className="pull-right">70%</span></h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-width="52"></div>
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

export default Skills;
