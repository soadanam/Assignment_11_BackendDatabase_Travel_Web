import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    // console.log("U Email:", user.email)
    const location = useLocation();


    //To PREVENT going to LOGIN page while reloading any Protected-Route! "return" will keep returning from here if the "isLoading" is True & only False value will skip this "if" and go to the next step!
    if (isLoading) {
        return (<button type="button" className="bg-red-500 ..." disabled> <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"/> Processing... </button>);
    };


    //Protected Route taking decision of which component to show depending on the user is Logged-in or not!
    if (user.email) {
        return children;
    }
    else {
        return (<Navigate to='/login'
            state={{ from: location }} replace ></Navigate>)
    };

};

export default ProtectedRoute;