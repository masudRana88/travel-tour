import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react/cjs/react.development';
import { UpdateFieldContext } from '../../../../Context/UpdateContext/UpdateContext';


const UpdateFields = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { setIsUpdate, id } = useContext(UpdateFieldContext);
    const [courentDestination, setCourentDestination] = useState({})
    const onSubmit = data => {
        console.log(data)
        // axios.patch(`http://localhost:5000/destinations/update/${id}`, data)
        //     .then(function (response) {
        //     console.log(response)
        //     if (response.status === 200) {
        //         reset()
        //         alert('Update Secssfull !!')
        //         setIsUpdate(false)
        //      }
        // })
    };
    useEffect(() => {
        fetch(`http://localhost:5000/destinations/${id}`)
        .then(rsc => rsc.json())
        .then(data => setCourentDestination(data))
        
    }, [id]);
    console.log(courentDestination?._id)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                             {/* Name */}
                        <div class="mb-3">
                            <label class="form-label">Destination name</label>
                            <input type="text" defaultValue={courentDestination?.name} {...register("name")} placeholder="Type Destination name" class="form-control"/>
                        </div>
                            {/* description */}
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea type="text" defaultValue={courentDestination?.description} {...register("description")} class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Price</label>
                            <input type="number" defaultValue={courentDestination?.price} {...register("price")} class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Image Link</label>
                            <input type="text" defaultValue={courentDestination?.img} {...register("img")} class="form-control"/>
                        </div>
                        <input type="submit" />
                    </form> 
        </div>
    );
};

export default UpdateFields;