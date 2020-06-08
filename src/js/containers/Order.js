import Order from '../components/Order/Order.jsx';
import {
    quantityChange,
    orderConfirm
} from '../actions/index';
import {
    connect
} from 'react-redux';

const mapStateToProps = state => ({
    orderList: state.order,
    rerender: state.rerender
})

const mapDispatchToProps = dispatch => ({
    changeQuantity: (id, oper) => dispatch(quantityChange(id, oper)),
    confirmOrder: order => dispatch(orderConfirm(order))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);