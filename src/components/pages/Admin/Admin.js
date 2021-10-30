import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UpdateFieldContext } from '../../../Context/UpdateContext/UpdateContext';
import useDestination from '../../../Hooks/useDestination';
import UpdateField from './UpdateFields/UpdateField';

const Admin = () => {
    const [addDestination, setAddDestination] = useState(true);
    const [editDestination, setEditDestination] = useState(false);
    const { destinations, setDestinations } = useDestination();
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
            const reminder = destinations.filter(destination => destination._id !== id)
            setDestinations(reminder);
        })
        }
    }
    return (
        <div className="container-fluid row">
            <div className="col-lg-4 col-md-4 col-12 mt-5">
                <ul class="list-group">
                    <button onClick={hendleAddDestination} class={addDestination? 'list-group-item nav-link admin-nav active' : 'list-group-item nav-link admin-nav'} aria-current="true">Add Destination</button>
                    <button onClick={hendleEditDestination} class={editDestination? 'list-group-item nav-link admin-nav active' : 'list-group-item nav-link admin-nav'}>Edit Destination</button>
                </ul>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
                <div className="row">
                    <div className="col-12">
                    {
                       addDestination && <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                             {/* Name */}
                        <div class="mb-3">
                            <label class="form-label">Destination name</label>
                            <input type="text" defaultValue="" {...register("name", { required: true })} placeholder="Type Destination name" class="form-control"/>
                        </div>
                            {/* description */}
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea type="text" defaultValue="" {...register("description", { required: true })} class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Price</label>
                            <input type="number" defaultValue="" {...register("price", { required: true })} class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Image Link</label>
                            <input type="text" defaultValue="" {...register("img", { required: true })} class="form-control"/>
                        </div>
                        <input type="submit" />
                    </form>            
                    }
                    {
                        editDestination && <div className="row mt-5">
                            {
                                isUpdate && <UpdateField></UpdateField>        
                            }  
                            {
                                destinations.map((destination, index) => <div key={destination._id} className="col-12 bg-light mb-3 p-3 d-flex justify-content-between">
                                <h5>{index + 1} {destination.name}</h5>
                                <div>
                                    <button className="btn bg-info text-light" onClick={()=>hendleUpdate(destination._id)}>
                                        Update
                                    </button>
                                    <button className="btn bg-danger text-light fs-5 ms-2" onClick={()=>hendelDelete(destination._id)}><i class="bi bi-trash-fill"></i></button>
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