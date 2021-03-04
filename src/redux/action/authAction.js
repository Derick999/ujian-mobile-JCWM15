import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  AUTH_SIGN,
  NULLIFY_ERROR,
} from '../type';

const authSignAction = () => {
  return async (dispatch) => {
    dispatch({type: NULLIFY_ERROR});
    try {
      const response = await axios.post(`${url}`);
      const {token} = response.data;

      await AsyncStorage.setItem('token', token);
      console.log(response.data);
      dispatch({type: AUTH_SIGN, payload: response.data});
    } catch (error) {}
  };
};

const keepLogin = () => {
  return async (dispatch) => {
    dispatch({type: NULLIFY_ERROR});
    try {
      const token = await AsyncStorage.getItem('token');
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(`${url}`, null, headers);
    } catch (error) {
    }
  };
};
export {authSignAction, keepLogin};
