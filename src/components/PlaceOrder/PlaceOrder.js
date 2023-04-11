import React from 'react';
import './PlaceOrder.css';
import { faCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFaceAngry, faPlane, faPlaneDeparture, faLocation, faLocationDot, faClock, faUserTie, faShare, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import axios from 'axios';
// import { MongoClient } from "mongodb";
import useAuth from '../../Hooks/useAuth';







const PlaceOrder = () => {

    //react-hook-form's function to Submit the user's "Orders"
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = myData => {
        console.log("Data::", myData)

        // POST API Call - fetch  
        fetch('http://localhost:7777/pack', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("res from server>> Data >>", data);
                alert('Successfully submitted!')
            })

        reset();

        //POST API CALL - by AXIOS
        /* axios({
            method: 'post',
            url: 'http://localhost:7777/pack',
            data: myData,
          }); */
    };

    console.log(watch("example")); // watch input value by passing the name of it



    ///logged in users info
    const { user } = useAuth();
    // console.log("NN::", user.email)




    return (

        <div className='bg-green-500 py-12'>

            This is Tour Details!!!

            {/* details carousel section  */}
            <div className="details-carousel">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* Name, duration, location section  */}
            <div className="name-duration-location-section bg-red-200 lg:flex items-center justify-between container mx-auto">

                <div className="name-details-left bg-slate-400 text-left">
                    <h2>National Park 2 Days Tour</h2>
                    <h3> <span className='text-orange-600 font-medium common-orange-color'> $870 </span> /Per Person</h3>
                </div>

                <div className="duration-location-right md:flex text-left bg-red-600">
                    <div className="duration flex items-center">
                        <div className="duration-icon">
                            <FontAwesomeIcon icon={faClock} />
                            {/* <i className="fa-regular fa-clock"></i> */}
                        </div>
                        <div className="duration-details">
                            <p>Duration</p>
                            <h6>3 Days</h6>
                        </div>
                    </div>
                    <div className="min-age flex items-center">
                        <div className="min-age-icon">
                            <FontAwesomeIcon icon={faUserTie} />
                        </div>
                        <div className="min-age-details">
                            <p>Min Age</p>
                            <h6>12+</h6>
                        </div>
                    </div>
                    <div className="tour-type flex items-center">
                        <div className="tour-type-icon">
                            <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
                        </div>
                        <div className="tour-type-details">
                            <p>Tour Type</p>
                            <h6>Adventure, Fun</h6>
                        </div>
                    </div>
                    <div className="location-details flex items-center">
                        <div className="location-details-icon">
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                        </div>
                        <div className="location-details">
                            <p>Location</p>
                            <h6>Los Angeles</h6>
                        </div>
                    </div>
                </div>



            </div>


            {/* share-section  */}
            <div className="container mx-auto bg-slate-300 md:flex justify-between">

                <div className="share-left md:flex">
                    <div className="posted flex items-center">
                        <i className="fa-regular fa-clock"></i>
                        <p>Posted 2 days ago</p>
                    </div>

                    <div className="ratings flex items-center bg-slate-400">
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        </div>
                        <p>8.0 Superb</p>
                    </div>
                </div>

                <div className="share-right text-left ">
                    <button className="btn gap-2">
                        <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                        Share
                    </button>
                </div>
            </div>


            {/* Overview section  */}
            <div className="overview-section container bg-red-300 mx-auto">
                <h2 className='text-left'>Overview</h2>
                <p className='text-left'>Lorem ipsum available isn but the majority have suffered alteratin in some or form injected simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.</p>
            </div>


            {/* Include-exclude section  */}
            <div className="include-exclude-section container mx-auto mt-10">
                <h2>Include/Exclude</h2>

                <div className="content flex justify-between">
                    <div className="include-left text-left bg-slate-300">
                        <p> <FontAwesomeIcon icon={faCheck} /> Pick and Drop Services</p>
                        <p> <FontAwesomeIcon icon={faCheck} /> 1 Meal      Per Day</p>
                        <p> <FontAwesomeIcon icon={faCheck} /> Cruise Dinner & Music Event</p>
                        <p> <FontAwesomeIcon icon={faCheck} /> Visit 7 Best Places in the City With Group</p>
                    </div>
                    <div className="include-right text-left bg-slate-400">
                        <p> <FontAwesomeIcon icon={faXmark} /> Additional Services</p>
                        <p> <FontAwesomeIcon icon={faXmark} /> Insurance</p>
                        <p> <FontAwesomeIcon icon={faXmark} />
                            Food & Drinks </p>
                        <p> <FontAwesomeIcon icon={faXmark} /> Tickets </p>

                    </div>
                </div>
            </div>


            {/* Tour Plan section  */}
            <div className="tour-plan-section container mx-auto bg-fuchsia-300 mt-10">
                <h2>Tour Plan</h2>

                <div className="accordion">
                    <div className="accordion">
                        <div className="accordion-item">
                            <div className="accordion-header">Section: 1</div>
                            <div className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores optio dolores voluptas possimus quas rerum veritatis aliquam obcaecati amet maiores explicabo, illo, ea porro quos placeat. Adipisci, modi aut?</div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">Section 2</div>
                            <div className="accordion-content">Suspendisse potenti. Nullam sit amet sapien vel metus cursus bibendum.</div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">Section 3</div>
                            <div className="accordion-content">Donec id nisl eu urna accumsan scelerisque vitae non ipsum.</div>
                        </div>
                    </div>
                </div>
            </div>


            {/* highlight section  */}
            <div className="highligh-section container mx-auto bg-slate-300 mt-12">
                <h2 className='text-left'>Highlight</h2>

                <div className="highlight-content text-left">
                    <p className='mb-5'><FontAwesomeIcon icon={faCircle} /> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. </p>
                    <p className='mb-5'><FontAwesomeIcon icon={faCircle} /> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. </p>
                    <p className='mb-5'><FontAwesomeIcon icon={faCircle} /> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. </p>
                    <p className='mb-5'><FontAwesomeIcon icon={faCircle} /> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. </p>
                    <p className='mb-5'><FontAwesomeIcon icon={faCircle} /> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. </p>
                    <p className='mb-5'><FontAwesomeIcon icon={faCircle} /> Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. </p>
                </div>
            </div>



            {/* gallery section  */}
            <div className="gallery-section container mx-auto bg-fuchsia-200">
                <h2>Gallery </h2>
                <div className="details-images grid grid-cols-12 gap- ">
                    <div className="details-image d-image-1 bg-slate-400 col-span-4">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/gl-1.png" alt="" />
                    </div>
                    <div className="details-image bg-slate-300 d-image-2 col-span-4">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/gl-2.png" alt="" />
                    </div>
                    <div className="details-image d-image-3 bg-slate-500 col-span-4 row-span-2">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/g-xl-1.png" alt="" />
                    </div>
                    <div className="details-image d-image-4 bg-red-300 col-span-8">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/g-xxl-1.png" alt="" />
                    </div>
                    <div className="details-image d-image-1 bg-slate-400 col-span-4">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/gl-3.png" alt="" />
                    </div>
                    <div className="details-image bg-slate-300 d-image-2 col-span-4">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/gl-4.png" alt="" />
                    </div>
                    <div className="details-image d-image-3 bg-slate-500 col-span-4 row-span-2">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/g-xl-2.png" alt="" />
                    </div>
                    <div className="details-image d-image-4 bg-red-300 col-span-8">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/g-xxl-2.png" alt="" />
                    </div>
                    <div className="details-image d-image-1 bg-slate-400 col-span-4">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/gl-5.png" alt="" />
                    </div>
                    <div className="details-image bg-slate-300 d-image-2 col-span-4">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/gl-6.png" alt="" />
                    </div>
                    <div className="details-image d-image-3 bg-slate-500 col-span-4 row-span-2">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/g-xl-3.png" alt="" />
                    </div>
                    <div className="details-image d-image-4 bg-red-300 col-span-8">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/g-xxl-3.png" alt="" />
                    </div>
                    <div className="details-image d-image-1 bg-slate-400 col-span-4">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/gl-17.png" alt="" />
                    </div>
                    <div className="details-image bg-slate-300 d-image-2 col-span-4">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/gl-16.png" alt="" />
                    </div>
                    <div className="details-image d-image-3 bg-slate-500 col-span-4 row-span-2">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/g-xl-4.png" alt="" />
                    </div>
                    <div className="details-image d-image-4 bg-red-300 col-span-8">
                        <img src="https://tourx-next.vercel.app/assets/images/gallary/g-xxl-4.png" alt="" />
                    </div>
                </div>
            </div>



            {/* Booking form // react hook form  */}

            <div className="booking-form">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />

                    {/* include validation with required or other standard HTML validation rules */}

                    <input defaultValue={user.email} {...register("email")} />

                    <select {...register("ticket")}>
                        <optgroup label="Ticket Type:">
                            <option value="bus">Travel With Bus</option>
                            <option defaultValue="plane" selected>Travel With Plane</option>
                            <option value="train"> Travel with Train</option>
                        </optgroup>
                    </select>

                    <input value='Pending' {...register("status")} />
                    <input placeholder='Password' type='password' {...register("pass", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    {/* <input type="submit" /> */}
                    <button className="btn btn-secondary">Submit</button>
                </form>

            </div>






        </div>
    );
};

export default PlaceOrder;