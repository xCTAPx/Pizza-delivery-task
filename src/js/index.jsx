import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducers';
import { Provider } from 'react-redux';
import thunkMiddleware from "redux-thunk";
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById("root"));