import {
  SIGNIN_FETCH, SIGNIN_SUCCESS, SIGNIN_FAIL, SIGNUP_FETCH, SIGNUP_SUCCESS, SIGNUP_FAIL
} from './actionTypes';
import { rawPostSignin } from '../../fetcher/fetcher';
import QuizzException from '../../exceptions/QuizzException';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 500) {
    throw new QuizzException(response.status, 'Server is unavailable');
  }
  if (response.status === 401) {
    throw new QuizzException(response.status, 'Unauthorized');
  }
  if (response.status === 404) {
    throw new QuizzException(response.status, 'Not found');
  }
  if (response.status === 400) {
    throw new QuizzException(response.status, 'Incorrect data');
  }
  throw new QuizzException(response.status, response.error);
}

export const signin = (email, password) => async dispatch => {
  try {
    dispatch({ type: SIGNIN_FETCH, authState: false });
    const response = await rawPostSignin('/signin', { email, password }).catch();
    if (!response.ok) {
      checkStatus(response);
    }
    const data = await response.json();
    sessionStorage.setItem('Token', data.accessToken);
    return await dispatch({
      type: SIGNIN_SUCCESS,
      authState: true
    });
  } catch (error) {
    return dispatch({
      type: SIGNIN_FAIL,
      error: {
        hasError: true,
        errorCode: error.errorCode,
        errorMessage: error.errorMessage
      }
    });
  }
};

export const signup = (email, password) => async dispatch => {
  try {
    dispatch({ type: SIGNUP_FETCH });
    const response = await rawPostSignin('/signup', { email, password });
    checkStatus(response);
    return dispatch({ type: SIGNUP_SUCCESS });
  } catch (error) {
    return dispatch({
      type: SIGNUP_FAIL,
      error: {
        hasError: true,
        errorCode: error.errorCode,
        errorMessage: error.errorMessage
      }
    });
  }
};
