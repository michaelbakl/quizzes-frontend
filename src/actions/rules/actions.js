import { GET_RULES } from './actionTypes';
import { rawGetResponse } from '../../fetcher/fetcher';

export const getRulesAction = (rules) => ({
  type: GET_RULES,
  rules,
});

export const getRules = () => dispatch => {
  rawGetResponse('/rules').then(response => response.json()).then(data => {
    dispatch({
      type: GET_RULES,
      rules: data,
    });
  }).catch(error => {
    console.error(error);
  });
};
