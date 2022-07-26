import {
  GET_ROOMS_FETCH,
  GET_ROOMS_ERROR,
  GET_ROOMS_SUCCESS,
  JOIN_ROOM_FETCH,
  JOIN_ROOM_SUCCESS,
  JOIN_ROOM_ERROR
} from './actionTypes';
import { rawGetResponse, rawPostResponse } from '../../fetcher/fetcher';

export const getRooms = () => dispatch => {
  dispatch({ type: GET_ROOMS_FETCH });
  rawGetResponse('/rooms')
    .then((response) => response.json())
    .then(data => {
      dispatch({
        type: GET_ROOMS_SUCCESS,
        rooms: data,
      });
    }).catch(error => {
      dispatch({
        type: GET_ROOMS_ERROR
      });
      console.error(error);
    });
};

export const joinRoom = (roomId) => dispatch => {
  dispatch({ type: JOIN_ROOM_FETCH });
  rawPostResponse(`/rooms/${roomId}/join`)
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: JOIN_ROOM_SUCCESS
      });
    })
    .catch(error => {
      dispatch({
        type: JOIN_ROOM_ERROR
      });
      console.error(error);
    });
};
