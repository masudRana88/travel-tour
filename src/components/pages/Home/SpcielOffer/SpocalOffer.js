import React from 'react';
import { NavLink } from 'react-router-dom';

const SpcielOffer = () => {
    return (
        <div className="container-fluid ">
            <div class="d-block w-100 offer-BGimg">
                        <div className="hero-contant font-georama">
                            <h1 className="mb-3">Special 7 Days in Bora Bora, French Polynesia</h1>
                            <NavLink to="/booking/617b6f3e7a71ab32aab9a9e3"><button className="btn btn-primary text-light">Get this Offer
                            </button></NavLink>
                        </div>
                </div>
        </div>
    );
};

export default SpcielOffer;