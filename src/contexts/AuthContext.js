import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};

    case 'signup':
    case 'signin':
      return {errorMessage: '', token: action.payload, isSignedIn: true};

    case 'signout':
      return {...state, token: null, isSignedIn: false};

    case 'clear_error_message':
      return {...state, errorMessage: ''};

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({type: 'clear_error_message'});
};

// Signup
const signup = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password});

    // Storing token locally in device
    await AsyncStorage.setItem('token', response.data.token);

    dispatch({type: 'signup', payload: response.data.token});
  } catch (error) {
    // console.log(error.response.data);
    dispatch({type: 'add_error', payload: 'Error in Sign up.'});
  }
};

// Signin
const signin = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signin', {email, password});

    // Storing token locally in device
    await AsyncStorage.setItem('token', response.data.token);

    dispatch({type: 'signin', payload: response.data.token});
  } catch (error) {
    // console.log(error.response.data);
    dispatch({type: 'add_error', payload: 'Error in Sign in.'});
  }
};

// Signout
const signout = (dispatch) => async () => {
  await AsyncStorage.clear();

  dispatch({type: 'signout'});
  console.log('Bye Bye...');
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout, clearErrorMessage},
  {isSignedIn: false, token: null, errorMessage: ''},
);
