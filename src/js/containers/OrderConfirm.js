import OrderConfirm from '../components/Order/OrderConfirm/OrderConfirm.jsx';
import {
    checkout
} from '../actions/index';
import {
    connect
} from 'react-redux';

const mapStateToProps = state => ({
    bill: state.bill,
    user: state.user,
    order: state.order
})

const mapDispatchToProps = dispatch => ({
    checkout: (data) => dispatch(checkout(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirm);