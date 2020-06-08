import {
    combineReducers
} from 'redux';
import products from './products';
import filter from './filter';
import order from './order';
import rerender from './rerender';
import bill from './bill';
import registration from './registration';
import user from './user';

export default combineReducers({
    products,
    filter,
    order,
    rerender, // reducer for rerendering MenuItem and Order components when their quantity changes
    bill,
    registration,
    user
});