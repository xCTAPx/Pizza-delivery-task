import Navbar from '../components/Navbar/Navbar.jsx';
import {
    logOut
} from '../actions/index';
import {
    connect
} from 'react-redux';

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    logOut: user => dispatch(logOut(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);