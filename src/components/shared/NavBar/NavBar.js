import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="w-100 bg-light">
            <nav className="ms-1 navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home"><span className="text-primary">TRAAVEL</span> TOUR</NavLink>
                    {/* NavBar button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    {/* NavBar link */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink to="/home" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/destinations" className="nav-link ">Destinations</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/my-booking" className="nav-link ">My Booking</NavLink>
                    </li>
                 </ul>
                    <button>Login</button>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default NavBar;