import { combineReducers } from 'redux';
import auth from '../components/auth/reducer';
import { error, loading } from '../services/reducer';

export default combineReducers({
  auth,
  loading,
  error
});
