import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import useFirebase from '../../Hooks/useFirebase';
import useFirebase from './../../Hooks/useFirebase';

const Header = () => {

    const {user, googleSignIn, signOutAll} = useFirebase();
    // console.log("USER:", user);
    // console.log("USER img:", user.photoURL);
    // const {} = useFirebase();
    
    const handleGoogleSignIn = () => {
        googleSignIn();
    };

    const handleSignOut = () => {
        signOutAll();
    }


    
    return (
        <div>
            
            {/* Navbar - DaisyUI  */}
            <div className="navbar container mx-auto bg-green-400 text-blue-900">
                
                {/* dropdown  */}
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/'>Home!</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Destination!
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu! 1</a></li>
                                    <li><a>Submenu! 2</a></li>
                                </ul>
                            </li>
                            <li><a href='/PlaceOrder'>PlaceOr!</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Travelian</a>
                </div>

                {/* simple menubar  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <NavLink to={'/'}>Home</NavLink>  </li>
                        
                        <li tabIndex={0}>
                            <a>
                                Destination
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>

                        <li><NavLink to='/PlaceOrder'>PlaceOrder</NavLink></li>

                        {user.email && <li><NavLink to='/myOrders'>MyOrders</NavLink></li>}
                    
                        {user.email && <li><NavLink to='/manageAllOrders'>Manage All Orders</NavLink></li>}

                        {user.email && <li><NavLink to='/AddAService'>Add a Service</NavLink></li>}

                        {user.email || <li><NavLink to='/login'>Login</NavLink></li> }
                    </ul>
                </div>
                <div className="navbar-end">

                    {user.email ? 
                    <a onClick={handleSignOut} className="btn btn-outline btn-error">LOGOUT </a> 
                    :
                    // <button onClick={handleGoogleSignIn} className="btn btn-success">G-LOGIN</button>
                    ""
                    }
                    
                    

                </div>

                {user.email && <h2>User: {user.email} </h2>}
                

                {/* //added nav item for searching and the profile picture  */}
                <div className="flex-none gap-2 bg-red-500">
                    <div className="form-control hidden md:block">
                        <input type="text" placeholder="Search.." className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end hidden sm:block">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;