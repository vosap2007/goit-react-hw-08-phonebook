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

const register = credentials => dispatch => {};

const logIn = credentials => dispatch => {};

const logOut = () => dispatch => {};

const getCurrentUser = () => (dispatch, getState) => {};

export default {register, logIn, logOut, getCurrentUser};