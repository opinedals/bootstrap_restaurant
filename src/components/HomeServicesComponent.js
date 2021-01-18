import React from 'react';
import ServiceCardComponent from './ServiceCardComponent';

const HomeServicesComponent = ({honney, macaron, dinner}) => {
    return (
        <div className="home-services-section">
            <div className="container">
                <div className="home-services">
                    <div className="form-row">
                        <ServiceCardComponent service={honney} description={'Choose Food'} />
                        <ServiceCardComponent service={macaron} description={'Place Order'}/>
                        <ServiceCardComponent service={dinner} description={'Receive & Go'} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeServicesComponent;