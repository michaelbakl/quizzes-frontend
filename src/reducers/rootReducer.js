import { combineReducers } from 'redux';

import rulesReducer from './rulesReducer';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
  rulesReducer,
  questionReducer
});

export default rootReducer;
