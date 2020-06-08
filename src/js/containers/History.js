import History from '../components/History/History.jsx';
import {
    connect
} from 'react-redux';

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(History);