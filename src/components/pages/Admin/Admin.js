import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useController, useForm } from "react-hook-form";
import { DestinationContext } from '../../../Context/DestinationProvider/DestinationProvider';
import { UpdateFieldContext } from '../../../Context/UpdateContext/UpdateContext';
import UpdateField from './UpdateFields/UpdateField';


const Admin = () => {
    const [addTour, setAddTour] = useState(true);
    const [editTour, setEdiTour] = useState(false);
    const [manageOrder, setManageOrder] = useState(false);
    const [allOrder , setAllOrder] = useState([]) 
    const { destinations, setDestinations } = useContext(DestinationContext);
    const { isUpdate, hendleUpdate } = useContext(UpdateFieldContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
           axios.get("http://localhost:5000/order")
               .then(function (response) {
                setAllOrder(response.data)
            });
    }, [allOrder])

    // hendel OnSubmit
    const onSubmit = data => {
        axios.post('http://localhost:5000/destinations', data)
        .then(function (response) {
            if (response.status === 200) {
                reset()
                alert('Destination Add Secssfull !!')
                setDestinations([...destinations,data])
             }
        })
    };

    const hendleAddDestination = () => {
        setAddTour(true)
        setEdiTour(false)
        setManageOrder(false)
    }
    const hendleEditDestination = () => {
        setAddTour(false)
        setEdiTour(true)
        setManageOrder(false)
    }
    const hendleOrder = () => {
        setAddTour(false)
        setEdiTour(false)
        setManageOrder(true)
    }
    // hendle DELETE
    const hendelDeleteTour = id => {
        const confirm = window.confirm('Are you suer to Delete this item')
        if (confirm) {
            axios.delete(`http://localhost:5000/destinations/${id}`)
        .then(function (response) {
            // handle success
            console.log(response.status === 200);
            const reminder = destinations.filter(destination => destination._id !== id);
            setDestinations(reminder);
        })
        }
    }
    // Delete Order
    const hendleDeleteOrder = (id) => {
        const confirm = window.confirm('Are you suer to Delete this item')
        if (confirm) {
            axios.delete(`http://localhost:5000/manage-oder/${id}`)
        .then(function (response) {
            // handle success
            console.log(response.status === 200);
            const reminder = allOrder.filter(order => order._id !== id);
            setAllOrder(reminder);
        })
        }
    }
    // Approve Order
    const hendleOrderApprove = id => {
         const confirm = window.confirm('Are you suer to Approve this item')
        if (confirm) {
            console.log()
            axios.patch(`http://localhost:5000/manage-oder/${id}`, )
        .then(function (response) {
            // handle success
            console.log(response.status === 200);
            const reminder = allOrder.filter(order => order._id !== id);
            setAllOrder(reminder);

        })
        }
    }
    return (
        <div className="container-fluid row h-m-100vh" style={{minHeight: "100vh"}}>
            {/* Button */}
            <div className="col-lg-4 col-md-4 col-12 mt-5">
                <ul className="list-group">
                    <button onClick={hendleAddDestination} className={addTour? 'list-group-item nav-link admin-nav active' : 'list-group-item nav-link admin-nav'} aria-current="true">Add Tour</button>
                    <button onClick={hendleEditDestination} className={editTour? 'list-group-item nav-link admin-nav active' : 'list-group-item nav-link admin-nav'}>Edit Tour</button>
                    <button onClick={hendleOrder} className={manageOrder? 'list-group-item nav-link admin-nav active' : 'list-group-item nav-link admin-nav'}>Manage Order</button>
                </ul>
            </div>
            {/* Side bar */}
            <div className="col-lg-8 col-md-8 col-12">
                <div className="row">
                    <div className="col-12">
                    {
                       addTour && <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                             {/* Name */}
                        <div className="mb-3">
                            <label className="form-label">Tour name</label>
                            <input type="text" defaultValue="" {...register("name", { required: true })} placeholder="Type Destination name" className="form-control"/>
                        </div>
                            {/* description */}
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea type="text" defaultValue="" {...register("description", { required: true })} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" defaultValue="" {...register("price", { required: true })} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image Link</label>
                            <input type="text" defaultValue="" {...register("img", { required: true })} className="form-control"/>
                        </div>
                        <input type="submit" value="Uplode" className="btn bg-info"/>
                    </form>            
                    }
                    {
                        editTour && <div className="row mt-5">
                            {
                                isUpdate && <UpdateField destinations={destinations} setDestinations={setDestinations}></UpdateField>        
                            }  
                            {
                                destinations.map((destination, index) => <div key={destination._id} className="col-12 bg-light mb-3 p-3 d-flex justify-content-between">
                                <h5>{index + 1} {destination.name}</h5>
                                <div>
                                    <button className="btn bg-info text-light" onClick={()=>hendleUpdate(destination._id)}>
                                        Update
                                    </button>
                                    <button className="btn bg-danger text-light fs-5 ms-2" onClick={()=>hendelDeleteTour(destination._id)}><i className="bi bi-trash-fill"></i></button>
                                </div>
                            </div>)        
                            }
                       </div> 
                    }
                    {
                        manageOrder && <div>
                        {
                        allOrder.map(order => <div key={order._id} className="p-2 mt-3" style={{background: "#D4CBC9"}}>
                            <h5>user name : {order.name}</h5>
                            <h5>user email: {order.email}</h5>
                            <h5>Booking for : {order.bookingName}</h5>
                            <h6>Status : <span className="text-danger">{order.status}</span></h6>
                            <button className="btn bg-info text-light" onClick={()=>hendleOrderApprove(order._id)}>Approve</button> 
                            <button className="btn bg-danger text-light ms-3" onClick={()=>hendleDeleteOrder(order._id)}>Delete</button>
                        </div>)    
                        }
                        </div>         
                    }    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;