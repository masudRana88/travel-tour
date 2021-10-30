import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { DestinationContext } from '../../../Context/DestinationProvider/DestinationProvider';


const Destinstion = () => {
    const { destinations } = useContext(DestinationContext);
    console.log(destinations)
    return (
        <div className="container mt-lg-5 mt-md-3 mt-2">
            <div className="row">
                <h1>Popular Tour Packages</h1>
                {
                    destinations.map(destination => <div className="col-4 g-4">
                        <div class="card">
                        <img src={destination.img} class="card-img-top" alt="" style={{ height: '15rem'}}/>
                        <div class="card-body">
                                <h5 class="card-title">{ destination.name}</h5>
                                <p class="card-text">{destination.description?.slice(0,100) }</p>
                            <NavLink to={`/booking/${destination?._id}`} class="btn btn-primary">Book Now</NavLink>
                        </div>
                    </div>
                    </div>)        
                }
            </div>
        </div>
    );
};

export default Destinstion;