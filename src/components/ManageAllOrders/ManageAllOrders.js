import axios from 'axios';
import './manageAllOrders.css';
import React, { useEffect, useState } from 'react';
import MyOrders from '../MyOrders/MyOrders';




const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);

    //Fetching data by - calling GET API
    useEffect(() => {
        fetch('https://travel-server-gilt.vercel.app/manageAllOrders')
            .then(res => res.json())
            .then(data => {
                // console.log('manage Or:', data);
                setAllOrders(data);
            })
    }, []);


    // DELETE Operation from CRUD by AXIOS
    const handleDeleteOrder = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            axios({
                method: 'DELETE',
                url: `https://travel-server-gilt.vercel.app/deleteOrder/${id}`,
            })
                .then(function (res) {
                    alert("Successfully Deleted!");
                    const remainOrders = allOrders.filter(x => x._id !== id);
                    setAllOrders(remainOrders);
                });
        };
    };


    // UPDATE API - "To approve"
    const handleUpdatePendingStatus = (id) => {
        const data = { status: 'Approved!' };
        fetch(`https://travel-server-gilt.vercel.app/updateStatus/${id}`, {
            method: 'PATCH',  //'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                fetch('https://travel-server-gilt.vercel.app/manageAllOrders')
                    .then(res => res.json())
                    .then(data => {
                        // console.log('manage Or:', data);
                        setAllOrders(data);
                    });
            });
    };

    // UPDATE API - for making "pending" again!
    const handleUpdateApprovedStatus = (id) => {

        const data = { status: 'Pending..' };

        fetch(`https://travel-server-gilt.vercel.app/updateStatus/${id}`, {
            method: 'PATCH',  //'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                fetch('https://travel-server-gilt.vercel.app/manageAllOrders')
                    .then(res => res.json())
                    .then(data => {
                        // console.log('manage Or:', data);
                        setAllOrders(data);
                    });
            });
    };


    // Tab Name
    document.title = "Manage All Orders";




    return (
        <div className='container mx-auto all-orders-container g-green-200'>
            <h3>This is "Manage All Orders" Page! <br /> Showing data of all users. You can "Delete" of change its "Status" right here!</h3>

            {
                allOrders.map(x => <div className='all-orders-div' key={x._id}>
                    <h2>Name: {x.name}</h2>
                    <h2>Email: {x.email} </h2>
                    <h2>Ticket: {x.ticket} </h2>
                    <h2>Pass: {x.pass} </h2>


                    <h2>Status: {x.status}
                        {
                            x.status !== "Approved!" ? <button onClick={() => handleUpdatePendingStatus(x._id)} className="btn btn-outline btn-success ml-2">Confirm </button> :
                                <button onClick={() => handleUpdateApprovedStatus(x._id)} className="btn btn-outline btn-error ml-2">Postpone</button>
                        }
                    </h2>

                    <h2>ID: {x._id} </h2>
                    <button className="btn btn-error" onClick={() => handleDeleteOrder(x._id)}> Delete </button>

                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;