import './MyOrders.css';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';



const MyOrders = () => {
    const { user } = useAuth();

    // useState hook for storing orders for a specific user 
    const [myOrders, setMyOrders] = useState([]);
    console.log('MM', myOrders)
    const [myText, setMyText] = useState('Your Order(s)');
    console.log('TT', myText)

    // Fetching data with GET API
    useEffect(() => {
        if (user.email) {
            // console.log("Found:", user.email)
            fetch(`http://localhost:7777/forSpecificEmail/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log('myOR::', data);
                    setMyOrders(data);
                });
        };
    }, [user.email])


    // DELETE Operation from CRUD by AXIOS
    const handleDeleteOrder = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            axios({
                method: 'DELETE',
                url: `http://localhost:7777/deleteOrder/${id}`,
            })
                .then(function (response) {
                    // console.log("response::", response)
                    // alert("Successfully Deleted!")
                    const remainOrders = myOrders.filter(x => x._id !== id)
                    setMyOrders(remainOrders)
                });
        };
        // window.location.reload();
    };


    //Checking the array (myOrders) is empty or not! if empty show Loading or any other message!
    if (myOrders.length === 0) {
        return (<>
            <button type="button" className="bg-red-500 ..." disabled> <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" /> Loading... </button>
            
            <h2>{myText}</h2>
            
            {setTimeout(() => {
                setMyText('You have no orders!');
            }, 3000)}

        </>)
    };



    return (
        <div className='bg-red-100'>

            This is my orders page!


            {
                myOrders?.map(x => <div className="orders">
                    <h2>Name: {x.name}</h2>
                    <h2>Email: {x.email} </h2>
                    <h2>Ticket: {x.ticket} </h2>
                    <h2>Pass: {x.pass} </h2>
                    <h2>Status: {x.status} </h2>
                    <h2>ID: {x._id} </h2>

                    <button className="btn btn-error" onClick={() => handleDeleteOrder(x._id)}> Delete </button>
                </div>)
            }


        </div>
    );
};

export default MyOrders;