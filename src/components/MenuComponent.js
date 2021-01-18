import React from 'react';
import FoodComponent from './FoodComponent';

const MenuComponent = ({food1, food2, food3, food4, food5, food6 }) => {
    return(
        <div className="food-menu-section" id="food-menu">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="menu-head text-center">
                            <h2>Regular Menu’s of <span>Hotte.</span></h2>
                            <p>There are many variations of passages of Lorem Ipsum available but majority have suffered alteration injected humour</p>
                        </div>
                    </div>
                </div>
                <div className="row food-box">
                    
                    <FoodComponent food={food1} />
                    <FoodComponent food={food2} />
                    <FoodComponent food={food3} />
                    <FoodComponent food={food4} />
                    <FoodComponent food={food5} />
                    <FoodComponent food={food6} />
                </div>
            </div>
        </div>
    );
}


export default MenuComponent;