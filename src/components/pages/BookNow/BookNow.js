import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const BookNow = () => {
    const { id } = useParams()
    const [destination, setDestination] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/destinations/${id}`)
        .then(function (response) {
            setDestination(response.data)
        })
    },[])
    return (
        <div className="row container-fluid">
            <div className="col-lg-6 col-m-6 col-sm-12">
                <img src={destination.img} className="img-fluid" />
            </div>
            <div className="col-lg-6 col-m-6 col-sm-12">
                
            </div>
        </div>
    );
};

export default BookNow;