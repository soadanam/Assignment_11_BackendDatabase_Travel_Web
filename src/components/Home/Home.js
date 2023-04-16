import React, { useEffect, useState } from 'react';
import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCocktail, faDollar, faEnvelope, faLocation, faLocationDot, faLocationPin, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import 'animate.css';

import banner1 from '../../images/banner/banner1.jpg'
import banner2 from '../../images/banner/banner2.jpg'
import banner3 from '../../images/banner/banner3.jpg'

import exoatic1 from '../../images/exotic/destination-1-1.f32b89c3.png';
import exoatic2 from '../../images/exotic/destination-1-2.6b007ca8.png';
import exoatic3 from '../../images/exotic/destination-1-3.d37d50e6.png';
import exoatic4 from '../../images/exotic/destination-1-4.0ba8a85a.png';
import exoatic5 from '../../images/exotic/destination-1-5.a1a8d71b.png';

import discount1 from '../../images/discount/about-one-img-1.e526a0a5.png';

import popular1 from '../../images/popular/p-1.png';
import popular2 from '../../images/popular/p-2.png';
import popular3 from '../../images/popular/p-3.png';
import popular4 from '../../images/popular/p-4.png';
import popular5 from '../../images/popular/p-5.png';
import popular6 from '../../images/popular/p-6.png';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";






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
    ////Function to navigate Place Order page / details.
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


    // react datepicker's state
    const [startDate, setStartDate] = useState(new Date());


    const addClassToSliderImage = (myClass) => {
        // console.log("CLICKED ZOOMED")
        const zoomImage = document.querySelector(myClass);
        console.log("MY CLASS:", myClass)

        // console.log("BB", zoomImage);
        zoomImage.classList.add('zoomed');
    };


    //a function to add a class to an element
    const myElement = document.querySelector('.my-element');
    const myClassAddFunction = () => {
        console.log("Clicked")
        if (myElement.classList.contains('my-class')) {
            myElement.classList.remove('my-class');
        }
        else {
            myElement.classList.add('my-class');
        }
    };



    return (
        <div className='main-container'>

            {/* flowBite carousel  */}
            <div className="sliding">

                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                    {/* <!-- Carousel wrapper --> */}
                    <div className="relative h-24 sm:h-48 md:h-56 overflow-hidden rounded-lg lg:h- flowbite-carousel-content-container ">

                        {/* <!-- Item 1 --> */}
                        <div className="hidden duration-5000 ease-in-out item item-1" data-carousel-item>
                            <img src={banner1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 image image-1" />
                            <div className='carousel-img-overlay'></div>
                            {/* banner text  */}
                            <div style={{ fontSize: "clamp(.5rem, 4vw, 6rem)" }} className="banner-title">
                                <h2 className='travelAdventures   animate__animated animate__fadeInDown'>Travel & Adventures</h2>
                                <h5 style={{ fontSize: "clamp(.5rem, 2vw, 4rem)" }} className='whereWould animate__animated animate__fadeInUp'>Where Would You Like To Go?</h5>
                            </div>
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div className="hidden duration-5000 ease-in-out item item-2" data-carousel-item>
                            <img src={banner2} className=" absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 image image-2" />
                            <div className='carousel-img-overlay'></div>
                            {/* banner text  */}
                            <div style={{ fontSize: "clamp(.5rem, 4vw, 6rem)" }} className="banner-title">
                                <h2 className='travelAdventures   animate__animated animate__fadeInDown'>Travel & Adventures</h2>
                                <h5 style={{ fontSize: "clamp(.5rem, 2vw, 4rem)" }} className='whereWould animate__animated animate__fadeInUp'>Where Would You Like To Go?</h5>
                            </div>
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div className="hidden duration-5000 ease-in-out item item-3" data-carousel-item>
                            {/* <img src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-3.fe6aff2e.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 image image-3" /> */}
                            <img src={banner3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 image image-3" />
                            <div className='carousel-img-overlay'></div>
                            <div style={{ fontSize: "clamp(.5rem, 4vw, 6rem)" }} className="banner-title">
                                <h2 className='travelAdventures   animate__animated animate__fadeInDown'>Travel & Adventures</h2>
                                <h5 style={{ fontSize: "clamp(.5rem, 2vw, 4rem)" }} className='whereWould animate__animated animate__fadeInUp'>Where Would You Like To Go?</h5>
                            </div>
                        </div>

                        {/* banner text  */}

                    </div>
                    {/* banner text  */}
                    <div style={{ fontSize: "clamp(.5rem, 4vw, 6rem)" }} className="banner-title">
                        <h2 className='travelAdventures   animate__animated animate__fadeInDown'>Travel & Adventures</h2>
                        <h5 style={{ fontSize: "clamp(.5rem, 2vw, 4rem)" }} className='whereWould animate__animated animate__fadeInUp'>Where Would You Like To Go?</h5>
                    </div>
                    {/* <!-- Slider indicators --> */}
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 indicator">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>

                    </div>
                    {/* <!-- Slider controls --> */}
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>

                </div>

            </div>


            {/* Carousel - 2 */}
            <div className="top-banner">
                {/* <div className="carousel w-full mt-5">
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
                </div> */}
                {/* banner text  */}
                {/* <div style={{ fontSize: "clamp(.5rem, 4vw, 6rem)" }} className="banner-title">
                    <h2 className='travelAdventures   animate__animated animate__fadeInDown'>Travel & Adventures</h2>
                    <h5 style={{ fontSize: "clamp(.5rem, 2vw, 4rem)" }} className='whereWould animate__animated animate__fadeInUp'>Where Would You Like To Go?</h5>
                </div> */}

            </div>


            {/* Find_Now Section */}
            <div className='find-now-section my-12 container mx-auto'>
                <div className="where">
                    <p>Where to</p>
                    <input className='find-now-common' type="text" placeholder='Enter keywords' />
                </div>
                <div className="when">
                    <p>When</p>
                    <DatePicker className='find-now-common' selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="type">
                    <p>Type</p>
                    <select className='find-now-common adventure' name="Adventure" id="">
                        <option value="adventure">Adventure</option>
                        <option value="adventure">Wildlife</option>
                        <option value="adventure">Sightseeing</option>
                    </select>
                </div>
                <button onClick={navigateToPlaceOrderPage} className=' find-now-btn animate__animated animate__bounce'>FIND NOW</button>

            </div>


            {/* Gallery section  */}
            <div className="gallery-section green-300 my-8 container mx-auto">
                <h6 className='destination-list'>Destination list</h6>
                <h4 className='go-exotic-place-title'>Go Exotic Places</h4>

                <div className="gallery-images lg:grid grid-flow-row-dense grid-cols-12 grid-rows- gap-2">

                    <div className="gallery-image-div col-span-3 p-5">
                        <img className='image-gl' src={exoatic1} alt="" />
                        <div className='gallery-image-bottom-left-text'>
                            <h2>Spain</h2>
                        </div>
                        <div className="gallery-image-overly">
                            <button className='btn gallery-btn-tours animate__animated animate__flip'>128 Tours</button>
                        </div>
                    </div>
                    <div className="gallery-image-div col-span-6 p-5">
                        <img className='image-gl' src={exoatic2} alt="" />
                        <div className='gallery-image-bottom-left-text'>
                            <h2>Thailand</h2>
                        </div>
                        <div className="gallery-image-overly">
                            <button className='btn gallery-btn-tours animate__animated animate__flip'>32 Tours</button>
                        </div>
                    </div>
                    <div className="gallery-image-div col-span-3 p-5">
                        <img className='image-gl' src={exoatic3} alt="" />
                        <div className='gallery-image-bottom-left-text'>
                            <h2>Africa</h2>
                        </div>
                        <div className="gallery-image-overly">
                            <button className='btn gallery-btn-tours animate__animated animate__flip'>256 Tours</button>
                        </div>
                    </div>
                    <div className="gallery-image-div col-span-6 p-5">
                        <img className='image-gl' src={exoatic4} alt="" />
                        <div className='gallery-image-bottom-left-text'>
                            <h2>Australiz</h2>
                        </div>
                        <div className="gallery-image-overly">
                            <button className='btn gallery-btn-tours animate__animated animate__flip'>64 Tours</button>
                        </div>
                    </div>
                    <div className="gallery-image-div col-span-6 p-5">
                        <img className='image-gl' src={exoatic5} alt="" />
                        <div className='gallery-image-bottom-left-text'>
                            <h2>Switzerland</h2>
                        </div>
                        <div className="gallery-image-overly">
                            <button className='btn gallery-btn-tours animate__animated animate__flip'>1024 Tours</button>
                        </div>
                    </div>

                </div>
            </div>


            {/* Discount Section  */}

            <div className="discount-section lg:grid grid-cols-12 grid-rows-0 container mx-auto">
                <div className="discount-image col-span-6">
                    <img src={discount1} alt="" />
                    <div className="discount-image-overlay">
                        <h2>30%</h2>
                        <h3>Discount</h3>
                    </div>
                </div>

                <div className="discount-info col-span-6">
                    <h4 className='get-to-know-us'>Get to know us</h4>
                    <h2 className='discount-section-title'>Plan Your Trip with Travelian</h2>

                    <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>

                    <h6> <FontAwesomeIcon className='discount-check-mark' icon={faSquareCheck} /> Invest in your simply neighborhood</h6>
                    <h6> <FontAwesomeIcon className='discount-check-mark' icon={faSquareCheck} /> Support people in free text extreme need</h6>
                    <h6> <FontAwesomeIcon className='discount-check-mark' icon={faSquareCheck} /> Largest global industrial business community</h6>

                    <button onClick={navigateToPlaceOrderPage} className="book-with-us-now-button btn btn-error">BOOK WITH US NOW</button>
                </div>
            </div>


            {/* Most Popular Tours section  */}
            <div className="most-popular-tours container mx-auto">
                <h3 className='featured-tours'>Featured tours</h3>
                <h2 className='most-popular-tours-title'>Most Popular Tours</h2>

                <div className="tours most-popular-tours sm:grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 lg:gap- gap-2 ">

                    <div className="card col-span-4 w- shadow-xl hover15 column">
                        <figure><img src={popular1} alt="Paris" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$180/Per Person</h4>
                                <h4>5 Days/6 night</h4>
                            </div>

                            <div className=' text-left'>
                                <h2> <FontAwesomeIcon className='popular-location-icon' icon={faLocationDot} /> White Mountain, USA</h2>
                            </div>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 g-orange-400" />

                                <p className=' text-left'> 45k+ Rating</p>

                                <button onClick={navigateToPlaceOrderPage} className="btn most-popular-book-now-btn">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="card col-span-4 w- bg-base-100 shadow-xl hover15 column">
                        <figure><img src={popular2} alt="Lake" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$125/Per Person</h4>
                                {/* <div className="badge badge-secondary">NEW</div> */}
                                <h4>7 Days/6 night</h4>
                            </div>

                            <div className=' text-left'>
                                <h2> <FontAwesomeIcon className='popular-location-icon' icon={faLocationDot} /> Lake Gardo, Italy</h2>
                            </div>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                <p className=' text-left'> 82k+ Rating</p>

                                <button onClick={navigateToPlaceOrderPage} className="btn most-popular-book-now-btn">BOOK NOW</button>
                            </div>


                        </div>
                    </div>
                    <div className="card col-span-4 w- bg-base-100 shadow-xl hover15 column">
                        <figure><img src={popular3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$170/Per Person</h4>
                                {/* <div className="badge badge-secondary">NEW</div> */}
                                <h4>4 Days/3 night</h4>
                            </div>

                            <div className=' text-left'>
                                <h2> <FontAwesomeIcon className='popular-location-icon' icon={faLocationDot} /> Mount Danta, Italy</h2>
                            </div>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                <p className=' text-left'> 17k+ Rating</p>

                                <button onClick={navigateToPlaceOrderPage} className="btn most-popular-book-now-btn">BOOK NOW</button>
                            </div>


                        </div>
                    </div>
                    <div className="card col-span-4 w- bg-base-100 shadow-xl hover15 column">
                        <figure><img src={popular4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$350/Per Person</h4>
                                {/* <div className="badge badge-secondary">NEW</div> */}
                                <h4>7 Days/7 night</h4>
                            </div>

                            <div className=' text-left'>
                                <h2> <FontAwesomeIcon className='popular-location-icon' icon={faLocationDot} /> Paris Hill Tour, France</h2>
                            </div>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                <p className=' text-left'> 11k+ Rating</p>

                                <button onClick={navigateToPlaceOrderPage} className="btn most-popular-book-now-btn">BOOK NOW</button>
                            </div>


                        </div>
                    </div>
                    <div className="card col-span-4 w- bg-base-100 shadow-xl hover15 column">
                        <figure><img src={popular5} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$260/Per Person</h4>
                                {/* <div className="badge badge-secondary">NEW</div> */}
                                <h4>4 Days/3 night</h4>
                            </div>

                            <div className=' text-left'>
                                <h2> <FontAwesomeIcon className='popular-location-icon' icon={faLocationDot} /> Lido Beach, London</h2>
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <p className=' text-left'> 22k+ Rating</p>
                                <button onClick={navigateToPlaceOrderPage} className="btn most-popular-book-now-btn">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="card col-span-4 w- bg-base-100 shadow-xl hover15 column">
                        <figure><img src={popular6} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h4>$50/Per Person</h4>
                                {/* <div className="badge badge-secondary">NEW</div> */}
                                <h4>2 Days/1 night</h4>
                            </div>
                            <div className=' text-left'>
                                <h2> <FontAwesomeIcon className='popular-location-icon' icon={faLocationDot} /> Sajek Tour, Bangladesh</h2>
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <p className=' text-left'> 64k+ Rating</p>
                                <button onClick={navigateToPlaceOrderPage} className="btn most-popular-book-now-btn">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Add a New Service - Section / Travel Accessories  */}
            <div className="new-service container mx-auto">
                <h2 className='modern-trendy'>Modern & Trendy</h2>
                <h2 className='new-service-title'>{services[1]?.data?.category} </h2>
                <h5 className='note-for-adding-services'> [ Note: You can add your own products here by simply going to "Add A New Service" from the menu bar !! ] </h5>

                <div className="tours grid lg:grid-cols-12 md:grid-cols-9 sm:grid-cols-3 lg:gap-4 gap-2 container mx-auto new-service-container">
                    {
                        services.map(x => <div key={x._id} className="card col-span-3 w- bg-base-100 shadow-xl">
                            <div className='new-service-image-div hover14 column'>
                                <figure><img src={x.data.url} alt="Paris" /></figure>
                            </div>
                            <div className="card-bod new-service-info-div">
                                <div className="card-title flex justify-between">
                                    <h4> {x.data.name} </h4>
                                </div>

                                <div className='price-and-rating'>
                                    <div className=' text-left'>
                                        <h2> <FontAwesomeIcon icon={faDollar} /> Price  {x.data.price}</h2>
                                    </div>

                                    <div className="rating flex items-center justify-between">
                                        <p className=' text-left flex items-center rating-sm'> {x.data.ratings}
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </p>
                                        <button onClick={navigateToPlaceOrderPage} className="btn btn-error new-service-buy-now-btn">BUY NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;