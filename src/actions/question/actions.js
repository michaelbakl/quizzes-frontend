import {
  GET_QUESTION_ERROR,
  GET_QUESTION_FETCH,
  GET_QUESTION_SUCCESS
} from './actionTypes';
import { rawGetResponse } from '../../fetcher/fetcher';

export const getQuestion = (roomId, questionId) => dispatch => {
  dispatch({ type: GET_QUESTION_FETCH });
  rawGetResponse(`/rooms/${roomId}/game/question/${questionId}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: GET_QUESTION_SUCCESS,
        question: data,
      });
    }).catch(error => {
      dispatch({ type: GET_QUESTION_ERROR });
      console.error(error);
    });
};
