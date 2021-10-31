import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const BookNow = () => {
    const { id } = useParams()
    const [destination, setDestination] = useState({})
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    // submit
    const onSubmit = data => {
        data.orderId = id;
        data.status = "painding"
        data.bookingName = destination.name;
        console.log(data)
        axios.post("http://localhost:5000/manage-oder", data)
        .then(function (response) {
        if (response.status === 200) {
            alert('Booking successful !!')
            reset()
            history.push("/home");
        }
  })
    };
    // get DATA
    useEffect(() => {
        axios.get(`http://localhost:5000/destinations/${id}`)
        .then(function (response) {
            setDestination(response.data)
        })
    }, [])
    let history = useHistory();
    return (
        <div className="row container-fluid h-m-100vh">
            <div className="col-lg-6 col-m-6 col-sm-12">
                <img src={destination.img} className="img-fluid" />
            </div>
            <div className="col-lg-6 col-m-6 col-sm-12">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="mb-3">
                        <label class="form-label">Your Name</label>
                        <input type="text" defaultValue={user?.displayName&& user.displayName} {...register("name", { required: true })} placeholder="Type your name" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Your Email</label>
                        <input type="text" defaultValue={user?.email && user.email} {...register("email", { required: true })} placeholder="Type your name" class="form-control"/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Your City</label>
                        <input type="text"  {...register("city", { required: true })} placeholder="Type your city" class="form-control"/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Your Address</label>
                        <input type="text"  {...register("address", { required: true })} placeholder="Type your Address" class="form-control"/>
                    </div>
                    
                    <input type="submit" value="Booked Now"/>
                </form>
            </div>
        </div>
    );
};

export default BookNow;