import React from 'react';
import { Link, NavLink ,useNavigate} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {
    const { user, logOut } = useAuth()
    const history = useNavigate()
    return (
        <div className="w-100 bg-primary">
            <nav className="ms-1 navbar navbar-expand-lg navbar-dark bg-primary ">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home"><span className="text-dark">TRAAVEL</span> TOUR</NavLink>
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
                    <NavLink to="/aboutus" className="nav-link ">About us</NavLink>
                    </li>
                    {
                        user.email && <li className="nav-item">
                    <NavLink to="/my-booking" className="nav-link ">My Booking</NavLink>
                    </li>            
                    }
                    </ul>
                    <p className="my-auto">{user && user.displayName}</p>
                    {
                        user.email?<button className="btn btn-outline-danger ms-2" onClick={logOut}><i className="bi bi-box-arrow-left"></i> Log out</button>  :  <Link to="/login"><button className="btn btn-outline-info" ><i className="bi bi-box-arrow-in-right"></i> Login</button></Link>      
                    } 
                    <Link to="/admin"><button className="btn btn-outline-info ms-2"><i className="bi bi-person"></i> Admin</button></Link>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default NavBar;