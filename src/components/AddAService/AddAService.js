import React from 'react';
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
    console.log(watch("example")); // watch input value by passing the name of it




    return (
        <div>
            {/* This is add a service page!

            Category: Travel Accessories

            Image: url
            Name: Large Suitcase
            Rating: 4.5 star
            Price: $ 108 */}


            {/* Add a new service - react hook form  */}
            <form onSubmit={handleSubmit(onSubmit)}>

                <input value="Travel Accessories" {...register("category")} />

                <input defaultValue="https://detour.hibootstrap.com/images/product/product-1.jpg" {...register("url")} />

                <input placeholder="Accessories name" {...register("name", { required: true })} />

                {errors.name && <span>This field is required!</span>}
                <input placeholder="Ratings" {...register("ratings")} />

                <input placeholder='price' {...register("price", { required: true })} />

                {/* include validation with required or other standard HTML validation rules */}
                {/* <input {...register("exampleRequired", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                {/* <input type="submit" /> */}
                <button className="btn btn-accent">SUBMIT</button>
            </form>

        </div>
    );
};

export default AddAService;