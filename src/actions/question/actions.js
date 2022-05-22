import { GET_QUESTION_ERROR, GET_QUESTION_FETCH, GET_QUESTION_SUCCESS } from './actionTypes';

export const getQuestion = () => dispatch => {
  dispatch({ type: GET_QUESTION_FETCH });
  fetch('/question.json').then(response => response.json()).then(data => {
    dispatch({
      type: GET_QUESTION_SUCCESS,
      question: data,
    });
  }).catch(error => {
    dispatch({ type: GET_QUESTION_ERROR });
    console.error(error);
  });
};
