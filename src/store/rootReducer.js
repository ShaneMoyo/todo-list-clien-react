import { combineReducers } from 'redux';
import auth from '../components/auth/reducer';
import todos from '../components/todos/reducer';
import { error, loading } from '../services/reducer';

export default combineReducers({
  error,
  auth,
  loading,
  todos
});
