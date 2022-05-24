import { SIGNIN_FAIL, SIGNIN_FETCH, SIGNIN_SUCCESS } from '../actions/auth/actionTypes';

const initialState = {
  authState: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_FETCH:
      return {
        ...state,
        authState: false,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        authState: true,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        authState: false,
      };
    default:
      return {
        ...state,
        state: false,
      };
  }
};

export default authReducer;
