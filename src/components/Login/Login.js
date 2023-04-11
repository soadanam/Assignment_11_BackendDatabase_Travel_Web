import React from 'react';
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
        <div className='bg-accent pt-14 pb-28'>
            <h2>This is LOGIN section!</h2>

            <button onClick={handleGoogleLoginAndRedirect} className="btn btn-secondary mt-4">LOGIN</button>

        </div>
    );
};

export default Login;