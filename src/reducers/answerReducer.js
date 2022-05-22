import { ANSWER_QUESTION_SUCCESS } from '../actions/answer/actionTypes';

const initialState = {
  answerResponse: {
    correctAnswerId: '',
    questionId: '',
    totalScore: -1,
    questionScore: -1,
  }
};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANSWER_QUESTION_SUCCESS:
      return {
        ...state,
        answerResponse: action.answerResponse
      };
    default:
      return state;
  }
};

export default answerReducer;
