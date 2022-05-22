import { SIGNIN_FAIL, SIGNIN_FETCH, SIGNIN_SUCCESS } from '../actions/auth/actionTypes';

const authReducer = (state = false, action) => {
  switch (action.type) {
    case SIGNIN_FETCH: return false;
    case SIGNIN_SUCCESS: return true;
    case SIGNIN_FAIL: return false;
    default: return state;
  }
};

export default authReducer;
