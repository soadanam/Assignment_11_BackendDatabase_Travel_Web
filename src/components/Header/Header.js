import React from 'react';
import './Header.css';
import { faAt, faHourglass1, faMagnifyingGlass, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
// import useFirebase from '../../Hooks/useFirebase';
import useFirebase from './../../Hooks/useFirebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../images/logo/logo1.png';




const Header = () => {

    const { user, googleSignIn, signOutAll } = useFirebase();
    // console.log("USER:", user);

    const handleGoogleSignIn = () => {
        googleSignIn();
    };

    const handleSignOut = () => {
        signOutAll();
    }

    const refreshHome = () => {
        window.reload();
    }


    return (
        <div>
            {/* top contact address  */}
            <div className="contact-container hidden md:block">
                <div className="top-contact-address container mx-auto b-zinc-800 flex">
                    <div className="top-phone-email text-cyan-100 text-xs ">
                        <a href="tel: + 92 666 999 0000" className='mr-5'>
                            <FontAwesomeIcon className='text-red-500 mr-2' icon={faPhoneVolume} />
                            + 92 666 999 0000
                        </a>
                        <a href="mailto:needhelp@company.com">
                            <FontAwesomeIcon className='text-red-500 mr-2' icon={faAt} />
                            needhelp@company.com
                        </a>
                    </div>
                    <div className="top-social-media text-cyan-100 flex ">
                        <div className="fb-twitter-instagram-pinterest text-red-">
                            <a href="#fb" className="fb ml-5">
                                <i className="fa-brands fa-square-facebook"></i>
                            </a>
                            <a href="#twitter" className='ml-3'>
                                <i className="fa-brands fa-square-twitter"></i>
                            </a>
                            <a href="instagram" className='ml-3'>
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                            <a href="pinterest" className='ml-3 mr-7'>
                                <i className="fa-brands fa-square-pinterest"></i>
                            </a>
                        </div>
                        <div className="become-a-guide bg-red- px-4 py-2.5">
                            <p className='text- font-semibold'>BECOME A LOCAL GUIDE</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar - DaisyUI  */}
            <div className="navbar container mx-auto bg-green- text-blue-900">

                {/* dropdown  */}
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/'>Home</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between sub-menu-1">
                                    Manage All Orders
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2 sub-menu-2">
                                    <li><a href='/myOrders'>My Orders</a></li>
                                    <li><a href='/manageAllOrders'>All Orders</a></li>
                                    <li><a href='/AddAService'>Add New Service</a></li>
                                </ul>
                            </li>
                            <li><a href='/PlaceOrder/112233'>Place Orders</a></li>
                        </ul>
                    </div>
                    <a href='/' className="logo btn btn-ghost normal-case text-xl"> <img className='w-6' src={logo} alt="" /> Travelian</a>
                </div>


                {/* simple menubar  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <NavLink onClick={refreshHome} to='/'>Home</NavLink>  </li>

                        <li><NavLink to='/PlaceOrder'>Place Order</NavLink></li>

                        <li tabIndex={0} className='all-orders-dropdown'>
                            <a>
                                All Orders
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 dorp-down-menu-2">
                                <li><NavLink to='/myOrders'>My Orders</NavLink></li>
                                <li><NavLink to='/manageAllOrders'>Manage All Orders</NavLink></li>
                                <li><NavLink to='/AddAService'>Add A New Service</NavLink></li>
                            </ul>
                        </li>


                        {/* {user.email && <li><NavLink to='/myOrders'>My Orders</NavLink></li>} */}

                        {/* {user.email && <li><NavLink to='/manageAllOrders'>Manage All Orders</NavLink></li>} */}

                        {user.email && <li><NavLink to='/AddAService'>Add A Service</NavLink></li>}

                        {user.email ? '' : <li><NavLink to='/login'>Login</NavLink></li>}

                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {user.email && <h2 className='top-display-name red-400 px-1 mx-1 hidden md:block'> Hi, {user.displayName}! </h2>}
                    </div>
                    {user.email && <a onClick={handleSignOut} className="btn btn-outline btn-error nav-logout-btn">LOGOUT</a>
                    }
                </div>


                {/* //added nav item for searching and the profile picture  */}
                <div className="flex-none gap-1">

                    <div className="form-control ml-1 hidden md:block">
                        <input type="text" placeholder="Search.." className="input input-bordered top-search w-24" />
                    </div>

                    <div className="dropdown dropdown-end hidden sm:block">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="rounded-full ">
                                {user.email ? <img src={user.photoURL} /> : <i className="fa-regular fa-user"></i>}
                            </div>
                        </label>

                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user.email ? "Profile" : "Guest"}
                                    {user.email ? <span className="badge"><img className='dropdown-profile-photo' src={user.photoURL} /></span> : <i className="fa-solid fa-user"></i>}
                                </a>
                            </li>
                            <li>{user.email ? <a>Settings</a> : <a>Limited options available!</a>} </li>
                            {user.email ? <li> <a heref='' onClick={handleSignOut}> Logout</a></li> : <li><a href='http://localhost:3000/login'>Login</a></li>}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;