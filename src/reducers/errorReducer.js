import {
  SIGNIN_FAIL, SIGNUP_FAIL
} from '../actions/auth/actionTypes';
import { GET_WHOAMI_ERROR } from '../actions/whoami/actionTypes';

const initialState = {
  error: {
    hasError: true,
    errorCode: 0,
    errorMessage: ''
  }
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case GET_WHOAMI_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return {
        ...state,
        error: {
          hasError: false,
          errorCode: 0,
          errorMessage: 'Nothing'
        },
      };
  }
};

export default errorReducer;
