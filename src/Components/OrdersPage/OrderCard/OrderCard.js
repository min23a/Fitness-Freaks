import React from 'react';

const OrderCard = ({order}) => {
    const {services} = order
    return (
        <div className=" d-flex p-2 mx-2 my-2 rounded bg-primary text-white">
            <div className="col-md-7 col-sm-7">
                <h5>{services.name}</h5>
                <h6>{services.price /10}/Month</h6>
            </div>
            <div className="col-md-4 col-sm-4">
                <b>{order.orderStatus}</b>
            </div>
        </div>
    );
};

export default OrderCard;