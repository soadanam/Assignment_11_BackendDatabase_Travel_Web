import React from 'react';
import './Login.css';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import { useState } from 'react';

const Login = () => {
    const {googleSignIn} = useAuth();

    const navigate = useNavigate();
    const location = useLocation(); // To read if the login page is redirected from any specific  page or not!
    const redirect_uri = location?.state?.from?.pathname || '/';


    const [errorMessage, setErrorMessage] = useState();
    
    //Login by GMAIL
    const handleGoogleLoginAndRedirect = () => {
        googleSignIn()
        .then((result) => {
            // const myUser = result.user;
            navigate(redirect_uri);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
        });
    };

    

    return (
        <div className='login-container container mx-auto bg-accent pt-36 pr-10 pb-48 text-right'>
            <h2>Please Login to access 
                <br /> the full content!</h2>

            <button onClick={handleGoogleLoginAndRedirect} className="btn login-page-login-btn mt-4 animate__animated animate__zoomInDown  ">LOGIN</button>

        </div>
    );
};

export default Login;