import React from 'react';
import './PlaceOrder.css';
import { faCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFaceAngry, faPlane, faPlaneDeparture, faLocation, faLocationDot, faClock, faUserTie, faShare, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import axios from 'axios';
// import { MongoClient } from "mongodb";
import useAuth from '../../Hooks/useAuth';

import park1 from '../../images/park/park3.jpg';
import park2 from '../../images/park/park1.jpg';
import park3 from '../../images/park/park4.jpg';
import park4 from '../../images/park/park5.jpg';

import gallery1 from '../../images/gallery/gl-1.png';
import gallery2 from '../../images/gallery/gl-2.png';
import gallery3 from '../../images/gallery/g-xl-1.png';
import gallery4 from '../../images/gallery/g-xxl-1.png';
import gallery5 from '../../images/gallery/gl-3.png';
import gallery6 from '../../images/gallery/gl-4.png';
import gallery7 from '../../images/gallery/g-xl-2.png';
import gallery8 from '../../images/gallery/g-xxl-2.png';
import gallery9 from '../../images/gallery/gl-5.png';
import gallery10 from '../../images/gallery/gl-6.png';
import gallery11 from '../../images/gallery/g-xl-3.png';
import gallery12 from '../../images/gallery/g-xxl-3.png';
import gallery13 from '../../images/gallery/gl-16.png';
import gallery14 from '../../images/gallery/gl-17.png';
import gallery15 from '../../images/gallery/g-xl-4.png';
import gallery16 from '../../images/gallery/g-xxl-4.png';
import { useLocation, useParams } from 'react-router-dom';




const PlaceOrder = () => {

    //react-hook-form's function to Submit the user's "Orders"
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = myData => {
        console.log("Data::", myData)

        // POST API Call - fetch  
        fetch('https://travel-server-gilt.vercel.app/pack', {
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
            url: 'https://travel-server-gilt.vercel.app/pack',
            data: myData,
          }); */
    };
    // console.log(watch("example")); // watch input value by passing the name of it


    ///logged in users info
    const { user } = useAuth();
    // console.log("NN::", user.email)


    // Tab Name
    document.title = "Place Order";

    return (
        <div className='place-order-container pb-20 g-green-500 '>

            {/* details carousel section  */}
            <div className="details-carousel">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={park1} className="w-full parkImage" height={400} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={park2} className="w-full parkImage" height="300" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={park3} className="w-full parkImage" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={park4} className="w-full parkImage" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* Name, duration, location section  */}
            <div className="name-duration-location-section g-red-200 lg:flex items-center justify-between container mx-auto">

                <div className="name-details-left  text-left mb-4 md:mb-0">
                    <h2>National Park 2 Days Tour</h2>
                    <h3> <span className='text-gray-600 font-medium common-orange-color'> $870 </span> /Per Person</h3>
                </div>

                <div className="duration-location-right md:flex text-left g-red-600">
                    <div className="duration flex items-center">
                        <div className="icon duration-icon">
                            <FontAwesomeIcon icon={faClock} />
                            {/* <i className="fa-regular fa-clock"></i> */}
                        </div>
                        <div className="duration-details">
                            <p>Duration</p>
                            <h6>3 Days</h6>
                        </div>
                    </div>
                    <div className="min-age flex items-center">
                        <div className="icon min-age-icon">
                            <FontAwesomeIcon icon={faUserTie} />
                        </div>
                        <div className="min-age-details">
                            <p>Min Age</p>
                            <h6>12+</h6>
                        </div>
                    </div>
                    <div className="tour-type flex items-center">
                        <div className="icon tour-type-icon">
                            <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
                        </div>
                        <div className="tour-type-details">
                            <p>Tour Type</p>
                            <h6>Adventure, Fun</h6>
                        </div>
                    </div>
                    <div className="location-details flex items-center">
                        <div className="icon location-details-icon">
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
            <div className="container mx-auto pl-2 share-container b-slate-300 md:flex justify-between">

                <div className="share-left md:flex">
                    <div className="posted flex items-center">
                        <i className="fa-regular fa-clock"></i>
                        <p>Posted 2 days ago</p>
                    </div>

                    <div className="ratings flex items-center bgre">
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        </div>
                        <p>4.7 Top Rated!</p>
                    </div>
                </div>

                <div className="share-right text-left ">
                    <button className="btn share-btn gap-2 mt-2 md:mt-0">
                        <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                        Share
                    </button>
                </div>
            </div>


            {/* Overview section  */}
            <div className="overview-section container mx-auto px-2">
                <h2 className='text-left mt-16'>Overview</h2>
                <p className='text-left'>A two-day national park tour can be an incredible opportunity to explore some of the most beautiful natural areas of a country. The itinerary can vary depending on the location and specific park, but generally, the tour would cover hiking, wildlife viewing, and scenic drives.

                    The first day of the tour may start early in the morning, with a drive to the national park. Once there, visitors could embark on a guided hike through some of the park's most beautiful trails, stopping to take in views of waterfalls, mountains, and other scenic vistas. The hike may be of moderate difficulty, so comfortable shoes and appropriate attire are recommended. <br /> <br />

                    After the hike, the group could enjoy a picnic lunch in a scenic location, followed by a drive through the park to spot wildlife such as deer, elk, bears, and birds. Guides may provide commentary on the park's history and geology, giving visitors a deeper appreciation of the natural wonders they are witnessing.

                    Later in the day, visitors may check into a nearby hotel or campsite, where they can relax and unwind after a day of exploring. Depending on the location, there may be opportunities for stargazing, campfires, and other activities. <br /> <br />

                    The second day may start with a sunrise hike or a morning wildlife viewing drive, followed by breakfast and more exploration of the park's trails and scenic overlooks. Visitors may learn about the park's conservation efforts, the unique flora and fauna that call the park home, and the ways in which humans can help protect these natural areas.

                    After lunch, the group may visit a visitor center or museum to learn more about the park's history and culture. This could include interactive exhibits, educational videos, and opportunities to speak with park rangers and naturalists. <br /> <br />

                    Overall, a two-day national park tour is an incredible way to experience the beauty and wonder of some of the world's most amazing natural areas. With a focus on hiking, wildlife viewing, and education, visitors can gain a deeper appreciation of the natural world and the importance of preserving it for future generations.</p>
            </div>


            {/* Include-exclude section  */}
            <div className="include-exclude-section container mx-auto mt-10 px-2">
                <h2>Include/Exclude</h2>

                <div className="content md:flex justify-between">
                    <div className="include-left text-left g-slate-300">
                        <p> <FontAwesomeIcon className='tick' icon={faCheck} /> Pick and Drop Services</p>
                        <p> <FontAwesomeIcon className='tick' icon={faCheck} /> 1 Meal      Per Day</p>
                        <p> <FontAwesomeIcon className='tick' icon={faCheck} /> Cruise Dinner & Music Event</p>
                        <p> <FontAwesomeIcon className='tick' icon={faCheck} /> Visit 7 Best Places in the City With Group</p>
                    </div>
                    <div className="include-right text-left g-slate-400">
                        <p> <FontAwesomeIcon className='cross' icon={faXmark} /> Additional Services</p>
                        <p> <FontAwesomeIcon className='cross' icon={faXmark} /> Insurance</p>
                        <p> <FontAwesomeIcon className='cross' icon={faXmark} />
                            Food & Drinks </p>
                        <p> <FontAwesomeIcon className='cross' icon={faXmark} /> Tickets </p>

                    </div>
                </div>
            </div>


            {/* Tour Plan section  */}
            {/* <div className="tour-plan-section container mx-auto bg-fuchsia-300 mt-10">
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
            </div> */}


            {/* highlight section  */}
            <div className="highlight-section container mx-auto g-slate-300 mt-10 px-2 mt-24">
                <h2 className='text-left'>Highlight</h2>

                <div className="highlight-content text-left">
                    <p className='mb-5'><i className="fa-brands .leaf fa-pagelines"></i> A 2-day national park tour typically includes hiking, wildlife viewing, and scenic drives. </p>
                    <p className='mb-5'><i className="fa-brands .leaf fa-pagelines"></i> Visitors may embark on guided hikes through some of the park's most beautiful trails, with stops to take in scenic vistas and views of waterfalls and mountains. </p>
                    <p className='mb-5'><i className="fa-brands .leaf fa-pagelines"></i> Wildlife spotting drives provide the opportunity to observe animals such as deer, elk, bears, and birds. </p>
                    <p className='mb-5'><i className="fa-brands .leaf fa-pagelines"></i> Accommodations may include hotels or campsites, with opportunities for activities such as stargazing and campfires. </p>
                    <p className='mb-5'><i className="fa-brands .leaf fa-pagelines"></i> Visitors may learn about the park's conservation efforts, unique flora and fauna, and ways to help protect natural areas. </p>
                    <p className='mb-5'><i className="fa-brands .leaf fa-pagelines"></i> Visiting a visitor center or museum provides educational opportunities, such as interactive exhibits and opportunities to speak with park rangers and naturalists. </p>
                </div>
            </div>


            {/* gallery section  */}
            <div className="gallery-section container mx-auto g-fuchsia-20 bg">
                <h2>Photo Gallery </h2>
                <div className="details-images grid grid-cols-12 gap-1">
                    <div className="details-image d-image-1 -400 col-span-4">
                        <img src={gallery1} alt="" />
                    </div>
                    <div className="details-image -300 d-image-2 col-span-4">
                        <img src={gallery2} alt="" />
                    </div>
                    <div className="details-image d-image-3 -500 col-span-4 row-span-2">
                        <img src={gallery3} alt="" />
                    </div>
                    <div className="details-image d-image-4  col-span-8">
                        <img src={gallery4} alt="" />
                    </div>
                    <div className="details-image d-image-1 -400 col-span-4">
                        <img src={gallery5} alt="" />
                    </div>
                    <div className="details-image -300 d-image-2 col-span-4">
                        <img src={gallery6} alt="" />
                    </div>
                    <div className="details-image d-image-3 -500 col-span-4 row-span-2">
                        <img src={gallery7} alt="" />
                    </div>
                    <div className="details-image d-image-4  col-span-8">
                        <img src={gallery8} alt="" />
                    </div>
                    <div className="details-image d-image-1 -400 col-span-4">
                        <img src={gallery9} alt="" />
                    </div>
                    <div className="details-image -300 d-image-2 col-span-4">
                        <img src={gallery10} alt="" />
                    </div>
                    <div className="details-image d-image-3 -500 col-span-4 row-span-2">
                        <img src={gallery11} alt="" />
                    </div>
                    <div className="details-image d-image-4  col-span-8">
                        <img src={gallery12} alt="" />
                    </div>
                    <div className="details-image d-image-1 -400 col-span-4">
                        <img src={gallery13} alt="" />
                    </div>
                    <div className="details-image -300 d-image-2 col-span-4">
                        <img src={gallery14} alt="" />
                    </div>
                    <div className="details-image d-image-3 -500 col-span-4 row-span-2">
                        <img src={gallery15} alt="" />
                    </div>
                    <div className="details-image d-image-4  col-span-8">
                        <img src={gallery16} alt="" />
                    </div>
                </div>
            </div>


            {/* Booking form // react hook form  */}

            <div className="container mx-auto booking-form">
                <h2>Book This Package</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Your full Name' defaultValue={user.displayName} {...register("name", { required: true })} />
                    <br />
                    {errors.name && <span>This field is required!</span>}
                    <br /><br />

                    {/* include validation with required or other standard HTML validation rules */}

                    <input placeholder='Your Email Address' defaultValue={user.email} {...register("email", { required: true })} />
                    <br />
                    {errors.email && <span>This field is required!</span>}
                    <br /> <br />

                    <select className='travel-with' {...register("ticket", { required: true })}>
                        <optgroup label="Ticket Type:">
                            <option value="bus">Travel With Bus</option>
                            <option defaultValue="plane" selected>Travel With Plane</option>
                            <option value="train"> Travel with Train</option>
                        </optgroup>
                    </select>
                    <br />
                    {errors.ticket && <span>This field is required!</span>}
                    <br /> <br />


                    <input value='Pending' {...register("status")} />
                    <br /> <br /><br />

                    <input placeholder='Password' type='password' {...register("pass", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    <br />
                    {errors.pass && <span>This field is required!</span>}

                    <br /> <br />

                    {/* <input type="submit" /> */}
                    <button className="btn place-order-book-now-btn">BOOK NOW</button>
                </form>

            </div>

        </div>
    );
};

export default PlaceOrder;