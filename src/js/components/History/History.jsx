import React from 'react';
import './history.scss';
import HistoryItem from './HistoryItem/HistoryItem.jsx';

const History = ({ user }) => {
    if (!user) {
        return <p className="need-login">You need to login if you want to check orders history...</p>
    } else if (user.orders.length) {
        return (
            <div className="history">
                <h1 className="history__title">Orders History</h1>
                {user.orders.map(order => <HistoryItem order={order} key={order.date} />)}
            </div>
        )
    } else {
        return (
            <div className="history">
                <h1 className="history__title">Orders History</h1>
                <p className="history__empty">You have no orders history...</p>
            </div>
        )
    }
}

export default History;