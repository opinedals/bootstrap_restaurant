import React from 'react';

const ServiceCardComponent = ({service, description}) => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="image-box clearfix">
                <div className="box-image float-left">
                    <img src={service} alt="" />
                </div>
                <div className="image-text float-left">
                    <h2>{description}</h2>
                    <p>It is a long establed fact will distracted readable looking at layou.</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardComponent;