import { ANSWER_QUESTION_ERROR, ANSWER_QUESTION_FETCH, ANSWER_QUESTION_SUCCESS } from './actionTypes';
import { rawPostWithBody } from '../../fetcher/fetcher';

// eslint-disable-next-line consistent-return
export const answerQuestion = (roomId, questionId, answerId) => dispatch => {
  try {
    dispatch({ type: ANSWER_QUESTION_FETCH });
    return rawPostWithBody(`/rooms/${roomId}/game/question/${questionId}/answer`, { answerId })
      .then(response => response.json())
      .then(data => dispatch({
        type: ANSWER_QUESTION_SUCCESS,
        answerResponse: data,
      }));
  } catch (error) {
    return dispatch({
      type: ANSWER_QUESTION_ERROR,
      error: {
        hasError: true,
        errorCode: 404,
        errorMessage: error
      }
    });
  }
};
