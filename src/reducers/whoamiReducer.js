import { GET_WHOAMI_SUCCESS } from '../actions/whoami/actionTypes';

const initialState = {
  whoami: {
    userId: '',
    email: '',
    roles: []
  }
};

const whoamiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WHOAMI_SUCCESS:
      return {
        ...state,
        whoami: action.whoami,
      };
    default:
      return state;
  }
};

export default whoamiReducer;
