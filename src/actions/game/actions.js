import {
  GET_GAME_ERROR,
  GET_GAME_FETCH,
  GET_GAME_SUCCESS,
  START_GAME_ERROR,
  START_GAME_FETCH,
  START_GAME_SUCCESS
} from './actionTypes';
import { rawGetResponse, rawPostResponse } from '../../fetcher/fetcher';

export const startGame = (roomId) => dispatch => {
  dispatch({ type: START_GAME_FETCH });
  rawPostResponse(`/rooms/${roomId}/game/start`)
    .then((response) => response.json())
    .then(data => {
      dispatch({
        type: START_GAME_SUCCESS,
        game: data,
      });
    }).catch(error => {
      dispatch({
        type: START_GAME_ERROR
      });
      console.error(error);
    });
};

export const getGameInfo = (roomId) => dispatch => {
  dispatch({ type: GET_GAME_FETCH });
  rawGetResponse(`/rooms/${roomId}/game`)
    .then((response) => response.json())
    .then(data => {
      dispatch({
        type: GET_GAME_SUCCESS,
        game: data,
      });
    }).catch(error => {
      dispatch({
        type: GET_GAME_ERROR
      });
      console.error(error);
    });
};
