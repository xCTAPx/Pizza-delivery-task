import React from 'react';
import './app.scss';
import Navbar from '../../containers/Navbar';
import Menu from '../../containers/Menu';
import Login from '../../containers/Login';
import Registration from '../../containers/Registration';
import Order from '../../containers/Order';
import OrderConfirm from '../../containers/OrderConfirm';
import History from '../../containers/History';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const App = ({ loadProducts }) => {

    loadProducts();

    return (<div className="container">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/log" component={Login} />
            <Route exact path="/history" component={History} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/confirm" component={OrderConfirm} />
        </Switch>
    </div>
    )
}

App.propTypes = {
    loadProducts: PropTypes.func.isRequired
}

export default App;