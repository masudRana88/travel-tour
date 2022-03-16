import React from 'react';
import "./Spiner.css"
const Spiner = () => {
    return (
        <div className='spiner-box'>
            <div className="spinner-border text-primary spiner-primary" role="status">
                <span class="visually-hidden">Loding ..</span>
            </div>
        </div>
    );
};

export default Spiner;