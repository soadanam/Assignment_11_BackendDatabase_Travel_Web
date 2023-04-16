import React from 'react';
import './AddAService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';



const AddAService = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log("Add service form DATA:", data);
        axios.post('http://localhost:7777/addNewService', {
            data: data
        });

        reset();
    };
    // console.log(watch("example")); // watch input value by passing the name of it


    // Tab Name
    document.title = "Add New Services";


    return (
        <div className='container mx-auto pt-40 pb-40 service-container'>

            {/* Add a new service - react hook form  */}
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* <input value="Travel Accessories" {...register("category")} /> */}

                <h4>Service Name: </h4>
                <input placeholder="Accessories name" {...register("name", { required: true })} /> <br />
                {errors.name && <span className='service-required-text'>*This field is required!</span>}

                <h4>Price:</h4>
                <input placeholder='price' {...register("price", { required: true })} /> <br />
                {errors.price && <span className='service-required-text'>*This field is required!</span>}

                <h4>Ratings: </h4>
                <input placeholder="Ratings" {...register("ratings", {required: true})} /> <br />
                {errors.ratings && <span className='service-required-text'>*This field is required!</span>}

                <h4>Add Image URL:</h4>
                <input defaultValue="https://image.made-in-china.com/2f0j00nMdlyphrrIcf/New-PP-Luggage-From-Bubule-Factory.jpg" {...register("url", {required: true})} /> <br />
                {errors.url && <span className='service-required-text'> *This field is required!</span>}
                <br /><br />

                {/* <input type="submit" /> */}
                <button className="btn btn-accen add-new-service-add-new-btn">Add NEW Service</button>
            </form>

        </div>
    );
};

export default AddAService;