import { ANSWER_QUESTION_ERROR, ANSWER_QUESTION_FETCH, ANSWER_QUESTION_SUCCESS } from './actionTypes';
import { rawPostWithBody } from '../../fetcher/fetcher';

export const answerQuestion = (roomId, questionId, answerId) => dispatch => {
  try {
    dispatch({ type: ANSWER_QUESTION_FETCH });
    rawPostWithBody(`/rooms/${roomId}/game/question/${questionId}/answer`, { answerId })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: ANSWER_QUESTION_SUCCESS,
          answerResponse: data,
        });
      });
  } catch (error) {
    dispatch({ type: ANSWER_QUESTION_ERROR });
    console.error(error);
  }
};
