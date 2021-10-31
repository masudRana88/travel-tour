
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import "./MyBooking.css"
const MyBooking = () => {
    const { user , isLoding} = useAuth()
    const [allBoking, setAllBooking] = useState([])
    useEffect(() => {
        const email = user?.email;
        axios.get(`https://spooky-ghost-45637.herokuapp.com/manage-oder/${email}`)
            .then(function (response) {
                setAllBooking(response.data)
            });
    }, [allBoking])
    // hendele DELETE btn
    const hendelDelete = id => {
        const confirm = window.confirm('Are you suer to Delete this item')
        if (confirm) {
            axios.delete(`https://spooky-ghost-45637.herokuapp.com/manage-oder/${id}`)
        .then(function (response) {
            // handle success
            console.log(response.status === 200);
            const reminder = allBoking.filter(booking => booking._id !== id);
            setAllBooking(reminder);
        })
        }
    }
    return (
        <div className="h-100vh">
            {
               !isLoding ?  <div className="container">
                <h3 className="mt-5">My booking</h3>
            {
                allBoking?.map((booking, index) => <div key={booking._id} className="col-12 bg-light mb-3 mt-4 p-3 d-flex justify-content-between">
                <h5>{index + 1} {booking.bookingName}</h5>
                <div className="d-flex">
                    <h5 className="text-info me-3">{booking.status}</h5>
                    <button onClick={()=>hendelDelete(booking._id)} className="btn bg-danger text-light fs-5 ms-2" ><i class="bi bi-trash-fill"></i></button>
                </div>
            </div>)        
            }
            </div> :
            <div className="w-100 text-center mt-5">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>     
            </div>        
            }
        </div>
    );
};

export default MyBooking;