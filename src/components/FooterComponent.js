import React from 'react';

const FooterComponent = ({logo, border, line2, line3}) => {

    return(
    <>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                        <div className="footer-top-content">
                            <div className="logo">
                                <img src={logo} className="w-100 img-fluid" alt="" />
                            </div>
                            <p>If you are going to use a passage of need to be sure there isn't anything hidden in the middle text.</p>
                            <span>If you are going to use a passage of need to be sure there isn't</span>
                            <ul className="social-icon-list">
                                <li>
                                    <a href="#"><i className="icofont-facebook"></i></a>
                                </li>
                                <li className="social-icon custom-icon-pinterest">
                                    <a href="#"><i className="icofont-pinterest"></i></a>
                                </li>
                                <li className="social-icon custom-icon-dribbble">
                                    <a href="#"><i className="icofont-dribbble"></i></a>
                                </li>
                                <li className="social-icon custom-icon-twitter">
                                    <a href="#"><i className="icofont-twitter"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="contact-content">
                            <h3>Contact Us</h3>
                            <img src={border} alt="" />
                            <div className="contact-info d-flex align-items-center">
                                <div className="icon"><i className="icofont-phone"></i></div>
                                <div className="info">
                                    <a href="#">+880 659 468</a>
                                    <a href="#">02 697 86456</a>
                                </div>
                            </div>
                            <div className="contact-info d-flex align-items-center">
                                <div className="icon"><i className="icofont-email"></i></div>
                                <div className="info">
                                    <a href="#">support@gmail.com</a>
                                    <a href="#">hotte24@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-info d-flex align-items-center">
                                <div className="icon"><i className="icofont-google-map"></i></div>
                                <div className="info">
                                    <a href="#">855 Road, Brooklyn Street New York 600, Wisconsin(WI)</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                        <div className="opening-hours">
                            <div className="opening-content">
                                <h3>Opening Hours:</h3>
                                <div className="row mt-4">
                                    <div className="col-4 mt-2">
                                        <span>Sunday</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <img src={line2} alt="" />
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span className="closeing-day">Closeing Day</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span>Monday</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <img src={line2} alt="" />
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span>8AM - 10PM</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span>Tuesday</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <img src={line2} alt="" />
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span>8AM - 10PM</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span>Wednesday</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <img src={line2} alt="" />
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span>8AM - 10PM</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span className="custom-date-span">Thursday</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <img src={line3} alt="" />
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span className="custom-date-span">8AM - 10PM</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span>Friday</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <img src={line2} alt="" />
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span>8AM - 10PM</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span>Saturday</span>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <img src={line2} alt="" />
                                    </div>
                                    <div className="col-4 mt-2">
                                        <span>8AM - 10PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bootom">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                        <div className="copyright-txt">
                            <p>Copyright 2020. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                        <div className="terms">
                            <span><a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default FooterComponent;