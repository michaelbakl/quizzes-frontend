import { GET_QUESTION_ERROR, GET_QUESTION_FETCH, GET_QUESTION_SUCCESS } from './actionTypes';

export const getQuestion = (questionId) => dispatch => {
  dispatch({ type: GET_QUESTION_FETCH });
  const str = `/question_${questionId}.json`;
  // eslint-disable-next-line no-console
  console.log(str);
  fetch(str).then(response => response.json()).then(data => {
    dispatch({
      type: GET_QUESTION_SUCCESS,
      question: data,
    });
  }).catch(error => {
    dispatch({ type: GET_QUESTION_ERROR });
    console.error(error);
  });
};
