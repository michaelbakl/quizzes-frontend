import { combineReducers } from 'redux';

import rulesReducer from './rulesReducer';
import questionReducer from './questionReducer';
import roomsReducer from './roomsReducer';
import gameReducer from './gameReducer';
import authReducer from './authReducer';
import roomReducer from './roomReducer';
import answerReducer from './answerReducer';

const rootReducer = combineReducers({
  authReducer,
  rulesReducer,
  roomsReducer,
  roomReducer,
  gameReducer,
  questionReducer,
  answerReducer
});

export default rootReducer;
