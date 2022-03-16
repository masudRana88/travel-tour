import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const BookNow = () => {
    const { id } = useParams()
    const [destination, setDestination] = useState({})
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    let history = useNavigate();
    // submit
    const onSubmit = data => {
        data.orderId = id;
        data.status = "painding"
        data.bookingName = destination.name;
        console.log(data)
        axios.post("https://spooky-ghost-45637.herokuapp.com/manage-oder", data)
        .then(function (response) {
        if (response.status === 200) {
            alert('Booking successful !!')
            reset()
            history("/home");
        }
  })
    };
    // get DATA
    useEffect(() => {
        axios.get(`https://spooky-ghost-45637.herokuapp.com/destinations/${id}`)
        .then(function (response) {
            setDestination(response.data)
        })
    }, [])
    
    return (
        <div className="row container-fluid h-m-100vh mt-4">
            <div className="col-lg-6 col-m-6 col-sm-12">
                <img src={destination.img} className="img-fluid" />
            </div>
            <div className="col-lg-6 col-m-6 col-sm-12">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                        <label className="form-label">Your Name</label>
                        <input type="text" defaultValue={user?.displayName&& user.displayName} {...register("name", { required: true })} placeholder="Type your name" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Your Email</label>
                        <input type="text" defaultValue={user?.email && user.email} {...register("email", { required: true })} placeholder="Type your name" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Your City</label>
                        <input type="text"  {...register("city", { required: true })} placeholder="Type your city" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Your Address</label>
                        <input type="text"  {...register("address", { required: true })} placeholder="Type your Address" className="form-control"/>
                    </div>
                    
                    <input type="submit" value="Booked Now"/>
                </form>
            </div>
        </div>
    );
};

export default BookNow;