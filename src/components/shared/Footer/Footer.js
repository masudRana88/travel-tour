import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="container-fluid mt-5 bg-dark">
            <div className="row container  mx-auto pt-5 pb-2 text-light">
                <div className="col-md-3 col-sm-12">
                    <h5><NavLink className="navbar-brand" to="/home"><span className="text-primary">TRAAVEL</span> <span className="text-light">TOUR</span></NavLink></h5>
                </div>
                <div className="col-md-4 col-sm-12 me-md-2 me-lg-2">
                    <h6>Links</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-dark"><NavLink to="/destinations" className="nav-link">Tour list</NavLink></li>
                        <li className="list-group-item bg-dark"><NavLink to="/my-booking" className="nav-link">Your Booking</NavLink></li>
                        
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12 ">
                    <div className="d-flex w-100">
                        <div className="justify-content-end">
                            <h5>Contact</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item text-light bg-dark"><i className="bi bi-telephone-outbound"></i> 088 1836 5972</li>

                                <li className="list-group-item text-light bg-dark"><i className="bi bi-envelope"></i> sappot@gmaial.com</li>

                                <li className="list-group-item text-light bg-dark"> <i className="bi bi-geo-alt"></i> 66 broklyn golden street line New York, USA</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h6 className="text-center mt-3">© Copyright 2020 by TRAVEL TOUR</h6>
            </div>
            
       </footer>
            
    );
};

export default Footer;