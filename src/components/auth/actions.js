import * as actions from '../../utils/constants';
import authApi from '../../services/authApi';
import { getStoredToken } from '../../services/request';


export function checkForToken() {
  return dispatch => {
    const token = getStoredToken();

    if(!token) {
      dispatch({ type: actions.CHECKED_TOKEN });
      return;
    }

    dispatch({ type: actions.GOT_TOKEN, payload: token });

    return authApi.getUser()
      .then(user => dispatch({ type: actions.FETCHED_USER, payload: user }))
      .catch(error => dispatch({ type: actions.AUTH_FAILED , payload: error }));
  };
}

export function signin(credentials) {
  return dispatch => {
    dispatch({ type: actions.LOADING })
    return authApi.signin(credentials)
      .then( token => dispatch({ type: actions.GOT_TOKEN, payload: token }))
      .then(() =>  authApi.getUser())
      .then(user => dispatch({ type: actions.FETCHED_USER, payload: user }))
      .then(() => dispatch({ type: actions.DONE_LOADING}))
      .catch(error => dispatch({ type: actions.ERROR , payload: error }));
  };
}

export function signup(credentials) {
  return dispatch => {
    dispatch({ type: actions.LOADING })
    return authApi.signup(credentials)
    .then( token => dispatch({ type: actions.GOT_TOKEN, payload: token }))
    .then(() => authApi.getUser())
    .then(user => dispatch({ type: actions.FETCHED_USER, payload: user }))
    .then(() => dispatch({ type: actions.DONE_LOADING}))
    .catch(error => dispatch({ type: actions.ERROR , payload: error }));
  };
}

export function signout(){
  return dispatch => {
    dispatch({ type: actions.LOGOUT });
  };
}
