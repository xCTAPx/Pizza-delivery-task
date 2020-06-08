import React from 'react';
import './order.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Order = ({ orderList, changeQuantity, rerender, confirmOrder }) => {

    function totalPrice() {
        let totalD = 0;
        let totalE = 0;

        for (let item of orderList) {
            totalD += item.priceDollars * item.quantity;
        }

        totalD = +(totalD + 8).toFixed(2);
        totalE = +(totalD * 0.89).toFixed(2);

        return {
            bill: { totalD, totalE },
            str: `${totalD}$ / ${totalE}€`
        };
    }

    if (orderList.length) {
        return (
            <React.Fragment>
                {orderList.map(order => (<div className="order" key={order.id}>
                    <div className="order__item">
                        <p className="order__item__name">{order.name}</p>
                        <p>{+(order.priceDollars * order.quantity).toFixed(2)} $ / {+(order.priceDollars * order.quantity * 0.89).toFixed(2)}€</p>
                        <div className="order__item_right">
                            <button className="order__item__btn plus" onClick={() => changeQuantity(order.id, "+")}>+</button>
                            <button className="order__item__btn minus" onClick={() => changeQuantity(order.id, "-")}>-</button>
                            <button className="order__item__btn delete" onClick={() => changeQuantity(order.id, "x")}>x</button>
                            <p className="order__item__quantity">x{order.quantity}</p>
                        </div>
                    </div>
                </div>))}
                <div className="total-price">
                    <div>
                        <span className="total-price_title">Total:</span>
                        <span className="total-price_val">{totalPrice().str}</span>
                    </div>
                    <span className="total-price_delivery">(Delivery cost is 8$ / 7.12€)</span>
                </div>
                <NavLink to="/confirm">
                    <button className="order__btn" onClick={() => confirmOrder({
                        products: orderList,
                        bill: totalPrice().bill
                    })}>Confirm</button>
                </NavLink>
            </React.Fragment>
        )
    } else {
        return <p className="order-nothing">You have no orders...</p>
    }
}

Order.propTypes = {
    orderList: PropTypes.arrayOf(Object).isRequired,
    changeQuantity: PropTypes.func.isRequired,
    rerender: PropTypes.bool.isRequired, // for rerender when component gets new quantity
    confirmOrder: PropTypes.func.isRequired
}

export default Order;