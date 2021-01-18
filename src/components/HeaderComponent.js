import React from 'react';

const HeaderComponent = ({logo, status, schedule, telephone}) => {

    return(
        <header>
        <div className="header py-1">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light px-0 py-0">
                    <a className="navbar-brand" href="#">
                        <div className="logo">
                            <img src={logo} className="w-100 img-fluid" alt="" />
                        </div>
                    </a>
                    <div className="open-time">
                        <h6><i className="icofont-clock-time"></i>{status}</h6>
                        <span>{schedule}</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="icofont-navigation-menu"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-custom">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Blog</a>
                                    <a className="dropdown-item" href="#">Single Post</a>
                                    <a className="dropdown-item" href="#">404_Error</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>

                            <li className="nav-item last-menu-bg">
                                <span className="nav-link"><a href="#">{telephone}</a></span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    );
};

export default HeaderComponent;