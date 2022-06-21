import { SIGNIN_FETCH, SIGNIN_SUCCESS, SIGNIN_FAIL } from './actionTypes';
import { rawPostSignin } from '../../fetcher/fetcher';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response);
}

export const signin = (email, password) => async dispatch => {
  try {
    dispatch({ type: SIGNIN_FETCH, authState: false });
    const response = await rawPostSignin('/signin', { email, password });
    checkStatus(response);
    const data = await response.json();
    sessionStorage.setItem('Token', data.accessToken);
    // localStorage.setItem('Token', data.accessToken);
    dispatch({
      type: SIGNIN_SUCCESS,
      authState: true
    });
  } catch (error) {
    dispatch({ type: SIGNIN_FAIL, authState: false });
    console.error(error);
  }
};
