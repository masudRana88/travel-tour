import React from 'react';
import { useNavigate} from 'react-router-dom';
import './HeroSection.css'
const HeroSection = () => {
    const nacigat = useNavigate()
    return (
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="d-block w-100 he-img-1">
                        <div className="hero-contant font-georama">
                            <h1 className="mb-3">Find your perfect VACATION</h1>
                            <button onClick={()=>nacigat("/destinations")} className="btn btn btn-outline-primary text-light">Learn More</button>
                        </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="d-block w-100 he-img-2">
                      <div className="hero-contant font-georama">
                            <h1 className="mb-3">Open Your Eyes to The Hidden World</h1>
                            <button onClick={()=>nacigat("/destinations")} className="btn btn btn-outline-primary text-light">Learn More</button>
                        </div>  
                </div>
            </div>
            <div className="carousel-item">
                <div className="d-block w-100 he-img-3">
                     <div className="hero-contant font-georama">
                            <h1 className="mb-3">Special 7 Days in Switzerland</h1>
                            <button onClick={()=>nacigat("/destinations")} className="btn btn btn-outline-primary text-light">Learn More</button>
                    </div>   
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    );
};

export default HeroSection;