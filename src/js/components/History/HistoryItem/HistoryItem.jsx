import React from 'react';
import './history-item.scss';

const HistoryItem = ({ order }) => (
    <div className="history-item">
        <p>Address: {order.address}</p>
        <hr />
        <p>{order.date}</p>
        <hr />
        <ul>
            {order.products.map((item, index) => <li key={index + item.name}>{item.name} x{item.quantity}</li>)}
        </ul>
        <hr />
        {console.log(order)}
        <p>Price: {order.bill.totalD}$ / {order.bill.totalE}€</p>
    </div>
)

export default HistoryItem;