import { firebaseInitializer } from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseInitializer();
const provider = new GoogleAuthProvider();



const useFirebase = () => {


    const [user, setUser] = useState({});
    // console.log("UUU", user);
    const [error, setError] = useState('');
    // console.log('Error:::', error);
    const [isLoading, setIsLoading ] = useState(true);
    // console.log("LOADING:::", isLoading)


    //Google Sign In
    const googleSignIn = () => {
        const auth = getAuth();
        return signInWithPopup(auth, provider)
        /* .then((result) => {
            const myUser = result.user;
            setUser(myUser);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        }) */
    };
    
    
    //Sign Out ALL
    const signOutAll= () => {
        const auth = getAuth();
        signOut(auth).then(()=>{
            setUser('');
            console.log("Sign Out Successful!")
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
    };



    // Observer!!
    useEffect( ()=> {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser('');
            };
            setIsLoading(false);
        });
        
    } , [])





    return {
        user,
        googleSignIn,
        error,
        isLoading,
        signOutAll,
    };

};

export default useFirebase;







// import { firebaseInitializer } from './../firebase/firebase.init';
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
// import { useEffect, useState } from 'react';

// firebaseInitializer();

// const provider = new GoogleAuthProvider();




// const useFirebase = () => {
    
//     const [user, setUser] = useState({});
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(true);


//     ////google sign-in!
//     const googleLogin = () => {
//         const auth = getAuth();
//         return signInWithPopup(auth, provider)
//             .then((result) => {
//                 const myUser = result.user;
//                 setUser(myUser)
//             })
//             .catch((error) => {
//                 const errorMessage = error.message;
//                 setError(errorMessage);

//             })
//     };



//     //// SignOut for all!
//     const signOutAuth = () => {
//         const auth = getAuth();
//         signOut(auth).then(() => {
//             setUser('')
//         })
//         .catch((error) => {
//             const errorMessage = error.message;
//             setError(errorMessage)
//         })
//     };



    // Mr. Observer!
    //observer
    // useEffect(() => {
    //     const auth = getAuth();
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //         }
    //         else {
    //             setUser({})
    //         }
    //         setIsLoading(false);
    //     });
    // }, []);




//     return {
//         user,
//         googleLogin,
//         signOutAuth
//     }


// };

// export default useFirebase;