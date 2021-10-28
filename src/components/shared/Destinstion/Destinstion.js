import React from 'react';
import useDestination from '../../../Hooks/useDestination';

const Destinstion = () => {
    const { destinations } = useDestination();
    console.log(destinations)
    return (
        <div className="container mt-lg-5 mt-md-3 mt-2">
            <div className="row">
                {
                    destinations.map(destination => <div className="col-4 g-4">
                        <div class="card">
                        <img src={destination.img} class="card-img-top" alt="" style={{ height: '15rem'}}/>
                        <div class="card-body">
                                <h5 class="card-title">{ destination.name}</h5>
                                <p class="card-text">{destination.descriptino?.slice(0,100) }</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>)        
                }
            </div>
        </div>
    );
};

export default Destinstion;