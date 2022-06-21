import {
  GET_ROOM_FETCH,
  GET_ROOM_ERROR,
  GET_ROOM_SUCCESS,
  CREATE_ROOM_FETCH,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_ERROR
} from './actionTypes';
import { rawGetResponse, rawPostWithBody } from '../../fetcher/fetcher';

export const getRoom = (roomId) => dispatch => {
  dispatch({ type: GET_ROOM_FETCH });
  rawGetResponse(`/rooms/${roomId}`)
    .then((response) => response.json())
    .then(data => {
      dispatch({
        type: GET_ROOM_SUCCESS,
        room: data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_ROOM_ERROR
      });
      console.error(error);
    });
};

export const createRoom = (roomName) => dispatch => {
  dispatch({ type: CREATE_ROOM_FETCH });
  rawPostWithBody('/rooms', { roomName })
    .then((response) => response.json())
    .then(data => {
      dispatch({
        type: CREATE_ROOM_SUCCESS,
        room: data
      });
    })
    .catch(error => {
      dispatch({
        type: CREATE_ROOM_ERROR
      });
      console.error(error);
    });
};
