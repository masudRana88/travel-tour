import React from 'react';
import './HeroSection.css'
const HeroSection = () => {
    return (
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="d-block w-100 he-img-1">
                        <div className="hero-contant font-georama">
                            <h1 className="mb-3">Find your perfect VACATION</h1>
                            <button className="btn btn-primary text-light">Learn More</button>
                        </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="d-block w-100 he-img-2">
                      <div className="hero-contant font-georama">
                            <h1 className="mb-3">Open Your Eyes to The Hidden World</h1>
                            <button className="btn btn-primary text-light">Learn More</button>
                        </div>  
                </div>
            </div>
            <div class="carousel-item">
                <div class="d-block w-100 he-img-3">
                     <div className="hero-contant font-georama">
                            <h1 className="mb-3">Special 7 Days in Switzerland</h1>
                            <button className="btn btn-primary text-light">Learn More</button>
                    </div>   
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    );
};

export default HeroSection;