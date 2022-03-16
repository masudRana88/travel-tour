import React from 'react';
import { NavLink,useLocation,useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { DestinationContext } from '../../../Context/DestinationProvider/DestinationProvider';

const Destinstion = () => {
    const { destinations } = useContext(DestinationContext);
    const { pathname } = useLocation();
    const navigate = useNavigate()

    return (
        <div className="container mt-lg-5 mt-md-3 mt-2">
                {pathname === "/destinations" && <button onClick={()=>navigate("/")} className="btn btn-outline-primary mb-lg-3 mb-md-3 mb-2">BACK</button>}
            <div className="row">
                <h1>Popular Tour Packages</h1>
                {
                    destinations.map(destination => <div key={destination._id} className="col-lg-4 col-md-6 col-12  g-4">
                        <div className="card">
                        <img src={destination.img} className="card-img-top" alt="" style={{ height: '15rem'}}/>
                        <div className="card-body">
                                <h5 className="card-title">{ destination.name}</h5>
                                <p className="card-text">{destination.description?.slice(0,100) }</p>
                            <div className="d-flex">
                                <NavLink to={`/booking/${destination?._id}`} ><button className="btn btn-outline-primary">Book Now</button></NavLink> <h5 className="ms-3">${destination.price} </h5>       
                            </div>
                        </div>
                    </div>
                    </div>)        
                }
            </div>
        </div>
    );
};

export default Destinstion;