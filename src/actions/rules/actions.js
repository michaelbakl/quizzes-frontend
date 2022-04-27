import { GET_RULES } from './actionTypes';

export const getRulesAction = (rules) => ({
  type: GET_RULES,
  rules,
});

export const getRules = () => dispatch => {
  fetch('/rules.json').then(response => response.json()).then(data => {
    dispatch({
      type: GET_RULES,
      rules: data,
    });
  }).catch(error => {
    console.error(error);
  });
};
