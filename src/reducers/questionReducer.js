import { GET_QUESTION_SUCCESS } from '../actions/question/actionTypes';

const initialState = {
  question: {
    answersList: [],
  }
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION_SUCCESS: return {
      ...state,
      question: action.question,
    };
    default: return state;
  }
};

export default questionReducer;
