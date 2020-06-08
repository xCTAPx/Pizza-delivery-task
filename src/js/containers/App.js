import App from '../components/App/App.jsx';
import {
    fetchProducts
} from '../actions/index';
import {
    connect
} from 'react-redux';

const mapDispatchToProps = dispatch => ({
    loadProducts: () => dispatch(fetchProducts())
})

export default connect(null, mapDispatchToProps)(App);