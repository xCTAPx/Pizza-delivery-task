import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import PropTypes from 'prop-types';

const Navbar = ({ user, logOut }) => (
    <div className="navbar">
        <h1 className="navbar__title">Pizza Task</h1>
        <nav className="navbar__nav">
            <ul>
                <li className="navbar__nav__item">
                    <NavLink exact activeClassName="active_link" to='/'>Menu</NavLink>
                </li>
                <li className="navbar__nav__item">
                    <NavLink exact activeClassName="active_link" to='/order'>Your order</NavLink>
                </li>
                <li className="navbar__nav__item">
                    <NavLink exact activeClassName="active_link" to='/history'>Orders History</NavLink>
                </li>
            </ul>
        </nav>
        {user ?
            <ul className="navbar__log">
                <li className="user-data">
                    {user.name}
                </li>
                <li className="navbar__log__item" onClick={() => logOut(user)}>
                    Log Out
                </li>
            </ul>
            :
            <ul className="navbar__log">
                <li className="navbar__log__item">
                    <NavLink exact to='/log' className="navbar__log_style">Sign In</NavLink>
                </li>
                <li className="navbar__log__item">
                    <NavLink exact to='/register' className="navbar__log_style">Sign Up</NavLink>
                </li>
            </ul>}
    </div>
)

Navbar.propTypes = {
    user: PropTypes.object,
    logOut: PropTypes.func.isRequired
}

export default Navbar;