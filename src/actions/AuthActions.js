import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

const loginUserSuccess = (dispatch, user) => {
  //dispatches action via dispatch function passed via Redux Thunk
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  //routes to scene using a key from one of the scenes defined in Router.js
  Actions.main();
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

export const loginUser = ({ email, password }) => {
  //return a function that takes dispatch argument for use by Redux Thunk
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        console.log(error);
        //try to create a new user account
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          //failed to login, so show login error message
          .catch(() => loginUserFail(dispatch));
      });
  };
};
