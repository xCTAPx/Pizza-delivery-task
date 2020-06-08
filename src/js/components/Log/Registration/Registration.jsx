import React, { useRef, useEffect } from 'react';
import './registration.scss';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Registration = ({ onRegister, registered, registeredDefault }) => {
    const usernameRef = useRef(null);
    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const addressRef = useRef(null);
    const phoneRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        registeredDefault();
    });

    if (registered) {
        return <Redirect to="/log" />
    } else {
        return (
            <div className="log">
                <input className="log__input" type="text" placeholder="Create username" ref={usernameRef} />
                <input className="log__input" type="text" placeholder="Enter your name" ref={nameRef} />
                <input className="log__input" type="text" placeholder="Enter your surname" ref={surnameRef} />
                <input className="log__input" type="text" placeholder="Enter dilevery address" ref={addressRef} />
                <input className="log__input" type="number" placeholder="Enter your phone number" ref={phoneRef} />
                <input className="log__input" type="password" placeholder="Enter password" ref={passwordRef} />
                <button className="log__btn" onClick={() => onRegister({
                    username: usernameRef.current.value,
                    name: nameRef.current.value,
                    surname: surnameRef.current.value,
                    address: addressRef.current.value,
                    phone: phoneRef.current.value,
                    password: passwordRef.current.value
                })}
                >Sign Up</button>
            </div>
        )
    }
}

Registration.propTypes = {
    onRegister: PropTypes.func.isRequired,
    registered: PropTypes.bool.isRequired,
    registeredDefault: PropTypes.func.isRequired
}

export default Registration;