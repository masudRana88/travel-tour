import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { DestinationContext } from '../../../../Context/DestinationProvider/DestinationProvider';
import { UpdateFieldContext } from '../../../../Context/UpdateContext/UpdateContext';


const UpdateFields = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { setIsUpdate, id } = useContext(UpdateFieldContext);
    const {destinations, setDestinations} = useContext(DestinationContext);
    const [courentDestination, setCourentDestination] = useState({})
    const onSubmit = data => {
        axios.patch(`https://spooky-ghost-45637.herokuapp.com/destinations/update/${id}`, data)
            .then(function (response) {
            console.log(response)
            if (response.status === 200) {
                reset()
                alert('Update Secssfull !!')
                setIsUpdate(false)
                // const reminder = destinations.filter(destination => destination._id !== id);
             }
        })
    };
    useEffect(() => {
        fetch(`https://spooky-ghost-45637.herokuapp.com/destinations/${id}`)
        .then(rsc => rsc.json())
        .then(data => setCourentDestination(data))
        
    }, [id]);
    console.log(courentDestination?._id)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                             {/* Name */}
                        {
                        courentDestination.name && <div className="mb-3">
                            <label className="form-label">Destination name</label>
                            <input type="text" defaultValue={courentDestination.name} {...register("name")} placeholder="Type Destination name" className="form-control"/>
                        </div>
                        }
                            {/* description */}
                        { 
                        courentDestination?.description&& <div className="mb-3">
                            <label for="description" className="form-label">Description</label>
                            <textarea type="text" defaultValue={courentDestination.description} {...register("description")} className="form-control"/>
                        </div>
                        }
                        {
                        courentDestination?.price&& <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" defaultValue={courentDestination.price} {...register("price")} className="form-control"/>
                        </div>
                        }
                        {
                        courentDestination?.img&& <div className="mb-3">
                            <label className="form-label">Image Link</label>
                            <input type="text" defaultValue={courentDestination.img} {...register("img")} className="form-control"/>
                        </div>
                        }
                        
                        <input type="submit" value="Update" />
                    </form> 
        </div>
    );
};

export default UpdateFields;