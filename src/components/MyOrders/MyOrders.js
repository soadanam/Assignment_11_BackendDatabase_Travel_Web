import './MyOrders.css';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';






const MyOrders = () => {
    const { user } = useAuth();

    // useState hook for storing orders for a specific user 
    const [myOrders, setMyOrders] = useState([]);
    const [myText, setMyText] = useState('Your Order(s)');


    // Fetching data with GET API
    useEffect(() => {
        if (user.email) {
            // console.log("Found:", user.email)
            fetch(`http://localhost:7777/forSpecificEmail/${user.email}`)
                .then(res => res.json())
                .then(data => {
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
            <button type="button" className="my-orders-loading " disabled> <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24" /> Loading... </button>
            <h2>{myText}</h2>
            {setTimeout(() => {
                setMyText("You haven't made any order or logged in!");
            }, 3000)}

        </>)
    };

    // Tab Name
    document.title = "My Orders";


    return (
        <div className='container mx-auto my-orders-container'>
            <h3>Orders you've made:</h3>

            {
                myOrders?.map(x => <div key={x._id} className="orders">
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