import Registration from '../components/Log/Registration/Registration.jsx';
import {
    handleRegistration,
    registeredDefault
} from '../actions/index';
import {
    connect
} from 'react-redux';

const mapStateToProps = store => ({
    registered: store.registration
})

const mapDispatchToProps = dispatch => ({
    onRegister: (user) => dispatch(handleRegistration(user)),
    registeredDefault: () => dispatch(registeredDefault())
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration);