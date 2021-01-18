import React from 'react';
import cutetaco from '../assets/img/cutetaco.jpg';
const HeroComponent = ({bubble, burger1}) => {

    return(
        <div className="home-hero-section">
            <div className="bubble">
                <img src={bubble} alt="bubble-images " className="w-100 img-fluid" />
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="home-hero-content">
                            <h1>Take <strong>Food</strong> & <strong>Let’s</strong> <span>Go.</span></h1>
                            <p>Have any food on your mind?<span> <a href="contact.html">Just order now!</a></span></p>
                            <a className="btn menu-btn" href="#food-menu">Today's Menu <i className="icofont-double-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="burger-img">
                            <img src={cutetaco} className="w-100 img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroComponent;