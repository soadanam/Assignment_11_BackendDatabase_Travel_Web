import React, { useEffect, useState } from 'react';
import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCocktail, faDollar, faEnvelope, faLocation, faLocationDot, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import 'animate.css';



const Home = () => {
    const [packages, setPackages] = useState([]);
    // console.log("STATE ??", packages)


    ////Loading data from Backend (mongodb) by Fetching
    const url = 'http://localhost:7777/packages';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log("get Data?::", data)
                setPackages(data);
            })
    }, [url]);



    const navigate = useNavigate();
    ////Function to navigate Tour Details page.
    const navigateToPlaceOrderPage = () => navigate('/PlaceOrder');



    //// Loading Services from mongodb
    const [services, setServices] = useState([]);
    // console.log("SERVICES??::", services)

    //Using 'Fetch' to GET the 'new services'
    useEffect(() => {
        fetch('http://localhost:7777/newNewServices')
            .then(res => res.json())
            .then(data => {
                // console.log("SERvice console inside fetch::", data)
                setServices(data);
            })
    }, []);









    const addClassToSliderImage = (myClass) => {
        console.log("CLICKED ZOOMED F")
        const zoomImage = document.querySelector(myClass);
        console.log("MY CLASS:", myClass)

        console.log("BB", zoomImage);
        zoomImage.classList.add('zoomed');
    };







    const myElement = document.querySelector('.my-element');

    const myClassAddFunction = () => {
        console.log("Clicked")

        if (myElement.classList.contains('my-class')) {
            console.log("ACHE")
            myElement.classList.remove('my-class');
        }
        else {
            console.log("Nai")
            myElement.classList.add('my-class');
        }
    };



    return (
        <div className=' bg-purple-300'>

            <button id='my-button' onClick={myClassAddFunction} className='btn my-button'> click to make h</button>
            <div id="my-element" className='my-element'>HEY Buddy!</div>

            {/* Carousel */}
            <div className="top-banner">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-1.62fecf08.jpg" className="carousel-img carousel-img-1 w-full" />
                        <div className='carousel-img-overlay'></div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle" onClick={() => addClassToSliderImage('.carousel-img-4')}>❮</a>
                            <a href="#slide2" className="btn btn-circle" id='bbb' onClick={() => addClassToSliderImage('.carousel-img-2')} >❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-2.4865c85b.jpg" className=" absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" className=" carousel-img carousel-img-2 w-full" />
                        <div className='carousel-img-overlay'></div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle" onClick={() => addClassToSliderImage('.carousel-img-1')}>❮</a>
                            <a href="#slide3" className="btn btn-circle" onClick={() => addClassToSliderImage('.carousel-img-3')}>❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-1.62fecf08.jpg" className=" absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" className="carousel-img carousel-img-3 w-full" />
                        <div className='carousel-img-overlay'></div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-3.fe6aff2e.jpg" className=" carousel-img carousel-img-4 w-full" />
                        <div className='carousel-img-overlay'></div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                {/* banner text  */}
                <div style={{ fontSize: "clamp(.5rem, 4vw, 6rem)" }} className="banner-title">
                    <h2 className='travelAdventures   animate__animated animate__fadeInDown'>Travel & Adventures</h2>
                    <h5 style={{ fontSize: "clamp(.5rem, 2vw, 4rem)" }} className='whereWould animate__animated animate__fadeInUp'>Where Would You Like To Go?</h5>
                </div>

            </div>




            {/* Find_Now Section */}
            <div className='find-now-section bg-red-400 p-8 my-4 container mx-auto'>
                <h4 onClick={addClassToSliderImage}>This is Find Now Section!</h4>
            </div>



            {/* Gallery section  */}
            <div className="gallery-section bg-green-300 my-8 p-8 container mx-auto">
                <h4>Go Exotic Places</h4>
                <div className="gallery-images lg:grid grid-flow-row-dense grid-cols-12 grid-rows-">

                    <div className="bg-red-300 col-span-3 p-5">
                        <img src="" alt="" />
                    </div>

                    <div className="bg-red-500 col-span-6 p-5">02</div>

                    <div className="bg-red-200 col-span-3 p-5">03</div>

                    <div className="bg-red-100 col-span-6 p-5">04</div>

                    <div className="bg-red-700 col-span-6 p-5">05</div>

                </div>
            </div>



            {/* Discount Section  */}
            <h2>Discount Section</h2>
            <div className="discount-section lg:grid grid-cols-12 grid-rows-0 container mx-auto">

                <div className="discount-image col-span-6 bg-red-200">
                    <h2>IMAGE</h2>
                </div>
                <div className="discount-info col-span-6 bg-red-400">
                    <h3>Get to know us</h3>
                    <h4>Plan Your Trip with Trevily</h4>

                    <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>

                    <p>Invest in your simply neighborhood</p>
                    <p>Support people in free text extreme need</p>
                    <p>Largest global industrial business community</p>

                    <button className="btn btn-error">BOOK WITH US NOW</button>
                </div>
            </div>


            {/* Most Popular Tours section  */}
            <div className="most-popular-tours bg-blue-200 container mx-auto">
                <h3>Featured tours</h3>
                <h4>Most Popular Tours</h4>

                <div className="tours bg-blue-300 sm:grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 lg:gap- gap-2">

                    <div className="card col-span-4 w- bg-base-100 shadow-xl">
                        <figure><img src="https://tourx-next.vercel.app/assets/images/package/p-1.png" alt="Paris" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$180/Per Person</h4>
                                <h4>5 Days/6 night</h4>
                            </div>

                            <div className='bg-green-100 text-left'>
                                <h2> <FontAwesomeIcon icon={faLocationDot} /> Paris Hill Tour</h2>
                            </div>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />


                                <p className='bg-yellow-100 text-left'> 12k+ Rating</p>

                                <button onClick={navigateToPlaceOrderPage} className="btn btn-error">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="card col-span-4 w- bg-base-100 shadow-xl">
                        <figure><img src="https://tourx-next.vercel.app/assets/images/package/p-2.png" alt="Lake" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$180/Per Person</h4>
                                {/* <div className="badge badge-secondary">NEW</div> */}
                                <h4>5 Days/6 night</h4>
                            </div>

                            <div className='bg-green-100 text-left'>
                                <h2> <FontAwesomeIcon icon={faLocationDot} /> Paris Hill Tour</h2>
                            </div>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                <p className='bg-yellow-100 text-left'> 12k+ Rating</p>

                                <button onClick={navigateToPlaceOrderPage} className="btn btn-error">BOOK NOW</button>
                            </div>


                        </div>
                    </div>
                    <div className="card col-span-4 w- bg-base-100 shadow-xl">
                        <figure><img src="https://tourx-next.vercel.app/assets/images/package/p-3.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$180/Per Person</h4>
                                {/* <div className="badge badge-secondary">NEW</div> */}
                                <h4>5 Days/6 night</h4>
                            </div>

                            <div className='bg-green-100 text-left'>
                                <h2> <FontAwesomeIcon icon={faLocationDot} /> Paris Hill Tour</h2>
                            </div>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                <p className='bg-yellow-100 text-left'> 12k+ Rating</p>

                                <button onClick={navigateToPlaceOrderPage} className="btn btn-error">BOOK NOW</button>
                            </div>


                        </div>
                    </div>
                    <div className="card col-span-4 w- bg-base-100 shadow-xl">
                        <figure><img src="https://tourx-next.vercel.app/assets/images/package/p-4.5a3083bb.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$180/Per Person</h4>
                                {/* <div className="badge badge-secondary">NEW</div> */}
                                <h4>5 Days/6 night</h4>
                            </div>

                            <div className='bg-green-100 text-left'>
                                <h2> <FontAwesomeIcon icon={faLocationDot} /> Paris Hill Tour</h2>
                            </div>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                <p className='bg-yellow-100 text-left'> 12k+ Rating</p>

                                <button onClick={navigateToPlaceOrderPage} className="btn btn-error">BOOK NOW</button>
                            </div>


                        </div>
                    </div>
                    <div className="card col-span-4 w- bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$180/Per Person</h4>
                                {/* <div className="badge badge-secondary">NEW</div> */}
                                <h4>5 Days/6 night</h4>
                            </div>

                            <div className='bg-green-100 text-left'>
                                <h2> <FontAwesomeIcon icon={faLocationDot} /> Paris Hill Tour</h2>
                            </div>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                <p className='bg-yellow-100 text-left'> 12k+ Rating</p>

                                <button onClick={navigateToPlaceOrderPage} className="btn btn-error">BOOK NOW</button>
                            </div>


                        </div>
                    </div>
                    <div className="card col-span-4 w- bg-base-100 shadow-xl">
                        <figure><img src="https://tourx-next.vercel.app/assets/images/package/p-6.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$180/Per Person</h4>
                                {/* <div className="badge badge-secondary">NEW</div> */}
                                <h4>5 Days/6 night</h4>
                            </div>

                            <div className='bg-green-100 text-left'>
                                <h2> <FontAwesomeIcon icon={faLocationDot} /> Paris Hill Tour</h2>
                            </div>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                <p className='bg-yellow-100 text-left'> 12k+ Rating</p>

                                <button onClick={navigateToPlaceOrderPage} className="btn btn-error">BOOK NOW</button>
                            </div>


                        </div>
                    </div>

                </div>
            </div>



            {/* Add a New Service - Section  */}
            <div className="new-service bg-lime-200 mt-20 pt-5 container mx-auto">
                <h3 className='pb-7'>{services[1]?.data?.category} </h3>

                <div className="tours bg-fuchsia-600 grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 lg:gap-4 gap-2">
                    {
                        services.map(x => <div key={x._id} className="card col-span-4 w- bg-base-100 shadow-xl">
                            <figure><img src={x.data.url} alt="Paris" /></figure>
                            <div className="card-body">
                                <div className="card-title flex justify-between">
                                    <h4>Name: {x.data.name} </h4>
                                </div>

                                <div className='bg-green-100 text-left'>
                                    <h2> <FontAwesomeIcon icon={faDollar} /> Price  {x.data.price}</h2>
                                </div>

                                <div className="rating flex items-center">
                                    <p className='bg-yellow-100 text-left flex items-center rating-sm'> {x.data.ratings}
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </p>

                                    <button onClick={navigateToPlaceOrderPage} className="btn btn-error">BUY NOW</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>




            {/* flowBite carousel  */}
            <div className="sliding">

                <div id="default-carousel" class="relative w-full" data-carousel="slide">
                    {/* <!-- Carousel wrapper --> */}
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

                        {/* <!-- Item 1 --> */}
                        <div class="hidden duration-5000 ease-in-out item item-1" data-carousel-item>
                            <img src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-1.62fecf08.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 image image-1" />
                            <div className='carousel-img-overlay'></div>
                            {/* banner text  */}
                            <div style={{ fontSize: "clamp(.5rem, 4vw, 6rem)" }} className="banner-title">
                                <h2 className='travelAdventures   animate__animated animate__fadeInDown'>Travel & Adventures</h2>
                                <h5 style={{ fontSize: "clamp(.5rem, 2vw, 4rem)" }} className='whereWould animate__animated animate__fadeInUp'>Where Would You Like To Go?</h5>
                            </div>
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div class="hidden duration-5000 ease-in-out item item-2" data-carousel-item>
                            <img src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-2.4865c85b.jpg" className=" absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 image image-2" />
                            <div className='carousel-img-overlay'></div>
                            {/* banner text  */}
                            <div style={{ fontSize: "clamp(.5rem, 4vw, 6rem)" }} className="banner-title">
                                <h2 className='travelAdventures   animate__animated animate__fadeInDown'>Travel & Adventures</h2>
                                <h5 style={{ fontSize: "clamp(.5rem, 2vw, 4rem)" }} className='whereWould animate__animated animate__fadeInUp'>Where Would You Like To Go?</h5>
                            </div>
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div class="hidden duration-5000 ease-in-out item item-3" data-carousel-item>
                            <img src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-3.fe6aff2e.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 image image-3" />
                            <div className='carousel-img-overlay'></div>
                            <div style={{ fontSize: "clamp(.5rem, 4vw, 6rem)" }} className="banner-title">
                                <h2 className='travelAdventures   animate__animated animate__fadeInDown'>Travel & Adventures</h2>
                                <h5 style={{ fontSize: "clamp(.5rem, 2vw, 4rem)" }} className='whereWould animate__animated animate__fadeInUp'>Where Would You Like To Go?</h5>
                            </div>
                        </div>

                        {/* banner text  */}

                    </div>
                    {/* <!-- Slider indicators --> */}
                    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>

                    </div>
                    {/* <!-- Slider controls --> */}
                    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>

                </div>

            </div>





        </div>
    );
};

export default Home;