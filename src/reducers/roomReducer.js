import { CREATE_ROOM_SUCCESS, GET_ROOM_SUCCESS } from '../actions/room/actionTypes';

const initialState = {
  room: {
    roomId: 'initial',
    roomName: 'initial',
    ownerId: 'initial',
    players: [],
  }
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOM_SUCCESS:
      return {
        ...state,
        room: action.room,
      };
    case CREATE_ROOM_SUCCESS:
      return {
        ...state,
        room: action.room,
      };
    default:
      return state;
  }
};

export default roomReducer;
