import React from 'react';

const OfferComponent = ({offerimg}) => {
    return(
        <div className="offer-section">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="offer-content">
                            <h2>Today's <span>Offers.</span></h2>
                            <h5>It is a long established fact that a will distracted readable content of a page when looking the layout</h5>
                            <blockquote>There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration in form, by injected humour randomised words which don't look even slightly believable.</blockquote>
                            <div className="row mt-4 align-items-center">
                                <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                    <div className="offer text-left">
                                        <h3><span>$</span>89.00</h3>
                                        <span><i className="icofont-clock-time"></i> 25 min away</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-2 text-right">
                                    <a href="#" className="btn offer-btn">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="offer-img">
                            <img src={offerimg} className="w-100 img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferComponent;