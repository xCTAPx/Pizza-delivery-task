import React, { useRef } from 'react';
import './order-confirm.scss';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';

const OrderConfirm = ({ bill, checkout, user, order }) => {
    const nameRef = useRef(<input type="text" placeholder="Enter your name" className="confirm-page__input" />);
    const surnameRef = useRef(<input type="text" placeholder="Enter your surname" className="confirm-page__input" />);
    const phoneRef = useRef(<input type="number" placeholder="Enter your phone number" className="confirm-page__input" />);
    const addressRef = useRef(<input type="text" placeholder="Enter your address" className="confirm-page__input" />);

    if (nameRef.current.value && surnameRef.current.value &&
        phoneRef.current.value && addressRef.current.value) {
        return <Redirect to="/" />
    } else {
        if (!user) {
            return (
                <div className="confirm-page">
                    <h2 className="confirm-page__title">Confirmation page</h2>
                    <input type="text" placeholder="Enter your name" className="confirm-page__input" ref={nameRef} />
                    <input type="text" placeholder="Enter your surname" className="confirm-page__input" ref={surnameRef} />
                    <input type="number" placeholder="Enter your phone number" className="confirm-page__input" ref={phoneRef} />
                    <input type="text" placeholder="Enter your address" className="confirm-page__input" ref={addressRef} />
                    <p className="confirm-page__final-bill">Final bill: {bill.totalD}$ / {bill.totalE}€</p>
                    <NavLink to="/order">
                        <button className="confirm-page__btn">Back to order</button>
                    </NavLink>
                    <NavLink to={nameRef.current.value && surnameRef.current.value &&
                        phoneRef.current.value && addressRef.current.value ? "/" : "/confirm"}>
                        <button className="confirm-page__btn"
                            onClick={() => checkout({
                                name: nameRef.current.value,
                                surname: surnameRef.current.value,
                                phone: phoneRef.current.value,
                                address: addressRef.current.value,
                                bill
                            })}
                        >Confirm order</button>
                    </NavLink>
                </div>
            )
        } else {
            return (
                <div className="confirm-page">
                    <h2 className="confirm-page__title">Confirmation page</h2>
                    <input type="text" placeholder="Enter your name" className="confirm-page__input" ref={nameRef} value={user.name} readOnly />
                    <input type="text" placeholder="Enter your surname" className="confirm-page__input" ref={surnameRef} value={user.surname} readOnly />
                    <input type="number" placeholder="Enter your phone number" className="confirm-page__input" ref={phoneRef} value={user.phone} readOnly />
                    <input type="text" placeholder="Enter your address" className="confirm-page__input" ref={addressRef} />
                    <p className="confirm-page__final-bill">Final bill: {bill.totalD}$ / {bill.totalE}€</p>
                    <NavLink to="/order">
                        <button className="confirm-page__btn">Back to order</button>
                    </NavLink>
                    <NavLink to={nameRef.current.value && surnameRef.current.value &&
                        phoneRef.current.value && addressRef.current.value ? "/" : "/confirm"}>
                        <button className="confirm-page__btn"
                            onClick={() => checkout({
                                name: nameRef.current.value,
                                surname: surnameRef.current.value,
                                phone: phoneRef.current.value,
                                address: addressRef.current.value,
                                user,
                                order,
                                date: Date(),
                                bill
                            })}
                        >Confirm order</button>
                    </NavLink>
                </div>
            )
        }
    }
}

OrderConfirm.propTypes = {
    bill: PropTypes.object.isRequired,
    checkout: PropTypes.func.isRequired,
    user: PropTypes.object,
    order: PropTypes.array.isRequired
}

export default OrderConfirm;