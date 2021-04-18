import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OrderList = ({order,updateOrder}) => {
    return (
        <div>
            <li className="m-3" id={order._id} style={{listStyle : 'none'}}>
                <input value={order.services.name}/>
                <input value={order.services.price}/>
                <input value={order.orderStatus}/>
                <button onClick={() => updateOrder(order._id)} className="btn btn-primary"><FontAwesomeIcon icon={faPencilAlt}/></button>
            </li>
        </div>
    );
};

export default OrderList;