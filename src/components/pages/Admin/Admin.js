import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useController, useForm } from "react-hook-form";
import { DestinationContext } from '../../../Context/DestinationProvider/DestinationProvider';
import { UpdateFieldContext } from '../../../Context/UpdateContext/UpdateContext';
import UpdateField from './UpdateFields/UpdateField';

const Admin = () => {
    const [addDestination, setAddDestination] = useState(true);
    const [editDestination, setEditDestination] = useState(false);
    const { destinations, setDestinations } = useContext(DestinationContext);
    const { isUpdate, hendleUpdate } = useContext(UpdateFieldContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
        setAddDestination(true)
        setEditDestination(false)
    }
    const hendleEditDestination = () => {
        setAddDestination(false)
        setEditDestination(true)
    }
    // hendle DELETE
    const hendelDelete = id => {
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
    return (
        <div className="container-fluid row">
            <div className="col-lg-4 col-md-4 col-12 mt-5">
                <ul className="list-group">
                    <button onClick={hendleAddDestination} className={addDestination? 'list-group-item nav-link admin-nav active' : 'list-group-item nav-link admin-nav'} aria-current="true">Add Tour</button>
                    <button onClick={hendleEditDestination} className={editDestination? 'list-group-item nav-link admin-nav active' : 'list-group-item nav-link admin-nav'}>Edit Tour</button>
                </ul>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
                <div className="row">
                    <div className="col-12">
                    {
                       addDestination && <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
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
                        <input type="submit" />
                    </form>            
                    }
                    {
                        editDestination && <div className="row mt-5">
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
                                    <button className="btn bg-danger text-light fs-5 ms-2" onClick={()=>hendelDelete(destination._id)}><i className="bi bi-trash-fill"></i></button>
                                </div>
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