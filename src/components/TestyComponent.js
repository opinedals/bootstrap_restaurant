import React from 'react';

const TestyComponent = () => {
    return (
        <div className="testy-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-6">
                        <div className="testy-content">
                            <h3>We make testy <span>food everyday</span></h3>
                            <p>If you are going to use aa passage of you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 text-center">
                        <div className="video-content">
                            <div className="video">
                                <a href="https://youtu.be/V6Vd1E9OL-U" className="venobox" data-autoplay="true" data-vbtype="video">
                                    <i className="icofont-ui-play"></i>
                                </a>
                            </div>
                            <span>20 Minutes Intro</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestyComponent;