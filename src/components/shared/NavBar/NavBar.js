import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {
    const {user, singInWithGoogle, logOut} = useAuth()
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
                    <NavLink to="/destinations" className="nav-link ">Tour List</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/my-booking" className="nav-link ">My Booking</NavLink>
                    </li>
                    </ul>
                    <p className="my-auto">{user && user.displayName}</p>
                    {
                        user.email?<button className="btn" onClick={logOut}>Log out</button>  :  <button className="btn" onClick={singInWithGoogle}>Login</button>      
                    } 
                    <Link to="/admin"><button className="btn ms-2">Admin</button></Link>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default NavBar;