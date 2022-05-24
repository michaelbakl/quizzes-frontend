import { GET_WHOAMI_ERROR, GET_WHOAMI_FETCH, GET_WHOAMI_SUCCESS } from './actionTypes';
import { rawGetResponse } from '../../fetcher/fetcher';

export const getWhoami = () => dispatch => {
  dispatch({ type: GET_WHOAMI_FETCH });
  rawGetResponse('/whoami')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: GET_WHOAMI_SUCCESS,
        whoami: data,
      });
    }).catch(error => {
      dispatch({ type: GET_WHOAMI_ERROR });
      console.error(error);
    });
};
