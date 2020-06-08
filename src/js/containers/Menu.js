import Menu from '../components/Menu/Menu.jsx';
import {
    filterToggle
} from '../actions/index';
import {
    connect
} from 'react-redux';

const mapStateToProps = state => ({
    products: state.products,
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    changeFilter: filter => dispatch(filterToggle(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);