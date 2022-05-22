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
    dispatch({ type: SIGNIN_FETCH });
    const response = await rawPostSignin('/signin', { email, password });
    checkStatus(response);
    const data = await response.json();
    localStorage.setItem('Token', data.accessToken);
    dispatch({ type: SIGNIN_SUCCESS });
  } catch (error) {
    dispatch({ type: SIGNIN_FAIL });
    console.error(error);
  }
};
