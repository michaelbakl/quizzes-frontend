import { GET_RULES } from '../actions/rules/actionTypes';

const initialState = {
  rules: 'Rules are not found',
};

const rulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RULES: return {
      ...state,
      rules: action.rules,
    };
    default: return state;
  }
};

export default rulesReducer;
