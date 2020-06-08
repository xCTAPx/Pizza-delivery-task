import MenuItem from '../components/Menu/MenuItem/MenuItem.jsx';
import {
    orderAdd,
    quantityChange
} from '../actions/index';
import {
    connect
} from 'react-redux';

const mapStateToProps = state => ({
    rerender: state.rerender
})

const mapDispatchToProps = dispatch => ({
    addToOrder: product => dispatch(orderAdd(product)),
    changeQuantity: (id, oper) => dispatch(quantityChange(id, oper))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);