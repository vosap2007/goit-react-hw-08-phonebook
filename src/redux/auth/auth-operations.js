import axios from 'axios';
import authActions from './auth-actions';
//import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

try {
 const response = await axios.post('/users/signup', credentials);

dispatch(authActions.registerSuccess(response.data));
} catch (error) {
  dispatch(authActions.registerError(error.message));
}
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loignRequest());

try {
 const response = await axios.post('/users/login', credentials);

dispatch(authActions.loginSuccess(response.data));
} catch (error) {
  dispatch(authActions.loginError(error.message));
}
};

const logOut = () => dispatch => {};

const getCurrentUser = () => (dispatch, getState) => {};

export default {register, logIn, logOut, getCurrentUser};