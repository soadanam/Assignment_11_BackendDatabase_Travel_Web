import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyOrders from '../MyOrders/MyOrders';




const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);

    //Fetching data by - calling GET API
    useEffect(() => {
        fetch('http://localhost:7777/manageAllOrders')
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
                url: `http://localhost:7777/deleteOrder/${id}`,
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

        fetch(`http://localhost:7777/updateStatus/${id}`, {
            method: 'PATCH',  //'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                fetch('http://localhost:7777/manageAllOrders')
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

        fetch(`http://localhost:7777/updateStatus/${id}`, {
            method: 'PATCH',  //'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                fetch('http://localhost:7777/manageAllOrders')
                    .then(res => res.json())
                    .then(data => {
                        // console.log('manage Or:', data);
                        setAllOrders(data);
                    });
            });
    };


    return (
        <div className='container mx-auto bg-green-200'>
            <h2>This is Manage All Orders Page!</h2>

            {
                allOrders.map(x => <div key={x._id}>
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