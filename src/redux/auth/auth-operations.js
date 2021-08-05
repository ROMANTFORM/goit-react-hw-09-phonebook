import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
     },
    unset() {
        axios.defaults.headers.common.Authorization = '';
     },
};

export const register = credential => async dispatch => {
    dispatch(authActions.registerRequest());

    try {
        const res = await axios.post('/users/signup', credential);

        token.set(res.data.token);
        dispatch(authActions.registerSuccess(res.data));
     } catch (error) {
        dispatch(authActions.registerError(error.message));
    }; 
 };

export const logIn = credential => async dispatch => {
    dispatch(authActions.loginRequest());

    try {
        const res = await axios.post('/users/login', credential);

        token.set(res.data.token);
        dispatch(authActions.loginSuccess(res.data));
    } catch (error) {
        dispatch(authActions.loginError(error.message));
    };
 };

export const logOut = () => async dispatch => {
    dispatch(authActions.logoutRequest());

    try {
        await axios.post('/users/logout');

        token.unset();
      dispatch(authActions.logoutSuccess());
      
    } catch (error) {
        dispatch(authActions.logoutError(error.message));
    };
 };

export const getCurrentUser = () => async (dispatch, getState) => {
    
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  };

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
 };