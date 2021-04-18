import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import { dataContext } from '../../../App';
import OrderList from './OrderList/OrderList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ManageOrder = () => {
    const { users } = useContext(dataContext);
    const [user] = users;
    const [orders, setOrders] = useState([])
    const [email, setEmail] = useState({})
    const [id,setId] = useState({})
    const mail = user.email || email;

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
        setEmail(decodedToken.email)
    }, [])

    useEffect(() => {
        fetch('https://afternoon-ocean-70704.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ mail })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [mail])


    const updateOrder = (id) => {
        const inputBox = document.getElementById("update");
        inputBox.classList.toggle('d-none');
        setId(id);
    }

    const handleStatus = () => {
        const updatedValue = document.getElementById('orderUpdate').value;
        fetch(`https://afternoon-ocean-70704.herokuapp.com/updateOrder/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ order: updatedValue })
        })
    }
    return (
        <div>
            <form className="d-none" id="update" >
                <input type="text" name="orderStatus" id="orderUpdate" placeholder='Input Status....' />
                <button onClick={handleStatus} className="btn btn-success"><FontAwesomeIcon icon={faCheck} /></button>
            </form>
            {
                orders.map(order => <OrderList key={order._id} updateOrder={updateOrder} order={order} />)
            }
        </div>
    );
};

export default ManageOrder;