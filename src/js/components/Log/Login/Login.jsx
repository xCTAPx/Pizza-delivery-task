import React, { useRef, useEffect } from 'react';
import './login.scss';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Login = ({ onLogin, logined, loginDefault }) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        loginDefault();
    });

    if (logined) {
        return <Redirect to="/" />
    } else {
        return (
            <div className="log">
                <input className="log__input" type="text" placeholder="Enter your username" ref={usernameRef} />
                <input className="log__input" type="password" placeholder="Enter password" ref={passwordRef} />
                <button className="log__btn" onClick={() => onLogin({
                    username: usernameRef.current.value,
                    password: passwordRef.current.value
                })}>Sign In</button>
            </div>
        )
    }
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
    logined: PropTypes.bool.isRequired,
    loginDefault: PropTypes.func.isRequired
}

export default Login;