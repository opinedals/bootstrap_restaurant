import React from 'react';

const FoodComponent = ({food}) => {
    return(
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <div className="food-menu text-center">
                <div className="food-img-info">
                    <div className="food-img">
                        <img src={food} className="w-100" alt="" />
                    </div>
                    <div className="overlay text-left">
                        <h4>Ingredients</h4>
                        <span>½ tbsp olive oil Oscar</span>
                        <span>1 onion, peeled and finely chopped</span>
                        <span>1 tsp mixed dried herbs</span>
                        <span>1 egg, beaten</span>
                        <span> 4 slices mature Cheddar (optional)</span>
                    </div>
                </div>
                <div className="food-informaion">
                    <div className="row align-items-center">
                        <div className="col-12"><h2>Chicken Burger</h2></div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <div className="food-info text-left">
                                <span><i className="icofont-clock-time"></i> 25 min away</span>
                                <h3><span>$</span>89.00</h3>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-right">
                            <a href="#" className="btn order-btn2">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodComponent;