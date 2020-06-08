import Login from '../components/Log/Login/Login.jsx';
import {
    handleLogin,
    loginedDefault
} from '../actions/index';
import {
    connect
} from 'react-redux';

const mapStateToProps = state => ({
    logined: state.registration
})

const mapDispatchToProps = dispatch => ({
    onLogin: data => dispatch(handleLogin(data)),
    loginDefault: () => dispatch(loginedDefault())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);